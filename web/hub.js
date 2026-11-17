(() => {
  'use strict';
  const hashes = {incidents:['type','安全事件'],vulnerabilities:['type','最新漏洞'],funding:['type','融资'],products:['type','产品发布'],features:['type','功能发布'],standards:['section','行业标准'],documents:['section','技术文档']};
  for (const zone of document.querySelectorAll('[data-filter-zone]')) {
    const input = zone.querySelector('input[type=search]'), selects = [...zone.querySelectorAll('select')];
    const rows = [...zone.querySelectorAll('[data-search]')], count = zone.querySelector('[data-count]'), empty = zone.querySelector('[data-empty]');
    function render() {
      const q = input.value.trim().toLocaleLowerCase(); let n = 0;
      for (const row of rows) {
        const yes = (!q || row.dataset.search.toLocaleLowerCase().includes(q)) && selects.every(s => { if (!s.value) return true; const value = row.dataset[s.dataset.field] || ''; return ['company','topic'].includes(s.dataset.field) ? value.split(' ').includes(s.value) : value === s.value; });
        row.hidden = !yes; if (yes) n++;
      }
      count.textContent = `${n} / ${rows.length} 条`; empty.hidden = n !== 0;
    }
    function reset() { input.value = ''; selects.forEach(s => { s.value = ''; }); }
    function applyLocation() {
      reset();
      const params = new URLSearchParams(location.search);
      for (const s of selects) if (params.has(s.dataset.field)) s.value = params.get(s.dataset.field);
      if (params.has('q')) input.value = params.get('q');
      const rule = hashes[location.hash.slice(1)];
      if (rule) { const s = selects.find(x => x.dataset.field === rule[0]); if (s) s.value = rule[1]; }
      for (const a of document.querySelectorAll('.quick-filters a')) { if (a.hash === location.hash) a.setAttribute('aria-current', 'page'); else a.removeAttribute('aria-current'); }
      render();
    }
    input.addEventListener('input', render); selects.forEach(s => s.addEventListener('change', render));
    zone.querySelector('[data-reset]').addEventListener('click', () => { history.replaceState(null, '', location.pathname); reset(); render(); input.focus(); });
    for (const a of document.querySelectorAll('.quick-filters a')) a.addEventListener('click', event => { event.preventDefault(); history.pushState(null, '', a.hash); applyLocation(); });
    window.addEventListener('hashchange', applyLocation); window.addEventListener('popstate', applyLocation); applyLocation();
  }
})();

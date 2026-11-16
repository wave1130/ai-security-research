(() => {
  'use strict';
  for (const zone of document.querySelectorAll('[data-filter-zone]')) {
    const input = zone.querySelector('input[type=search]');
    const selects = [...zone.querySelectorAll('select')];
    const rows = [...zone.querySelectorAll('[data-search]')];
    const count = zone.querySelector('[data-count]');
    const empty = zone.querySelector('[data-empty]');
    function render() {
      const q = input.value.trim().toLocaleLowerCase();
      let n = 0;
      for (const row of rows) {
        const visible = (!q || row.dataset.search.toLocaleLowerCase().includes(q)) &&
          selects.every(s => !s.value || row.dataset[s.dataset.field] === s.value);
        row.hidden = !visible;
        if (visible) n++;
      }
      count.textContent = `显示 ${n} / ${rows.length} 项`;
      empty.hidden = n !== 0;
    }
    function applyHash() {
      const kind = selects.find(s => s.dataset.field === 'kind');
      const category = selects.find(s => s.dataset.field === 'category');
      if (location.hash === '#standards' && kind) kind.value = '标准与指南';
      if (category && (location.hash === '#incidents' || location.hash === '#all-news')) {
        input.value = '';
        selects.forEach(s => { s.value = ''; });
        category.value = location.hash === '#incidents' ? '安全事件' : '';
      }
      render();
    }
    input.addEventListener('input', render);
    selects.forEach(s => s.addEventListener('change', render));
    zone.querySelector('[data-reset]').addEventListener('click', () => {
      input.value = '';
      selects.forEach(s => { s.value = ''; });
      render();
      input.focus();
    });
    window.addEventListener('hashchange', applyHash);
    for (const anchor of document.querySelectorAll('a[href="#incidents"], a[href="#all-news"]')) {
      anchor.addEventListener('click', event => {
        event.preventDefault();
        if (location.hash !== anchor.hash) history.pushState(null, '', anchor.hash);
        applyHash();
      });
    }
    applyHash();
  }
})();

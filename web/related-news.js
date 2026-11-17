(() => {
  const main = document.querySelector('main'), data = window.RESEARCH_NEWS;
  if (!main || !data || document.body.classList.contains('hub')) return;
  const file = location.pathname.split('/').pop(), matches = data.filter(n => n.pages.includes(file)).slice(0, 3);
  const context = (window.RESEARCH_MATERIALS || {})[file] || {}, materials = (context.resources || []).slice(0, 3);
  if (!matches.length && !materials.length) return;
  const panel = document.createElement('section'); panel.className = 'update-feed context-panels';
  function column(title, records, render) { const col = document.createElement('div'), h = document.createElement('h2'); h.textContent = title; col.append(h); records.forEach(record => col.append(render(record))); panel.append(col); }
  if (matches.length) column('最新进展', matches, n => {
    const item = document.createElement('article'), a = document.createElement('a'), date = document.createElement('small'), p = document.createElement('p');
    a.href = n.url; a.textContent = n.title; date.textContent = n.date; p.textContent = n.facts || ''; item.append(date, a, p); return item;
  });
  if (materials.length) column('相关资料', materials, r => { const p = document.createElement('p'), a = document.createElement('a'); a.href = r.url; a.textContent = r.title; p.append(a); return p; });
  const title = main.querySelector('h1'), hero = title && title.closest('section');
  if (hero) hero.after(panel); else { const header = main.querySelector('header'); if (header) header.after(panel); else main.append(panel); }
})();

(() => {
  const main = document.querySelector('main');
  if (!main) return;
  const base = new URL('.', document.currentScript.src);
  const file = location.pathname.split('/').pop();
  const section = document.body.dataset.section ||
    (file.startsWith('daily-') ? 'news' : file.startsWith('topic-') || file === 'shadow-ai.html' ? 'topics' :
      ['cyera.html','akto.html','defender.html','armadin.html','exaforce.html','zenity.html'].includes(file) ? 'companies' : '');
  const nav = document.createElement('nav'); nav.className = 'site-navigation'; nav.setAttribute('aria-label', '全站导航');
  const brand = document.createElement('a'); brand.className = 'site-brand'; brand.href = new URL('industry.html', base); brand.textContent = '◈ AI 安全方向跟踪'; nav.append(brand);
  for (const [name, label, id] of [['news.html','每日新闻','news'],['topics.html','主题研究','topics'],['companies.html','重点公司跟踪','companies'],['library.html','资料库','library']]) {
    const a = document.createElement('a'); a.href = new URL(name, base); a.textContent = label;
    if (section === id || file === name) a.setAttribute('aria-current', 'page'); nav.append(a);
  }
  main.prepend(nav);
})();

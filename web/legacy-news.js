(() => {
  const file = location.pathname.split('/').pop();
  let id = '';
  try { id = decodeURIComponent(location.hash.slice(1)); } catch (_) {}
  const records = window.RESEARCH_NEWS || [];
  const item = records.find(n => (n.legacy_urls || []).includes(file + '#' + id)) || records.find(n => n.id === id);
  location.replace(new URL(item ? item.url : 'news.html', location.href));
})();

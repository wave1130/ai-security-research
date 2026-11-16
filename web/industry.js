'use strict';
const reports = window.INDUSTRY_REPORTS;
const cards = document.querySelector('#cards');
const search = document.querySelector('#search');
const sort = document.querySelector('#sort');
const dialog = document.querySelector('#detail');
let topic = '全部';
const escapeHTML = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const localPDF = '../资料库/Cyera/AI时代的数据安全成熟度模型-英文原版.pdf';
const localTranslation = 'reading/cyera-translation.html';
function dateKey(r) { return r.date.match(/^\d{4}-\d{2}(?:-\d{2})?/)?.[0].padEnd(10,'0') || '0000'; }
function render() {
 const q = search.value.trim().toLocaleLowerCase();
 const list = reports.filter(r => (topic === '全部' || r.topic === topic) && JSON.stringify(r).toLocaleLowerCase().includes(q));
 list.sort((a,b) => (sort.value === 'priority' ? Number(b.priority) - Number(a.priority) : 0) || dateKey(b).localeCompare(dateKey(a)));
 cards.innerHTML = list.map(r => `<article class="card"><div class="card-top"><span class="badge">${escapeHTML(r.kind)}</span><span>${r.priority ? '<span class="star" aria-label="推荐阅读">★</span> ' : ''}${escapeHTML(r.date)}</span></div><h3>${escapeHTML(r.title)}</h3><div class="english">${escapeHTML(r.en)}</div><p class="card-summary">${escapeHTML(r.summary)}</p><div class="status ${r.id === 'cyera' ? 'local' : ''}">${escapeHTML(r.org)}<br>${escapeHTML(r.status)}</div><div class="card-bottom"><a class="full-reading" href="${escapeHTML(r.readingUrl || `industry-report.html?id=${r.id}`)}">阅读详细分析 ↗</a>${r.translationUrl?`<a href="${escapeHTML(r.translationUrl)}">中文正文译稿 ↗</a>`:''}<a href="${escapeHTML(r.url)}" target="_blank" rel="noopener">官方来源 ↗</a></div></article>`).join('');
 document.querySelector('#result-count').textContent = `显示 ${list.length} / ${reports.length} 项资料 · ${topic === '全部' ? '全部专题' : topic}`;
 document.querySelector('#empty').hidden = list.length !== 0;
}
function setTopic(value) {
 topic = value;
 document.querySelectorAll('[data-topic]').forEach(b => {const active=b.dataset.topic === topic;b.classList.toggle('active',active);b.setAttribute('aria-pressed',String(active));});
 render();
}
document.querySelectorAll('[data-topic]').forEach(b => b.addEventListener('click',() => setTopic(b.dataset.topic)));
search.addEventListener('input',render);sort.addEventListener('change',render);
document.querySelector('#reset').addEventListener('click',() => { search.value='';sort.value='priority';setTopic('全部'); });
cards.addEventListener('click', e => {
 const button = e.target.closest('[data-id]');if (!button) return;
 const r = reports.find(r => r.id === button.dataset.id);
 document.querySelector('#detail-body').innerHTML = `<div class="eyebrow">${escapeHTML(r.topic)} / ${escapeHTML(r.kind)}</div><h2 id="detail-title">${escapeHTML(r.title)}</h2><p class="english">${escapeHTML(r.en)}</p><p class="meta">${escapeHTML(r.org)} · ${escapeHTML(r.date)}<br>${escapeHTML(r.status)} · 核实于 2026-11-03</p><p>${escapeHTML(r.summary)}</p><h4>中文要点</h4><ul>${r.points.map(p=>`<li>${escapeHTML(p)}</li>`).join('')}</ul><h4>用于我们研究的问题</h4><p class="question-box">${escapeHTML(r.question)}</p><p class="limit"><b>来源与证据边界</b><br>${escapeHTML(r.limit)}</p><a href="${escapeHTML(r.url)}" target="_blank" rel="noopener">查看官方来源 ↗</a>${r.id === 'cyera' ? `<a href="${localPDF}" target="_blank" rel="noopener">阅读本地 PDF ↗</a><a href="${localTranslation}" target="_blank" rel="noopener">打开中文译稿 ↗</a>` : ''}`;
 dialog.showModal();
});
document.querySelector('#close').addEventListener('click',() => dialog.close());
dialog.addEventListener('click',e=> {if(e.target === dialog){const b=dialog.getBoundingClientRect();if(e.clientX<b.left||e.clientX>b.right||e.clientY<b.top||e.clientY>b.bottom) dialog.close();}});
document.addEventListener('keydown',e=> {if(e.key === '/' && !dialog.open && !['INPUT','TEXTAREA','SELECT'].includes(document.activeElement.tagName)){e.preventDefault();search.focus();}});
render();

document.querySelector('#nav-count').textContent=reports.length;
const total=document.querySelector('#report-total');if(total)total.textContent=reports.length;

'use strict';
const boundaries = [
['B1','请求方 → Agent','身份、任务、授权','谁可下令？授权是否绑定任务、对象和期限？'],
['B2','外部来源 → 上下文','文档、网页、邮件、工具返回、传感数据','内容是否可信？数据是否被错误当作命令或授权？'],
['B3','编排系统 ↔ 模型','上下文、推理请求、模型输出','数据交给谁？模型输出如何获得执行效力？'],
['B4','Agent → 工具执行器','工具名、参数、执行身份','是否符合实际授权？检查与执行是否一致？能否绕过？'],
['B5','执行环境 → 主机资源','文件、进程、内存、凭据、设备接口','共享什么宿主权限？隔离失效后影响多大？'],
['B6','本地执行器 → 外部系统','API、数据、业务交易','接收方是谁？服务端是否独立校验权限？'],
['B7','Agent ↔ 其他 Agent','子任务、权限、上下文、结果','委派能否扩大权限？结果是否可信？失败是否传播？'],
['B8','当前执行 ↔ 持久状态','记忆、缓存、队列、任务状态','谁能写入？污染会持续多久？是否跨任务或租户复用？'],
['B9','管理与供应链 → 运行系统','代码、模型、Skill、配置、策略','谁能改变可信基础？更新是否验证、可撤销和恢复？'],
['B10','数字系统 → 物理环境','控制命令、执行器动作、动作反馈','是否有独立限值、联锁、停止及失联处置？']
];
const escapeHTML = value => String(value).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const $ = selector => document.querySelector(selector);
$('#boundary-grid').innerHTML=boundaries.map(([id,title,data,question])=>`<article class="boundary-card"><span>${id}</span><div><h3>${title}</h3><p>${data}</p><p>${question}</p></div></article>`).join('');
function selectBoundary(id){const b=boundaries.find(b=>b[0]===id);$('#boundary-insight').innerHTML=`<span>${b[0]}</span><div><strong>${b[1]}</strong><p>${b[3]}</p></div>`;document.querySelectorAll('[data-boundary]').forEach(button=>{const active=button.dataset.boundary===id;button.classList.toggle('selected',active);button.setAttribute('aria-pressed',String(active));});}
document.querySelectorAll('[data-boundary]').forEach(button=>button.addEventListener('click',()=>selectBoundary(button.dataset.boundary)));selectBoundary('B4');
const deployments={pc:{label:'PERSONAL COMPUTER',title:'个人计算机',intro:'Agent 常与用户桌面权限相邻。关键在于避免任务权限被扩展成整个用户账号的能力。',fields:[['运行身份','交互用户、桌面应用、浏览器会话'],['关键资产','用户文件、登录态、通讯录、本地密钥'],['关注边界','用户与应用、浏览器与本地工具、外部内容与操作'],['暴露面','网页、邮件、下载文件、Skill、扩展'],['隔离基础','用户权限、应用沙箱、OS 访问控制'],['失效模式','继承用户全部权限、交互确认疲劳'],['恢复重点','文件版本、会话撤销、操作撤销']]},server:{label:'SERVER / CLOUD',title:'服务器',intro:'任务通常无人值守且并发执行。需要重点分析租户、服务身份和共享资源之间的权限传播。',fields:[['运行身份','服务账号、工作负载身份、租户身份'],['关键资产','业务数据、云凭据、生产服务、共享资源'],['关注边界','租户隔离、服务间访问、队列任务、管理面'],['暴露面','API、上传内容、依赖、镜像、工具服务'],['隔离基础','进程、容器、虚拟机、网络及租户权限'],['失效模式','跨租户污染、高并发放大、重复交易'],['恢复重点','幂等、交易补偿、凭据吊销、隔离实例']]},iot:{label:'SMALL IOT DEVICE',title:'小型物联网设备',intro:'数字决策可能产生不可逆物理影响。设备资源、断网状态与独立保护机制需要单独验证。',fields:[['运行身份','设备身份、维护账号、云端控制身份'],['关键资产','固件、设备密钥、传感数据、执行器、安全状态'],['关注边界','云与设备、维护接口、传感输入与动作、物理接触'],['暴露面','通信接口、固件更新、调试端口、伪造传感信号'],['隔离基础','MCU 权限机制或 OS 隔离、硬件保护，须逐项确认'],['失效模式','断网、断电、资源不足、物理篡改、不可逆动作'],['恢复重点','安全停机、离线策略、可信恢复、独立保护']]}};
const environmentBoundaries={
pc:{question:'Agent 有自己的受限身份，还是借用整个人的桌面权限？',domains:['网页与外部服务','浏览器站点域','自动化控制器 / Agent','用户账号可访问资源','系统特权域'],caveat:'这些域不构成单一层级。尤其要区分网页脚本与浏览器控制器：控制器可能操纵多个已登录会话。独立进程也不代表文件与凭据权限已经收敛。',groups:[{title:'交互用户与应用权限',rows:[
['PC1','Agent 进程 → 用户文件与其他进程','文件读写、进程访问；核实运行身份、目录与进程权限','OS 与已配置的应用隔离','同用户可访问资源可能直接暴露；独立进程不等于受限权限'],
['PC2','网页脚本 → 浏览器自动化控制器','DOM、下载、扩展或自动化接口；区分站点与控制器权限','浏览器、扩展授权及本地控制接口','控制器可操纵已登录会话；核实调试端口与配置'],
['PC3','Agent／应用 → 系统级权限','提权、安装、系统配置、设备与辅助控制','OS 授权及特权服务','预先授予的控制权限可能被所有任务复用'],
['PC4','本地应用 → 远程模型／工具服务','上下文上传、API；端点身份与管理主体发生变化','远程授权、传输与本地出口','本地沙箱不能约束远程服务内部权限'],
['PC5','Agent／工具 → 登录会话与凭据','读取秘密或代用会话；检查可导出性与调用权限','凭据存储、浏览器与服务端','读不到密码，也可能通过已登录页面完成操作']]}]},
server:{question:'任务、租户、工作负载与服务身份是否分离，还是共用高权限账号？',domains:['请求方 / 租户','API 与任务队列','Agent 工作负载','宿主与其他工作负载','业务服务 / 云资源','管理控制面'],caveat:'请求、租户、工作负载与服务身份不是同一个主体。容器、队列或 VPC 的存在都不能直接证明相应授权和隔离已经落实。',groups:[{title:'租户、工作负载与控制面',rows:[
['SV1','租户 A → 任务与租户 B 的资源','请求、队列、缓存、查询；核实租户绑定与归属','API、调度器、存储服务','共用数据库账号时，隔离可能完全依赖应用逻辑'],
['SV2','Agent 工作负载 → 宿主与其他工作负载','系统调用、挂载、运行时接口、网络','OS、容器或虚拟机机制','核实特权配置、宿主挂载、管理接口及共享资源'],
['SV3','工作负载身份 → 业务服务／云资源','API、数据、角色委派；核实凭据与资源范围','目标服务授权与身份系统','网络可达不等于获准；过宽服务身份扩大影响'],
['SV4','任务数据面 → 管理控制面','修改部署、策略、镜像、密钥或配置','管理 API、运维身份与部署流程','任务若可获取管理权限，就可能修改自身约束'],
['SV5','异步任务／重试 → 状态与副作用','消息消费、恢复、提交；核实操作与身份绑定','队列消费者、状态及业务服务','队列不是天然边界；重试可能沿用旧授权或重复动作']]}]},
iot:{question:'设备有独立执行的保护域吗？没有时，安全保证由哪一层承担？',domains:['云端控制主体','设备通信与维护入口','Agent / 固件任务','驱动与外设','传感器 / 执行器','物理环境'],caveat:'先按设备能力分型。有 OS 的网关和无有效内存隔离的单地址空间固件，不能沿用同一张保护域图。下面两组是不同参考部署，不能假定每台设备同时具有这些边界。',groups:[
{title:'A / 有 OS 的边缘设备或网关',rows:[
['IO1','Agent 进程 → 驱动与设备节点','总线、串口、GPIO；核实身份与设备权限','OS、驱动与设备代理','进程隔离不限制已经获准的危险设备命令'],
['IO2','云端控制主体 → 设备本地控制域','任务、指令与配置；核实权限、时效及离线行为','设备端校验与本地控制逻辑','认证连接不能证明每条指令满足本地安全条件'],
['IO3','网络／维护方 → 设备管理域','配置、更新、调试与远程维护','设备管理与更新机制','维护账号可能与业务进程共享高权限']]},
{title:'B / MCU、RTOS 或单地址空间设备',rows:[
['MC1','Agent／推理任务 → 固件内存与其他任务','内存、调度、寄存器；核实硬件保护与权限配置','存在且启用的内存或权限保护机制','没有有效隔离时应合并为一个保护域，不能画独立沙箱'],
['MC2','网络处理／外部指令 → 控制循环','指令解析、状态切换与执行调度','固件校验与控制状态机','同地址空间的软件检查通常共享固件失陷范围'],
['MC3','更新／调试接口 → 固件与设备密钥','烧录、调试、恢复与密钥访问','启动、更新与硬件访问机制','核实实际配置；物理可接触不等于已控制设备']]},
{title:'C / 两类设备都需检查的物理边界',rows:[
['PH1','物理环境 → 传感与状态估计','测量、时序、校准；核实来源与物理假设','传感器、采集链路与交叉校验','传感器身份真实，不意味着读数反映真实状态'],
['PH2','软件控制 → 执行器与物理过程','电机、阀门、加热；核实动作范围与过程状态','本地限值或独立保护机制','若保护共享固件或电源，不能假定失陷后仍有效']]}]}
};
function renderDeployment(env){
const d=deployments[env],b=environmentBoundaries[env];
$('#deployment-content').innerHTML=`<div class="environment-question"><span>${d.label}</span><h3>${b.question}</h3><p>${b.caveat}</p></div><div class="domain-map" aria-label="需要识别的域">${b.domains.map(domain=>`<span>${domain}</span>`).join('')}</div><p class="caption">上方列出待识别的域，不表示线性拓扑或已经建立隔离。</p>${b.groups.map(group=>`<div class="environment-group"><h3>${group.title}</h3>${group.rows.map(([id,domains,capability,enforcer,gap])=>`<article class="environment-boundary"><div class="environment-boundary-title"><span>${id}</span><h4>${domains}</h4><small>待验证</small></div><dl><div><dt>跨界能力 / 判定依据</dt><dd>${capability}</dd></div><div><dt>强制执行者（待核实）</dt><dd>${enforcer}</dd></div><div class="boundary-gap"><dt>共享或缺口</dt><dd>${gap}</dd></div></dl></article>`).join('')}</div>`).join('')}`;
document.querySelectorAll('[data-env]').forEach(button=>{button.classList.toggle('selected',button.dataset.env===env);button.setAttribute('aria-pressed',String(button.dataset.env===env));});}
document.querySelectorAll('[data-env]').forEach(b=>b.addEventListener('click',()=>renderDeployment(b.dataset.env)));renderDeployment('pc');
function renderRisks(){const query=$('#risk-search').value.trim().toLowerCase();const env=$('#risk-env').value;const filtered=risks.filter(r=>(env==='all'||r['适用部署'].includes(env)||r['适用部署']==='全部')&&Object.values(r).join(' ').toLowerCase().includes(query));$('#risk-count').textContent=`${filtered.length} / ${risks.length} 个场景`;$('#risk-list').innerHTML=filtered.length?filtered.map(r=>`<details class="risk-item"><summary><span class="risk-id">${escapeHTML(r['风险编号'])}</span><span class="risk-name">${escapeHTML(r['威胁场景'])}</span><span class="risk-device">${escapeHTML(r['适用部署'])}</span><span class="risk-status">待评估</span><span class="risk-chevron">＋</span></summary><dl class="risk-detail">${['关键资产','攻击者能力或故障起点','成立前提','边界路径','安全要求','后果','候选控制','控制验证方法'].map(k=>`<div><dt>${k}</dt><dd>${escapeHTML(r[k])}</dd></div>`).join('')}</dl></details>`).join(''):'<p class="empty">没有匹配的风险场景，请调整关键词或环境。</p>';}
$('#risk-search').addEventListener('input',renderRisks);$('#risk-env').addEventListener('change',renderRisks);renderRisks();
function grade(score){return score<=4?['low','低']:score<=9?['medium','中']:score<=16?['high','高']:['critical','严重'];}
let matrix='';for(let likelihood=5;likelihood>=1;likelihood--){matrix+=`<span class="tick">${likelihood}</span>`;for(let impact=1;impact<=5;impact++){const score=likelihood*impact;const [color,label]=grade(score);matrix+=`<button class="${color}" data-likelihood="${likelihood}" data-impact="${impact}" aria-label="可能性 ${likelihood}，影响 ${impact}，风险 ${label}，分数 ${score}">${score}</button>`;}}matrix+='<span></span>'+[1,2,3,4,5].map(n=>`<span class="tick">${n}</span>`).join('');$('#matrix-grid').innerHTML=matrix;
$('#matrix-grid').addEventListener('click',e=>{const b=e.target.closest('button');if(!b)return;document.querySelectorAll('#matrix-grid button').forEach(cell=>{cell.classList.toggle('chosen',cell===b);cell.setAttribute('aria-pressed',String(cell===b));});const l=Number(b.dataset.likelihood),i=Number(b.dataset.impact);$('#score-result').textContent=`${l} × ${i} = ${l*i} · ${grade(l*i)[1]}风险（演示）`;});
const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){document.querySelectorAll('nav a').forEach(a=>a.classList.toggle('active',a.getAttribute('href')==='#'+entry.target.id));}});},{rootMargin:'-15% 0px -65% 0px'});document.querySelectorAll('main section').forEach(section=>observer.observe(section));
const blueprintLoop=[
['01','会话装配','加载经过准入的配置与Skill，隔离租户及任务状态','管理服务 / 状态存储','记录来源、版本和有效期；历史与记忆不自行授予执行权限。'],
['02','用户输入','识别用户与任务身份，建立初始授权范围','身份与任务授权服务','区分用户指令、附件与引用内容；授权绑定资源、动作及期限。'],
['03','LLM 请求','检查上下文敏感信息与服务端点，执行脱敏或阻断','数据防泄漏插件 / 模型访问网关','记录发送目标和实际数据范围；检查模型请求是否可绕过网关。'],
['04','工具执行','校验任务权限、目标与参数，受限执行并返回结果','风险拦截插件 / 工具代理 / 资源侧','必要时确认具体操作；检查后禁止替换参数，验证真实副作用。'],
['05','回调／跨 Agent','校验返回来源，限制委派权限与状态写入','编排运行时 / 工具服务 / 状态服务','子任务权限不得自行扩大；共享预算，隔离租户与授权上下文。'],
['06','输出／持久化','检查接收方与敏感内容，按任务归属保存结果','数据插件 / 出口 / 状态存储','覆盖输出、日志与记忆；记录策略判定、实际执行结果并处理敏感日志。']
];
$('#blueprint-loop').innerHTML=blueprintLoop.map(([id,title,action,position,implementation])=>`<details class="loop-boundary"><summary><span>${id}</span><strong>${title}</strong><span>${action}</span><i>＋</i></summary><div><p><b>执行位置：</b>${position}</p><p><b>实施要求：</b>${implementation}</p></div></details>`).join('');

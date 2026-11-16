# 影子 AI 专题

从发现未经管理的 AI，到验证数据与行动受到约束。

核实日期：2026-11-03。官方指南、当前技术文档、逐段视频证据与编辑研究；未经独立部署测评。

[打开专题网页](../../web/shadow-ai.html)

## 影子 AI 的边界：未经批准的不只是一个网站

*概念与研究分析*

本专题把影子 AI 定义为：组织未识别、未批准，或在批准范围之外使用的 AI 能力及其数据、身份和工具连接。判断单位需要包含使用方式：同一个 AI 产品，企业租户处理公开资料可能符合政策，个人账号处理客户数据则可能越界。产品名称本身不足以确定风险。

传统影子 IT 主要追问“谁在使用未经批准的软件”。影子 AI 还要追问：业务数据是否进入模型、检索库或日志，个人账号是否连接了企业云盘，Agent 能否继承员工权限调用工具，以及软件更新后新增的 AI 功能是否进入原有审批范围。已有采购合同不自动覆盖后续启用的全部能力。

“未登记”与“已经泄密”应分开记录。发现一个模型进程，只能证明它出现；访问 AI 域名，不足以证明敏感数据已发送。相反，一个已登记的 Agent 也可能因过度权限、恶意工具或记忆污染产生风险。影子 AI 是治理状态，Agent 攻击是威胁机制，两者相交但不等同。

> **本专题的判断原则**：以人员、设备、账号或租户、AI 能力、数据、授权和实际动作形成证据链。全文中的采购建议、场景划分与验收标准属于本项目分析。

来源：[Reco · CISO Guide to Shadow AI（17 页 PDF）](https://go.reco.ai/hubfs/Gated%20Assets/CISO%20Guide%20to%20Shadow%20AI.pdf)；[Akto Atlas · 产品概览](https://ai-security-docs.akto.io/akto-atlas-agentic-ai-security-for-employee-endpoints/overview)；[Zenity · AI Observability](https://zenity.io/platform/ai-observability)。

## 六类使用场景，以及应登记的对象

*研究分析*

只维护一张“AI 网站域名表”会漏掉嵌入业务系统的功能、本地工具和没有浏览器界面的自动化。建议按下列六类建立资产与使用清单，并将同一服务的企业账号、个人账号和共享凭据分别登记。

| 场景 | 典型对象 | 最需要补齐的上下文 |
| --- | --- | --- |
| 浏览器与消费级 AI | 聊天网页、浏览器助手、第三方插件 | 浏览器是否受管理；账号属谁；是否输入或上传业务数据 |
| 已批准 SaaS 内嵌 AI | CRM、协作平台、云盘新启用的 Copilot 或 AI 功能 | 功能开关、租户与数据范围；供应商更新是否触发重新评审 |
| 个人身份与 SaaS 连接 | 个人 AI 账号连接企业云盘；用户授予第三方 OAuth 权限 | 授权人、scope、持久授权、连接目标与撤销状态 |
| 开发者终端 | IDE、CLI、桌面助手、本地模型、Skills 与插件 | 安装和运行状态；工具版本；代码读取和外送；进程与用户 |
| MCP 与委托工具链 | 本地或远端 MCP 服务、共享网关、Agent 工具注册表 | 发布者、描述与版本变更、能力、凭据、依赖它的 Agent |
| 自建云端与后台 Agent | 云平台 Agent、工作流、容器服务、定时任务、RAG 应用 | 负责人、部署环境、服务身份、数据源、网络出口与写入权限 |

清单还应区分“已安装”“近期运行”“近期处理数据”和“具备持续授权”。这些状态会随时间变化。工具卸载后 OAuth 授权可能仍需检查，人员离职后后台 Agent 或服务身份也可能继续存在。治理记录应保留最后观测时间与撤销验证时间。

来源：[Reco · CISO Guide to Shadow AI（17 页 PDF）](https://go.reco.ai/hubfs/Gated%20Assets/CISO%20Guide%20to%20Shadow%20AI.pdf)；[Akto Atlas · AI Discovery Connectors](https://ai-security-docs.akto.io/akto-atlas-agentic-ai-security-for-employee-endpoints/endpoints-discovery-agents)；[Akto Argus · 自建 AI 产品概览](https://ai-security-docs.akto.io/akto-argus-agentic-ai-security-for-homegrown-ai/overview)。

## 发现技术对照：每一种信号能证明什么

*方法与覆盖边界*

影子 AI 分布在网络、浏览器、终端、身份与云服务中，单一信号很难建立完整事实。下表给出一般技术机制的边界；它不是对所有厂商实现的统一断言。内容可见性取决于部署、授权、产品版本以及是否存在绕行路径。

| 方法 | 能够提供的证据 | 仍然缺少什么 | 验收重点 |
| --- | --- | --- | --- |
| DNS、代理与网络日志 | 到 AI 域名或地址的连接、时间、流量与部分主体信息 | 仅有域名或 TLS 元数据时，看不到提示正文、账号与业务目的；直连和非企业网络可能漏采 | 用受控请求验证主体关联、个人网络与替代出口的覆盖 |
| 受管理浏览器与扩展 | 在支持页面中观察输入、上传、响应或账号状态；部分可执行前拦截 | 不自动覆盖原生桌面、IDE、CLI；其他浏览器与扩展失效需另测 | 覆盖浏览器和页面清单、无痕/未管理配置、失效时默认行为 |
| 终端、EDR、MDM 与工具 hooks | 本地工具、进程、用户、MCP 配置；特定 hook 可提供调用上下文 | 安装发现、进程观测与内容检查是不同深度；EDR 接入不自动等于每次提示均可拦截 | 支持工具和版本、hook 被移除、离线状态与绕过路径 |
| SSO、OAuth 与 SaaS 管理 API | 企业身份登录、第三方授权、scope、租户设置与应用关系 | 没有企业 SSO/OAuth 或不在可见租户中的使用可能缺少信号；日志也可能事后到达 | 应用与授权发现时延、日志粒度、撤权执行与独立复查 |
| AI / MCP 网关与运行时集成 | 经过控制点的模型请求、工具、资源与策略决策 | 未经过网关的请求、直连模型、间接网络外送和其他工具需要另行控制 | 请求是否被强制经过控制点；拒绝是否发生在副作用之前 |
| 云、容器与平台连接器 | 受支持环境中的 Agent、模型端点、服务身份和配置 | 未接入账号、临时环境、隐藏工作流与动态工具仍需验证 | 新资产发现时延、跨账号覆盖、删除与配置变更同步 |
| 数据分类、权限图与 DLP | 资源敏感性、过度访问、数据外送内容或暴露路径 | 仅知道资源敏感，不代表已看见每次 Agent 行为；仅有调用日志也不代表已识别内容 | 标签与未标记数据、权限实际可达性、外传拦截及修复结果 |

一个实用组合是：身份与 SaaS API 找连接，终端与云资产发现找执行者，浏览器或运行时集成找动作，数据分类找影响，再用业务系统结果确认是否发生副作用。来源之间应通过稳定标识关联，不能只凭相同产品名拼接。

Akto 连接器文档提供了具体例子：Endpoint Shield 组合本地 MCP 发现、CLI/IDE hooks 与面向桌面应用的 System Proxy，但明确说明浏览器内 AI 使用不在这一连接器覆盖中，需要浏览器扩展。采购时应查看这一层说明，而不是只接受“全端点覆盖”的概述。

来源：[Akto Atlas · AI Discovery Connectors](https://ai-security-docs.akto.io/akto-atlas-agentic-ai-security-for-employee-endpoints/endpoints-discovery-agents)；[Reco · CISO Guide to Shadow AI（17 页 PDF）](https://go.reco.ai/hubfs/Gated%20Assets/CISO%20Guide%20to%20Shadow%20AI.pdf)；[Akto Atlas · Agentic AI Discovery](https://ai-security-docs.akto.io/akto-atlas-agentic-ai-security-for-employee-endpoints/ai-agent-activity)。

## 把“看见了”拆成六种证据

*本项目评估方法*

不同厂商可能都展示“发现”数字，但统计对象和证据深度不同。本专题采用以下六项证据问题帮助评估，不将它们称为行业认证或强制成熟度级别。一个产品可能擅长其中几项，不能从一项能力直接推导其余能力。

| 证据问题 | 足够具体的记录 | 常见误判 |
| --- | --- | --- |
| 资产是否存在？ | 资产标识、类型、版本、负责人、首次与最后发现时间 | 把安装数量写成活跃用户数量 |
| 是否实际使用？ | 用户/设备/服务身份、会话或调用、时间、账号与租户 | 把域名连接写成敏感数据外送 |
| 处理了什么数据？ | 资源引用、分类依据、脱敏的输入输出、数据来源 | 把有读取权限写成已经读取或泄漏 |
| 具备什么授权？ | OAuth scope、工具能力、委托身份、资源范围、到期时间 | 把合法登录当成所有后续动作都已获授权 |
| 执行了什么动作？ | 工具参数、目的地、请求标识、源系统回执、实际变更 | 把 Agent 的文字回答当成真实执行结果 |
| 控制是否生效？ | 执行前策略、允许/拒绝、失败处理、目的端及源系统复核 | 把告警、审批或关闭工单当成外传被阻止 |

盘点页面建议同时展示覆盖分母：已纳管终端占多少、已接入租户有哪些、支持检查内容的 AI 表面有哪些，以及哪些只提供资产或事后日志。未知范围应继续标为未知，避免用告警减少掩盖采集失效。

来源：[Akto Atlas · Agentic AI Discovery](https://ai-security-docs.akto.io/akto-atlas-agentic-ai-security-for-employee-endpoints/ai-agent-activity)；[SACR / Cyera · AI 时代的数据安全成熟度模型](https://www.cyera.com/reports/sacr-the-new-data-security-maturity-model-for-the-ai-era)。

## 风险链：数据、权限、工具与业务完整性

*研究分析*

第一条链是数据离开原有边界。员工可能将客户记录、代码、合同或会议内容发给未评估的 AI 服务，也可能通过个人账号连接企业数据。处置既要看内容敏感性，也要看服务类型、租户、用途、保留与删除机制。不能把“进入 AI”一概等同于“用于训练”，也不能因为回答正常就忽略外送。

第二条链是授权被长期继承。AI 应用获得云盘或邮件权限后，风险未必止于首次上传；持久 OAuth、共享 API key、服务身份和宽泛工具权限都可能让后续任务触及更多数据。应关注授权创建、范围变化、使用与撤销，而不只看登录是否成功。

第三条链是低信任内容改变 Agent 行为。工具描述、检索文档、邮件或网页可能包含攻击者指令，诱使 Agent 把正常权限用于任务之外的动作。共享 MCP 与长期记忆还可能扩大影响和持续时间；“工具来自内部网关”不自动证明工具当前版本可信。

第四条链是业务写入受到破坏。Agent 创建线索、修改权限、发送消息或更新工单时，错误动作可以损害完整性与可用性。只关注敏感词泄漏，覆盖不到字段被恶意变换、收件人被替换或批量操作超出授权的问题。

第五条链是治理脱节：缺少负责人、例外无到期、无人验证撤权或修复。技术发现若无法进入业务流程，最终只会留下更多列表。对高风险事项应记录负责人、处理期限、例外原因和复核证据。

来源：[Reco · CISO Guide to Shadow AI（17 页 PDF）](https://go.reco.ai/hubfs/Gated%20Assets/CISO%20Guide%20to%20Shadow%20AI.pdf)；[Zenity · 恶意 MCP 攻击演示（原标题涉及 Shadow AI）](https://www.youtube.com/watch?v=uMV5icICnwo)；[Cyera · Agent Guardian](https://www.cyera.com/platform/agent-guardian)。

## 四家厂商的切入点与待验证边界

*官方描述与编辑比较*

下面按主要研究入口比较 Reco、Akto、Zenity 和 Cyera，便于安排后续验证。它不是排名，也不是声称四家只具备某一类能力。表中的产品信息来自官方页面或技术文档，均未在本项目企业环境中实际部署测评。

| 厂商 | 主要观察入口 | 公开材料提供了什么 | 现场必须验证 |
| --- | --- | --- | --- |
| Reco | SaaS 应用、身份、OAuth 与应用之间的连接 | 当前 Shadow AI 页强调应用、AI 工具、Agent 及其数据访问关系；指南以 SaaS 治理与持续监控为主 | 个人账号、非 SSO、本地模型和直接 API 使用怎样发现；哪些控制可在执行前发生 |
| Akto | Atlas 员工端；Argus 自建云端 Agent | 文档拆分连接器、hooks、浏览器、资产与 traces；Argus 说明 CI/CD 评估、网关及运行时约束 | 每种连接器的实际内容深度、拦截能力、旁路、版本限制与采集隐私 |
| Zenity | Agent 资产、权限、工具、数据接触与执行行为 | AI Observability 页包含 SaaS、自建和本地 Agent，提及记忆更新、RAG 与工具调用 | 每种平台的接入和控制点；观察与强制执行如何对应；研究攻击案例是否有防护对照 |
| Cyera | 从敏感数据与访问关系出发的 Agent 安全 | Agent Guardian 页描述资产和关联图、浏览器、数据访问、运行时控制与红队验证 | 数据覆盖与准确性；个人端/本地路径如何接入；拦截和权限修复能否独立复核 |

选择顺序应取决于主要缺口：若不清楚谁给第三方 AI 授予了企业数据权限，先验证 SaaS 与身份连接；若主要风险在开发者工具和本地 MCP，先验证终端与 hooks；若 Agent 频繁调用内部系统，必须验证任务、工具和执行前控制；若缺乏数据敏感性和权限事实，则需补上数据层。

这些能力也可能互补。关键是避免重复采购相同的资产清单，却仍没有人能够证明关键外送被阻止、污染记忆被清理或业务权限已收敛。

- [Reco 指南详细解读](industry-report.html?id=reco-shadow-ai)
- [Akto 技术文档详细解读](industry-report.html?id=akto-shadow-ai)
- [Zenity 产品专题](zenity.html)
- [Cyera 产品专题](cyera.html)

来源：[Reco · Shadow AI Discovery 当前产品页](https://www.reco.ai/use-cases/shadow-ai-discovery)；[Akto Atlas · 产品概览](https://ai-security-docs.akto.io/akto-atlas-agentic-ai-security-for-employee-endpoints/overview)；[Akto Argus · 自建 AI 产品概览](https://ai-security-docs.akto.io/akto-argus-agentic-ai-security-for-homegrown-ai/overview)；[Zenity · AI Observability](https://zenity.io/platform/ai-observability)；[Cyera · Agent Guardian](https://www.cyera.com/platform/agent-guardian)。

## Reco 指南：值得吸收什么，也要修正什么

*原文解读与证据审读*

本次取得《CISO Guide to Shadow AI》17 页英文 PDF。封面没有明确发布日期，文件创建元数据为 2025-02-27，所引研究主要来自 2023–2024 年。应将它作为早期治理指南阅读，不把它标成 2026 年最新市场统计，也不以文件元数据代替正式出版日期。

原文第 3–6 页解释员工提效需求与组织审批速度之间的落差，特别关注个人账号与已批准应用内嵌的 AI。第 6–11 页讨论多层发现、应用配置、身份与权限、第三方供应商、数据流和事件响应。第 12 页转向培训与可用替代方案；第 13–14 页是 Reco 产品介绍，第 15–16 页提供检查清单，第 17 页为厂商介绍。

最有用的主线是把技术和流程一起处理：建立申请入口，提供批准工具，限制数据与访问，持续监控并保留审计；避免只发布一条禁令而没有可工作的替代路径。原文清单包含发现、访问、数据、政策、培训、供应商、监控与定期复核，本专题将它们进一步改写为可分配和可验证的行动。

需要谨慎的是原文多次将数据进入 AI 描述为永久保留、学习或不可撤回。这种表述不能推广到所有服务、企业合同、租户或 API。实际应逐项核查训练用途、日志与保留、人工访问、删除及例外条件。无法证明已彻底删除与断言所有 AI 永久学习，是两项不同的判断。

报告中的比例大量引自外部调查和新闻，分母并不一致。本专题不将这些比例用于今日预算、损失预测或厂商效果排名。现有 PDF 可支持检查原文，原始研究的样本、时间、地域与测量方式仍须另行追溯。当前 Reco 产品页则作为另一份 2026-11-03 的网页快照单独保存，避免混淆产品代际。

> **阅读状态**：17 页全文已归档并提取正文；已核对检查清单页面。当前交付是中文解读与分析，不冒充逐字全文译本。

来源：[Reco · CISO Guide to Shadow AI（17 页 PDF）](https://go.reco.ai/hubfs/Gated%20Assets/CISO%20Guide%20to%20Shadow%20AI.pdf)；[Reco · Shadow AI Discovery 当前产品页](https://www.reco.ai/use-cases/shadow-ai-discovery)。

## Akto 技术文档：两条产品线与真实接入条件

*官方文档解读*

Atlas 的对象是员工实际使用的 AI，包括 IDE、CLI、浏览器、桌面助手、MCP、SaaS 套件与本地模型。概览将资产发现、凭据治理和 inline guardrails 放在同一条线上；具体到部署，连接器文档区分 hooks、Endpoint Shield、浏览器扩展、SaaS API 与现有 EDR/MDM。

这一区分直接决定能看到什么。工具 hook 可以接触支持的调用生命周期；浏览器扩展覆盖支持浏览器内的 AI 使用；SaaS API 获取厂商提供的审计与活动；EDR 和 MDM 也可以承担发现或部署渠道。不能把所有连接器理解为相同的采集粒度、实时性或执行能力。概览对本地检查和阻断的描述，需要在每个具体路径验证。

Agentic AI Discovery 文档将视图拆为 Agentic Assets、Endpoints、Traces、Sensitive Data、Audit Data 和 Endpoint Shield。它描述了模型会话输入输出、工具或 MCP 方法、用户设备关联，以及按 MCP 服务或具体能力允许、阻止或条件允许。评估时应查看一条真实 trace 与源事件如何对应，以及屏蔽某个能力后是否仍存在替代路径。

Argus 面向企业自建 Agent、MCP 和 GenAI 应用，说明从 CI/CD 的持续红队评估延伸到云运行时保护，并列出网关、eBPF 和云平台集成。红队扫描说明“有条件测试某种风险”，不自动等于生产执行受到拦截；云资产发现也不自动证明所有提示或工具调用被完整采集。

对于部署隐私，应明确哪些正文在本地处理、哪些作为 trace 上传、日志如何脱敏、谁能查看以及保存多久。对于强制控制，应检查离线、hook 被删除、未纳管浏览器、直连模型和网关不可用时的行为。本次没有安装连接器或提交客户信息，也没有独立验证这些能力。

来源：[Akto Atlas · 产品概览](https://ai-security-docs.akto.io/akto-atlas-agentic-ai-security-for-employee-endpoints/overview)；[Akto Atlas · AI Discovery Connectors](https://ai-security-docs.akto.io/akto-atlas-agentic-ai-security-for-employee-endpoints/endpoints-discovery-agents)；[Akto Atlas · Agentic AI Discovery](https://ai-security-docs.akto.io/akto-atlas-agentic-ai-security-for-employee-endpoints/ai-agent-activity)；[Akto Argus · 自建 AI 产品概览](https://ai-security-docs.akto.io/akto-argus-agentic-ai-security-for-homegrown-ai/overview)。

## Zenity 视频案例：发现之后，还要控制信任传播

*视频证据与研究分析*

此前逐段精读的 Zenity 视频，标题为 Shadow AI Discovery & Risk Assessment，但实际展示恶意 MCP 工具攻击链。它适合说明影子连接与工具信任带来的影响，不适合作为资产发现控制台演示。

视频前半段通过共享工具影响 CFO 助手，正常查询与 CRM 摘要出现在外部存储日志。后半段切到网站预约助手，并展示把恶意数据处理要求存为用户偏好的语义记忆，最后 Salesforce 新线索的多个字段呈密文样式。正常用户请求没有恶意内容，风险来自已连接的工具与持久化规则。

对本专题的意义是：治理状态可能在首次批准之后变化。MCP 服务的描述、实现、权限和用途需要持续核查；人员离职后，依赖该服务的 Agent、凭据与记忆也需要清理。视频关于撤销内部访问的情节来自其说明，录屏没有完整显示撤权过程；最后直接可见的是至少一条线索受到影响，不能无限外推所有业务操作。

视频没有展示启用 Zenity 后的告警、拒绝、修复或对照结果。应要求厂商在同一场景重演防护：确认工具变更、阻止会话外送、阻止规则写入记忆、保护业务写入，并检查目的端和业务系统结果。

- [阅读约 5,000 字逐段视频精读](zenity-video-umv5.html)
- [原片 00:39 · 外传结果](https://www.youtube.com/watch?v=uMV5icICnwo&t=39s)
- [原片 01:44 · 语义记忆](https://www.youtube.com/watch?v=uMV5icICnwo&t=104s)

来源：[Zenity · 恶意 MCP 攻击演示（原标题涉及 Shadow AI）](https://www.youtube.com/watch?v=uMV5icICnwo)；[Zenity · AI Observability](https://zenity.io/platform/ai-observability)。

## 治理闭环：从发现到可验证处置

*本项目实施建议*

第一步是给业务可用的规则。明确允许的产品、账号与租户、数据类型和用途，建立快速申请与例外流程。规则要能回答“公开资料可否摘要”“客户数据可否上传”“能否连接云盘”“是否允许 Agent 批量写入”。批准一个品牌名称远远不够。

第二步建立带覆盖范围的基线。接入身份与 SaaS、受管理终端、浏览器以及关键云环境，按人员、设备、服务身份与工具关系去重。每条发现记录保留来源、置信度、最后观测时间和负责人；将未接入范围清晰标出。

第三步按真实暴露排优先级。先处理接触敏感数据且有广泛授权、外网出口或业务写入能力的对象；匿名账号和长期凭据应单独检查。风险排序既要反映潜在影响，也要反映证据强度，避免将一个未使用安装包与正在外送客户信息的 Agent 同等处理。

第四步实施有针对性的控制。可以批准企业账号并替换个人连接，收敛 OAuth scope，隔离特定 MCP 能力，限制数据类型或外送目的地，在必要的写入前加入审批。每次审批应绑定实际动作和参数；不能用一次宽泛批准覆盖未来无限变化。

第五步验证并持续复查。撤销授权后用原主体再次访问，阻断外送后查看接收端是否收到数据，清理记忆后重新开会话，修复字段后检查业务系统。工单完成只是流程状态，实际访问与业务结果才是控制证据。

| 建议阶段 | 交付物 | 完成标准 |
| --- | --- | --- |
| 第 1 周 · 建立范围 | AI 使用规则、批准清单、负责人、数据分类与覆盖清单 | 业务知道如何申请；关键环境和未知范围均有记录 |
| 第 2 周 · 补齐发现 | 身份/SaaS/浏览器/终端/云信号的资产与授权关联 | 抽样资产有来源和时间；已安装与已使用状态分开 |
| 第 3 周 · 高风险治理 | 个人账号连接、宽权限 MCP、长寿命凭据和数据外送处置 | 每项有负责人、期限、例外及执行记录 |
| 第 4 周 · 对照验证 | 负向测试结果、覆盖盲区、误报与运营成本 | 复测实际结果；下一轮范围和资源需求有依据 |

上述四周安排是一个可调整的试点建议，不是厂商承诺或行业标准。大型组织、终端部署和跨部门审批可能需要更长周期。

来源：[Reco · CISO Guide to Shadow AI（17 页 PDF）](https://go.reco.ai/hubfs/Gated%20Assets/CISO%20Guide%20to%20Shadow%20AI.pdf)；[SACR / Cyera · AI 时代的数据安全成熟度模型](https://www.cyera.com/reports/sacr-the-new-data-security-maturity-model-for-the-ai-era)。

## 八个 POC 场景：同一业务任务，看执行结果

*本项目验收建议*

使用测试账号、合成数据和组织控制的目的端进行验证。下列场景用于比较发现深度与执行能力，不需要真实客户数据，也不需要运行原视频中的恶意服务。每项记录采集点、处理延迟、策略、回执与源系统结果。

| 场景 | 应当观察什么 | 控制与结果验证 |
| --- | --- | --- |
| 个人账号访问 AI 网页 | 受管理浏览器能否区分企业与个人身份、关联设备用户 | 按规则限制敏感内容；检查未纳管浏览器是否仍为盲区 |
| 批准 SaaS 新启用 AI 功能 | 功能开关、数据范围和授权变更是否进入清单 | 重新评审、告警或限制的责任方明确，不依赖手工记忆 |
| AI 工具新增云盘 OAuth | 应用、授权人、scope、资源可达性和持续授权 | 撤销后以原授权再次访问，确认权限实际失效 |
| IDE/CLI 与本地模型使用 | 安装、运行、请求与代码接触分别能否被观察 | 区分只发现进程和可检查调用；验证 hook 缺失时覆盖 |
| MCP 注册与描述变更 | 发布者、版本或描述变化、能力、依赖关系 | 重新评估或暂停；拒绝不能只停留在聊天提示中 |
| 正常任务尝试额外外送 | 读取数据、外送目的地与任务授权能否关联 | 在发送前拒绝；受控接收端确认没有收到测试内容 |
| 第三方要求写入长期记忆 | 记忆来源、写入主体、适用范围、后续读取 | 阻止未授权规则持久化；新会话验证未生效 |
| 业务写入与采集故障 | 创建线索/变更字段的前后值，采集或网关中断 | 结果符合批准参数；失败默认行为可解释并可审计 |

相同场景分别使用企业允许路径与越界路径，避免只准备一个必然触发关键词规则的样例。要求产品说明哪些环节只能告警、哪些能审批、哪些能执行前拒绝，并记录不支持的路径。发现率、拦截率和影响面不能混用同一个分母。

来源：[Akto Atlas · AI Discovery Connectors](https://ai-security-docs.akto.io/akto-atlas-agentic-ai-security-for-employee-endpoints/endpoints-discovery-agents)；[Zenity · 恶意 MCP 攻击演示（原标题涉及 Shadow AI）](https://www.youtube.com/watch?v=uMV5icICnwo)；[SACR / Cyera · AI 时代的数据安全成熟度模型](https://www.cyera.com/reports/sacr-the-new-data-security-maturity-model-for-the-ai-era)。

## 度量、框架与阅读路线

*研究分析与资料索引*

覆盖指标优先计算已接入范围：纳管终端比例、支持的浏览器与工具版本、接入租户和云账号、具备内容检查或执行控制的实际路径。运营指标可以跟踪新资产到负责人确认的时间、高风险授权处置时间、过期例外和复测通过比例。

效果指标应建立在可重复场景上：已验证外送拒绝数、撤权后访问确实失败的比例、污染记忆被清理并复测的比例、关键业务写入符合批准动作的比例。同时记录误报、员工绕行、审批等待、连接器健康和内容采集带来的隐私成本。告警量下降可能来自采集失效，必须与覆盖和健康状况同时看。

组织责任与持续风险管理可以参考资料库中的 NIST AI RMF；攻击与负向场景可以参考 OWASP Agentic 指南；数据暴露与修复结果可以参考 SACR/Cyera 成熟度报告。这里是编辑性的用途映射，没有把它们称为影子 AI 专用认证，也没有从厂商提及框架推导合规结论。

建议阅读顺序：先看本专题的场景与发现边界，再读 Reco 指南了解组织流程，接着读 Akto 连接器文档判断部署深度，最后结合 Zenity 视频理解工具与记忆风险，并用 Cyera/SACR 的结果验证思路设计验收。

- [Reco 指南详细解读](industry-report.html?id=reco-shadow-ai)
- [Akto 技术文档详细解读](industry-report.html?id=akto-shadow-ai)
- [NIST AI RMF 资料笔记](industry-report.html?id=nist-rmf)
- [OWASP Agentic 风险笔记](industry-report.html?id=owasp)
- [SACR / Cyera 成熟度报告笔记](industry-report.html?id=cyera)

来源：[Reco · CISO Guide to Shadow AI（17 页 PDF）](https://go.reco.ai/hubfs/Gated%20Assets/CISO%20Guide%20to%20Shadow%20AI.pdf)；[NIST · AI Risk Management Framework](https://www.nist.gov/itl/ai-risk-management-framework)；[OWASP · Agentic Applications Top 10（2026）](https://genai.owasp.org/resource/owasp-top-10-for-agentic-applications-for-2026/)；[SACR / Cyera · AI 时代的数据安全成熟度模型](https://www.cyera.com/reports/sacr-the-new-data-security-maturity-model-for-the-ai-era)。

## 来源与原始资料

- [Reco · CISO Guide to Shadow AI（17 页 PDF）](https://go.reco.ai/hubfs/Gated%20Assets/CISO%20Guide%20to%20Shadow%20AI.pdf) — 已取得并阅读全文。公开指南；PDF 创建元数据为 2025-02-27，不等于正式发布日期。包含 2023–2024 年二手统计与厂商介绍。
- [Reco · Shadow AI Discovery 当前产品页](https://www.reco.ai/use-cases/shadow-ai-discovery) — 已读官方产品页。SaaS、身份、OAuth、数据访问与应用连接；未经部署验证。
- [Akto Atlas · 产品概览](https://ai-security-docs.akto.io/akto-atlas-agentic-ai-security-for-employee-endpoints/overview) — 已读官方技术文档。员工端、CLI、IDE、浏览器、SaaS 与本地模型；产品描述不等于独立测评。
- [Akto Atlas · AI Discovery Connectors](https://ai-security-docs.akto.io/akto-atlas-agentic-ai-security-for-employee-endpoints/endpoints-discovery-agents) — 已读官方技术文档。明确区分 Endpoint Shield、工具 hooks、浏览器扩展、SaaS API 与 EDR/MDM。
- [Akto Atlas · Agentic AI Discovery](https://ai-security-docs.akto.io/akto-atlas-agentic-ai-security-for-employee-endpoints/ai-agent-activity) — 已读官方技术文档。资产、终端、Traces、敏感数据、MCP 审计与能力审批。
- [Akto Argus · 自建 AI 产品概览](https://ai-security-docs.akto.io/akto-argus-agentic-ai-security-for-homegrown-ai/overview) — 已读官方技术文档。自建云端 Agent、MCP、CI/CD 红队与运行时网关；各集成深度仍待实测。
- [Zenity · AI Observability](https://zenity.io/platform/ai-observability) — 已读官方产品页。Agent 资产、权限、工具、数据接触与执行行为；须分别验证发现与执行。
- [Zenity · 恶意 MCP 攻击演示（原标题涉及 Shadow AI）](https://www.youtube.com/watch?v=uMV5icICnwo) — 关键画面已逐段精读。2:10；没有完整语音转写；展示攻击结果，未展示 Zenity 拦截。
- [Cyera · Agent Guardian](https://www.cyera.com/platform/agent-guardian) — 已读官方产品页。AI 资产、数据访问图、浏览器、运行时与验证；无独立覆盖率测试。
- [SACR / Cyera · AI 时代的数据安全成熟度模型](https://www.cyera.com/reports/sacr-the-new-data-security-maturity-model-for-the-ai-era) — 本地全文与中文译稿。用于组织修复与结果验证思路；非影子 AI 专用认证。
- [NIST · AI Risk Management Framework](https://www.nist.gov/itl/ai-risk-management-framework) — 现有资料库框架参考。组织风险管理参考；本专题映射为编辑分析，不声称产品获得 NIST 认证。
- [OWASP · Agentic Applications Top 10（2026）](https://genai.owasp.org/resource/owasp-top-10-for-agentic-applications-for-2026/) — 现有资料库风险指南。辅助设计负向测试；不是影子 AI 覆盖率或产品认证。

原文 PDF、正文提取与当前产品/技术页面快照保存在原始资料目录。PDF 页码指文件顺序；未将创建时间标为正式发布日期。

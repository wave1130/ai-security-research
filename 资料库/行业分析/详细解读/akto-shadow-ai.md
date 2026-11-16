# Akto：影子 AI 发现、连接器与运行时边界

Akto Atlas & Argus: AI Discovery and Security Connectors

Akto · 核实于 2026-11-03

阅读状态：四份官方技术文档已读 · 页面快照已归档

证据边界：来自当前官方文档，未经部署验证；支持列表、采集深度、许可和故障行为需按连接器与版本核实。

[官方来源](https://ai-security-docs.akto.io/akto-atlas-agentic-ai-security-for-employee-endpoints/overview)

## Akto 技术文档：两条产品线与真实接入条件

*官方文档解读*

Atlas 的对象是员工实际使用的 AI，包括 IDE、CLI、浏览器、桌面助手、MCP、SaaS 套件与本地模型。概览将资产发现、凭据治理和 inline guardrails 放在同一条线上；具体到部署，连接器文档区分 hooks、Endpoint Shield、浏览器扩展、SaaS API 与现有 EDR/MDM。

这一区分直接决定能看到什么。工具 hook 可以接触支持的调用生命周期；浏览器扩展覆盖支持浏览器内的 AI 使用；SaaS API 获取厂商提供的审计与活动；EDR 和 MDM 也可以承担发现或部署渠道。不能把所有连接器理解为相同的采集粒度、实时性或执行能力。概览对本地检查和阻断的描述，需要在每个具体路径验证。

Agentic AI Discovery 文档将视图拆为 Agentic Assets、Endpoints、Traces、Sensitive Data、Audit Data 和 Endpoint Shield。它描述了模型会话输入输出、工具或 MCP 方法、用户设备关联，以及按 MCP 服务或具体能力允许、阻止或条件允许。评估时应查看一条真实 trace 与源事件如何对应，以及屏蔽某个能力后是否仍存在替代路径。

Argus 面向企业自建 Agent、MCP 和 GenAI 应用，说明从 CI/CD 的持续红队评估延伸到云运行时保护，并列出网关、eBPF 和云平台集成。红队扫描说明“有条件测试某种风险”，不自动等于生产执行受到拦截；云资产发现也不自动证明所有提示或工具调用被完整采集。

对于部署隐私，应明确哪些正文在本地处理、哪些作为 trace 上传、日志如何脱敏、谁能查看以及保存多久。对于强制控制，应检查离线、hook 被删除、未纳管浏览器、直连模型和网关不可用时的行为。本次没有安装连接器或提交客户信息，也没有独立验证这些能力。

来源：[Akto Atlas · 产品概览](https://ai-security-docs.akto.io/akto-atlas-agentic-ai-security-for-employee-endpoints/overview)；[Akto Atlas · AI Discovery Connectors](https://ai-security-docs.akto.io/akto-atlas-agentic-ai-security-for-employee-endpoints/endpoints-discovery-agents)；[Akto Atlas · Agentic AI Discovery](https://ai-security-docs.akto.io/akto-atlas-agentic-ai-security-for-employee-endpoints/ai-agent-activity)；[Akto Argus · 自建 AI 产品概览](https://ai-security-docs.akto.io/akto-argus-agentic-ai-security-for-homegrown-ai/overview)。

## 连接器的真实覆盖条件

*官方文档解读*

AI Discovery Connectors 文档将 Endpoint Shield 描述为组合本地 MCP 发现、CLI/IDE hooks 和桌面 System Proxy 的部署入口，并明确另用浏览器扩展覆盖浏览器内 AI。

较轻路径可单独配置特定工具 hooks；现有 EDR/MDM 可用于发现或部署；SaaS 连接器则经供应商 API 获取活动。它们的观察和执行位置不同，不能仅凭“已接入”推断相同内容粒度或阻断能力。

来源：[Akto Atlas · AI Discovery Connectors](https://ai-security-docs.akto.io/akto-atlas-agentic-ai-security-for-employee-endpoints/endpoints-discovery-agents)。

## 从清单下钻到行为与权限

*官方文档解读*

Agentic AI Discovery 文档列出资产、终端、Traces、敏感数据、Audit Data 与 Endpoint Shield。描述包括模型输入输出、用户设备、工具和 MCP 方法，以及对服务或具体能力的允许、阻止和条件允许。

需要用一条测试业务链关联资产、身份、调用、参数和实际结果；日志可以观察行为，实际执行控制还取决于对应连接器、策略和网络路径。

来源：[Akto Atlas · Agentic AI Discovery](https://ai-security-docs.akto.io/akto-atlas-agentic-ai-security-for-employee-endpoints/ai-agent-activity)。

## 员工端与自建 Agent 应分别评估

*研究分析*

Atlas 优先回应员工使用工具与端点治理；Argus 关注自建 Agent、MCP 和云端生命周期。它们可以互补，但不应以其中一个演示代替另一类部署的证据。

对支持的框架和网关，要求说明是资产发现、运行时记录、内容检查、红队评估还是执行前策略。红队探针数量不等于防护成功率，eBPF 可见性也不自动等于对任意模型动作具有语义控制。

来源：[Akto Atlas · 产品概览](https://ai-security-docs.akto.io/akto-atlas-agentic-ai-security-for-employee-endpoints/overview)；[Akto Argus · 自建 AI 产品概览](https://ai-security-docs.akto.io/akto-argus-agentic-ai-security-for-homegrown-ai/overview)。

## POC 与数据处理问题

*验证建议*

分别测试受管理浏览器、原生桌面、IDE、CLI、本地模型、SaaS 与自建 Agent。覆盖 hook 被删除、使用替代出口、个人账号和采集组件中断，记录明确的支持或未知状态。

同时确认哪些提示、回复和密钥信息被本地处理或上传，谁能访问、如何脱敏和保存多久。对声称 inline 的路径，检查拒绝发生位置以及接收端没有收到数据的证据。

来源：[Akto Atlas · AI Discovery Connectors](https://ai-security-docs.akto.io/akto-atlas-agentic-ai-security-for-employee-endpoints/endpoints-discovery-agents)；[Akto Atlas · Agentic AI Discovery](https://ai-security-docs.akto.io/akto-atlas-agentic-ai-security-for-employee-endpoints/ai-agent-activity)。

## 延伸阅读

- [影子 AI 综合专题](../../../web/shadow-ai.html#akto)

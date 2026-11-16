# Zenity 产品研究与视频资料

核实日期：2026-11-03。视频和导览的标题、入口与可见时长已核实。uMV5icICnwo 已逐段核对关键画面与烧录说明，见专门精读；其余未完整观看或逐帧验证。

[打开产品专题](../../web/zenity.html)

## 产品定位：治理 Agent 的决策与行动

*官方材料解读*

Zenity 当前平台页以 Surface、Enforce、Protect 三层组织能力：先理解资产和暴露，再对行动实施约束，随后检测并响应异常。覆盖方向包括 SaaS 内嵌 Agent、自建云端 Agent 和终端上的个人或编码工具。

产品命名会随版本演进，因此不能直接用旧的低代码安全资料推断当前控制范围。本专题以当前官网为主要依据，并把历史研究视频保留为威胁背景资料，而不是当作新版本控制台说明。

来源：[平台三层结构](https://zenity.io/platform)

## 资产与可观测性：从清单走向行动关系

*官方材料与分析*

AI Observability 和平台介绍强调持续发现与清点 Agent，关联其接触的数据及运行环境。清单的价值在于说明某个 Agent 属于谁、能访问什么、依赖哪些工具，以及实际活动发生在哪里。

需要核查自动发现来源及盲区，例如未登记的本地工具、共用身份与服务端连接。观察到平台中的一个 Agent，并不自动代表能在全部运行环境对其执行强制控制；可见性与执行能力应在每个接入方式下分别记录。

来源：[AI Observability](https://zenity.io/platform/ai-observability)；[平台三层结构](https://zenity.io/platform)

## Boundaries：策略的编写、预览与生效

*官方材料解读*

Runtime Boundaries 页面描述预制规则、自然语言辅助生成策略、冲突检测，以及生效前预览命中情况。它强调利用多步骤上下文，判断一个单独看似正常的动作在整条行为链中是否危险。

多平台规则一致执行是厂商宣称，现场应选两种环境核对相同规则的覆盖及差异。还要检查默认规则如何修改、哪个主体有发布权、策略版本如何审计，以及出现误拦截时怎样恢复业务。

来源：[Runtime Boundaries](https://zenity.io/platform/runtime-boundaries)

## MCP：统一入口、工具上下文和调用治理

*官方材料解读*

MCP 产品页描述导入或发现服务器、查看工具与调用主体，并根据实时上下文允许、修改或阻止调用；接入方式中提到发布服务器和注册统一网关地址。页面关注工具投毒、工具变更、影子服务器、过度授权和凭据扩散。

对已有 Agent 接入统一网关后，应实际测试直连旧地址、备用客户端、长连接、工具列表变化和失败重试。只有不能绕过真实控制路径时，统一视图才构成强制边界；这些旁路测试是本项目建议，并非已经验证的产品结果。

来源：[MCP Security](https://zenity.io/platform/mcp-security)

## 身份：合法权限与合适行为之间的差距

*官方材料解读*

身份产品页把 Okta、Microsoft Entra 等既有身份系统作为基础信号，再结合非人类身份、活动和所访问资源。其关注点是已获授权的 Agent 是否在当前任务中执行了适当动作，而非单独替换企业身份提供方。

采购时应问清“谁”包括应用所有者、当前用户、代理服务账号还是委托链中的主体。共享令牌、硬编码秘密和用户离职后遗留连接需要不同处置；一张关系图不能单独证明已经实施最小权限。

来源：[Agentic Identity](https://zenity.io/platform/agentic-identity-and-access-management)

## AIDR：把事件读成连续的行为链

*官方材料解读*

AIDR 产品说明强调结合工具调用、检索与后续行动识别提示注入、异常行为及敏感数据风险，并使用 OWASP 和 MITRE ATLAS 组织威胁说明。重点是识别单个步骤之间的关联，而不是只检查某一条输入。

实际验证应分别确认采集、检测、告警、阻断和处置发生的时点。有些部署可能依靠平台事件而非代理同步调用，延迟与可用动作会不同。不能把所有运行时能力一律记为“行动前阻止”。

来源：[AI Detection and Response](https://zenity.io/platform/ai-detection-and-response)

## 跨平台覆盖：同一个名称不代表同一接入深度

*研究分析*

官网列出 Copilot Studio、Agentforce、Bedrock、Vertex、ChatGPT Enterprise、Claude Enterprise 等生态。应以具体平台和版本核实发现、配置评估、读取步骤日志及强制执行的支持矩阵。

对每个平台，要求说明所需租户授权、连接器、SDK、网关或终端组件，以及接入变更量与故障模式。将“支持”拆成阶段，可以防止把一处完整保护外推为所有平台一致覆盖。

来源：[平台三层结构](https://zenity.io/platform)；[MCP Security](https://zenity.io/platform/mcp-security)

## 研究视频与产品演示：两类证据各自使用

*资料阅读建议*

Zenity Labs 发布攻击与研究材料，官方频道也收录大会演讲和访谈。它们有助于理解威胁模式、研究深度与设计问题，但展示某个平台可被攻击，不等于 Zenity 在同一平台所有部署中都能阻止该攻击。

本页按产品、研究与行业访谈分别整理媒体。除 uMV5icICnwo 已逐段核对关键画面并形成精读笔记外，其余仅核实标题、时长、链接及公开介绍。该片原标题涉及 Shadow AI，实际展示恶意 MCP 与记忆投毒攻击链，未展示产品防护效果。历史 Copilot 和低代码资料也标出用途，避免混淆产品代际。

来源：[官方视频资料](https://zenity.io/resources/videos)；[Zenity Labs](https://labs.zenity.io/)

## 与 ARISE 的关系：可用于提问，不作为认证

*研究分析*

ARISE 提供在行动完成前结合身份、委托、工具与数据判断的分析框架，适合用来检查 Zenity 所强调的控制。它不是对产品已经达到某个等级的普遍认证。

建议以框架组织证据：同一动作的身份、上下文、规则、决策、执行和结果能否重建？在上下文不足时会请求审批、拒绝还是继续？一项能力只有在真实接入路径上验证后，才应计入已覆盖。

来源：[SACR ARISE 框架](https://softwareanalyst.substack.com/p/arise-agentic-runtime-identity-security)

## 部署、数据处理、价格与未知事项

*待确认事项*

本次未取得公开价目表、统一计费口径、完整私有化支持矩阵及数据地域承诺。不同生态的接入权限、模型辅助判断的处理位置、日志中的提示与响应如何脱敏，均需在安全评估中确认。

也应询问延迟、可用性、旁路和故障默认行为，是否支持分阶段只观察后执行，历史保留与导出，以及终止服务后撤销授权的步骤。公开列出企业平台名称不等于这些事项已得到解答。

来源：[申请产品演示](https://zenity.io/book-a-demo)；[平台三层结构](https://zenity.io/platform)

## Demo 提问与本项目的验证重点

*验证建议*

要求同一账号在两项任务中执行相同工具：一项业务授权允许，另一项目的越界。检查系统能否使用任务和数据范围判断，并证明拒绝发生在副作用之前。再测试读取敏感信息后尝试外送的跨步骤链。

围绕 MCP 直连、审批后改参数、规则冲突、凭据到期、负责人禁用及监控服务不可用逐项检查。对本项目最有启示的是模型外可执行策略、任务身份与审计关联；对意图的模型分析应与硬约束职责分开。

来源：[Runtime Boundaries](https://zenity.io/platform/runtime-boundaries)；[MCP Security](https://zenity.io/platform/mcp-security)；[Agentic Identity](https://zenity.io/platform/agentic-identity-and-access-management)

## 视频与官网演示


### 01. Shadow AI Discovery & Risk Assessment

[YouTube 视频 · 2:10（播放器）](https://www.youtube.com/watch?v=uMV5icICnwo)

分类已修正为攻击链与威胁研究。实际内容是恶意 MCP、会话外传、记忆投毒与 Salesforce 字段破坏，未展示 Zenity 产品阻断。

[阅读逐段精读与技术分析](视频精读-恶意MCP与记忆投毒.md) · [网页阅读](../../web/zenity-video-umv5.html)

### 02. Zenity for ChatGPT Enterprise: Secure, Govern, & Accelerate AI Adoption

[YouTube 视频 · 31:30](https://www.youtube.com/watch?v=OnZGqeBYGIU)

核对具体产品界面和控制阶段；标题与时长已核实，未完整观看。

### 03. Red Teaming the Red Team: A Comparative Study of Autonomous AI Security Agents | Vivek Vinod Sharma

[YouTube 视频 · 12:49](https://www.youtube.com/watch?v=m2bAi8EheTg)

威胁研究材料可用于理解测试场景，不等同于产品已能阻止所有同类攻击。

### 04. PromptPwnd: Prompt Injection Vulnerabilities in GitHub Actions Using AI Agents | Rein Daelman

[YouTube 视频 · 29:49](https://www.youtube.com/watch?v=wTUL6JHbMiY)

威胁研究材料可用于理解测试场景，不等同于产品已能阻止所有同类攻击。

### 05. Verifiable Agentic Identity: Securing AI Supply Chains with SBOM and Provenance | Aamiruddin Syed

[YouTube 视频 · 16:36](https://www.youtube.com/watch?v=yxKiGPB2UJA)

威胁研究材料可用于理解测试场景，不等同于产品已能阻止所有同类攻击。

### 06. AgentForger: ChatGPT Workspace Agents Vulnerability - The insider steals secrets and impersonates

[YouTube 视频 · 1:16](https://www.youtube.com/watch?v=9TMvep-1gwQ)

威胁研究材料可用于理解测试场景，不等同于产品已能阻止所有同类攻击。

### 07. AgentForger: ChatGPT Workspace Agents Vulnerability - One link creates an autonomous insider Part 1

[YouTube 视频 · 1:58](https://www.youtube.com/watch?v=9aeyh1jclQ0)

威胁研究材料可用于理解测试场景，不等同于产品已能阻止所有同类攻击。

### 08. PleaseFix: PerplexedBrowser - File System Attack

[YouTube 视频 · 1:43](https://www.youtube.com/watch?v=tJV6tfiK-5g)

威胁研究材料可用于理解测试场景，不等同于产品已能阻止所有同类攻击。

### 09. PleaseFix: PerplexedBrowser - 1Password Account Takeover

[YouTube 视频 · 2:01](https://www.youtube.com/watch?v=K51XvfxwC28)

威胁研究材料可用于理解测试场景，不等同于产品已能阻止所有同类攻击。

### 10. OpenClaw or OpenDoor? | Part 4

[YouTube 视频 · 5:23](https://www.youtube.com/watch?v=iQvNKnEbsbY)

威胁研究材料可用于理解测试场景，不等同于产品已能阻止所有同类攻击。

### 11. OpenClaw or OpenDoor? | Part 1

[YouTube 视频 · 1:21](https://www.youtube.com/watch?v=jvlbhm2uSJ8)

威胁研究材料可用于理解测试场景，不等同于产品已能阻止所有同类攻击。

### 12. OpenClaw or OpenDoor? | Part 2

[YouTube 视频 · 1:05](https://www.youtube.com/watch?v=aBrR8o7i__k)

威胁研究材料可用于理解测试场景，不等同于产品已能阻止所有同类攻击。

### 13. OpenClaw or OpenDoor | Part 3

[YouTube 视频 · 1:25](https://www.youtube.com/watch?v=0DrMzQOawMw)

威胁研究材料可用于理解测试场景，不等同于产品已能阻止所有同类攻击。

### 14. Building, Governing, and Scaling AI Agents Across the Microsoft Ecosystem in Financial Services

[YouTube 视频 · 43:24](https://www.youtube.com/watch?v=lFOjCf-cQfY)

威胁研究材料可用于理解测试场景，不等同于产品已能阻止所有同类攻击。

### 15. X-Ray for Agents: Observability & Safe Tooling for MCP | Jiquan Ngiam

[YouTube 视频 · 29:33](https://www.youtube.com/watch?v=bTuPxPl6CJ8)

威胁研究材料可用于理解测试场景，不等同于产品已能阻止所有同类攻击。

### 16. Ignore Previous Instructions: Embracing AI Red Teaming | David Campbell

[YouTube 视频 · 31:42](https://www.youtube.com/watch?v=_7JzK-_-eTo)

威胁研究材料可用于理解测试场景，不等同于产品已能阻止所有同类攻击。

### 17. AgentFlayer: ChatGPT Connectors 0click Exfiltration Attack

[YouTube 视频 · 1:35](https://www.youtube.com/watch?v=JNHpZUpeOCg)

威胁研究材料可用于理解测试场景，不等同于产品已能阻止所有同类攻击。

### 18. We Hacked Copilot Studio: The AI Agent Risk Hiding in Your Environment

[YouTube 视频 · 2:08](https://www.youtube.com/watch?v=vOnwIbS998U)

威胁研究材料可用于理解测试场景，不等同于产品已能阻止所有同类攻击。

## 其他导览与资料

- [Living off Microsoft Copilot: BlackHat 2024](https://zenity.io/resources/videos/living-off-microsoft-copilot-blackhat-2024)：历史安全研究视频；用于威胁背景，不视为当前产品操作演示。
- [6 Microsoft Copilot Studio Vulnerabilities in 4 Minutes](https://zenity.io/resources/videos/6-microsoft-copilot-studio-vulnerabilities-in-4-minutes)：官网研究视频入口；不由漏洞演示推断防护效果。
- [How Microsoft uses the OWASP Low-Code / No-Code Top 10](https://zenity.io/resources/videos/how-microsoft-uses-the-owasp-low-code-no-code-top-10)：历史低代码治理资料，和当前 Agent 产品代际分开理解。
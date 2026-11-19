window.PRODUCT_RESEARCH = {
  "slug": "zenity",
  "name": "Zenity",
  "tagline": "在 Agent 做出行动时，理解并约束它。",
  "lead": "围绕 Surface、Enforce、Protect，展开资产可见性、身份、MCP、安全边界与 AI 检测响应。",
  "channel": "https://www.youtube.com/@zenitysecurity/videos",
  "updated": "2026-11-19",
  "flow": [
    [
      "SURFACE",
      "发现与评估",
      "Agent、配置与可利用性"
    ],
    [
      "IDENTITY",
      "身份上下文",
      "负责人、授权与委托"
    ],
    [
      "ENFORCE",
      "行动约束",
      "策略与工具调用"
    ],
    [
      "PROTECT",
      "检测与响应",
      "行为链与处置证据"
    ]
  ],
  "sources": {
    "sandboxes": {
      "title": "Zenity for Sandboxes 产品公告 · 2026-11-18",
      "url": "https://zenity.io/blog/introducing-zenity-for-sandboxes"
    },
    "platform": {
      "title": "平台三层结构",
      "url": "https://zenity.io/platform"
    },
    "observe": {
      "title": "AI Observability",
      "url": "https://zenity.io/platform/ai-observability"
    },
    "bounds": {
      "title": "Runtime Boundaries",
      "url": "https://zenity.io/platform/runtime-boundaries"
    },
    "mcp": {
      "title": "MCP Security",
      "url": "https://zenity.io/platform/mcp-security"
    },
    "identity": {
      "title": "Agentic Identity",
      "url": "https://zenity.io/platform/agentic-identity-and-access-management"
    },
    "aidr": {
      "title": "AI Detection and Response",
      "url": "https://zenity.io/platform/ai-detection-and-response"
    },
    "videos": {
      "title": "官方视频资料",
      "url": "https://zenity.io/resources/videos"
    },
    "labs": {
      "title": "Zenity Labs",
      "url": "https://labs.zenity.io/"
    },
    "demo": {
      "title": "申请产品演示",
      "url": "https://zenity.io/book-a-demo"
    },
    "arise": {
      "title": "SACR ARISE 框架",
      "url": "https://softwareanalyst.substack.com/p/arise-agentic-runtime-identity-security"
    }
  },
  "sections": [
    {
      "title": "沙箱安全：把任务授权同实际执行关联",
      "label": "2026-11-19 修订 · 厂商公告解读",
      "paragraphs": [
        "Zenity 于 11 月 18 日介绍 Zenity for Sandboxes。AISPM 增加沙箱、模板及其凭据和策略关联；Boundaries 按厂商描述把任务目标和输入来源同沙箱内部的文件、进程与网络活动结合；AIDR 用这些信号帮助调查实际发生了什么。底层内核、虚拟机与隔离仍由沙箱平台负责。",
        "厂商提出从引导、限制到冻结、重建的不同响应级别。实际验收应逐个记录哪些动作需要审批，冻结时是否保留证据，限制网络与撤销凭据是否同时生效，以及重建前后的日志和策略是否可核对。",
        "公告列举 OpenShell、E2B、Daytona 和 Modal。不同平台开放的控制接口、默认态、许可证和租户上线节奏未核实；目前不能从产品示意推断各平台都支持相同级别的防护。"
      ],
      "sources": ["sandboxes"]
    },
    {
      "title": "产品定位：治理 Agent 的决策与行动",
      "label": "官方材料解读",
      "paragraphs": [
        "Zenity 当前平台页以 Surface、Enforce、Protect 三层组织能力：先理解资产和暴露，再对行动实施约束，随后检测并响应异常。覆盖方向包括 SaaS 内嵌 Agent、自建云端 Agent 和终端上的个人或编码工具。",
        "产品命名会随版本演进，因此不能直接用旧的低代码安全资料推断当前控制范围。本专题以当前官网为主要依据，并把历史研究视频保留为威胁背景资料，而不是当作新版本控制台说明。"
      ],
      "sources": [
        "platform"
      ]
    },
    {
      "title": "资产与可观测性：从清单走向行动关系",
      "label": "官方材料与分析",
      "paragraphs": [
        "AI Observability 和平台介绍强调持续发现与清点 Agent，关联其接触的数据及运行环境。清单的价值在于说明某个 Agent 属于谁、能访问什么、依赖哪些工具，以及实际活动发生在哪里。",
        "需要核查自动发现来源及盲区，例如未登记的本地工具、共用身份与服务端连接。观察到平台中的一个 Agent，并不自动代表能在全部运行环境对其执行强制控制；可见性与执行能力应在每个接入方式下分别记录。"
      ],
      "sources": [
        "observe",
        "platform"
      ]
    },
    {
      "title": "Boundaries：策略的编写、预览与生效",
      "label": "官方材料解读",
      "paragraphs": [
        "Runtime Boundaries 页面描述预制规则、自然语言辅助生成策略、冲突检测，以及生效前预览命中情况。它强调利用多步骤上下文，判断一个单独看似正常的动作在整条行为链中是否危险。",
        "多平台规则一致执行是厂商宣称，现场应选两种环境核对相同规则的覆盖及差异。还要检查默认规则如何修改、哪个主体有发布权、策略版本如何审计，以及出现误拦截时怎样恢复业务。"
      ],
      "sources": [
        "bounds"
      ]
    },
    {
      "title": "MCP：统一入口、工具上下文和调用治理",
      "label": "官方材料解读",
      "paragraphs": [
        "MCP 产品页描述导入或发现服务器、查看工具与调用主体，并根据实时上下文允许、修改或阻止调用；接入方式中提到发布服务器和注册统一网关地址。页面关注工具投毒、工具变更、影子服务器、过度授权和凭据扩散。",
        "对已有 Agent 接入统一网关后，应实际测试直连旧地址、备用客户端、长连接、工具列表变化和失败重试。只有不能绕过真实控制路径时，统一视图才构成强制边界；这些旁路测试是本项目建议，并非已经验证的产品结果。"
      ],
      "sources": [
        "mcp"
      ]
    },
    {
      "title": "身份：合法权限与合适行为之间的差距",
      "label": "官方材料解读",
      "paragraphs": [
        "身份产品页把 Okta、Microsoft Entra 等既有身份系统作为基础信号，再结合非人类身份、活动和所访问资源。其关注点是已获授权的 Agent 是否在当前任务中执行了适当动作，而非单独替换企业身份提供方。",
        "采购时应问清“谁”包括应用所有者、当前用户、代理服务账号还是委托链中的主体。共享令牌、硬编码秘密和用户离职后遗留连接需要不同处置；一张关系图不能单独证明已经实施最小权限。"
      ],
      "sources": [
        "identity"
      ]
    },
    {
      "title": "AIDR：把事件读成连续的行为链",
      "label": "官方材料解读",
      "paragraphs": [
        "AIDR 产品说明强调结合工具调用、检索与后续行动识别提示注入、异常行为及敏感数据风险，并使用 OWASP 和 MITRE ATLAS 组织威胁说明。重点是识别单个步骤之间的关联，而不是只检查某一条输入。",
        "实际验证应分别确认采集、检测、告警、阻断和处置发生的时点。有些部署可能依靠平台事件而非代理同步调用，延迟与可用动作会不同。不能把所有运行时能力一律记为“行动前阻止”。"
      ],
      "sources": [
        "aidr"
      ]
    },
    {
      "title": "跨平台覆盖：同一个名称不代表同一接入深度",
      "label": "研究分析",
      "paragraphs": [
        "官网列出 Copilot Studio、Agentforce、Bedrock、Vertex、ChatGPT Enterprise、Claude Enterprise 等生态。应以具体平台和版本核实发现、配置评估、读取步骤日志及强制执行的支持矩阵。",
        "对每个平台，要求说明所需租户授权、连接器、SDK、网关或终端组件，以及接入变更量与故障模式。将“支持”拆成阶段，可以防止把一处完整保护外推为所有平台一致覆盖。"
      ],
      "sources": [
        "platform",
        "mcp"
      ]
    },
    {
      "title": "研究视频与产品演示：两类证据各自使用",
      "label": "资料阅读建议",
      "paragraphs": [
        "Zenity Labs 发布攻击与研究材料，官方频道也收录大会演讲和访谈。它们有助于理解威胁模式、研究深度与设计问题，但展示某个平台可被攻击，不等于 Zenity 在同一平台所有部署中都能阻止该攻击。",
        "本页按产品、研究与行业访谈分别整理媒体。除 uMV5icICnwo 已逐段核对关键画面并形成精读笔记外，其余仅核实标题、时长、链接及公开介绍。该片原标题涉及 Shadow AI，实际展示恶意 MCP 与记忆投毒攻击链，未展示产品防护效果。历史 Copilot 和低代码资料也标出用途，避免混淆产品代际。"
      ],
      "sources": [
        "videos",
        "labs"
      ]
    },
    {
      "title": "与 ARISE 的关系：可用于提问，不作为认证",
      "label": "研究分析",
      "paragraphs": [
        "ARISE 提供在行动完成前结合身份、委托、工具与数据判断的分析框架，适合用来检查 Zenity 所强调的控制。它不是对产品已经达到某个等级的普遍认证。",
        "建议以框架组织证据：同一动作的身份、上下文、规则、决策、执行和结果能否重建？在上下文不足时会请求审批、拒绝还是继续？一项能力只有在真实接入路径上验证后，才应计入已覆盖。"
      ],
      "sources": [
        "arise"
      ]
    },
    {
      "title": "部署、数据处理、价格与未知事项",
      "label": "待确认事项",
      "paragraphs": [
        "本次未取得公开价目表、统一计费口径、完整私有化支持矩阵及数据地域承诺。不同生态的接入权限、模型辅助判断的处理位置、日志中的提示与响应如何脱敏，均需在安全评估中确认。",
        "也应询问延迟、可用性、旁路和故障默认行为，是否支持分阶段只观察后执行，历史保留与导出，以及终止服务后撤销授权的步骤。公开列出企业平台名称不等于这些事项已得到解答。"
      ],
      "sources": [
        "demo",
        "platform"
      ]
    },
    {
      "title": "Demo 提问与本项目的验证重点",
      "label": "验证建议",
      "paragraphs": [
        "要求同一账号在两项任务中执行相同工具：一项业务授权允许，另一项目的越界。检查系统能否使用任务和数据范围判断，并证明拒绝发生在副作用之前。再测试读取敏感信息后尝试外送的跨步骤链。",
        "围绕 MCP 直连、审批后改参数、规则冲突、凭据到期、负责人禁用及监控服务不可用逐项检查。对本项目最有启示的是模型外可执行策略、任务身份与审计关联；对意图的模型分析应与硬约束职责分开。"
      ],
      "sources": [
        "bounds",
        "mcp",
        "identity"
      ]
    }
  ],
  "videos": [
    {
      "id": "uMV5icICnwo",
      "title": "Shadow AI Discovery & Risk Assessment",
      "zh": "恶意 MCP：数据外传、记忆投毒与业务字段破坏",
      "url": "https://www.youtube.com/watch?v=uMV5icICnwo",
      "duration": "2:10（播放器）",
      "category": "攻击链与威胁研究",
      "note": "已逐段核对关键画面：共享 MCP 合规工具外传 CFO 与网站会话，将恶意要求写成长期记忆，随后 Salesforce 线索出现密文。原标题与实际内容不符；未展示 Zenity 检测或阻断。",
      "format": "YouTube 视频",
      "verified": "关键画面与烧录说明已逐段精读；未取得完整语音转写",
      "order": 1,
      "analysisUrl": "zenity-video-umv5.html"
    },
    {
      "id": "OnZGqeBYGIU",
      "title": "Zenity for ChatGPT Enterprise: Secure, Govern, & Accelerate AI Adoption",
      "zh": "Zenity for ChatGPT Enterprise: Secure, Govern, & Accelerate AI Adoption",
      "url": "https://www.youtube.com/watch?v=OnZGqeBYGIU",
      "duration": "31:30",
      "category": "产品与治理演示",
      "note": "核对具体产品界面和控制阶段；标题与时长已核实，未完整观看。",
      "format": "YouTube 视频",
      "verified": "官方频道标题、时长与直链已核实；未完整观看",
      "order": 2
    },
    {
      "id": "m2bAi8EheTg",
      "title": "Red Teaming the Red Team: A Comparative Study of Autonomous AI Security Agents | Vivek Vinod Sharma",
      "zh": "Red Teaming the Red Team: A Comparative Study of Autonomous AI Security Agents | Vivek Vinod Sharma",
      "url": "https://www.youtube.com/watch?v=m2bAi8EheTg",
      "duration": "12:49",
      "category": "安全研究与技术演讲",
      "note": "威胁研究材料可用于理解测试场景，不等同于产品已能阻止所有同类攻击。",
      "format": "YouTube 视频",
      "verified": "官方频道标题、时长与直链已核实；未完整观看",
      "order": 3
    },
    {
      "id": "wTUL6JHbMiY",
      "title": "PromptPwnd: Prompt Injection Vulnerabilities in GitHub Actions Using AI Agents | Rein Daelman",
      "zh": "PromptPwnd: Prompt Injection Vulnerabilities in GitHub Actions Using AI Agents | Rein Daelman",
      "url": "https://www.youtube.com/watch?v=wTUL6JHbMiY",
      "duration": "29:49",
      "category": "安全研究与技术演讲",
      "note": "威胁研究材料可用于理解测试场景，不等同于产品已能阻止所有同类攻击。",
      "format": "YouTube 视频",
      "verified": "官方频道标题、时长与直链已核实；未完整观看",
      "order": 4
    },
    {
      "id": "yxKiGPB2UJA",
      "title": "Verifiable Agentic Identity: Securing AI Supply Chains with SBOM and Provenance | Aamiruddin Syed",
      "zh": "Verifiable Agentic Identity: Securing AI Supply Chains with SBOM and Provenance | Aamiruddin Syed",
      "url": "https://www.youtube.com/watch?v=yxKiGPB2UJA",
      "duration": "16:36",
      "category": "安全研究与技术演讲",
      "note": "威胁研究材料可用于理解测试场景，不等同于产品已能阻止所有同类攻击。",
      "format": "YouTube 视频",
      "verified": "官方频道标题、时长与直链已核实；未完整观看",
      "order": 5
    },
    {
      "id": "9TMvep-1gwQ",
      "title": "AgentForger: ChatGPT Workspace Agents Vulnerability - The insider steals secrets and impersonates",
      "zh": "AgentForger: ChatGPT Workspace Agents Vulnerability - The insider steals secrets and impersonates",
      "url": "https://www.youtube.com/watch?v=9TMvep-1gwQ",
      "duration": "1:16",
      "category": "安全研究与技术演讲",
      "note": "威胁研究材料可用于理解测试场景，不等同于产品已能阻止所有同类攻击。",
      "format": "YouTube 视频",
      "verified": "官方频道标题、时长与直链已核实；未完整观看",
      "order": 6
    },
    {
      "id": "9aeyh1jclQ0",
      "title": "AgentForger: ChatGPT Workspace Agents Vulnerability - One link creates an autonomous insider Part 1",
      "zh": "AgentForger: ChatGPT Workspace Agents Vulnerability - One link creates an autonomous insider Part 1",
      "url": "https://www.youtube.com/watch?v=9aeyh1jclQ0",
      "duration": "1:58",
      "category": "安全研究与技术演讲",
      "note": "威胁研究材料可用于理解测试场景，不等同于产品已能阻止所有同类攻击。",
      "format": "YouTube 视频",
      "verified": "官方频道标题、时长与直链已核实；未完整观看",
      "order": 7
    },
    {
      "id": "tJV6tfiK-5g",
      "title": "PleaseFix: PerplexedBrowser - File System Attack",
      "zh": "PleaseFix: PerplexedBrowser - File System Attack",
      "url": "https://www.youtube.com/watch?v=tJV6tfiK-5g",
      "duration": "1:43",
      "category": "安全研究与技术演讲",
      "note": "威胁研究材料可用于理解测试场景，不等同于产品已能阻止所有同类攻击。",
      "format": "YouTube 视频",
      "verified": "官方频道标题、时长与直链已核实；未完整观看",
      "order": 8
    },
    {
      "id": "K51XvfxwC28",
      "title": "PleaseFix: PerplexedBrowser - 1Password Account Takeover",
      "zh": "PleaseFix: PerplexedBrowser - 1Password Account Takeover",
      "url": "https://www.youtube.com/watch?v=K51XvfxwC28",
      "duration": "2:01",
      "category": "安全研究与技术演讲",
      "note": "威胁研究材料可用于理解测试场景，不等同于产品已能阻止所有同类攻击。",
      "format": "YouTube 视频",
      "verified": "官方频道标题、时长与直链已核实；未完整观看",
      "order": 9
    },
    {
      "id": "iQvNKnEbsbY",
      "title": "OpenClaw or OpenDoor? | Part 4",
      "zh": "OpenClaw or OpenDoor? | Part 4",
      "url": "https://www.youtube.com/watch?v=iQvNKnEbsbY",
      "duration": "5:23",
      "category": "安全研究与技术演讲",
      "note": "威胁研究材料可用于理解测试场景，不等同于产品已能阻止所有同类攻击。",
      "format": "YouTube 视频",
      "verified": "官方频道标题、时长与直链已核实；未完整观看",
      "order": 10
    },
    {
      "id": "jvlbhm2uSJ8",
      "title": "OpenClaw or OpenDoor? | Part 1",
      "zh": "OpenClaw or OpenDoor? | Part 1",
      "url": "https://www.youtube.com/watch?v=jvlbhm2uSJ8",
      "duration": "1:21",
      "category": "安全研究与技术演讲",
      "note": "威胁研究材料可用于理解测试场景，不等同于产品已能阻止所有同类攻击。",
      "format": "YouTube 视频",
      "verified": "官方频道标题、时长与直链已核实；未完整观看",
      "order": 11
    },
    {
      "id": "aBrR8o7i__k",
      "title": "OpenClaw or OpenDoor? | Part 2",
      "zh": "OpenClaw or OpenDoor? | Part 2",
      "url": "https://www.youtube.com/watch?v=aBrR8o7i__k",
      "duration": "1:05",
      "category": "安全研究与技术演讲",
      "note": "威胁研究材料可用于理解测试场景，不等同于产品已能阻止所有同类攻击。",
      "format": "YouTube 视频",
      "verified": "官方频道标题、时长与直链已核实；未完整观看",
      "order": 12
    },
    {
      "id": "0DrMzQOawMw",
      "title": "OpenClaw or OpenDoor | Part 3",
      "zh": "OpenClaw or OpenDoor | Part 3",
      "url": "https://www.youtube.com/watch?v=0DrMzQOawMw",
      "duration": "1:25",
      "category": "安全研究与技术演讲",
      "note": "威胁研究材料可用于理解测试场景，不等同于产品已能阻止所有同类攻击。",
      "format": "YouTube 视频",
      "verified": "官方频道标题、时长与直链已核实；未完整观看",
      "order": 13
    },
    {
      "id": "lFOjCf-cQfY",
      "title": "Building, Governing, and Scaling AI Agents Across the Microsoft Ecosystem in Financial Services",
      "zh": "Building, Governing, and Scaling AI Agents Across the Microsoft Ecosystem in Financial Services",
      "url": "https://www.youtube.com/watch?v=lFOjCf-cQfY",
      "duration": "43:24",
      "category": "安全研究与技术演讲",
      "note": "威胁研究材料可用于理解测试场景，不等同于产品已能阻止所有同类攻击。",
      "format": "YouTube 视频",
      "verified": "官方频道标题、时长与直链已核实；未完整观看",
      "order": 14
    },
    {
      "id": "bTuPxPl6CJ8",
      "title": "X-Ray for Agents: Observability & Safe Tooling for MCP | Jiquan Ngiam",
      "zh": "X-Ray for Agents: Observability & Safe Tooling for MCP | Jiquan Ngiam",
      "url": "https://www.youtube.com/watch?v=bTuPxPl6CJ8",
      "duration": "29:33",
      "category": "安全研究与技术演讲",
      "note": "威胁研究材料可用于理解测试场景，不等同于产品已能阻止所有同类攻击。",
      "format": "YouTube 视频",
      "verified": "官方频道标题、时长与直链已核实；未完整观看",
      "order": 15
    },
    {
      "id": "_7JzK-_-eTo",
      "title": "Ignore Previous Instructions: Embracing AI Red Teaming | David Campbell",
      "zh": "Ignore Previous Instructions: Embracing AI Red Teaming | David Campbell",
      "url": "https://www.youtube.com/watch?v=_7JzK-_-eTo",
      "duration": "31:42",
      "category": "安全研究与技术演讲",
      "note": "威胁研究材料可用于理解测试场景，不等同于产品已能阻止所有同类攻击。",
      "format": "YouTube 视频",
      "verified": "官方频道标题、时长与直链已核实；未完整观看",
      "order": 16
    },
    {
      "id": "JNHpZUpeOCg",
      "title": "AgentFlayer: ChatGPT Connectors 0click Exfiltration Attack",
      "zh": "AgentFlayer: ChatGPT Connectors 0click Exfiltration Attack",
      "url": "https://www.youtube.com/watch?v=JNHpZUpeOCg",
      "duration": "1:35",
      "category": "安全研究与技术演讲",
      "note": "威胁研究材料可用于理解测试场景，不等同于产品已能阻止所有同类攻击。",
      "format": "YouTube 视频",
      "verified": "官方频道标题、时长与直链已核实；未完整观看",
      "order": 17
    },
    {
      "id": "vOnwIbS998U",
      "title": "We Hacked Copilot Studio: The AI Agent Risk Hiding in Your Environment",
      "zh": "We Hacked Copilot Studio: The AI Agent Risk Hiding in Your Environment",
      "url": "https://www.youtube.com/watch?v=vOnwIbS998U",
      "duration": "2:08",
      "category": "安全研究与技术演讲",
      "note": "威胁研究材料可用于理解测试场景，不等同于产品已能阻止所有同类攻击。",
      "format": "YouTube 视频",
      "verified": "官方频道标题、时长与直链已核实；未完整观看",
      "order": 18
    }
  ],
  "tours": [
    {
      "title": "Living off Microsoft Copilot: BlackHat 2024",
      "url": "https://zenity.io/resources/videos/living-off-microsoft-copilot-blackhat-2024",
      "note": "历史安全研究视频；用于威胁背景，不视为当前产品操作演示。"
    },
    {
      "title": "6 Microsoft Copilot Studio Vulnerabilities in 4 Minutes",
      "url": "https://zenity.io/resources/videos/6-microsoft-copilot-studio-vulnerabilities-in-4-minutes",
      "note": "官网研究视频入口；不由漏洞演示推断防护效果。"
    },
    {
      "title": "How Microsoft uses the OWASP Low-Code / No-Code Top 10",
      "url": "https://zenity.io/resources/videos/how-microsoft-uses-the-owasp-low-code-no-code-top-10",
      "note": "历史低代码治理资料，和当前 Agent 产品代际分开理解。"
    }
  ]
};

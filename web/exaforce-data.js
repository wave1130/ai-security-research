window.PRODUCT_RESEARCH = {
  "slug": "exaforce",
  "name": "Exaforce",
  "tagline": "从安全数据，到有证据的调查与响应。",
  "lead": "围绕Agentic SOC、原生Exabots与新增ExaU，研究数据、持久任务、协作、记忆及授权响应边界。",
  "channel": "https://www.youtube.com/@ExaforceAI/videos",
  "updated": "2026-11-17",
  "flow": [
    [
      "DATA",
      "关联数据",
      "日志、配置与身份"
    ],
    [
      "DETECT / TRIAGE",
      "检测与分诊",
      "聚合信号与证据"
    ],
    [
      "INVESTIGATE",
      "调查",
      "上下文与假设核验"
    ],
    [
      "RESPOND",
      "响应",
      "授权执行与结果验证"
    ]
  ],
  "sources": {
    "platform": {
      "title": "平台概述",
      "url": "https://www.exaforce.com/platform"
    },
    "bots": {
      "title": "Exabots产品入口",
      "url": "https://www.exaforce.com/exabots/"
    },
    "data": {
      "title": "数据平台",
      "url": "https://www.exaforce.com/platform/data-platform"
    },
    "models": {
      "title": "多模型 AI",
      "url": "https://www.exaforce.com/platform/multi-model-ai"
    },
    "respond": {
      "title": "响应产品页",
      "url": "https://www.exaforce.com/platform/exabot-respond"
    },
    "integrations": {
      "title": "集成目录",
      "url": "https://www.exaforce.com/platform/integrations"
    },
    "ai": {
      "title": "AI 与 Agent 安全",
      "url": "https://www.exaforce.com/solutions/ai-security"
    },
    "tours": {
      "title": "官方交互式产品导览",
      "url": "https://www.exaforce.com/product-tours"
    },
    "info": {
      "title": "官方产品与定价说明",
      "url": "https://www.exaforce.com/ai-info"
    },
    "report": {
      "title": "SACR AI SOC 资料",
      "url": "https://www.exaforce.com/resources/sacr-ai-soc-report-2026"
    },
    "exau": {
      "title": "ExaU 11月16日介绍",
      "url": "https://www.exaforce.com/blogs/introducing-exau"
    }
  },
  "sections": [
    {
      "title": "定位与交付模式：平台自用，或由 MDR 团队运营",
      "label": "官方材料解读",
      "paragraphs": [
        "Exaforce 把数据平台、多模型分析和安全运营智能体结合起来，覆盖检测、分诊、调查与响应。公开材料提供企业自己运营平台以及由 Exaforce 的分析师和 Exabots 共同运营 MDR 两种方式。两种模式使用相同产品方向，但服务责任和客户参与程度需要分别确认。",
        "比较方案时先明确目标：是改善现有 SOC 的调查瓶颈、接管部分运营，还是迁移 SIEM。三者涉及的数据成本、权限、值守和交接机制不同。将其采购成一个“AI 分析师”容易遗漏集成和长期运营投入。"
      ],
      "sources": [
        "platform",
        "info"
      ]
    },
    {
      "title": "四类 Exabots：把自动化能力按角色拆开",
      "label": "官方材料解读",
      "paragraphs": [
        "Detect 面向检测，Triage 面向告警分诊，Investigate 面向调查和威胁狩猎，Respond 面向处置。官网强调四种角色共享已关联的数据视图，并支持自然语言调查、内置响应流程、审批和审计。具体效果数字是厂商主张，不是本资料库的实测结论。",
        "验收时应为每种角色单独定义输出：检测需要有原始事件，分诊需要解释降噪理由，调查需要关联证据和不确定性，响应需要权限、审批及目标系统回执。一个生成完整报告的演示，不自动证明四个阶段都在真实运行。"
      ],
      "sources": [
        "bots"
      ]
    },
    {
      "title": "数据底座：关联数据与原始数据的分工",
      "label": "官方架构解读",
      "paragraphs": [
        "数据平台页描述接入云事件、API 活动和行为遥测，再做标准化、丰富与关联；查询关键数据保存在内存体系，完整原始数据进入数据湖。该页提及 90 天关联数据的快速查询，实际保留范围和收费应以部署配置确认。",
        "真正影响调查质量的不只是存储速度，还包括身份是否能跨数据源合并、事件时间是否一致、配置快照是否能还原事发状态，以及迟到数据怎样影响已经关闭的结论。建议用缺失字段、迟到事件和同名身份测试数据处理。"
      ],
      "sources": [
        "data"
      ]
    },
    {
      "title": "多模型 AI：语义、行为和知识各自负责什么",
      "label": "官方架构解读",
      "paragraphs": [
        "官网将语义模型用于实体与关系，行为模型用于基线和异常评分，知识模型用于结合技术知识、业务规则和历史结果进行推理。它试图通过结构化事实与计算结果减少直接让语言模型猜测原始日志的问题。",
        "厂商使用“确定性”和“无幻觉”等较强表述。现场评估仍应检查重复运行是否一致、证据缺失时是否明确说明、异常分数是否可复核，以及语言结论能否指回原事件。架构分层可以降低风险，但不能作为普遍正确性的证明。"
      ],
      "sources": [
        "models"
      ]
    },
    {
      "title": "调查工作流：从自然语言问题回到原始证据",
      "label": "研究分析",
      "paragraphs": [
        "自然语言入口可以降低查询门槛，但应该允许分析师继续核查实体、时间线、关联活动和原始日志。重点不在回答是否流畅，而在结论是否能被另外一个人复现，以及系统能否区分事实、假设和未知。",
        "建议准备几起历史案件：正常权限变更、真实身份滥用、数据源缺失和错误告警。要求系统先给证据，再解释判断，并展示排除某个假设的依据。不要只用提前清理好的成功样例衡量调查能力。"
      ],
      "sources": [
        "platform",
        "tours"
      ]
    },
    {
      "title": "响应闭环：审批与真正的目标状态",
      "label": "官方材料与验证建议",
      "paragraphs": [
        "Respond 产品页和产品导览把自动处置、人工参与及审计作为能力方向。需要进一步核对每种动作的执行账户、参数范围、审批条件和失败处理；某个集成能够读取事件，不意味着它也能撤销会话或修改权限。",
        "以测试账号的会话处置为例，应保留请求、审批、执行和复查四段记录。处置失败、权限不足、重复请求和超时都需要明确状态；只有源系统确认改变后，才能把案件记为已修复。"
      ],
      "sources": [
        "respond",
        "tours"
      ]
    },
    {
      "title": "集成：数据输入、调查查询与控制输出要分开",
      "label": "官方集成说明与分析",
      "paragraphs": [
        "官方目录列出 AWS、GCP、Entra ID、CrowdStrike、Jira 等不同类别集成，也包含按需查询数据的连接。目录中的描述有的是接入日志、有的是补充情报，有的提供控制或通知，不能用一个集成数量概括深度。",
        "建议建立一张现场支持表：每个系统读取哪些对象、延迟多少、需要什么授权、支持哪些写入动作、是否能够验证结果。接入一个低权限只读源和一个受控响应目标，就能较快检查其责任边界是否清楚。"
      ],
      "sources": [
        "integrations"
      ]
    },
    {
      "title": "AI 安全扩展：把 Agent 放进 SOC 上下文",
      "label": "官方材料解读",
      "paragraphs": [
        "AI 安全页面宣称以无专属 Agent 的方式提供运行时可见性和控制，将 AI 应用、工具与 MCP 活动关联到用户、设备及身份环境。当前官网导览包含 AI 聊天中的秘密暴露和影子 AI 两类场景。",
        "这里的“agentless”应核实所依赖的既有终端、云或身份记录，不宜理解为无需任何遥测接入。发现聊天中秘密、检测到异常进程、终止 Agent，以及在副作用前阻断工具调用，是不同能力，应分别验证。"
      ],
      "sources": [
        "ai",
        "tours"
      ]
    },
    {
      "title": "公开视频与交互导览怎么配合看",
      "label": "资料阅读建议",
      "paragraphs": [
        "先看 Agentic AI SOC 平台短片，再看 CrowdStrike Demo、调查与分诊视频；随后用官网 Detect、Triage、Investigate、Respond 导览按角色核对工作流。本地还收录日志采集与 Fleet 配置视频，适合进一步观察接入过程。",
        "频道视频的标题、时长和直链已核实，未完成逐帧或字幕审查。交互式导览也属于厂商展示环境，不能替代使用本企业数据进行测试；研究提示与视频真实演示内容在本页分开表达。"
      ],
      "sources": [
        "tours"
      ]
    },
    {
      "title": "部署、权限、费用与暂未确认的细节",
      "label": "待确认事项",
      "paragraphs": [
        "官方说明没有公开具体价格。仍需取得套餐、摄取量和存储费用、保留时长、数据地域、模型处理和分包安排，以及 MDR 升级、值守和处置的合同责任。公开采集器视频不等于平台支持完整本地或离线部署。",
        "还应索取 SSO／RBAC 的细粒度权限、客户侧账户、日志脱敏、模型使用数据边界、审计导出与退出迁移说明。不要由登录域名、合规徽标或集成清单直接推断这些细节。"
      ],
      "sources": [
        "info",
        "data"
      ]
    },
    {
      "title": "Demo 提问与本项目可借鉴的设计",
      "label": "研究与验证建议",
      "paragraphs": [
        "建议要求现场完成：接入与身份合并；有证据的分诊；明确未知的调查；带审批的响应；源系统结果验证。并追问事件丢失、模型不可用、连接器失权、动作重试时，案件状态如何变化。",
        "对当前 Agent 安全方案，最有参考价值的是把任务、身份、工具、设备和资源活动关联起来，再把处置结果带回证据链。是否采购自有数据平台或保留现有 SIEM，应根据真实接入和维护成本评估，不能只看模型演示速度。"
      ],
      "sources": [
        "models",
        "respond"
      ]
    },
    {
      "title": "2026-11-17修订：ExaU与长期运行的SOC Agent",
      "label": "官方公告解读与验证问题",
      "paragraphs": [
        "Exaforce介绍ExaU，允许团队创建有特定职责、持久记忆和定时任务的安全Agent，并在平台内协作。官方称其复用安全知识图谱与既有集成，动作进入审计日志；权限与审批约束响应及数据修改。",
        "公告区分学习经验、团队共享记录及个人偏好，并描述控制台交互和外部链接沙箱。这里是“用AI做安全运营”的产品扩展，不能直接等同“保护所有企业Agent”的覆盖扩大。",
        "编辑分析：持久化与协作使SOC工作从一次查询走向长期任务，也使错误指令、过期例外和记忆投毒能够跨会话传播。验收应测试共享Agent在不同用户下的权限交集、记忆修改与回滚、撤权后的定时任务，以及从外部内容到写入动作的审批链。需要将读数据、形成建议、批准动作和执行回执分开，而不是只比较助手回答速度。",
        "本轮读取产品介绍，未取得完整支持矩阵、许可与租户上线条件，亦未实测审批或沙箱逃逸。官方5月公告将总部描述为美国湾区，支持其美国创业公司属性；旧融资只用作背景核查，本条不新增融资金额。"
      ],
      "sources": [
        "exau"
      ]
    }
  ],
  "videos": [
    {
      "id": "9jYP-F8sFeA",
      "title": "Exaforce: The Agentic AI SOC Platform",
      "zh": "Exaforce: The Agentic AI SOC Platform",
      "url": "https://www.youtube.com/watch?v=9jYP-F8sFeA",
      "duration": "1:40",
      "category": "产品与能力演示",
      "note": "核对演示使用的输入、可追溯证据与执行结果；以下依据标题定位，非完整观看结论。",
      "format": "YouTube 视频",
      "verified": "官方频道标题、时长与直链已核实；未完整观看",
      "order": 1
    },
    {
      "id": "ixdFWOkLDKc",
      "title": "Exaforce CrowdStrike Demo Video",
      "zh": "Exaforce CrowdStrike Demo Video",
      "url": "https://www.youtube.com/watch?v=ixdFWOkLDKc",
      "duration": "12:21",
      "category": "产品与能力演示",
      "note": "核对演示使用的输入、可追溯证据与执行结果；以下依据标题定位，非完整观看结论。",
      "format": "YouTube 视频",
      "verified": "官方频道标题、时长与直链已核实；未完整观看",
      "order": 2
    },
    {
      "id": "yKQB-GSBOAQ",
      "title": "AI Agent Identities Overview with Exaforce",
      "zh": "AI Agent Identities Overview with Exaforce",
      "url": "https://www.youtube.com/watch?v=yKQB-GSBOAQ",
      "duration": "3:23",
      "category": "产品与能力演示",
      "note": "核对演示使用的输入、可追溯证据与执行结果；以下依据标题定位，非完整观看结论。",
      "format": "YouTube 视频",
      "verified": "官方频道标题、时长与直链已核实；未完整观看",
      "order": 3
    },
    {
      "id": "znm1a0PjXtg",
      "title": "AI Chat Monitoring Overview with Exaforce",
      "zh": "AI Chat Monitoring Overview with Exaforce",
      "url": "https://www.youtube.com/watch?v=znm1a0PjXtg",
      "duration": "3:35",
      "category": "产品与能力演示",
      "note": "核对演示使用的输入、可追溯证据与执行结果；以下依据标题定位，非完整观看结论。",
      "format": "YouTube 视频",
      "verified": "官方频道标题、时长与直链已核实；未完整观看",
      "order": 4
    },
    {
      "id": "qydWGJIvEG0",
      "title": "LLM API Usage Overview with Exaforce",
      "zh": "LLM API Usage Overview with Exaforce",
      "url": "https://www.youtube.com/watch?v=qydWGJIvEG0",
      "duration": "2:00",
      "category": "产品与能力演示",
      "note": "核对演示使用的输入、可追溯证据与执行结果；以下依据标题定位，非完整观看结论。",
      "format": "YouTube 视频",
      "verified": "官方频道标题、时长与直链已核实；未完整观看",
      "order": 5
    },
    {
      "id": "iKfx8JPTGzg",
      "title": "Exaforce on Why GenAI Alone Won't Fix Your SOC",
      "zh": "Exaforce on Why GenAI Alone Won't Fix Your SOC",
      "url": "https://www.youtube.com/watch?v=iKfx8JPTGzg",
      "duration": "8:50",
      "category": "架构与团队",
      "note": "关注角色分工、数据底座和模型边界，观点不直接作为产品效果证明。",
      "format": "YouTube 视频",
      "verified": "官方频道标题、时长与直链已核实；未完整观看",
      "order": 6
    },
    {
      "id": "gklDugKnkkI",
      "title": "Let Exaforce Carry Your AI SOC Burden",
      "zh": "Let Exaforce Carry Your AI SOC Burden",
      "url": "https://www.youtube.com/watch?v=gklDugKnkkI",
      "duration": "6:43",
      "category": "产品与能力演示",
      "note": "核对演示使用的输入、可追溯证据与执行结果；以下依据标题定位，非完整观看结论。",
      "format": "YouTube 视频",
      "verified": "官方频道标题、时长与直链已核实；未完整观看",
      "order": 7
    },
    {
      "id": "pl3drwjqGSY",
      "title": "We Stopped Training Our Team on SIEM Query Language",
      "zh": "We Stopped Training Our Team on SIEM Query Language",
      "url": "https://www.youtube.com/watch?v=pl3drwjqGSY",
      "duration": "0:50",
      "category": "产品与能力演示",
      "note": "核对演示使用的输入、可追溯证据与执行结果；以下依据标题定位，非完整观看结论。",
      "format": "YouTube 视频",
      "verified": "官方频道标题、时长与直链已核实；未完整观看",
      "order": 8
    },
    {
      "id": "FrltiwAVPiE",
      "title": "Jakub Pavlik - Co-Founder and Head of Engineering at Exaforce",
      "zh": "Jakub Pavlik - Co-Founder and Head of Engineering at Exaforce",
      "url": "https://www.youtube.com/watch?v=FrltiwAVPiE",
      "duration": "15:29",
      "category": "架构与团队",
      "note": "关注角色分工、数据底座和模型边界，观点不直接作为产品效果证明。",
      "format": "YouTube 视频",
      "verified": "官方频道标题、时长与直链已核实；未完整观看",
      "order": 9
    },
    {
      "id": "NCry79-4HEQ",
      "title": "Devesh Mittal - Co-Founder and Head of Engineering at Exaforce",
      "zh": "Devesh Mittal - Co-Founder and Head of Engineering at Exaforce",
      "url": "https://www.youtube.com/watch?v=NCry79-4HEQ",
      "duration": "17:58",
      "category": "架构与团队",
      "note": "关注角色分工、数据底座和模型边界，观点不直接作为产品效果证明。",
      "format": "YouTube 视频",
      "verified": "官方频道标题、时长与直链已核实；未完整观看",
      "order": 10
    },
    {
      "id": "qU4-2l2smgE",
      "title": "Marco Rodrigues - Co-founder and Head of Customer Engineering & Operations Lead at Exaforce",
      "zh": "Marco Rodrigues - Co-founder and Head of Customer Engineering & Operations Lead at Exaforce",
      "url": "https://www.youtube.com/watch?v=qU4-2l2smgE",
      "duration": "12:25",
      "category": "架构与团队",
      "note": "关注角色分工、数据底座和模型边界，观点不直接作为产品效果证明。",
      "format": "YouTube 视频",
      "verified": "官方频道标题、时长与直链已核实；未完整观看",
      "order": 11
    },
    {
      "id": "mzp81Kpxa0k",
      "title": "Ariful Huq - Co-Founder and Head of Product at Exaforce",
      "zh": "Ariful Huq - Co-Founder and Head of Product at Exaforce",
      "url": "https://www.youtube.com/watch?v=mzp81Kpxa0k",
      "duration": "17:27",
      "category": "架构与团队",
      "note": "关注角色分工、数据底座和模型边界，观点不直接作为产品效果证明。",
      "format": "YouTube 视频",
      "verified": "官方频道标题、时长与直链已核实；未完整观看",
      "order": 12
    },
    {
      "id": "aQBokHf4J5A",
      "title": "Exaforce On-Prem Log Collector: Full Setup and Configuration Walkthrough",
      "zh": "Exaforce On-Prem Log Collector: Full Setup and Configuration Walkthrough",
      "url": "https://www.youtube.com/watch?v=aQBokHf4J5A",
      "duration": "3:38",
      "category": "接入与工程",
      "note": "重点观察组件、凭据、接入步骤和故障处理；采集器不等于整个平台本地部署。",
      "format": "YouTube 视频",
      "verified": "官方频道标题、时长与直链已核实；未完整观看",
      "order": 13
    },
    {
      "id": "-x6cEC378_I",
      "title": "Exaforce Fleet Management: Full Setup and Configuration Walkthrough",
      "zh": "Exaforce Fleet Management: Full Setup and Configuration Walkthrough",
      "url": "https://www.youtube.com/watch?v=-x6cEC378_I",
      "duration": "3:38",
      "category": "接入与工程",
      "note": "重点观察组件、凭据、接入步骤和故障处理；采集器不等于整个平台本地部署。",
      "format": "YouTube 视频",
      "verified": "官方频道标题、时长与直链已核实；未完整观看",
      "order": 14
    },
    {
      "id": "Oqu5KCxq17Q",
      "title": "Guardant Health makes Exaforce its primary SIEM and MDR",
      "zh": "Guardant Health makes Exaforce its primary SIEM and MDR",
      "url": "https://www.youtube.com/watch?v=Oqu5KCxq17Q",
      "duration": "1:55",
      "category": "客户与运营",
      "note": "客户故事需结合环境与工作量理解，不能当作统一 SLA。",
      "format": "YouTube 视频",
      "verified": "官方频道标题、时长与直链已核实；未完整观看",
      "order": 15
    },
    {
      "id": "kEVRYWB9_VI",
      "title": "Meet Exaforce: AI Agent SOC From Detection to Response!",
      "zh": "Meet Exaforce: AI Agent SOC From Detection to Response!",
      "url": "https://www.youtube.com/watch?v=kEVRYWB9_VI",
      "duration": "2:17",
      "category": "产品与能力演示",
      "note": "核对演示使用的输入、可追溯证据与执行结果；以下依据标题定位，非完整观看结论。",
      "format": "YouTube 视频",
      "verified": "官方频道标题、时长与直链已核实；未完整观看",
      "order": 16
    },
    {
      "id": "QLPZMQbtoZk",
      "title": "Streamline how you triage SOC alerts with Exaforce",
      "zh": "Streamline how you triage SOC alerts with Exaforce",
      "url": "https://www.youtube.com/watch?v=QLPZMQbtoZk",
      "duration": "1:29",
      "category": "产品与能力演示",
      "note": "核对演示使用的输入、可追溯证据与执行结果；以下依据标题定位，非完整观看结论。",
      "format": "YouTube 视频",
      "verified": "官方频道标题、时长与直链已核实；未完整观看",
      "order": 17
    },
    {
      "id": "9bnI1qWMww8",
      "title": "Your GitHub Has No Rules. Here Is What Attackers Do With That.",
      "zh": "Your GitHub Has No Rules. Here Is What Attackers Do With That.",
      "url": "https://www.youtube.com/watch?v=9bnI1qWMww8",
      "duration": "12:30",
      "category": "调查与研究",
      "note": "观察调查问题、数据范围和证据如何关联，不将单一演示外推为完整防护覆盖。",
      "format": "YouTube 视频",
      "verified": "官方频道标题、时长与直链已核实；未完整观看",
      "order": 18
    },
    {
      "id": "7A1EhxZxr_k",
      "title": "Exaforce MCP: We Mapped Every GitHub Action With Claude",
      "zh": "Exaforce MCP: We Mapped Every GitHub Action With Claude",
      "url": "https://www.youtube.com/watch?v=7A1EhxZxr_k",
      "duration": "1:37",
      "category": "调查与研究",
      "note": "观察调查问题、数据范围和证据如何关联，不将单一演示外推为完整防护覆盖。",
      "format": "YouTube 视频",
      "verified": "官方频道标题、时长与直链已核实；未完整观看",
      "order": 19
    },
    {
      "id": "em7JyXIOMwg",
      "title": "Agentic AI Security: Decoding GlassWorm's Nested Payload",
      "zh": "Agentic AI Security: Decoding GlassWorm's Nested Payload",
      "url": "https://www.youtube.com/watch?v=em7JyXIOMwg",
      "duration": "11:00",
      "category": "调查与研究",
      "note": "观察调查问题、数据范围和证据如何关联，不将单一演示外推为完整防护覆盖。",
      "format": "YouTube 视频",
      "verified": "官方频道标题、时长与直链已核实；未完整观看",
      "order": 20
    },
    {
      "id": "iaKbQxuIXXI",
      "title": "Investigate and Threat Hunt in Minutes with Exaforce",
      "zh": "Investigate and Threat Hunt in Minutes with Exaforce",
      "url": "https://www.youtube.com/watch?v=iaKbQxuIXXI",
      "duration": "2:07",
      "category": "调查与研究",
      "note": "观察调查问题、数据范围和证据如何关联，不将单一演示外推为完整防护覆盖。",
      "format": "YouTube 视频",
      "verified": "官方频道标题、时长与直链已核实；未完整观看",
      "order": 21
    },
    {
      "id": "82eiTi2hVZE",
      "title": "Traditional MDR vs Vibe Hunting: A Detection Engineer's Honest Confession #MDR #vibehunting #soc",
      "zh": "Traditional MDR vs Vibe Hunting: A Detection Engineer's Honest Confession #MDR #vibehunting #soc",
      "url": "https://www.youtube.com/watch?v=82eiTi2hVZE",
      "duration": "13:28",
      "category": "调查与研究",
      "note": "观察调查问题、数据范围和证据如何关联，不将单一演示外推为完整防护覆盖。",
      "format": "YouTube 视频",
      "verified": "官方频道标题、时长与直链已核实；未完整观看",
      "order": 22
    },
    {
      "id": "ZpUR-SzcWHs",
      "title": "Your SOC is Missing The Vibes! #VibeHunting #vibecoding",
      "zh": "Your SOC is Missing The Vibes! #VibeHunting #vibecoding",
      "url": "https://www.youtube.com/watch?v=ZpUR-SzcWHs",
      "duration": "9:26",
      "category": "调查与研究",
      "note": "观察调查问题、数据范围和证据如何关联，不将单一演示外推为完整防护覆盖。",
      "format": "YouTube 视频",
      "verified": "官方频道标题、时长与直链已核实；未完整观看",
      "order": 23
    },
    {
      "id": "1NkZYCvZs_s",
      "title": "Most AI SOC Tools Miss 4 Critical Steps. Here's What They Get Wrong",
      "zh": "Most AI SOC Tools Miss 4 Critical Steps. Here's What They Get Wrong",
      "url": "https://www.youtube.com/watch?v=1NkZYCvZs_s",
      "duration": "3:31",
      "category": "产品与能力演示",
      "note": "核对演示使用的输入、可追溯证据与执行结果；以下依据标题定位，非完整观看结论。",
      "format": "YouTube 视频",
      "verified": "官方频道标题、时长与直链已核实；未完整观看",
      "order": 24
    }
  ],
  "tours": [
    {
      "title": "Detect / Triage / Investigate / Respond",
      "url": "https://www.exaforce.com/product-tours",
      "note": "同一官方导览中心的四类模块演示，按角色选择；不是四条独立录播视频。"
    },
    {
      "title": "AI Security：秘密暴露与 Shadow AI",
      "url": "https://www.exaforce.com/product-tours",
      "note": "两个 AI 安全导览场景，关注可见性、告警与响应时点。"
    },
    {
      "title": "MDR 与 SIEM Replacement",
      "url": "https://www.exaforce.com/product-tours",
      "note": "核对运营模式及迁移范围，演示不能代替服务合同。"
    }
  ]
};

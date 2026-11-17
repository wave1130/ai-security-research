window.INDUSTRY_REPORTS = [
  {
    "id": "cyera",
    "org": "Cyera / SACR",
    "kind": "分析师报告",
    "topic": "数据安全",
    "date": "2026-09",
    "title": "AI 时代的数据安全成熟度模型",
    "en": "The New Data Security Maturity Model for the AI Era",
    "url": "https://www.cyera.com/reports/sacr-the-new-data-security-maturity-model-for-the-ai-era",
    "status": "全文已归档 · 已有中文译稿",
    "summary": "用五级模型把数据发现、访问上下文、执行与修复串成可验证的风险降低闭环。",
    "points": [
      "从临时性可见性、基线发现、风险驱动策略对齐，走向修复运营化和受治理的自适应安全。",
      "同时评估技术、人员、流程、信息四个维度；部署工具不能直接证明成熟度。",
      "DSPM 提供事实层，DLP 提供执行路径；重点验证修复后的实际状态。"
    ],
    "question": "我们的发现能否分配到负责人，并证明修复后暴露确实下降？",
    "limit": "Cyera 赞助，SACR 保留编辑控制；封面 9 月，官网上架 10 月 16 日。",
    "priority": true,
    "sections": [
      {
        "title": "报告究竟在衡量什么",
        "label": "原文解读",
        "paragraphs": [
          "报告用“能够反复证明的结果”定义成熟度：知道敏感数据在哪里、谁或什么能够访问、哪些暴露最重要、修复怎样受治理，以及风险是否真正下降。它试图解决的是运营体系问题，而不只是数据发现或防泄漏工具的采购问题。",
          "模型要求在技术、人员、流程、信息四个相互依赖的维度提供证据。工具覆盖再广，如果数据负责人不明确、例外长期不关闭、修复后不验证，仍不能据此认定组织已达到较高等级。"
        ]
      },
      {
        "title": "五级路径：从资产清单到受治理的自适应控制",
        "label": "原文解读",
        "paragraphs": [
          "第 1 级是临时性可见性，目标是识别数据位置并核实清单；第 2 级是基线发现，要求发现与分类能够稳定重复；第 3 级是风险驱动的策略对齐，把敏感性、身份、访问和暴露用于排序与准确执行。",
          "第 4 级将修复运营化：发现必须有负责人、SLA、例外机制和执行后验证。第 5 级再加入受治理的自适应行动，自动化需要策略边界、解释、审计、必要时的撤销与持续验证。第 5 级不是把所有决策都交给模型。"
        ]
      },
      {
        "title": "为什么许多体系停在第 3 级",
        "label": "原文解读",
        "paragraphs": [
          "发现和执行分离时，DSPM 产生的是待处理清单，DLP 依赖的却可能仍是缺少上下文的静态规则。团队能够识别和排序问题，但跨安全、IT、业务的数据归属与修复流程没有闭合，工作就会在交接处积压。",
          "因此，报告将“关闭工单”与“风险降低”分开：前者是活动状态，后者需要验证资源权限、共享配置或数据暴露已经改变。对无法执行或无法验证的建议，不能仅因它来自智能体就计入自动修复成果。"
        ]
      },
      {
        "title": "架构关系：事实层、执行路径与信任层",
        "label": "原文解读",
        "paragraphs": [
          "DSPM 提供敏感性、位置、归属、权限、暴露和历史等事实基础。DLP、终端、SaaS、身份系统及工作流负责具体执行和修复，平台不必替换所有既有控制点，但必须改善决策质量与结果。",
          "在 Agent 场景中，判断还需要知道委托身份、业务目的、工具和拟执行动作。有效凭据并不能单独证明行动适当；信任层的任务是把这些上下文连接到当前决策，并留下可以追溯的证据。"
        ]
      },
      {
        "title": "如何用于当前 Agent 安全方案",
        "label": "研究分析",
        "paragraphs": [
          "建议先挑选一个敏感资源和一条业务工作流，建立数据、任务身份、工具调用和执行结果之间的关联。若一期只能发现越权行为，就明确作为发现能力验收，不提前宣称实现自动防护或高级成熟度。",
          "策略判断与实际执行之间还要检查参数变化、直接网络旁路和权限过期。报告提供的是组织成熟度方向，具体保护域、代理部署和失败处理方式，仍需由本项目的实际运行边界决定。"
        ]
      },
      {
        "title": "可以直接使用的验收与度量",
        "label": "验证建议",
        "paragraphs": [
          "跟踪暴露产生到发现、发现到分派、分派到经验证修复三段时间，并区分系统处理时延与人工等待。建立未解决高风险暴露数、过度访问率、按期到期例外比例和修复后验证比例的基线。",
          "选取一项可撤销修复，例如收敛测试资源的共享权限：记录执行前权限、策略依据、审批、动作回执及独立复查结果。最后使用原访问主体再次尝试访问，证明修复改变了实际结果，而不只是改变控制台状态。"
        ]
      }
    ],
    "readingScope": "原文正文与本项目分析",
    "wordCount": 1071,
    "noteUrl": "reading/01137040aa99.html",
    "translationUrl": "reading/cyera-translation.html"
  },
  {
    "id": "shadow-ai",
    "title": "影子 AI：从发现到数据与行动治理",
    "en": "Shadow AI: Discovery, Governance and Verifiable Controls",
    "org": "本项目 / Reco / Akto / Zenity / Cyera",
    "kind": "专题研究",
    "topic": "影子 AI",
    "date": "核实于 2026-11-03",
    "url": "https://www.reco.ai/ciso-guide-to-shadow-ai",
    "status": "12 章专题 · Reco 全文与官方文档已核对",
    "summary": "以六类使用场景、七种发现路径和八个验收场景，连接身份、数据、MCP、记忆与业务副作用。",
    "points": [
      "区分资产存在、实际使用、数据处理、授权、执行动作与控制结果。",
      "对比 Reco、Akto、Zenity、Cyera 的主要切入点和部署证据。",
      "包含指南审读、治理闭环、四周试点与 POC 矩阵。"
    ],
    "question": "发现一个 AI 后，能否证明它接触什么、继承什么权限，并在关键副作用前受到约束？",
    "limit": "综合研究与建议属于本项目；厂商能力来自官方描述，未独立部署测评。",
    "priority": true,
    "sections": [
      {
        "title": "影子 AI 的边界：未经批准的不只是一个网站",
        "label": "概念与研究分析",
        "paragraphs": [
          "本专题把影子 AI 定义为：组织未识别、未批准，或在批准范围之外使用的 AI 能力及其数据、身份和工具连接。判断单位需要包含使用方式：同一个 AI 产品，企业租户处理公开资料可能符合政策，个人账号处理客户数据则可能越界。产品名称本身不足以确定风险。",
          "传统影子 IT 主要追问“谁在使用未经批准的软件”。影子 AI 还要追问：业务数据是否进入模型、检索库或日志，个人账号是否连接了企业云盘，Agent 能否继承员工权限调用工具，以及软件更新后新增的 AI 功能是否进入原有审批范围。已有采购合同不自动覆盖后续启用的全部能力。",
          "“未登记”与“已经泄密”应分开记录。发现一个模型进程，只能证明它出现；访问 AI 域名，不足以证明敏感数据已发送。相反，一个已登记的 Agent 也可能因过度权限、恶意工具或记忆污染产生风险。影子 AI 是治理状态，Agent 攻击是威胁机制，两者相交但不等同。",
          "本专题的判断原则：以人员、设备、账号或租户、AI 能力、数据、授权和实际动作形成证据链。全文中的采购建议、场景划分与验收标准属于本项目分析。"
        ],
        "sourceLinks": [
          {
            "title": "Reco · CISO Guide to Shadow AI（17 页 PDF）",
            "url": "https://go.reco.ai/hubfs/Gated%20Assets/CISO%20Guide%20to%20Shadow%20AI.pdf"
          },
          {
            "title": "Akto Atlas · 产品概览",
            "url": "https://ai-security-docs.akto.io/akto-atlas-agentic-ai-security-for-employee-endpoints/overview"
          },
          {
            "title": "Zenity · AI Observability",
            "url": "https://zenity.io/platform/ai-observability"
          }
        ]
      },
      {
        "title": "发现技术对照：每一种信号能证明什么",
        "label": "方法与覆盖边界",
        "paragraphs": [
          "影子 AI 分布在网络、浏览器、终端、身份与云服务中，单一信号很难建立完整事实。下表给出一般技术机制的边界；它不是对所有厂商实现的统一断言。内容可见性取决于部署、授权、产品版本以及是否存在绕行路径。",
          "方法：DNS、代理与网络日志；能够提供的证据：到 AI 域名或地址的连接、时间、流量与部分主体信息；仍然缺少什么：仅有域名或 TLS 元数据时，看不到提示正文、账号与业务目的；直连和非企业网络可能漏采；验收重点：用受控请求验证主体关联、个人网络与替代出口的覆盖。",
          "方法：受管理浏览器与扩展；能够提供的证据：在支持页面中观察输入、上传、响应或账号状态；部分可执行前拦截；仍然缺少什么：不自动覆盖原生桌面、IDE、CLI；其他浏览器与扩展失效需另测；验收重点：覆盖浏览器和页面清单、无痕/未管理配置、失效时默认行为。",
          "方法：终端、EDR、MDM 与工具 hooks；能够提供的证据：本地工具、进程、用户、MCP 配置；特定 hook 可提供调用上下文；仍然缺少什么：安装发现、进程观测与内容检查是不同深度；EDR 接入不自动等于每次提示均可拦截；验收重点：支持工具和版本、hook 被移除、离线状态与绕过路径。",
          "方法：SSO、OAuth 与 SaaS 管理 API；能够提供的证据：企业身份登录、第三方授权、scope、租户设置与应用关系；仍然缺少什么：没有企业 SSO/OAuth 或不在可见租户中的使用可能缺少信号；日志也可能事后到达；验收重点：应用与授权发现时延、日志粒度、撤权执行与独立复查。",
          "方法：AI / MCP 网关与运行时集成；能够提供的证据：经过控制点的模型请求、工具、资源与策略决策；仍然缺少什么：未经过网关的请求、直连模型、间接网络外送和其他工具需要另行控制；验收重点：请求是否被强制经过控制点；拒绝是否发生在副作用之前。",
          "方法：云、容器与平台连接器；能够提供的证据：受支持环境中的 Agent、模型端点、服务身份和配置；仍然缺少什么：未接入账号、临时环境、隐藏工作流与动态工具仍需验证；验收重点：新资产发现时延、跨账号覆盖、删除与配置变更同步。",
          "方法：数据分类、权限图与 DLP；能够提供的证据：资源敏感性、过度访问、数据外送内容或暴露路径；仍然缺少什么：仅知道资源敏感，不代表已看见每次 Agent 行为；仅有调用日志也不代表已识别内容；验收重点：标签与未标记数据、权限实际可达性、外传拦截及修复结果。",
          "一个实用组合是：身份与 SaaS API 找连接，终端与云资产发现找执行者，浏览器或运行时集成找动作，数据分类找影响，再用业务系统结果确认是否发生副作用。来源之间应通过稳定标识关联，不能只凭相同产品名拼接。",
          "Akto 连接器文档提供了具体例子：Endpoint Shield 组合本地 MCP 发现、CLI/IDE hooks 与面向桌面应用的 System Proxy，但明确说明浏览器内 AI 使用不在这一连接器覆盖中，需要浏览器扩展。采购时应查看这一层说明，而不是只接受“全端点覆盖”的概述。"
        ],
        "sourceLinks": [
          {
            "title": "Akto Atlas · AI Discovery Connectors",
            "url": "https://ai-security-docs.akto.io/akto-atlas-agentic-ai-security-for-employee-endpoints/endpoints-discovery-agents"
          },
          {
            "title": "Reco · CISO Guide to Shadow AI（17 页 PDF）",
            "url": "https://go.reco.ai/hubfs/Gated%20Assets/CISO%20Guide%20to%20Shadow%20AI.pdf"
          },
          {
            "title": "Akto Atlas · Agentic AI Discovery",
            "url": "https://ai-security-docs.akto.io/akto-atlas-agentic-ai-security-for-employee-endpoints/ai-agent-activity"
          }
        ]
      },
      {
        "title": "四家厂商的切入点与待验证边界",
        "label": "官方描述与编辑比较",
        "paragraphs": [
          "下面按主要研究入口比较 Reco、Akto、Zenity 和 Cyera，便于安排后续验证。它不是排名，也不是声称四家只具备某一类能力。表中的产品信息来自官方页面或技术文档，均未在本项目企业环境中实际部署测评。",
          "厂商：Reco；主要观察入口：SaaS 应用、身份、OAuth 与应用之间的连接；公开材料提供了什么：当前 Shadow AI 页强调应用、AI 工具、Agent 及其数据访问关系；指南以 SaaS 治理与持续监控为主；现场必须验证：个人账号、非 SSO、本地模型和直接 API 使用怎样发现；哪些控制可在执行前发生。",
          "厂商：Akto；主要观察入口：Atlas 员工端；Argus 自建云端 Agent；公开材料提供了什么：文档拆分连接器、hooks、浏览器、资产与 traces；Argus 说明 CI/CD 评估、网关及运行时约束；现场必须验证：每种连接器的实际内容深度、拦截能力、旁路、版本限制与采集隐私。",
          "厂商：Zenity；主要观察入口：Agent 资产、权限、工具、数据接触与执行行为；公开材料提供了什么：AI Observability 页包含 SaaS、自建和本地 Agent，提及记忆更新、RAG 与工具调用；现场必须验证：每种平台的接入和控制点；观察与强制执行如何对应；研究攻击案例是否有防护对照。",
          "厂商：Cyera；主要观察入口：从敏感数据与访问关系出发的 Agent 安全；公开材料提供了什么：Agent Guardian 页描述资产和关联图、浏览器、数据访问、运行时控制与红队验证；现场必须验证：数据覆盖与准确性；个人端/本地路径如何接入；拦截和权限修复能否独立复核。",
          "选择顺序应取决于主要缺口：若不清楚谁给第三方 AI 授予了企业数据权限，先验证 SaaS 与身份连接；若主要风险在开发者工具和本地 MCP，先验证终端与 hooks；若 Agent 频繁调用内部系统，必须验证任务、工具和执行前控制；若缺乏数据敏感性和权限事实，则需补上数据层。",
          "这些能力也可能互补。关键是避免重复采购相同的资产清单，却仍没有人能够证明关键外送被阻止、污染记忆被清理或业务权限已收敛。"
        ],
        "sourceLinks": [
          {
            "title": "Reco · Shadow AI Discovery 当前产品页",
            "url": "https://www.reco.ai/use-cases/shadow-ai-discovery"
          },
          {
            "title": "Akto Atlas · 产品概览",
            "url": "https://ai-security-docs.akto.io/akto-atlas-agentic-ai-security-for-employee-endpoints/overview"
          },
          {
            "title": "Akto Argus · 自建 AI 产品概览",
            "url": "https://ai-security-docs.akto.io/akto-argus-agentic-ai-security-for-homegrown-ai/overview"
          },
          {
            "title": "Zenity · AI Observability",
            "url": "https://zenity.io/platform/ai-observability"
          },
          {
            "title": "Cyera · Agent Guardian",
            "url": "https://www.cyera.com/platform/agent-guardian"
          }
        ]
      },
      {
        "title": "治理闭环：从发现到可验证处置",
        "label": "本项目实施建议",
        "paragraphs": [
          "第一步是给业务可用的规则。明确允许的产品、账号与租户、数据类型和用途，建立快速申请与例外流程。规则要能回答“公开资料可否摘要”“客户数据可否上传”“能否连接云盘”“是否允许 Agent 批量写入”。批准一个品牌名称远远不够。",
          "第二步建立带覆盖范围的基线。接入身份与 SaaS、受管理终端、浏览器以及关键云环境，按人员、设备、服务身份与工具关系去重。每条发现记录保留来源、置信度、最后观测时间和负责人；将未接入范围清晰标出。",
          "第三步按真实暴露排优先级。先处理接触敏感数据且有广泛授权、外网出口或业务写入能力的对象；匿名账号和长期凭据应单独检查。风险排序既要反映潜在影响，也要反映证据强度，避免将一个未使用安装包与正在外送客户信息的 Agent 同等处理。",
          "第四步实施有针对性的控制。可以批准企业账号并替换个人连接，收敛 OAuth scope，隔离特定 MCP 能力，限制数据类型或外送目的地，在必要的写入前加入审批。每次审批应绑定实际动作和参数；不能用一次宽泛批准覆盖未来无限变化。",
          "第五步验证并持续复查。撤销授权后用原主体再次访问，阻断外送后查看接收端是否收到数据，清理记忆后重新开会话，修复字段后检查业务系统。工单完成只是流程状态，实际访问与业务结果才是控制证据。",
          "建议阶段：第 1 周 · 建立范围；交付物：AI 使用规则、批准清单、负责人、数据分类与覆盖清单；完成标准：业务知道如何申请；关键环境和未知范围均有记录。",
          "建议阶段：第 2 周 · 补齐发现；交付物：身份/SaaS/浏览器/终端/云信号的资产与授权关联；完成标准：抽样资产有来源和时间；已安装与已使用状态分开。",
          "建议阶段：第 3 周 · 高风险治理；交付物：个人账号连接、宽权限 MCP、长寿命凭据和数据外送处置；完成标准：每项有负责人、期限、例外及执行记录。",
          "建议阶段：第 4 周 · 对照验证；交付物：负向测试结果、覆盖盲区、误报与运营成本；完成标准：复测实际结果；下一轮范围和资源需求有依据。",
          "上述四周安排是一个可调整的试点建议，不是厂商承诺或行业标准。大型组织、终端部署和跨部门审批可能需要更长周期。"
        ],
        "sourceLinks": [
          {
            "title": "Reco · CISO Guide to Shadow AI（17 页 PDF）",
            "url": "https://go.reco.ai/hubfs/Gated%20Assets/CISO%20Guide%20to%20Shadow%20AI.pdf"
          },
          {
            "title": "SACR / Cyera · AI 时代的数据安全成熟度模型",
            "url": "https://www.cyera.com/reports/sacr-the-new-data-security-maturity-model-for-the-ai-era"
          }
        ]
      },
      {
        "title": "八个 POC 场景：同一业务任务，看执行结果",
        "label": "本项目验收建议",
        "paragraphs": [
          "使用测试账号、合成数据和组织控制的目的端进行验证。下列场景用于比较发现深度与执行能力，不需要真实客户数据，也不需要运行原视频中的恶意服务。每项记录采集点、处理延迟、策略、回执与源系统结果。",
          "场景：个人账号访问 AI 网页；应当观察什么：受管理浏览器能否区分企业与个人身份、关联设备用户；控制与结果验证：按规则限制敏感内容；检查未纳管浏览器是否仍为盲区。",
          "场景：批准 SaaS 新启用 AI 功能；应当观察什么：功能开关、数据范围和授权变更是否进入清单；控制与结果验证：重新评审、告警或限制的责任方明确，不依赖手工记忆。",
          "场景：AI 工具新增云盘 OAuth；应当观察什么：应用、授权人、scope、资源可达性和持续授权；控制与结果验证：撤销后以原授权再次访问，确认权限实际失效。",
          "场景：IDE/CLI 与本地模型使用；应当观察什么：安装、运行、请求与代码接触分别能否被观察；控制与结果验证：区分只发现进程和可检查调用；验证 hook 缺失时覆盖。",
          "场景：MCP 注册与描述变更；应当观察什么：发布者、版本或描述变化、能力、依赖关系；控制与结果验证：重新评估或暂停；拒绝不能只停留在聊天提示中。",
          "场景：正常任务尝试额外外送；应当观察什么：读取数据、外送目的地与任务授权能否关联；控制与结果验证：在发送前拒绝；受控接收端确认没有收到测试内容。",
          "场景：第三方要求写入长期记忆；应当观察什么：记忆来源、写入主体、适用范围、后续读取；控制与结果验证：阻止未授权规则持久化；新会话验证未生效。",
          "场景：业务写入与采集故障；应当观察什么：创建线索/变更字段的前后值，采集或网关中断；控制与结果验证：结果符合批准参数；失败默认行为可解释并可审计。",
          "相同场景分别使用企业允许路径与越界路径，避免只准备一个必然触发关键词规则的样例。要求产品说明哪些环节只能告警、哪些能审批、哪些能执行前拒绝，并记录不支持的路径。发现率、拦截率和影响面不能混用同一个分母。"
        ],
        "sourceLinks": [
          {
            "title": "Akto Atlas · AI Discovery Connectors",
            "url": "https://ai-security-docs.akto.io/akto-atlas-agentic-ai-security-for-employee-endpoints/endpoints-discovery-agents"
          },
          {
            "title": "Zenity · 恶意 MCP 攻击演示（原标题涉及 Shadow AI）",
            "url": "https://www.youtube.com/watch?v=uMV5icICnwo"
          },
          {
            "title": "SACR / Cyera · AI 时代的数据安全成熟度模型",
            "url": "https://www.cyera.com/reports/sacr-the-new-data-security-maturity-model-for-the-ai-era"
          }
        ]
      }
    ],
    "readingScope": "来源内容、官方描述与本项目分析分别标注；非逐字全文译本",
    "wordCount": 4298,
    "readingUrl": "shadow-ai.html",
    "localLinks": [
      {
        "title": "打开完整影子 AI 专题",
        "url": "shadow-ai.html"
      }
    ],
    "noteUrl": "reading/f7e7b2332ed0.html"
  },
  {
    "id": "reco-shadow-ai",
    "title": "Reco：CISO 影子 AI 安全指南",
    "en": "CISO Guide to Shadow AI",
    "org": "Reco",
    "kind": "厂商指南",
    "topic": "影子 AI",
    "date": "核实于 2026-11-03",
    "url": "https://go.reco.ai/hubfs/Gated%20Assets/CISO%20Guide%20to%20Shadow%20AI.pdf",
    "status": "17 页全文已归档 · 已有中文解读",
    "summary": "从 SaaS、个人账号和应用内嵌 AI 出发，讨论发现、权限、供应商、监控、培训和治理清单。",
    "points": [
      "全文已取得；文件创建元数据为 2025-02-27，不等于正式发布日期。",
      "第 15–16 页检查清单覆盖发现、访问、数据、政策、培训、供应商与复核。",
      "较早统计和“永久学习数据”的普遍化表述需要限制范围。"
    ],
    "question": "能否把指南检查项转成带负责人、期限和复测证据的治理任务？",
    "limit": "厂商指南，包含产品推广与二手历史统计；未独立追溯全部原始调查，不作为当前全行业比例。",
    "priority": true,
    "sections": [
      {
        "title": "全文与版本范围",
        "label": "原文核对",
        "paragraphs": [
          "本次下载并阅读 17 页英文原文。封面未给出明确发布日期，创建元数据为 2025-02-27；主要引用 2023–2024 年材料，不能称为 2026 年最新统计报告。",
          "第 3–6 页讨论风险与可见性，第 6–11 页展开发现、身份、第三方和响应，第 12 页为培训，第 13–14 页为产品介绍，第 15–16 页为检查清单，第 17 页为厂商介绍。"
        ],
        "sourceLinks": [
          {
            "title": "Reco · CISO Guide to Shadow AI（17 页 PDF）",
            "url": "https://go.reco.ai/hubfs/Gated%20Assets/CISO%20Guide%20to%20Shadow%20AI.pdf"
          }
        ]
      },
      {
        "title": "原文主线：员工提效与组织控制之间的缺口",
        "label": "原文解读",
        "paragraphs": [
          "原文强调，员工采用 AI 往往出于工作效率需求，而正式评审与控制可能滞后。个人账号、业务系统内嵌 AI 与第三方连接，会让原有软件清单无法直接表达真实数据流。",
          "指南建议多层监控、检查应用配置、管理身份与权限、评估第三方数据处理，并建立持续审计和响应。它的价值主要在治理任务的组织方式；具体技术实现与执行范围需要从产品文档或现场演示取得。"
        ],
        "sourceLinks": [
          {
            "title": "Reco · CISO Guide to Shadow AI（17 页 PDF）",
            "url": "https://go.reco.ai/hubfs/Gated%20Assets/CISO%20Guide%20to%20Shadow%20AI.pdf"
          }
        ]
      },
      {
        "title": "检查清单：从管理要求转为执行任务",
        "label": "原文解读与实施分析",
        "paragraphs": [
          "原文第 15–16 页包括发现与可见性、访问控制、数据保护、政策、员工培训、供应商管理、监控与合规复核。页面已进行视觉核对，保留原始 PDF 便于复查。",
          "在本项目中，可把每项任务补成：资产和业务范围、负责人、数据分类、执行方式、期限、例外和验收证据。例如，第三方权限审查不能止于阅读 scope，还需验证撤销后原主体无法继续访问；数据外送策略不能止于一条告警，还需核查接收端结果。"
        ],
        "sourceLinks": [
          {
            "title": "Reco · CISO Guide to Shadow AI（17 页 PDF）",
            "url": "https://go.reco.ai/hubfs/Gated%20Assets/CISO%20Guide%20to%20Shadow%20AI.pdf"
          }
        ]
      },
      {
        "title": "必须审慎对待的数据与措辞",
        "label": "证据审读",
        "paragraphs": [
          "原文多次将数据进入 AI 描述为永久保留或学习。不同服务、合同、账号和 API 的数据处理条件可能不同，应核查实际条款与配置，而不是把这一概括写成所有 AI 的普遍属性。",
          "指南引用的员工使用率、敏感数据占比和泄漏比例来自不同来源，时间、样本和分母并不一致。本文不将它们相加，也不拿来预测任意组织损失。原始研究未全部独立追溯，统计不作为本专题主结论。"
        ],
        "sourceLinks": [
          {
            "title": "Reco · CISO Guide to Shadow AI（17 页 PDF）",
            "url": "https://go.reco.ai/hubfs/Gated%20Assets/CISO%20Guide%20to%20Shadow%20AI.pdf"
          }
        ]
      },
      {
        "title": "与当前 Reco 产品材料分开使用",
        "label": "官方描述与研究分析",
        "paragraphs": [
          "当前 Shadow AI Discovery 页面关注 SaaS 应用、AI 工具、OAuth、Agent 与数据访问关系。该页面已另存为 2026-11-03 快照，不能将新版页面能力倒写为旧指南当年已具备的功能。",
          "评估建议要求展示个人账号、非 SSO、本地模型与直接 API 的发现边界；同时区分事后活动日志、配置变更和执行前阻断。完成应用接入或得到图谱，并不自动证明所有关键动作受到强制控制。"
        ],
        "sourceLinks": [
          {
            "title": "Reco · Shadow AI Discovery 当前产品页",
            "url": "https://www.reco.ai/use-cases/shadow-ai-discovery"
          },
          {
            "title": "Reco · CISO Guide to Shadow AI（17 页 PDF）",
            "url": "https://go.reco.ai/hubfs/Gated%20Assets/CISO%20Guide%20to%20Shadow%20AI.pdf"
          }
        ]
      }
    ],
    "readingScope": "来源内容、官方描述与本项目分析分别标注；非逐字全文译本",
    "wordCount": 902,
    "localLinks": [
      {
        "title": "本地英文 PDF · 17 页",
        "url": "../资料库/影子AI/原始资料/Reco-CISO-Guide-to-Shadow-AI.pdf"
      },
      {
        "title": "影子 AI 综合专题",
        "url": "shadow-ai.html#reco"
      }
    ],
    "noteUrl": "reading/8089aae8b0a7.html"
  },
  {
    "id": "akto-shadow-ai",
    "title": "Akto：影子 AI 发现、连接器与运行时边界",
    "en": "Akto Atlas & Argus: AI Discovery and Security Connectors",
    "org": "Akto",
    "kind": "技术文档解读",
    "topic": "影子 AI",
    "date": "核实于 2026-11-03",
    "url": "https://ai-security-docs.akto.io/akto-atlas-agentic-ai-security-for-employee-endpoints/overview",
    "status": "四份官方技术文档已读 · 页面快照已归档",
    "summary": "按 Atlas 员工端与 Argus 自建云端两条线，核对 hooks、浏览器、MCP、SaaS API、资产与调用证据。",
    "points": [
      "Endpoint Shield 不覆盖浏览器内 AI 使用，需配浏览器扩展。",
      "资产、Endpoints、Traces、敏感数据与 MCP Audit Data 分视图描述。",
      "发现、红队测试与运行时拒绝必须分别验收。"
    ],
    "question": "每种连接器究竟只发现资产、提供内容日志，还是能够在副作用前拒绝？",
    "limit": "来自当前官方文档，未经部署验证；支持列表、采集深度、许可和故障行为需按连接器与版本核实。",
    "priority": true,
    "sections": [
      {
        "title": "Akto 技术文档：两条产品线与真实接入条件",
        "label": "官方文档解读",
        "paragraphs": [
          "Atlas 的对象是员工实际使用的 AI，包括 IDE、CLI、浏览器、桌面助手、MCP、SaaS 套件与本地模型。概览将资产发现、凭据治理和 inline guardrails 放在同一条线上；具体到部署，连接器文档区分 hooks、Endpoint Shield、浏览器扩展、SaaS API 与现有 EDR/MDM。",
          "这一区分直接决定能看到什么。工具 hook 可以接触支持的调用生命周期；浏览器扩展覆盖支持浏览器内的 AI 使用；SaaS API 获取厂商提供的审计与活动；EDR 和 MDM 也可以承担发现或部署渠道。不能把所有连接器理解为相同的采集粒度、实时性或执行能力。概览对本地检查和阻断的描述，需要在每个具体路径验证。",
          "Agentic AI Discovery 文档将视图拆为 Agentic Assets、Endpoints、Traces、Sensitive Data、Audit Data 和 Endpoint Shield。它描述了模型会话输入输出、工具或 MCP 方法、用户设备关联，以及按 MCP 服务或具体能力允许、阻止或条件允许。评估时应查看一条真实 trace 与源事件如何对应，以及屏蔽某个能力后是否仍存在替代路径。",
          "Argus 面向企业自建 Agent、MCP 和 GenAI 应用，说明从 CI/CD 的持续红队评估延伸到云运行时保护，并列出网关、eBPF 和云平台集成。红队扫描说明“有条件测试某种风险”，不自动等于生产执行受到拦截；云资产发现也不自动证明所有提示或工具调用被完整采集。",
          "对于部署隐私，应明确哪些正文在本地处理、哪些作为 trace 上传、日志如何脱敏、谁能查看以及保存多久。对于强制控制，应检查离线、hook 被删除、未纳管浏览器、直连模型和网关不可用时的行为。本次没有安装连接器或提交客户信息，也没有独立验证这些能力。"
        ],
        "sourceLinks": [
          {
            "title": "Akto Atlas · 产品概览",
            "url": "https://ai-security-docs.akto.io/akto-atlas-agentic-ai-security-for-employee-endpoints/overview"
          },
          {
            "title": "Akto Atlas · AI Discovery Connectors",
            "url": "https://ai-security-docs.akto.io/akto-atlas-agentic-ai-security-for-employee-endpoints/endpoints-discovery-agents"
          },
          {
            "title": "Akto Atlas · Agentic AI Discovery",
            "url": "https://ai-security-docs.akto.io/akto-atlas-agentic-ai-security-for-employee-endpoints/ai-agent-activity"
          },
          {
            "title": "Akto Argus · 自建 AI 产品概览",
            "url": "https://ai-security-docs.akto.io/akto-argus-agentic-ai-security-for-homegrown-ai/overview"
          }
        ]
      },
      {
        "title": "连接器的真实覆盖条件",
        "label": "官方文档解读",
        "paragraphs": [
          "AI Discovery Connectors 文档将 Endpoint Shield 描述为组合本地 MCP 发现、CLI/IDE hooks 和桌面 System Proxy 的部署入口，并明确另用浏览器扩展覆盖浏览器内 AI。",
          "较轻路径可单独配置特定工具 hooks；现有 EDR/MDM 可用于发现或部署；SaaS 连接器则经供应商 API 获取活动。它们的观察和执行位置不同，不能仅凭“已接入”推断相同内容粒度或阻断能力。"
        ],
        "sourceLinks": [
          {
            "title": "Akto Atlas · AI Discovery Connectors",
            "url": "https://ai-security-docs.akto.io/akto-atlas-agentic-ai-security-for-employee-endpoints/endpoints-discovery-agents"
          }
        ]
      },
      {
        "title": "从清单下钻到行为与权限",
        "label": "官方文档解读",
        "paragraphs": [
          "Agentic AI Discovery 文档列出资产、终端、Traces、敏感数据、Audit Data 与 Endpoint Shield。描述包括模型输入输出、用户设备、工具和 MCP 方法，以及对服务或具体能力的允许、阻止和条件允许。",
          "需要用一条测试业务链关联资产、身份、调用、参数和实际结果；日志可以观察行为，实际执行控制还取决于对应连接器、策略和网络路径。"
        ],
        "sourceLinks": [
          {
            "title": "Akto Atlas · Agentic AI Discovery",
            "url": "https://ai-security-docs.akto.io/akto-atlas-agentic-ai-security-for-employee-endpoints/ai-agent-activity"
          }
        ]
      },
      {
        "title": "员工端与自建 Agent 应分别评估",
        "label": "研究分析",
        "paragraphs": [
          "Atlas 优先回应员工使用工具与端点治理；Argus 关注自建 Agent、MCP 和云端生命周期。它们可以互补，但不应以其中一个演示代替另一类部署的证据。",
          "对支持的框架和网关，要求说明是资产发现、运行时记录、内容检查、红队评估还是执行前策略。红队探针数量不等于防护成功率，eBPF 可见性也不自动等于对任意模型动作具有语义控制。"
        ],
        "sourceLinks": [
          {
            "title": "Akto Atlas · 产品概览",
            "url": "https://ai-security-docs.akto.io/akto-atlas-agentic-ai-security-for-employee-endpoints/overview"
          },
          {
            "title": "Akto Argus · 自建 AI 产品概览",
            "url": "https://ai-security-docs.akto.io/akto-argus-agentic-ai-security-for-homegrown-ai/overview"
          }
        ]
      },
      {
        "title": "POC 与数据处理问题",
        "label": "验证建议",
        "paragraphs": [
          "分别测试受管理浏览器、原生桌面、IDE、CLI、本地模型、SaaS 与自建 Agent。覆盖 hook 被删除、使用替代出口、个人账号和采集组件中断，记录明确的支持或未知状态。",
          "同时确认哪些提示、回复和密钥信息被本地处理或上传，谁能访问、如何脱敏和保存多久。对声称 inline 的路径，检查拒绝发生位置以及接收端没有收到数据的证据。"
        ],
        "sourceLinks": [
          {
            "title": "Akto Atlas · AI Discovery Connectors",
            "url": "https://ai-security-docs.akto.io/akto-atlas-agentic-ai-security-for-employee-endpoints/endpoints-discovery-agents"
          },
          {
            "title": "Akto Atlas · Agentic AI Discovery",
            "url": "https://ai-security-docs.akto.io/akto-atlas-agentic-ai-security-for-employee-endpoints/ai-agent-activity"
          }
        ]
      }
    ],
    "readingScope": "来源内容、官方描述与本项目分析分别标注；非逐字全文译本",
    "wordCount": 1515,
    "localLinks": [
      {
        "title": "影子 AI 综合专题",
        "url": "shadow-ai.html#akto"
      }
    ],
    "noteUrl": "reading/615162144610.html"
  },
  {
    "id": "zenity-mcp-case",
    "title": "Zenity：恶意 MCP、会话外传与记忆投毒",
    "en": "Shadow AI Discovery & Risk Assessment — Actual Attack-Chain Walkthrough",
    "org": "Zenity",
    "kind": "视频精读",
    "topic": "影子 AI",
    "date": "核实于 2026-11-03",
    "url": "https://www.youtube.com/watch?v=uMV5icICnwo",
    "status": "关键画面已逐段核对 · 已有约 5,000 字精读",
    "summary": "标题涉及影子 AI，实际展示恶意合规工具影响 CFO 和网站 Agent，并污染长期记忆与 Salesforce 写入。",
    "points": [
      "正常用户任务也会触发已被污染的工具链。",
      "恶意规则被记录为用户偏好，形成持久影响。",
      "视频展示攻击结果，未展示 Zenity 检测或阻断对照。"
    ],
    "question": "能否阻止工具描述变更引出的额外外送和长期记忆写入，并验证业务结果？",
    "limit": "依据关键画面、烧录说明与简介；未取得完整语音转写，未独立复现攻击。",
    "priority": true,
    "sections": [
      {
        "title": "Zenity 视频案例：发现之后，还要控制信任传播",
        "label": "视频证据与研究分析",
        "paragraphs": [
          "此前逐段精读的 Zenity 视频，标题为 Shadow AI Discovery & Risk Assessment，但实际展示恶意 MCP 工具攻击链。它适合说明影子连接与工具信任带来的影响，不适合作为资产发现控制台演示。",
          "视频前半段通过共享工具影响 CFO 助手，正常查询与 CRM 摘要出现在外部存储日志。后半段切到网站预约助手，并展示把恶意数据处理要求存为用户偏好的语义记忆，最后 Salesforce 新线索的多个字段呈密文样式。正常用户请求没有恶意内容，风险来自已连接的工具与持久化规则。",
          "对本专题的意义是：治理状态可能在首次批准之后变化。MCP 服务的描述、实现、权限和用途需要持续核查；人员离职后，依赖该服务的 Agent、凭据与记忆也需要清理。视频关于撤销内部访问的情节来自其说明，录屏没有完整显示撤权过程；最后直接可见的是至少一条线索受到影响，不能无限外推所有业务操作。",
          "视频没有展示启用 Zenity 后的告警、拒绝、修复或对照结果。应要求厂商在同一场景重演防护：确认工具变更、阻止会话外送、阻止规则写入记忆、保护业务写入，并检查目的端和业务系统结果。"
        ],
        "sourceLinks": [
          {
            "title": "Zenity · 恶意 MCP 攻击演示（原标题涉及 Shadow AI）",
            "url": "https://www.youtube.com/watch?v=uMV5icICnwo"
          },
          {
            "title": "Zenity · AI Observability",
            "url": "https://zenity.io/platform/ai-observability"
          }
        ]
      },
      {
        "title": "把“看见了”拆成六种证据",
        "label": "本项目评估方法",
        "paragraphs": [
          "不同厂商可能都展示“发现”数字，但统计对象和证据深度不同。本专题采用以下六项证据问题帮助评估，不将它们称为行业认证或强制成熟度级别。一个产品可能擅长其中几项，不能从一项能力直接推导其余能力。",
          "证据问题：资产是否存在？；足够具体的记录：资产标识、类型、版本、负责人、首次与最后发现时间；常见误判：把安装数量写成活跃用户数量。",
          "证据问题：是否实际使用？；足够具体的记录：用户/设备/服务身份、会话或调用、时间、账号与租户；常见误判：把域名连接写成敏感数据外送。",
          "证据问题：处理了什么数据？；足够具体的记录：资源引用、分类依据、脱敏的输入输出、数据来源；常见误判：把有读取权限写成已经读取或泄漏。",
          "证据问题：具备什么授权？；足够具体的记录：OAuth scope、工具能力、委托身份、资源范围、到期时间；常见误判：把合法登录当成所有后续动作都已获授权。",
          "证据问题：执行了什么动作？；足够具体的记录：工具参数、目的地、请求标识、源系统回执、实际变更；常见误判：把 Agent 的文字回答当成真实执行结果。",
          "证据问题：控制是否生效？；足够具体的记录：执行前策略、允许/拒绝、失败处理、目的端及源系统复核；常见误判：把告警、审批或关闭工单当成外传被阻止。",
          "盘点页面建议同时展示覆盖分母：已纳管终端占多少、已接入租户有哪些、支持检查内容的 AI 表面有哪些，以及哪些只提供资产或事后日志。未知范围应继续标为未知，避免用告警减少掩盖采集失效。"
        ],
        "sourceLinks": [
          {
            "title": "Akto Atlas · Agentic AI Discovery",
            "url": "https://ai-security-docs.akto.io/akto-atlas-agentic-ai-security-for-employee-endpoints/ai-agent-activity"
          },
          {
            "title": "SACR / Cyera · AI 时代的数据安全成熟度模型",
            "url": "https://www.cyera.com/reports/sacr-the-new-data-security-maturity-model-for-the-ai-era"
          }
        ]
      },
      {
        "title": "八个 POC 场景：同一业务任务，看执行结果",
        "label": "本项目验收建议",
        "paragraphs": [
          "使用测试账号、合成数据和组织控制的目的端进行验证。下列场景用于比较发现深度与执行能力，不需要真实客户数据，也不需要运行原视频中的恶意服务。每项记录采集点、处理延迟、策略、回执与源系统结果。",
          "场景：个人账号访问 AI 网页；应当观察什么：受管理浏览器能否区分企业与个人身份、关联设备用户；控制与结果验证：按规则限制敏感内容；检查未纳管浏览器是否仍为盲区。",
          "场景：批准 SaaS 新启用 AI 功能；应当观察什么：功能开关、数据范围和授权变更是否进入清单；控制与结果验证：重新评审、告警或限制的责任方明确，不依赖手工记忆。",
          "场景：AI 工具新增云盘 OAuth；应当观察什么：应用、授权人、scope、资源可达性和持续授权；控制与结果验证：撤销后以原授权再次访问，确认权限实际失效。",
          "场景：IDE/CLI 与本地模型使用；应当观察什么：安装、运行、请求与代码接触分别能否被观察；控制与结果验证：区分只发现进程和可检查调用；验证 hook 缺失时覆盖。",
          "场景：MCP 注册与描述变更；应当观察什么：发布者、版本或描述变化、能力、依赖关系；控制与结果验证：重新评估或暂停；拒绝不能只停留在聊天提示中。",
          "场景：正常任务尝试额外外送；应当观察什么：读取数据、外送目的地与任务授权能否关联；控制与结果验证：在发送前拒绝；受控接收端确认没有收到测试内容。",
          "场景：第三方要求写入长期记忆；应当观察什么：记忆来源、写入主体、适用范围、后续读取；控制与结果验证：阻止未授权规则持久化；新会话验证未生效。",
          "场景：业务写入与采集故障；应当观察什么：创建线索/变更字段的前后值，采集或网关中断；控制与结果验证：结果符合批准参数；失败默认行为可解释并可审计。",
          "相同场景分别使用企业允许路径与越界路径，避免只准备一个必然触发关键词规则的样例。要求产品说明哪些环节只能告警、哪些能审批、哪些能执行前拒绝，并记录不支持的路径。发现率、拦截率和影响面不能混用同一个分母。"
        ],
        "sourceLinks": [
          {
            "title": "Akto Atlas · AI Discovery Connectors",
            "url": "https://ai-security-docs.akto.io/akto-atlas-agentic-ai-security-for-employee-endpoints/endpoints-discovery-agents"
          },
          {
            "title": "Zenity · 恶意 MCP 攻击演示（原标题涉及 Shadow AI）",
            "url": "https://www.youtube.com/watch?v=uMV5icICnwo"
          },
          {
            "title": "SACR / Cyera · AI 时代的数据安全成熟度模型",
            "url": "https://www.cyera.com/reports/sacr-the-new-data-security-maturity-model-for-the-ai-era"
          }
        ]
      }
    ],
    "readingScope": "来源内容、官方描述与本项目分析分别标注；非逐字全文译本",
    "wordCount": 1898,
    "readingUrl": "zenity-video-umv5.html",
    "localLinks": [
      {
        "title": "打开完整逐段精读",
        "url": "zenity-video-umv5.html"
      },
      {
        "title": "影子 AI 专题",
        "url": "shadow-ai.html#case"
      }
    ],
    "noteUrl": "reading/e6f9502d221f.html"
  },
  {
    "id": "armadin-research",
    "org": "Armadin",
    "kind": "厂商研究",
    "topic": "进攻验证",
    "date": "2026-11-02",
    "title": "机会情报：降低攻击者可利用的暴露",
    "en": "Opportunity Intelligence Research to Reduce Risk",
    "url": "https://www.armadin.com/blog-posts/opportunity-intelligence-research-to-reduce-risk",
    "status": "已读官方摘要 · 全文待获取",
    "summary": "把评估焦点从漏洞名录转向真实环境中可到达、可串联的攻击机会。",
    "points": [
      "厂商在其客户研究中称，88% 的严重发现没有匹配的公开来源覆盖。",
      "其摘要称，70% 的关键及高危发现无需有效凭据即可到达，93% 的严重发现无需第三方介入即可修复。",
      "优先关注可利用路径和断链位置，而非只看单个 CVE。"
    ],
    "question": "能否提供可复现的攻击链、授权测试边界，以及修复后路径失效的证据？",
    "limit": "数据来自 Armadin 客户样本；未取得完整报告，摘要未给出样本规模，不能外推为全行业比例。",
    "priority": true,
    "sections": [
      {
        "title": "研究切入点：机会是否真实存在",
        "label": "来源解读",
        "paragraphs": [
          "官方研究摘要把注意力放在具体企业环境中的可利用机会，而不是仅依赖公开漏洞来源。摘要中的 88% 指其严重发现没有匹配的公开来源覆盖；这一分母不能改写为“88% 的企业风险”。",
          "同一摘要中的 70% 针对关键及高危发现无需有效凭据即可到达，93% 针对严重发现无需第三方介入即可修复。这些口径不同，不能相加，也不能据此判断任意企业被攻破的概率。"
        ]
      },
      {
        "title": "如何理解“攻击机会”",
        "label": "研究分析",
        "paragraphs": [
          "一个漏洞是否存在，与攻击者是否能在真实环境中利用它，是两个相关但不同的问题。机会验证需要把入口、可达性、身份条件、配置和后续资产连接起来，判断路径能否推进到具体影响。",
          "因此，分析单元应从孤立发现扩展到攻击链：入口成立后，凭据或信任关系是否提供下一跳；取得访问后，是否真正触及关键资源。这样的结构更容易找到一个能够切断多条路径的修复位置。"
        ]
      },
      {
        "title": "从研究结论到修复优先级",
        "label": "研究分析",
        "paragraphs": [
          "建议同时记录影响、验证置信度和修复可操作性。一个可通过配置立即切断的高影响路径，可能比需要长期开发但暂不可达的问题更适合优先处理；优先级仍需结合业务暴露与变更成本决定。",
          "持续测试的价值也应通过变化体现：哪些路径新出现、哪些修复后消失、哪些因为权限或网络变更重新打开。仅展示测试动作数量，无法证明企业可利用风险减少。"
        ]
      },
      {
        "title": "评估时要拿到什么证据",
        "label": "验证建议",
        "paragraphs": [
          "要求提供一条完整的脱敏路径记录，包括授权测试范围、初始条件、关键步骤、受影响资源、影响证明、可切断点及复测结果。区分实际验证、推断可达和未执行的高风险步骤。",
          "核实测试流量、凭据使用、数据处理和停止条件。将修复前后同一场景重复运行，并记录是否真正无法到达目标。全文仍待获取，样本规模、行业构成、严重性定义和去重方法是下一轮必须补齐的材料。"
        ]
      }
    ],
    "readingScope": "公开来源解读与本项目分析；非报告全文译文",
    "wordCount": 660,
    "noteUrl": "reading/0efc837139e3.html"
  },
  {
    "id": "armadin-ti",
    "org": "Armadin",
    "kind": "技术文章",
    "topic": "进攻验证",
    "date": "2026-11-02",
    "title": "AI 时代威胁情报的角色：从对手转向机会",
    "en": "Solving for Opportunity: The Role of Threat Intelligence in the Age of AI",
    "url": "https://www.armadin.com/blog-posts/solving-for-opportunity-the-role-of-threat-intelligence-in-the-age-of-ai",
    "status": "已读公开正文",
    "summary": "威胁情报需要更贴近本企业环境，识别防守方能够主动消除的攻击机会。",
    "points": [
      "以能力、意图和机会解释威胁；机会依赖具体环境且持续变化。",
      "持续的智能体测试可补充低频、限定范围的渗透评估。",
      "沿攻击链选择可切断的一环，而非等待每个漏洞都获得补丁。"
    ],
    "question": "我们的情报能否直接对应资产、暴露路径与可执行的处置动作？",
    "limit": "厂商观点文章，与同日机会情报研究配套；不属于独立标准。",
    "priority": false,
    "sections": [
      {
        "title": "作者的论证链条",
        "label": "来源解读",
        "paragraphs": [
          "文章以能力、意图和机会解释威胁。能力与意图通常用来描述对手，机会则必须在企业自己的环境中观察，而且会随配置、身份和资产变化。作者认为 AI 正在使能力更易获得，因此仅依赖对手画像不足以确定本企业下一步应该做什么。",
          "作者提出用连续的智能体测试补充低频、限定范围的评估，使情报更直接转化为可执行的防守措施。这是厂商对威胁情报演进的观点，并不是取消既有情报与漏洞管理。"
        ]
      },
      {
        "title": "机会情报与外部情报如何结合",
        "label": "研究分析",
        "paragraphs": [
          "外部情报回答哪些攻击活动或技术值得关注，内部机会验证回答这些技术在本企业是否有路径。将两者连接，可以避免团队面对大量通报时只能按通用严重性被动排序。",
          "理想记录应包含外部信号、对应内部资产、验证前提、潜在影响、处置责任及复测日期。没有资产映射的情报容易停留在阅读层；没有威胁背景的测试也可能忽略需要优先验证的变化。"
        ]
      },
      {
        "title": "为何要沿攻击链选择修复点",
        "label": "研究分析",
        "paragraphs": [
          "攻击链往往要求多个条件同时成立，防守方不一定需要同时修完每个环节才能阻止本次路径。可以先从凭据暴露、共享边界、网络可达性或高权限授权中选择业务影响可控的一环。",
          "但是切断已知路径并不等于消除所有风险。应保留剩余条件和替代路径，避免因一次复测失败而把同类暴露全部标记为已解决。"
        ]
      },
      {
        "title": "适合落地的工作流",
        "label": "验证建议",
        "paragraphs": [
          "把一条外部威胁情报转换成内部验证任务，明确适用资产、可执行范围、预期证据和停止条件。验证结果应允许“成立、不成立、证据不足”三种状态，防止模型把未知写成安全。",
          "处置完成后同时更新路径状态和相关资产记录，并定期检查条件是否复现。可以用情报到内部结论的时间、确认有影响的任务比例、复测通过率衡量流程，但不把动作数量当成风险降低。"
        ]
      }
    ],
    "readingScope": "原文正文与本项目分析",
    "wordCount": 631,
    "noteUrl": "reading/c9f668ad02ee.html"
  },
  {
    "id": "sacr-soc",
    "org": "Exaforce / SACR",
    "kind": "分析师报告",
    "topic": "安全运营",
    "date": "2026-09-16",
    "title": "2026 SACR AI SOC 报告",
    "en": "2026 SACR AI SOC Report",
    "url": "https://www.exaforce.com/resources/sacr-ai-soc-report-2026",
    "status": "已读官方介绍 · 表单获取全文",
    "summary": "区分“能解释告警”和“能在正确审批下响应并验证结果”的 AI SOC。",
    "points": [
      "介绍页称按架构对齐与生产交付评估 18 家 AI SOC 厂商。",
      "分别分析以 SIEM 为中心、混合环境、云原生数据湖三类部署。",
      "关注策略约束、审批及关闭事件前对源系统状态的确认。"
    ],
    "question": "调查结论、响应权限和执行结果能否形成完整的案件证据链？",
    "limit": "基于 Exaforce 提供的报告介绍；未取得全文，厂商排名不作为独立验证结果。",
    "priority": true,
    "sections": [
      {
        "title": "已知报告范围与核心分界",
        "label": "来源解读",
        "paragraphs": [
          "Exaforce 的介绍页称该报告按架构对齐和生产交付评估 18 家 AI SOC 厂商，并区分 SIEM 为中心、混合环境和云原生数据湖环境。介绍强调，解释告警与在适当审批下采取行动、证明行动生效之间存在重要差距。",
          "目前可依据的是报告介绍，不能由此重建完整评分表或认定某家厂商对本企业最好。厂商获得的称号也不替代针对实际数据、权限和部署方式的验证。"
        ]
      },
      {
        "title": "把 SOC 自动化拆成四段",
        "label": "研究分析",
        "paragraphs": [
          "检测、分诊、调查和响应应分别评估。检测需要证明发现范围；分诊需要证明噪声减少没有扩大漏报；调查需要可追溯证据与假设验证；响应则要求清楚的授权、执行与结果核实。",
          "同一个演示可能把四段压缩为一次自然语言回答，掩盖数据缺失、人工补证和高权限操作。评估时应标出每段由模型、固定规则、分析师还是外部系统完成，避免把建议动作等同已执行动作。"
        ]
      },
      {
        "title": "为什么环境类型影响选择",
        "label": "研究分析",
        "paragraphs": [
          "以 SIEM 为中心的组织通常已有日志管道、检测规则和调查流程，新增平台必须解释如何保留这些投入。云原生数据湖环境可能更关注查询成本、数据结构和跨源关联；混合部署则需要处理权限、地域与系统交接。",
          "因此，比较方案时先固定相同环境和业务目标，再比较实际查询、响应和审核过程。不能将一种部署的优势直接外推到另一种环境。"
        ]
      },
      {
        "title": "可信响应的证据链",
        "label": "验证建议",
        "paragraphs": [
          "选择测试身份的异常会话，观察系统怎样从原始事件形成调查结论，使用了哪些证据，是否明确表达信息缺口。随后测试一个需要审批的会话终止动作，记录审批对象、参数、执行账户和回执。",
          "最后回到源系统确认高风险会话失效、正常会话是否保留，检查失败重试与回滚处理。分别统计调查耗时、人工接管次数和结果验证成功率，而不是只记录生成报告的速度。"
        ]
      }
    ],
    "readingScope": "公开来源解读与本项目分析；非报告全文译文",
    "wordCount": 653,
    "noteUrl": "reading/2e30c9ccddb1.html"
  },
  {
    "id": "latio-soc",
    "org": "Exaforce / Latio",
    "kind": "分析师报告",
    "topic": "安全运营",
    "date": "2026-06-04",
    "title": "2026 Latio 安全运营市场报告",
    "en": "2026 Latio Security Operations Market Report",
    "url": "https://www.exaforce.com/resources/2026-latio-security-operations-market-report",
    "status": "已读官方介绍 · 表单获取全文",
    "summary": "AI SOC 的效果依赖其底层数据架构，同时要考虑 SIEM 迁移和工作流成本。",
    "points": [
      "介绍页覆盖数据管道、SIEM、检测工程、SOAR、MDR 和 AI SOC 市场。",
      "强调干净、丰富且结构一致的数据，是智能体调查的前提。",
      "将数据平台深度和事件响应能力放在同一评估视图。"
    ],
    "question": "保留现有 SIEM 时能否改善调查，数据标准化与迁移成本分别是多少？",
    "limit": "依据厂商转载介绍整理，未读取报告全文；问卷比例未作为本站结论引用。",
    "priority": false,
    "sections": [
      {
        "title": "资料介绍的主线",
        "label": "来源解读",
        "paragraphs": [
          "Exaforce 的报告介绍涵盖数据管道、SIEM 架构、检测工程、SOAR、MDR 和 AI SOC，强调调查能力依赖干净、丰富且结构一致的数据。其讨论也包括既有检测逻辑与工作流造成的迁移成本。",
          "这份资料适合帮助形成市场结构视角，但完整报告和调查方法尚未取得。本笔记不根据介绍页推断所有厂商的实际能力，也不将宣传页面中的调查比例作为本企业决策依据。"
        ]
      },
      {
        "title": "为什么数据层会限制推理质量",
        "label": "研究分析",
        "paragraphs": [
          "智能体能够提出正确问题，并不意味着它能够查询到可靠答案。身份标识不统一、时区不一致、事件延迟或字段缺失，都可能使看似合理的时间线与事实不符。",
          "需要同时检查数据是否存在、能否访问、是否可解释，以及查询成本是否可接受。缺失上下文时，系统应明确说明证据不足，而不是用语言完整性掩盖数据空洞。"
        ]
      },
      {
        "title": "如何评估保留与替换既有平台",
        "label": "研究分析",
        "paragraphs": [
          "建议分开计算数据接入、存储查询、规则迁移、人员培训及双轨运营成本。保留 SIEM 并新增调查层，与全面替换 SIEM，解决的问题和承担的风险不同。",
          "先选取几类历史案件复跑，比较原工作流与新工作流的证据完整度和人工耗时。若新增层只能改写既有告警文本，就应把收益限制在辅助阅读，不把它算成检测或响应现代化。"
        ]
      },
      {
        "title": "建议的概念验证",
        "label": "验证建议",
        "paragraphs": [
          "准备包含正常行为、真实异常和数据缺失的案件集，对身份关联、时间线重建、证据引用及未知状态表达分别检查。故意移除一个关键数据源，观察系统是否降低置信度并请求补证。",
          "记录每案数据处理成本、查询次数、调查时间、人工纠正次数，以及是否能把结论带回现有工单与响应系统。要求厂商说明结果来自现场运行还是预处理样例。"
        ]
      }
    ],
    "readingScope": "公开来源解读与本项目分析；非报告全文译文",
    "wordCount": 615,
    "noteUrl": "reading/2e47b27938a7.html"
  },
  {
    "id": "arise",
    "org": "SACR / Zenity 等",
    "kind": "分析师框架",
    "topic": "运行时防护",
    "date": "2026-09-03",
    "title": "ARISE：智能体运行时身份安全执行",
    "en": "ARISE: Agentic Runtime Identity Security Enforcement for Agents",
    "url": "https://softwareanalyst.substack.com/p/arise-agentic-runtime-identity-security",
    "status": "已读公开框架正文",
    "summary": "把身份、委托权限、工具和数据上下文用于行动完成前的运行时干预。",
    "points": [
      "从“身份是否获授权”进一步追问“此刻这项行动是否仍然适当”。",
      "考察资产发现、运行时执行、身份上下文、行为分析和审计响应。",
      "将工具调用、MCP 交互、凭据使用、数据操作纳入控制范围。"
    ],
    "question": "控制点是否真的处于执行路径上？阻断后能否证明副作用没有发生？",
    "limit": "SACR 提出的分析框架，不是已通过共识程序的行业标准；本站仅作框架摘要。",
    "priority": true,
    "sections": [
      {
        "title": "从准入授权转向行动判断",
        "label": "来源解读",
        "paragraphs": [
          "ARISE 关注智能体运行过程中，在行动完成前重新判断工具调用、数据访问、凭据使用或工作流步骤是否适当。判断组合了身份、委托权限、业务目的与当前上下文，而不是只问某个账号是否可以登录。",
          "框架将资产与工具发现、运行时执行、身份权限上下文、行为与意图分析，以及证据、审计和响应联系起来。其定位是分析师提出的控制模式，不等同于成熟的统一认证标准。"
        ]
      },
      {
        "title": "身份有效为何仍然不够",
        "label": "研究分析",
        "paragraphs": [
          "一个智能体可能持有合法令牌、使用批准工具，却因读入不可信内容而偏离原任务。静态权限通常只限定可访问资源，很难单独回答当前这组操作是否属于用户授权的工作。",
          "因此建议至少关联任务、委托主体、凭据、工具、目标资源与动作参数。模型对意图的理解可以辅助排序，但高风险动作的硬性限制仍应由可执行的策略与授权机制承担。"
        ]
      },
      {
        "title": "控制点必须真正处于执行路径",
        "label": "研究分析",
        "paragraphs": [
          "只把事件发送给分析平台，通常是在行动之后观察；把调用交给可强制执行的代理，才可能在副作用发生前干预。两者都可能有价值，但验收方式应不同。",
          "还要检查绕过路径：Agent 是否能直接访问网络或使用其他 SDK，审批后能否修改参数，服务异常时是否默认放行。只有控制路径覆盖真实调用，策略判断才具有约束意义。"
        ]
      },
      {
        "title": "如何设计一条可审计的决定",
        "label": "验证建议",
        "paragraphs": [
          "为每个受控动作保留任务标识、委托关系、规范化参数、策略版本、关键上下文、决策、审批及执行结果。对敏感原文和凭据使用必要的脱敏与引用，避免审计系统成为新的泄露源。",
          "分别测试允许、拒绝、升级审批、上下文缺失和代理故障场景。拒绝时检查目标系统未变化；允许时确认实际结果与审批参数一致；任务结束后验证临时权限确实失效。"
        ]
      }
    ],
    "readingScope": "原文正文与本项目分析",
    "wordCount": 623,
    "noteUrl": "reading/4a881ed6771b.html"
  },
  {
    "id": "csa",
    "org": "CSA / Zenity",
    "kind": "调查报告",
    "topic": "运行时防护",
    "date": "2026-04-15",
    "title": "企业 AI 安全始于 AI Agent",
    "en": "Enterprise AI Security Starts with AI Agents",
    "url": "https://next.cloudsecurityalliance.org/artifacts/enterprise-ai-security-starts-with-ai-agents",
    "status": "已读官方摘要 · 下载需账号",
    "summary": "企业已跨平台部署 Agent，但归属、权限范围和事件响应准备不足。",
    "points": [
      "CSA 摘要称，53% 的受访组织报告 Agent 偶尔或有时超出预定权限。",
      "47% 的受访组织报告过涉及 AI Agent 的安全事件。",
      "调查同时关注影子 Agent、明确负责人和多平台治理问题。"
    ],
    "question": "我们能否持续发现 Agent、确定负责人，并检测超出任务范围的动作？",
    "limit": "Zenity 委托的调查；比例是受访组织自报，未读取完整问卷与样本方法，不代表事件发生概率。",
    "priority": true,
    "sections": [
      {
        "title": "调查在描述什么",
        "label": "来源解读",
        "paragraphs": [
          "CSA 官方摘要描述了跨平台 Agent 采用与治理准备度之间的差距。53% 的受访组织自报 Agent 偶尔或有时超出预定权限，47% 自报发生过涉及 Agent 的安全事件。两者不能直接等同，也不能解释为任意 Agent 每次执行时的风险概率。",
          "资料还涉及影子 Agent 和责任归属。其价值是提示企业检查资产、负责人和访问范围，而不是单凭统计数字证明某款安全产品有效。完整样本设计与问卷仍待获取。"
        ]
      },
      {
        "title": "从组织自报到内部事实",
        "label": "研究分析",
        "paragraphs": [
          "企业可能把聊天助手、自建工作流、编码工具和具有长期权限的自主 Agent 都纳入同一称谓。不同对象的风险与控制点差异很大，因此首先应建立内部定义，说明哪些系统能调用工具、使用凭据或对资源产生副作用。",
          "“已登记”也不等于“已治理”。每个 Agent 还应有业务负责人、运行环境、可访问资源、权限来源及退出机制，并能持续发现新增实例和连接器。"
        ]
      },
      {
        "title": "越界需要一个可判断的边界",
        "label": "研究分析",
        "paragraphs": [
          "如果任务授权仅是自然语言描述，事后很难判断何为越界。建议把可操作资源、动作类型、目的地、时间和审批条件转化为可检查约束，同时保留业务目的用于解释复杂情况。",
          "将越界区分为请求越界、策略错误放行、实际产生副作用等状态。只有明确分母和阶段，才能理解控制是在阻止危险尝试，还是仅在事后记录已经发生的问题。"
        ]
      },
      {
        "title": "内部盘点与监测建议",
        "label": "验证建议",
        "paragraphs": [
          "选一个业务部门，交叉比对登记清单、云平台、身份应用、终端与工具网关的可用记录，识别未登记 Agent 和无人认领的连接。对权限过大或归属不清的对象建立处置任务。",
          "跟踪有明确负责人比例、权限审查完成比例、异常动作到确认的时间，以及完成验证的整改比例。与后续调查比较时，必须保留自身口径和样本范围。"
        ]
      }
    ],
    "readingScope": "公开来源解读与本项目分析；非报告全文译文",
    "wordCount": 661,
    "noteUrl": "reading/bcc8d5df70b4.html"
  },
  {
    "id": "zenity-architecture",
    "org": "Zenity",
    "kind": "技术文章",
    "topic": "运行时防护",
    "date": "2026-06-02",
    "title": "允许访问不等于行为对齐",
    "en": "Allowed Is Not Aligned: Why Retrofitted Tools Can’t Secure AI Agents",
    "url": "https://zenity.io/blog/purpose-built-ai-agent-security-architecture",
    "status": "已读公开文章要点",
    "summary": "传统授权边界之外，还需要验证智能体行动是否符合任务目的。",
    "points": [
      "文章用提示注入和非恶意的破坏性行为讨论 Agent 风险。",
      "厂商认为，许可、工具访问和业务意图需要共同检查。",
      "适合作为采购讨论材料，用于追问运行时保护的技术边界。"
    ],
    "question": "合法凭据发起的危险操作，能否在提交前暂停或拒绝？",
    "limit": "厂商架构观点；文章提及的外部事件未在本次逐一独立复核，不将其作为效果证明。",
    "priority": false,
    "sections": [
      {
        "title": "文章强调的区别",
        "label": "来源解读",
        "paragraphs": [
          "文章以“获得许可不等于符合目的”讨论 Agent 风险。其观点是，提示注入和没有攻击者参与的错误行为，都可能通过合法工具与凭据产生不适当结果，因此只验证访问许可不足以解释完整风险。",
          "这是厂商架构论述。本笔记不把文章列举的外部事故作为已独立复核的事实，也不据其案例推断 Zenity 能在所有部署中阻断同类问题。"
        ]
      },
      {
        "title": "将权限、目的和结果分开看",
        "label": "研究分析",
        "paragraphs": [
          "权限回答能否调用资源，目的回答调用是否属于任务，结果则说明实际发生了什么。一个操作可以权限合法但目的不当，也可能目的正确却因参数或目标识别错误产生破坏。",
          "评估控制时应覆盖这三种证据。若系统只能识别提示文本中的危险表达，仍需验证它是否理解实际工具参数、资源敏感性及连续行动造成的累积影响。"
        ]
      },
      {
        "title": "为什么多步骤行为需要上下文",
        "label": "研究分析",
        "paragraphs": [
          "单次读取、格式转换和上传都可能看似正常，但顺序组合可能构成外传。相反，某些批量操作在批准的迁移任务中是正常行为，不能只凭调用次数或关键词判断。",
          "建议把任务状态、已读取数据类别、目的地和拟执行动作关联起来。对确定禁止的操作使用硬约束；对于意图不清但可能有合理解释的动作，使用暂停与补充确认。"
        ]
      },
      {
        "title": "验证建议：同权限、不同任务",
        "label": "验证建议",
        "paragraphs": [
          "构造两项使用相同工具和账号的测试任务：一项只要求生成统计结果，另一项批准导出限定范围数据。检查系统能否区分任务目的及允许的数据范围，而不是对同一工具一概允许或拒绝。",
          "补充错误目标、间接注入、跨步骤数据汇集和失败重试场景，记录阻断发生的时机。要求证明动作被阻止时目标系统没有产生副作用，并检查人工接管的可用性。"
        ]
      }
    ],
    "readingScope": "公开来源解读与本项目分析；非报告全文译文",
    "wordCount": 592,
    "noteUrl": "reading/b68cfa92b5d4.html"
  },
  {
    "id": "latio-ai",
    "org": "Latio / Zenity",
    "kind": "分析师报告",
    "topic": "运行时防护",
    "date": "2026-09（公告）",
    "title": "2026 Latio AI 安全报告",
    "en": "2026 Latio AI Security Report",
    "url": "https://zenity.io/press-release/zenity-earns-recognition-in-ai-agent-security-reports-from-latio-and-sacr",
    "status": "仅核实报告线索 · 全文待获取",
    "summary": "补充 AI 安全市场视角，重点追踪跨平台 Agent 保护的覆盖范围。",
    "points": [
      "Zenity 的 9 月 15 日公告引用该报告及其对平台覆盖广度的评价。",
      "公告同时指向 SACR ARISE，便于交叉阅读。",
      "原 PDF 链接含临时参数，本次未取得可稳定访问的全文。"
    ],
    "question": "跨 SaaS、自建 Agent、开发环境的保护是否使用相同的策略与证据模型？",
    "limit": "只核实厂商公告，不据此复述原报告排名、评测方法或完整结论。",
    "priority": false,
    "sections": [
      {
        "title": "目前能够确认的内容",
        "label": "来源解读",
        "paragraphs": [
          "Zenity 的公告引用 2026 Latio AI Security Report，强调跨企业环境的平台覆盖，并同时指向 SACR ARISE。当前确认的是报告线索与厂商对报告的介绍，不是完整市场评估结果。",
          "因此，本页不补写报告章节、排名、样本或评分。正式 PDF 尚未归档；在获取全文后，才适合进一步核对评价范围和实际测试依据。"
        ]
      },
      {
        "title": "拿到全文后应优先读什么",
        "label": "研究分析",
        "paragraphs": [
          "先检查评估对象究竟包括模型安全、AI 应用防护、Agent 身份、网关还是运行时执行。若不同类别共用一个市场图，需要先理解坐标含义，再比较具体产品。",
          "再检查产品测试、访谈和资料提交的比例，确认版本与时间。连接器数量、支持平台数量、可监测对象数量和可强制执行控制点数量，是四种不同指标。"
        ]
      },
      {
        "title": "如何避免把覆盖广度误读为防护深度",
        "label": "研究分析",
        "paragraphs": [
          "支持某平台可能只意味着发现资产，也可能意味着获取运行日志，或者真正处于工具执行路径。阅读评测时应为每个环境标明发现、观察、决策、阻断和修复的具体阶段。",
          "对于不同平台，应追问是否使用一致身份模型、策略语义和审计字段。如果策略不能跨平台保持等价，统一控制台并不自动构成统一治理。"
        ]
      },
      {
        "title": "全文补齐后的核对清单",
        "label": "验证建议",
        "paragraphs": [
          "保留原始 PDF、公开版本日期、作者和获取入口；核对公告引用是否与正文评价一致。记录评测限制以及厂商参与、赞助或转载关系。",
          "选择与实际部署对应的两个场景复测，不直接接受泛化覆盖表。把未验证能力保留为待验证，而非从产品名称或市场位置推断支持情况。"
        ]
      }
    ],
    "readingScope": "公开来源解读与本项目分析；非报告全文译文",
    "wordCount": 563,
    "noteUrl": "reading/fb2f258f8829.html"
  },
  {
    "id": "owasp",
    "org": "OWASP",
    "kind": "社区指南",
    "topic": "标准与框架",
    "date": "2025-12-09",
    "title": "Agentic Applications 十大风险（2026 版）",
    "en": "OWASP Top 10 for Agentic Applications 2026",
    "url": "https://genai.owasp.org/resource/owasp-top-10-for-agentic-applications-for-2026/",
    "status": "官方指南入口 · 可下载",
    "summary": "为 Agent 应用威胁建模提供风险分类与缓解思路。",
    "points": [
      "覆盖目标劫持、工具滥用、身份权限滥用、供应链、代码执行等风险。",
      "也涉及记忆与上下文投毒、智能体间通信、级联失效、信任利用和失控智能体。",
      "适合用风险条目组织负向测试和控制覆盖检查。"
    ],
    "question": "每类风险有没有与真实部署对应的测试，以及可验证的拒绝行为？",
    "limit": "社区风险指南，不是认证标准；2026 是版次，官方发布日期为 2025 年 12 月。",
    "priority": true,
    "sections": [
      {
        "title": "指南的作用与阅读方式",
        "label": "来源解读",
        "paragraphs": [
          "OWASP Agentic Top 10 为具有自主性和工具使用能力的应用提供风险分类，涵盖目标劫持、工具滥用、身份权限滥用、供应链、代码执行、记忆与上下文投毒、智能体间通信、级联失效、信任利用和失控行为。它适合组织威胁讨论，但条目数量不等于本企业风险数量。"
        ]
      },
      {
        "title": "把分类映射到真实保护域",
        "label": "研究分析",
        "paragraphs": [
          "建议先画出输入来源、模型、记忆、工具、执行环境与外部系统之间的关系。再将每类风险放到实际组件及信任边界，而不是直接把十个名称复制到风险登记表。",
          "同一条攻击链可能横跨多类风险：不可信内容改变任务方向，工具权限允许访问敏感资源，后续调用再造成外传。多标签有利于理解原因，但计算风险时应避免将同一事件重复计数。"
        ]
      },
      {
        "title": "从风险名称变成负向测试",
        "label": "验证建议",
        "paragraphs": [
          "每个适用风险都应写出初始条件、攻击入口、期望被拒绝的动作、允许的正常行为和证据。无法在当前部署构造的场景，应标注不适用原因或待验证条件。",
          "以间接注入为例，关注 Agent 读取外部资料后是否试图扩大任务范围；验收应观察工具与目标系统是否被改变。只检查最终文本是否出现危险词，无法证明副作用被阻止。"
        ]
      },
      {
        "title": "如何形成覆盖结论",
        "label": "研究分析",
        "paragraphs": [
          "将覆盖状态分成预防、检测、人工流程、未覆盖和不适用，比简单标绿更有解释力。一个风险由多项控制共同缓解时，应注明依赖关系和失效路径。",
          "这些是本项目的应用建议，不代表 OWASP 为具体方案认证。正式评估应固定指南版本，并回到完整条目核对适用条件与缓解建议。"
        ]
      }
    ],
    "readingScope": "公开来源解读与本项目分析；非报告全文译文",
    "wordCount": 553,
    "noteUrl": "reading/31e7126db93b.html"
  },
  {
    "id": "atlas",
    "org": "MITRE",
    "kind": "威胁知识库",
    "topic": "标准与框架",
    "date": "持续更新",
    "title": "ATLAS：AI 系统攻击战术与技术",
    "en": "MITRE ATLAS",
    "url": "https://atlas.mitre.org/",
    "status": "官方动态知识库",
    "summary": "使用攻击技术语言描述 AI 系统风险，辅助建立测试与检测清单。",
    "points": [
      "矩阵包含 Agent 工具调用、上下文操纵、凭据获取与通过工具外传等技术。",
      "可将攻击路径与组织自身的遥测和缓解措施关联。",
      "适合作为威胁建模和紫队验证的公共词汇。"
    ],
    "question": "哪些技术能够在我们的日志中被观察，哪些只存在于文档控制中？",
    "limit": "动态知识库，不是产品覆盖认证；使用时应固定条目及版本。",
    "priority": false,
    "sections": [
      {
        "title": "知识库提供的共同语言",
        "label": "来源解读",
        "paragraphs": [
          "MITRE ATLAS 用战术与技术组织针对 AI 系统的攻击行为。当前矩阵可用于研究上下文操纵、Agent 工具调用、凭据获取以及通过工具实现外传等问题。与厂商功能表不同，它首先描述对手如何达成目的。"
        ]
      },
      {
        "title": "如何建立与日志的对应",
        "label": "研究分析",
        "paragraphs": [
          "对每个适用技术，列出预期可观察行为和可能的记录来源，例如工具代理、身份服务、进程事件、资源访问及出口连接。随后检查这些记录能否通过任务标识、会话或进程链关联。",
          "能够采集事件，不意味着已经检测技术；检测规则还需要说明条件、正常业务差异与证据缺口。模型给出的解释也应能回指原始事件，而不是只引用另一段模型摘要。"
        ]
      },
      {
        "title": "把知识库用于测试规划",
        "label": "验证建议",
        "paragraphs": [
          "选择与实际部署相关的少量技术串成场景，记录需要的初始权限与明确的停止点。测试前写出预期可见的事件，测试后逐项比较，区分没有发生、发生但未采集、已采集但未检测。",
          "对成功检测的场景，再检查处置动作及验证结果。建立技术、场景、遥测、规则、控制负责人和最后验证日期之间的映射，避免覆盖表随时间失真。"
        ]
      },
      {
        "title": "与 OWASP 及现有模型的关系",
        "label": "研究分析",
        "paragraphs": [
          "OWASP 更适合组织应用风险讨论，ATLAS 更适合描述具体攻击行为与技术。两者可以关联，但不应强行建立一对一关系。",
          "本项目应先保留实际资产与信任边界，再添加知识库标签。不能因某个技术在矩阵中存在，就假定它在所有部署都可实现；也不能因未找到对应标签，就忽略实际发现的旁路。"
        ]
      }
    ],
    "readingScope": "公开来源解读与本项目分析；非报告全文译文",
    "wordCount": 533,
    "noteUrl": "reading/6944f67ee1b3.html"
  },
  {
    "id": "attack",
    "org": "MITRE",
    "kind": "威胁知识库",
    "topic": "标准与框架",
    "date": "2026-10-09（更新）",
    "title": "T1700：利用 AI 进行数据外传",
    "en": "AI-Enabled Exfiltration",
    "url": "https://attack.mitre.org/techniques/T1700/",
    "status": "已读官方技术条目",
    "summary": "把 AI 相关进程的数据访问和外传行为纳入企业检测视角。",
    "points": [
      "描述滥用 AI 系统可用工具实现外传的行为。",
      "缓解方向包括应用隔离、文件权限和使用者培训。",
      "检测线索关联越界数据访问、具备传输能力的执行与外连。"
    ],
    "question": "能否关联同一进程链的数据读取、工具执行与外连目的地？",
    "limit": "这是 ATT&CK 技术条目，与 ATLAS 互补；条目更新不等于新增强制要求。",
    "priority": false,
    "sections": [
      {
        "title": "T1700 关注的行为",
        "label": "来源解读",
        "paragraphs": [
          "该 ATT&CK 条目描述利用 AI 系统及其可用工具进行数据外传的行为。官方缓解方向包含应用隔离、文件与目录权限限制，以及使用者培训；检测线索关联越界数据访问、具备传输能力的执行和对外连接。"
        ]
      },
      {
        "title": "为什么需要端到端关联",
        "label": "研究分析",
        "paragraphs": [
          "对 AI 场景，仅发现某个进程读取敏感文件通常不足以确认外传；仅发现外连也不足以解释其来源。需要结合任务、进程或会话上下文，重建读取、处理、传输和目的地之间的关系。",
          "共享代理、服务端连接器和云端工具可能使终端看不到完整链路。因此设计检测前，必须明确哪部分动作在本机发生、哪部分由远程服务执行，以及两侧是否存在可关联标识。"
        ]
      },
      {
        "title": "建议的检测实验",
        "label": "验证建议",
        "paragraphs": [
          "使用合成敏感数据和明确的测试目的地，分别运行批准导出、越界读取但未外传、读取后尝试外传三个场景。比较日志能否区分尝试与成功，以及策略拒绝时是否仍出现实际网络发送。",
          "记录资源范围、进程父子关系、调用参数、目的地址、发送结果及策略决定。若目的系统不可观测，应明确成功与否的判断依据，不用“未见证据”替代“已证明未发生”。"
        ]
      },
      {
        "title": "如何衔接防护与响应",
        "label": "研究分析",
        "paragraphs": [
          "预防可以收敛资源权限与出口范围，检测用于发现未被预防的行为，响应则需要处理会话、凭据及已访问数据的影响。三者不应合并成一个模糊的“已覆盖”。",
          "技术条目是研究参考，不是该网页对任何产品的能力证明。实际阈值、时间窗口和授权目的地集合，需要依据业务基线与部署验证确定。"
        ]
      }
    ],
    "readingScope": "公开来源解读与本项目分析；非报告全文译文",
    "wordCount": 542,
    "noteUrl": "reading/a61b4c8688c2.html"
  },
  {
    "id": "nist-rmf",
    "org": "NIST",
    "kind": "自愿风险框架",
    "topic": "标准与框架",
    "date": "2023-01-26",
    "title": "AI 风险管理框架 1.0",
    "en": "AI Risk Management Framework 1.0",
    "url": "https://www.nist.gov/itl/ai-risk-management-framework",
    "status": "官方框架入口 · 可下载",
    "summary": "以组织治理和生命周期风险管理，连接业务责任、评估与持续改进。",
    "points": [
      "面向 AI 产品、服务和系统的设计、开发、使用及评估。",
      "以 Govern、Map、Measure、Manage 四项功能组织风险管理。",
      "可用作风险登记、责任划分和度量计划的上层框架。"
    ],
    "question": "风险是否有明确责任人、适用情境、度量方式与管理动作？",
    "limit": "自愿框架；官网说明 1.0 正在修订，本页不把修订计划当作已发布新版。",
    "priority": false,
    "sections": [
      {
        "title": "框架定位",
        "label": "来源解读",
        "paragraphs": [
          "NIST AI RMF 1.0 是自愿使用的 AI 风险管理框架，面向系统设计、开发、使用和评估。它以 Govern、Map、Measure、Manage 组织风险工作，帮助组织把可信性考虑嵌入生命周期。官网还说明 1.0 正在修订，因此应区分既有版本与未来工作。"
        ]
      },
      {
        "title": "四项功能如何用于本项目",
        "label": "研究分析",
        "paragraphs": [
          "治理用于明确角色、授权与风险接受责任；映射用于描述业务目的、部署环境、受影响对象和依赖；度量用于选择能检验实际风险的指标；管理用于确定处置、监测和持续改进安排。",
          "这些功能可以同时进行，并不需要等待模型上线后才开始风险评估。对 Agent，任务权限、数据来源、工具连接及人类监督方式，都应进入运行情境描述。"
        ]
      },
      {
        "title": "风险登记表应增加什么",
        "label": "研究分析",
        "paragraphs": [
          "除风险名称与严重性外，建议记录适用部署、资产、触发条件、影响、现有控制、证据、责任人、剩余风险与复审日期。未知信息应有补证任务，避免看似精确的分数掩盖缺乏依据。",
          "把控制完成与风险接受分开：技术团队完成配置，不代表业务负责人已经接受剩余影响；反过来，接受风险也不应被记录为风险已经消除。"
        ]
      },
      {
        "title": "可交付的治理证据",
        "label": "验证建议",
        "paragraphs": [
          "为一个实际 Agent 建立用途与边界说明、风险登记、测试记录和变更日志，并说明谁有权批准扩大权限。高风险能力变化后，重新检查适用场景与测试范围。",
          "定期复查控制效果、事件和例外，确认是否需要修改流程。这里给出的是本项目应用方法，不是对组织符合 NIST 全部要求的审计结论。"
        ]
      }
    ],
    "readingScope": "公开来源解读与本项目分析；非报告全文译文",
    "wordCount": 560,
    "noteUrl": "reading/4d186983cc01.html"
  },
  {
    "id": "nist-genai",
    "org": "NIST",
    "kind": "自愿风险框架",
    "topic": "标准与框架",
    "date": "2024-07-26",
    "title": "生成式 AI 风险管理画像",
    "en": "NIST AI 600-1: Generative Artificial Intelligence Profile",
    "url": "https://doi.org/10.6028/NIST.AI.600-1",
    "status": "官方发布入口 · 可下载",
    "summary": "补充 AI RMF，帮助识别生成式 AI 特有风险并选择管理行动。",
    "points": [
      "用于将通用 AI 风险管理落到生成式 AI 情境。",
      "提供风险与行动参考，支持组织依其目标和优先级实施。",
      "与 Agent 专项指南结合使用，可补足模型与应用层面的视角。"
    ],
    "question": "生成内容、敏感数据使用和第三方依赖是否纳入同一风险流程？",
    "limit": "是 AI RMF 的配套画像，不是单独的 Agent 认证标准；本次依据 NIST 官方说明整理。",
    "priority": false,
    "sections": [
      {
        "title": "画像与通用框架的关系",
        "label": "来源解读",
        "paragraphs": [
          "NIST AI 600-1 是 AI RMF 的生成式 AI 配套画像，帮助组织识别相关特有风险并选择符合自身目标与优先级的管理行动。它补充通用框架，但不能单独替代 Agent 工具与执行环境的安全设计。"
        ]
      },
      {
        "title": "为何需要模型与系统两个视角",
        "label": "研究分析",
        "paragraphs": [
          "生成内容的质量问题与系统执行的副作用可能相互连接：一个不准确回答可能只影响阅读，也可能被下游工具转换成修改资源的命令。风险大小取决于应用链和授权，而不能只凭模型输出单独判断。",
          "建议沿输入、检索、生成、工具使用和结果消费梳理依赖，识别哪些错误会被放大。敏感数据进入哪个服务、由谁访问、是否被写入日志，也应纳入同一数据流分析。"
        ]
      },
      {
        "title": "如何补充既有 Agent 风险模型",
        "label": "研究分析",
        "paragraphs": [
          "在已有权限、隔离和出口控制之外，补充内容可信度、数据来源、第三方依赖与人工使用方式的检查。区分提示约束、检索校验、确定性策略及执行隔离分别承担什么责任。",
          "对仅靠模型判断的控制，应记录不确定性与失败处理。不能因为模型在少量样例上给出正确回答，就认定整个系统对同类风险均有可靠防护。"
        ]
      },
      {
        "title": "建议的验证材料",
        "label": "验证建议",
        "paragraphs": [
          "准备代表性正常任务、错误资料、冲突资料和上下文缺失样例，检查输出怎样影响工具调用与人工决策。测试记录应保留模型及应用版本、输入范围、评判依据和失败案例。",
          "当前笔记依据官方定位与本项目分析，并未逐条解读该画像全文。正式选用控制时，应回到原文核对风险描述、适用情境与建议行动。"
        ]
      }
    ],
    "readingScope": "公开来源解读与本项目分析；非报告全文译文",
    "wordCount": 535,
    "noteUrl": "reading/09afdfc3c16f.html"
  },
  {
    "id": "nist-agent",
    "org": "NIST",
    "kind": "标准化倡议",
    "topic": "标准与框架",
    "date": "2026-02-17",
    "title": "AI Agent 标准倡议",
    "en": "AI Agent Standards Initiative",
    "url": "https://www.nist.gov/artificial-intelligence/ai-agent-standards-initiative",
    "status": "官方倡议页 · 持续跟踪",
    "summary": "围绕可信、安全、可互操作的 Agent，推动标准与协议生态。",
    "points": [
      "重点包括行业主导标准、社区协议及相关研究评估。",
      "通过技术讨论和差距分析支持自愿指南。",
      "适合观察身份、互操作与安全协议的后续标准化方向。"
    ],
    "question": "产品是否明确支持的协议版本，以及身份与权限的互操作边界？",
    "limit": "标准化倡议，不是一套已经定稿且可据此认证的完整技术标准。",
    "priority": false,
    "sections": [
      {
        "title": "倡议处于什么层次",
        "label": "来源解读",
        "paragraphs": [
          "NIST AI Agent Standards Initiative 旨在促进可信、安全和可互操作的 Agent 生态，推动行业主导标准、社区协议和相关研究。它是标准化工作方向，不能被当作一套已全部定稿的技术要求。"
        ]
      },
      {
        "title": "对企业架构的实际意义",
        "label": "研究分析",
        "paragraphs": [
          "Agent 跨越身份提供方、模型、工具服务和业务系统，不同平台对任务、授权和日志的理解可能不同。互操作不仅是消息能传递，还涉及主体身份、委托关系、权限与证据是否能保持一致。",
          "选择产品时应核对具体支持协议、版本与认证方式。声称“兼容 Agent 生态”若没有明确的对象和验证范围，无法作为安全边界的依据。"
        ]
      },
      {
        "title": "如何跟踪标准演进",
        "label": "研究分析",
        "paragraphs": [
          "建议建立标准跟踪记录，区分倡议、草案、征求意见、最终发布与产品支持状态。每次更新记录日期、适用内容和对现有系统的潜在影响，不因出现新术语就立即替换控制。",
          "当协议发生变化时，重点检查凭据受众、权限范围、委托传播与审计关联是否受影响。兼容性测试和安全测试需要共同安排。"
        ]
      },
      {
        "title": "近期可以做的准备",
        "label": "验证建议",
        "paragraphs": [
          "列出当前 Agent 与外部系统的所有接口，标明身份机制、调用主体、凭据生命周期和可见日志。对跨系统请求，验证是否能追踪到原始任务与授权方。",
          "将尚未解决的互操作问题留作明确缺口，而不是自行宣称符合尚未定稿的标准。后续以官方发布材料为依据更新评估范围。"
        ]
      }
    ],
    "readingScope": "公开来源解读与本项目分析；非报告全文译文",
    "wordCount": 512,
    "noteUrl": "reading/3195198719ac.html"
  },
  {
    "id": "iso",
    "org": "ISO / IEC",
    "kind": "国际标准",
    "topic": "标准与框架",
    "date": "2023-12",
    "title": "ISO/IEC 42001：AI 管理体系",
    "en": "ISO/IEC 42001:2023 — Artificial intelligence — Management system",
    "url": "https://www.iso.org/standard/42001",
    "status": "官方范围已核实 · 全文付费",
    "summary": "规定组织建立、实施、维护和持续改进 AI 管理体系的要求。",
    "points": [
      "适用于提供或使用 AI 产品与服务的组织。",
      "通过管理体系连接政策、流程、职责与持续改进。",
      "应与具体 Agent 技术测试结合，不能用管理体系替代运行时验证。"
    ],
    "question": "治理职责、评估、变更和持续改进是否形成可审计的管理过程？",
    "limit": "仅依据 ISO 公开范围和介绍；未购买或归档付费标准，不提供逐条合规认定。",
    "priority": false,
    "sections": [
      {
        "title": "公开范围可以确认什么",
        "label": "来源解读",
        "paragraphs": [
          "ISO/IEC 42001:2023 规定建立、实施、维护和持续改进 AI 管理体系的要求，适用于提供或使用 AI 产品与服务的组织。其重点是组织如何管理 AI 相关活动，而不是为某个运行时防护产品提供效果认证。",
          "本资料库只核实公开范围与介绍，未取得付费标准全文。因此以下内容是实施准备建议，不是条款译文、逐项符合性解释或认证承诺。"
        ]
      },
      {
        "title": "管理体系与技术控制如何连接",
        "label": "研究分析",
        "paragraphs": [
          "技术控制处理具体动作，管理体系处理组织如何持续决定、实施和检查这些控制。例如，工具权限可以由代理限制，而谁批准权限、何时复审、出现事件后如何改进，则需要组织流程承接。",
          "两层脱节会造成两类问题：制度存在但未执行，或技术有效却没有责任、变更与持续验证机制。评估时应寻找制度与实际配置之间的对应证据。"
        ]
      },
      {
        "title": "采用前应准备的事实材料",
        "label": "验证建议",
        "paragraphs": [
          "建立 AI 系统和用途清单、负责人、外部依赖、数据流、权限与运行环境记录。选取一项重要变更，保留提出、风险评估、批准、测试、上线和复查的过程证据。",
          "汇总事件、例外、测试失败和改进任务，检查是否有人持续跟进。材料可以服务于后续正式标准评估，但不能仅因材料齐全就宣布达到认证条件。"
        ]
      },
      {
        "title": "与本资料库其他框架的组合",
        "label": "研究分析",
        "paragraphs": [
          "可用管理体系承担治理与持续改进，用 NIST 支持风险组织，用 OWASP 和 MITRE 辅助技术场景。它们作用不同，不能通过简单标签映射直接证明相互等价。",
          "正式开展符合性或认证工作，应取得合法版本全文、确定组织与系统边界，并由具备相应能力的人员按适用要求评估。本页保留为研究入口。"
        ]
      }
    ],
    "readingScope": "公开来源解读与本项目分析；非报告全文译文",
    "wordCount": 589,
    "noteUrl": "reading/ede58eac9aab.html"
  },
  {
    "id": "soc-alliance",
    "org": "ExtraHop 等",
    "kind": "产业倡议",
    "topic": "安全运营",
    "date": "2026-07-22",
    "title": "Agentic SOC Alliance：三层运营模型",
    "en": "Agentic SOC Alliance — Context, Harness, Model",
    "url": "https://www.extrahop.com/news/press-releases/agentic-soc-alliance",
    "status": "已读官方发布说明",
    "summary": "以 Context、Harness、Model 三层结构讨论机器速度的安全运营。",
    "points": [
      "Context 提供可发现、具备语义的证据上下文。",
      "Harness 负责约束与治理，Model 提供推理能力。",
      "发起成员包含 Armadin 和 Exaforce，适合作为两条路线的连接材料。"
    ],
    "question": "证据、执行约束和模型推理是否分离，谁对最终动作负责？",
    "limit": "产业联盟提出的架构倡议，不等同于 OWASP 指南或正式国际标准。",
    "priority": false,
    "sections": [
      {
        "title": "三层模型的提出",
        "label": "来源解读",
        "paragraphs": [
          "ExtraHop 的联盟发布说明以 Context、Harness、Model 讨论 Agentic SOC：上下文提供证据，执行框架提供约束与治理，模型提供推理。成员包含 Armadin 与 Exaforce，显示进攻验证与防守运营可能围绕共同证据体系协作。",
          "该材料属于产业倡议，不等同于完成共识程序的国际标准。联盟成员身份也不能证明产品已实现全部架构目标。"
        ]
      },
      {
        "title": "三层分开有什么价值",
        "label": "研究分析",
        "paragraphs": [
          "若上下文不可靠，模型可能推理流畅却结论错误；若执行约束薄弱，正确建议也可能在错误身份或错误资源上执行；若结果无法回流，下一次调查仍不知道上次处置是否有效。",
          "分层有助于独立判断故障原因，也便于更换模型或增加数据源。评估不应只问使用哪个模型，还要追问证据如何取得、执行如何约束、反馈怎样验证。"
        ]
      },
      {
        "title": "如何衔接进攻与防守",
        "label": "研究分析",
        "paragraphs": [
          "可以把授权进攻测试作为防守验证输入：进攻侧记录真实步骤和时间，防守侧检查哪些环节被采集、被检测、被调查和被阻断。两侧应使用可关联标识并约定停止条件。",
          "没有告警可能意味着路径未执行、遥测缺失、规则未触发或规则抑制，不能直接解释为防守失效。需要依照实际步骤逐段核对。"
        ]
      },
      {
        "title": "建议的联合验证",
        "label": "验证建议",
        "paragraphs": [
          "选一个低风险测试环境，固定攻击场景和防守控制。分别检查 Context 是否保留完整事件，Model 是否指出证据与不确定性，Harness 是否按授权执行并验证结果。",
          "改变模型或移除数据源时重新运行相同场景，观察哪层影响结果。保存人工接管记录，确保机器速度不会掩盖审批、回滚和责任边界。"
        ]
      }
    ],
    "readingScope": "公开来源解读与本项目分析；非报告全文译文",
    "wordCount": 595,
    "noteUrl": "reading/26a5ddcf8474.html"
  },
  {
    "id": "ai-silverfox",
    "org": "CNCERT / 火绒 / Microsoft 等多来源",
    "kind": "专题研究",
    "topic": "AI银狐",
    "date": "2026-11-10（专题更新）",
    "title": "AI银狐：AI信任链、软件投递与终端防护",
    "en": "AI Silver Fox: Trust Chains, Software Delivery and Endpoint Defense",
    "url": "https://huorong.cn/document/tech/vir_report/2047",
    "readingUrl": "topic-ai-silverfox.html",
    "status": "中文研究已归档 · 原始来源与阅读范围逐项列出",
    "summary": "区分AI品牌诱饵、推荐信任链、AI辅助制作与自主攻击证据，连接真实案例、端点检测和Agent权限控制。",
    "points": [
      "多来源归因与AI证据分级",
      "从推荐到执行的信任边界",
      "企业防护与POC验证方法"
    ],
    "question": "谁验证来源，谁批准执行，谁能证明控制实际生效？",
    "limit": "部分来源仅取得索引或摘要；非完整翻译，未运行恶意样本或验证厂商效果。",
    "priority": true,
    "wordCount": 4159,
    "sections": [
      {
        "title": "研究结论：AI改变了哪一段攻击链？",
        "label": "编辑判断",
        "paragraphs": [
          "“AI银狐”在本专题中指向一个研究问题：当用户通过AI寻找软件、Agent拥有下载或执行权限时，银狐相关投递活动怎样进入这条工作流。它不是本研究确认的新恶意软件家族名称，也不是“攻击已全面自主化”的结论。",
          "现有公开材料支持分别观察三种变化：AI产品成为诱饵；外部钓鱼页面经检索或AI结果影响用户决策；研究机构报告或怀疑攻击者用AI提高页面制作效率。另有安全厂商用AI分析和处置银狐，这是防守侧能力。四类证据不能相互替代。",
          "本期材料集中于2026年5月至9月披露的活动，并参照一篇10月更新的生态研究。11月10日是本专题研究更新日，不是这些事件的发生日。本文为多来源中文研究与编辑分析，不是任一报告的全文翻译。"
        ],
        "sourceLinks": [
          {
            "title": "火绒安全",
            "url": "https://huorong.cn/document/tech/vir_report/2047"
          },
          {
            "title": "CNCERT",
            "url": "https://www.cert.org.cn/publish/main/10/2026/20260522113326926111046/20260522113326926111046_.html"
          },
          {
            "title": "360",
            "url": "https://www.360.cn/n/13051.html"
          }
        ]
      },
      {
        "title": "先分清银狐、攻击分支与恶意软件",
        "label": "来源解读与编辑分析",
        "paragraphs": [
          "ThreatBook基于源码和基础设施研究，将银狐解释为多个独立运营者使用共享工具的生态，而非单一组织；该页列出A至E分组。Microsoft对其9月样本仅以中等置信度判断与公开银狐活动一致，没有归因为国家级行为者。",
          "因此，专题按“具体活动／样本／工具／基础设施／来源归因”记录。某台终端出现ValleyRAT，不足以把它和另一篇报道中的操作者、受害规模或动机直接合并；合法远控工具被滥用，也不等于该工具供应商参与攻击。",
          "跟踪时保留每份报告自己的分组名、置信度和观察窗口。基础设施共用与样本相似可作为关联线索，但结论应同时检查配置、投递时间、运营方式和独立遥测。页面更新日期也不能自动当成发现新攻击的日期。"
        ],
        "sourceLinks": [
          {
            "title": "ThreatBook Research Team",
            "url": "https://threatbook.io/blog/silver-fox-not-an-organization-but-a-tool-uncovering-the-underground-ecosystem"
          },
          {
            "title": "Microsoft Security / Defender Experts",
            "url": "https://www.microsoft.com/en-us/security/blog/2026/09/01/counterfeit-installers-system-compromise-tracking-deceptive-software-download-campaign/"
          }
        ]
      },
      {
        "title": "AI关联证据：哪些可以说，哪些仍待证明",
        "label": "证据分级",
        "paragraphs": [
          "第一层是“借AI品牌获客”。DomainTools在8月研究中记录仿冒DeepSeek、豆包等软件的投递域名，以及被滥用的云存储与跳转服务。这能支持AI工具是诱饵，不能证明恶意程序由AI生成，也不代表品牌厂商的正式分发渠道遭到入侵。",
          "第二层是“借AI结果建立信任”。火绒9月报告称，仿冒页面进入AI智能体返回结果，部分用户继而下载运行；其技术分析同时描述多阶段加载和终端防护对抗。本专题据此记录为研究者观察，不外推为所有助手、所有查询或当前版本都存在同样问题。",
          "第三层是“AI辅助制作”。CNCERT 5月风险提示使用“疑似利用AI工具”的措辞；360的9月材料则称钓鱼页面由AI批量生成。我们保留两者原有确定性，不将模板相似、域名批量注册或更新快，单独视为AI生成的充分证明。",
          "第四层是“自主Agent攻击”。本轮读取材料未充分展示由模型持续规划、调用工具、在反馈中调整行动并自主完成入侵的完整证据。后续需要模型调用记录、工具轨迹、任务边界和人工介入点，才能进一步判断。",
          "第五层是“用AI防银狐”。360还宣称AI完成发现、关联与处置。评估这类主张应索取原始告警、决策轨迹、实际执行回执、误报和回退记录；一个成功案例不能推导为普遍检出率。"
        ],
        "sourceLinks": [
          {
            "title": "DomainTools Investigations",
            "url": "https://dti.domaintools.com/research/chinese-malware-delivery-domains-part-v"
          },
          {
            "title": "火绒安全",
            "url": "https://huorong.cn/document/tech/vir_report/2047"
          },
          {
            "title": "CNCERT",
            "url": "https://www.cert.org.cn/publish/main/10/2026/20260522113326926111046/20260522113326926111046_.html"
          },
          {
            "title": "360",
            "url": "https://www.360.cn/n/13051.html"
          }
        ]
      },
      {
        "title": "代表性材料：从AI诱饵到终端驻留",
        "label": "案例解读",
        "paragraphs": [
          "2026-05-22，CNCERT风险提示：基于2月6日至5月4日注册的439个钓鱼域名分析，描述从钓鱼、下载到进程注入和远控的链路，并将AI提高页面制作效率标为疑似。本次只取得原始索引内容，未获取附件全文，故不补写其余统计或完整技术章节。",
          "2026-07-28，Cato日本案例：研究样本指向一家日本工业制造组织，结合合法程序侧加载、脆弱驱动滥用和恢复机制维持ValleyRAT运行。报告明确样本观察不能确定完整受害范围。这说明要关注加载上下文与防护健康度，不应把一个日本案例当作全部银狐活动画像。",
          "2026-08-31，Atos KCPhoenix：官方摘要描述伪装AnyDesk安装器、Windows安全中心状态操纵、BYOVD及最终ValleyRAT的KCP/UDP通信。全文附件本次未读；这里只用来说明“看起来受保护”与安全进程真实可用之间可能存在差距。",
          "2026-09-01，Microsoft假软件下载活动：其观察涉及中国业务和中文用户，强调伪造下载入口、持久化与削弱防护。作为另一来源，它支持这一类投递链需要跨浏览器、文件和终端关联调查，不能单凭品牌或单次签名检查下结论。",
          "2026-09-24，360材料：报告AI品牌仿冒站投递二次打包的RdViewer远控端，而不是所有案例都投放同一种RAT。其AI生成页面和自动处置说法均保留为厂商判断。",
          "2026-09-28，CNCERT甲蚁G01公告：原始索引明确提到SEO、竞价引流和AI批量复刻软件下载站。本次未取得技术附件，暂不把公告一句话展开成已读全文的攻击细节。"
        ],
        "sourceLinks": [
          {
            "title": "CNCERT",
            "url": "https://www.cert.org.cn/publish/main/10/2026/20260522113326926111046/20260522113326926111046_.html"
          },
          {
            "title": "Cato CTRL",
            "url": "https://www.catonetworks.com/blog/cato-ctrl-silverfox-evolves/"
          },
          {
            "title": "Atos Threat Research Center",
            "url": "https://www.atos.ai/en/news-insights/blog/TRC-campaign-kcphoenix-inside-silver-foxs-latest-valleyrat-chain"
          },
          {
            "title": "Microsoft Security / Defender Experts",
            "url": "https://www.microsoft.com/en-us/security/blog/2026/09/01/counterfeit-installers-system-compromise-tracking-deceptive-software-download-campaign/"
          },
          {
            "title": "360",
            "url": "https://www.360.cn/n/13051.html"
          },
          {
            "title": "CNCERT / 天融信",
            "url": "https://www.cert.org.cn/publish/main/10/2026/20260928181524758579103/20260928181524758579103_.html"
          }
        ]
      },
      {
        "title": "攻击链与信任边界：从推荐到执行",
        "label": "跨案例综合分析",
        "paragraphs": [
          "下列链路是用于防守分析的综合模型，不表示每个案例都包含所有步骤：搜索或AI问答 → 仿冒站／下载跳转 → 安装包落地 → 用户或Agent执行 → 加载与驻留 → 控制和业务滥用。不同案例使用不同载荷，调查时应以实际主机证据还原路径。",
          "第一道边界在“外部内容成为可信建议”。检索结果里的排名、页面的官方口吻，以及AI回答里的引用，都不能代替域名和软件发布者验证。需要保存原始问题、引用地址、完整跳转和最终下载地址；如果无法确定中间环节，应明确证据缺口。",
          "第二道边界在“建议变成主机动作”。拥有浏览网页的权限，不应自动意味着可以执行下载文件或提升权限。对具备操作能力的Agent，下载、运行、安装、提权应分别授权，并把目标来源、文件身份和批准范围绑定到这次动作。",
          "第三道边界在“信任合法组件”。这些研究反复出现可信软件或服务被滥用的情况。有效签名只能说明签名身份及完整性等属性，不能独自证明旁边加载的DLL、启动参数、控制配置和网络目的都安全。",
          "第四道边界在“端点还在上报”。Cato和Atos描述的防护对抗与恢复机制提示，调查不能只看某一时刻的进程是否存在。应把安全客户端心跳、策略变更、驱动加载、服务创建和外部网络记录结合起来判断。"
        ],
        "sourceLinks": [
          {
            "title": "DomainTools Investigations",
            "url": "https://dti.domaintools.com/research/chinese-malware-delivery-domains-part-v"
          },
          {
            "title": "Cato CTRL",
            "url": "https://www.catonetworks.com/blog/cato-ctrl-silverfox-evolves/"
          },
          {
            "title": "Atos Threat Research Center",
            "url": "https://www.atos.ai/en/news-insights/blog/TRC-campaign-kcphoenix-inside-silver-foxs-latest-valleyrat-chain"
          }
        ]
      },
      {
        "title": "检测与调查：从指标命中还原因果链",
        "label": "编辑建议，未在本地运行",
        "paragraphs": [
          "入口侧：关联浏览器访问、AI助手会话与下载日志，确定谁推荐了什么地址、实际取回了什么文件、哪个主体启动了它。对AI会话采集应按企业权限与数据保留规则实施；缺少会话记录时，不把猜测补成已观察事实。",
          "主机侧：组合检查下载目录的可执行文件、异常父子进程、同目录DLL加载、新增服务或任务、非预期的远控软件及防护策略变化。单一可疑路径或远控程序也可能有正当用途，需与安装来源、管理授权和执行时间关联。",
          "网络侧：将新注册或仿冒域名、重定向、对象存储下载与后续外联关联到同一设备和进程。合法云服务同时承载正常业务，宜围绕具体对象、路径与行为判断，避免仅凭共用云厂商域名就整段封禁。",
          "IOC侧：原始报告中的域名、IP、哈希和文件名用于回溯检索，必须保留来源和观察时间。基础设施可能轮换或被重新分配，原始配置也可能被运行时覆盖；“没命中公开IOC”不能排除感染，“命中一个旧IP”不能单独确诊。",
          "取证最小集：设备与用户、时间线、下载来源及跳转、文件哈希与签名、进程树、模块加载、持久化项、策略修改及外联记录。只有把这些证据对齐，才能区分网页暴露、下载未执行、已执行与实际失陷。"
        ],
        "sourceLinks": []
      },
      {
        "title": "防护与响应：四个可验证的控制位置",
        "label": "编辑建议",
        "paragraphs": [
          "软件入口：建立受维护的软件目录和可信来源路径，把员工对AI工具的需求纳入正式交付。对没有经过核实的安装包，先解决来源和发布者问题；不能因为某产品曾经没有桌面客户端，就永远沿用旧结论判断当前版本。",
          "执行权限：将业务终端和Agent工作区限制到必要权限。对下载文件执行、安装器启动、外部脚本和权限提升设置独立控制；对确有业务需求的远控工具，核对管理方、注册配置与使用记录。验证应覆盖用户手动运行和Agent代为运行两条路径。",
          "防护健康度：审计异常排除项、停用或降级、防护服务心跳中断，以及不在基线中的驱动和服务。Microsoft原文给出SmartScreen、网络保护、防篡改与XDR等建议；各控制的位置、许可、模式和部署前提不同，不能理解为单一开关保证全链路防御。",
          "确认感染后：由安全团队隔离受影响终端并保全证据，检查驻留和二次载荷，评估是否需要可信介质重装。同时从可信设备撤销相关会话并更新受影响凭据，排查聊天账号与业务系统的滥用。主机清理、身份恢复和业务止损需要分别确认。",
          "恢复验收：不仅确认恶意进程消失，还要核实策略恢复、客户端持续上报、异常外联停止、账号会话处理完成，以及没有相同入口继续投递。涉及付款或账号操作时，通过既有可信渠道核验业务请求。"
        ],
        "sourceLinks": [
          {
            "title": "Microsoft Security / Defender Experts",
            "url": "https://www.microsoft.com/en-us/security/blog/2026/09/01/counterfeit-installers-system-compromise-tracking-deceptive-software-download-campaign/"
          }
        ]
      },
      {
        "title": "对Agent安全产品研究的启示",
        "label": "编辑分析",
        "paragraphs": [
          "这个专题把“保护AI”与传统终端安全连接起来：Agent可能参与信息检索、下载和执行，最终风险却发生在操作系统和业务账号。仅检查模型输出的措辞，无法完整覆盖文件运行、远控注册和持久化。",
          "Microsoft Defender应拆开验收资产发现、Agent运行时检查、传统端点检测和XDR响应。银狐相关恶意文件的检测不自动证明提示注入被识别；Agent拒绝下载也不自动证明安全产品介入。需要关联具体策略、执行阻断和目标主机状态。",
          "与Zenity、Akto等运行时治理路线比较，可用同一受控任务问：谁识别下载意图，谁看到最终URL及文件，谁在执行前强制授权，旁路是否受限，谁记录证据。数据治理侧再检查远控后可访问的数据、凭据和文件共享范围。",
          "安全运营Agent可辅助聚类和梳理时间线，但处置权限同样需要边界。建议对隔离、封禁和会话撤销保留批准范围、执行回执与撤销机制，避免自动化把一个模糊的银狐标签扩展成大范围误处置。"
        ],
        "sourceLinks": []
      },
      {
        "title": "怎样在POC中验证，而不接触真实恶意载荷",
        "label": "验证方案建议",
        "paragraphs": [
          "使用组织自有测试页面、无害文件和明确标记的模拟下载地址，验证“AI搜索建议—下载—执行审批”的控制链。测试目标是确认动作与证据，而不是在员工设备运行研究报告中的木马或访问仍可能活跃的投递站。",
          "至少覆盖：AI给出未知来源链接；下载跳转到不同域；用户批准下载但没有批准执行；合法签名程序加载未授权组件的安全模拟；防护客户端离线或策略失效；远控工具由未授权主体注册。测试环境、系统版本和产品模式应固定。",
          "验收指标可分为调用前阻断比例、旁路覆盖、误报、调查证据完整度、发现到有效隔离的时间和恢复验证完成率。分母应是明确的任务集，而不是用一例成功截图或厂商宣传百分比替代。"
        ],
        "sourceLinks": []
      },
      {
        "title": "仍待核实的问题与后续更新",
        "label": "研究边界",
        "paragraphs": [
          "需要补齐的关键证据包括：AI推荐错误链接的可复现过程和适用版本；AI辅助建站的直接证据；不同分支之间的真实关联；厂商防护效果在相同任务集下的比较；CNCERT附件和Atos全文中的完整技术说明。",
          "本轮没有运行恶意样本、主动探测攻击者基础设施、上传企业资料或测试真实产品。原始资料阅读范围逐项列出。后续有新公告时将关联新闻，但只有证据改变时才修订专题结论，并保留修订日期。"
        ],
        "sourceLinks": []
      }
    ]
  },
  {
    "id": "exau-long-running-agents",
    "org": "Exaforce",
    "kind": "官方公告中文解读",
    "topic": "Agent攻防",
    "date": "2026-11-16公告 / 11-17研究",
    "title": "ExaU：长期安全Agent的权限、记忆与验收",
    "en": "",
    "url": "https://www.exaforce.com/blogs/introducing-exau",
    "readingUrl": "reading/e220e1177c69.html",
    "status": "中文编辑解读 · 非完整译稿 · 未独立实测",
    "summary": "从一次性助手走向长期安全工作：检查权限继承、共享记忆、定时任务撤权与动作证据。",
    "points": [
      "来源与状态",
      "机制和证据边界",
      "验证与采购问题"
    ],
    "question": "证据实际覆盖什么，哪些结论仍不能作出？",
    "limit": "见正文来源范围与待核实项；不把公告或试点当成完整验证。",
    "priority": true,
    "wordCount": 1029,
    "sections": []
  },
  {
    "id": "embedded-assessment-independence",
    "org": "OpenAI / Apollo Research",
    "kind": "官方公告中文解读",
    "topic": "标准与框架",
    "date": "2026-11-16公告 / 11-17研究",
    "title": "嵌入式评估：访问、披露与独立性",
    "en": "",
    "url": "https://openai.com/index/our-first-phase-of-embedded-assessments/",
    "readingUrl": "reading/61471bd6c20f.html",
    "status": "中文编辑解读 · 非完整译稿 · 未独立实测",
    "summary": "从首期协议理解外部评估的证据范围，区分试点安排、安全结论与正式认证。",
    "points": [
      "来源与状态",
      "机制和证据边界",
      "验证与采购问题"
    ],
    "question": "证据实际覆盖什么，哪些结论仍不能作出？",
    "limit": "见正文来源范围与待核实项；不把公告或试点当成完整验证。",
    "priority": true,
    "wordCount": 1325,
    "sections": []
  }
];

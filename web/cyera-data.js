window.PRODUCT_RESEARCH = {
  "slug": "cyera",
  "name": "Cyera",
  "tagline": "从数据事实，走向身份与 Agent 的可控行动。",
  "lead": "围绕 DSPM、Omni DLP、Access Trail、Agent Guardian 与修复流程，连接敏感数据、访问关系和运行时控制。",
  "channel": "https://www.youtube.com/channel/UCQZhCZIe6xRDjCkfzzwPBCg/videos",
  "updated": "2026-11-03",
  "flow": [
    [
      "DISCOVER",
      "发现与分类",
      "敏感性及数据位置"
    ],
    [
      "CONTEXT",
      "关联上下文",
      "身份、访问和使用"
    ],
    [
      "CONTROL",
      "执行控制",
      "DLP 与 Agent 策略"
    ],
    [
      "REMEDIATE",
      "修复与验证",
      "负责人和实际结果"
    ]
  ],
  "sources": {
    "platform": {
      "title": "统一平台",
      "url": "https://www.cyera.com/platform"
    },
    "dspm": {
      "title": "DSPM 产品说明",
      "url": "https://www.cyera.com/platform/dspm"
    },
    "dlp": {
      "title": "Omni DLP",
      "url": "https://www.cyera.com/platform/data-loss-prevention"
    },
    "agent": {
      "title": "Agent Guardian",
      "url": "https://www.cyera.com/platform/agent-guardian"
    },
    "access": {
      "title": "Access Trail",
      "url": "https://www.cyera.com/platform/access-trail"
    },
    "remediate": {
      "title": "修复能力",
      "url": "https://www.cyera.com/solutions/remediation"
    },
    "integrations": {
      "title": "集成目录",
      "url": "https://www.cyera.com/integrations"
    },
    "managed": {
      "title": "DataWatcher",
      "url": "https://www.cyera.com/datawatcher"
    },
    "pricing": {
      "title": "定价与方案说明",
      "url": "https://www.cyera.com/pricing"
    },
    "videos": {
      "title": "官方资源库",
      "url": "https://www.cyera.com/resources"
    },
    "report": {
      "title": "SACR 成熟度报告",
      "url": "https://www.cyera.com/reports/sacr-the-new-data-security-maturity-model-for-the-ai-era"
    }
  },
  "sections": [
    {
      "title": "产品范围：数据、身份与 Agent 的连接",
      "label": "官方材料解读",
      "paragraphs": [
        "Cyera 当前平台把数据保护、身份治理和 Agent 安全连接起来。主要产品方向包括 DSPM、Omni DLP、身份相关能力、Agent Guardian 和 DataWatcher 服务。评估时应明确购买与部署的具体模块，避免将统一平台的全部营销能力当作单一套餐交付。",
        "它的基础切入点仍是数据事实：数据是什么、位于哪里、谁能访问，以及怎样使用。对我们研究的意义，是将数据敏感性与实际身份、工具和执行上下文连接，而不是仅给输入输出增加一个分类标签。"
      ],
      "sources": [
        "platform"
      ]
    },
    {
      "title": "DSPM：发现、分类与基于上下文的风险排序",
      "label": "官方材料解读",
      "paragraphs": [
        "DSPM 页面描述以无代理架构发现和分类结构化、非结构化数据，并结合敏感性、业务目的、身份、访问活动及暴露排序风险。厂商宣称分类适应业务且减少人工调优，但真实精确率与召回率仍需用自身数据测量。",
        "验证集应同时包含常见监管数据、企业专有资料和容易误判的正常文件。检查扫描覆盖、权限失败、对象版本和分类更新延迟；不要只以“扫描记录数”判断敏感资产是否已被持续管理。"
      ],
      "sources": [
        "dspm"
      ]
    },
    {
      "title": "Omni DLP：情报与既有执行点如何衔接",
      "label": "官方材料与研究分析",
      "paragraphs": [
        "Omni DLP 的产品方向是汇聚 DLP 工作、形成可行动摘要及策略建议，改善分析和调优效率。视频目录还提供 Purview DLP 等集成演示入口，可用于观察数据上下文怎样进入既有控制。",
        "评估时把发现、建议、配置发布和实际阻断四步分开。一次模型建议合理，并不表示目标 DLP 已加载正确版本；需要回到原执行渠道测试正常行为与违规行为，确认减少噪声没有扩大漏报。"
      ],
      "sources": [
        "dlp",
        "videos"
      ]
    },
    {
      "title": "Access Trail：访问事实与授权范围的差别",
      "label": "官方产品入口与研究分析",
      "paragraphs": [
        "Access Trail 是数据访问审计和监测方向的模块。阅读这类能力时，应区分可访问关系与实际访问行为：前者说明授权的潜在范围，后者需要在明确时间范围内由日志或审计记录证明。",
        "建议选一个数据集检查谁能够访问、谁实际使用、通过什么身份和工具，以及这些记录的覆盖起始时间。没有访问记录可能意味着未使用，也可能是未采集；系统应说明区别，不能据此自动认定权限无用。"
      ],
      "sources": [
        "access"
      ]
    },
    {
      "title": "Agent Guardian：发现、治理、保护与验证",
      "label": "官方材料解读",
      "paragraphs": [
        "Agent Guardian 页面用 Discover、Govern、Protect、Validate 组织能力，关联 Agent 与模型、工具、MCP、知识库及数据源；同时描述姿态与运行时策略、风险行为告警及对危险动作的控制。",
        "页面还列出浏览器、自建 Agent 和工作站等部署方向。正式验证需逐类核对接入点：哪些依赖日志，哪些通过插件或网关，哪些能阻止动作。列出资产不等于已经处于执行路径，红队测试记录也需要说明具体验证范围。"
      ],
      "sources": [
        "agent"
      ]
    },
    {
      "title": "修复流程：从风险清单到可验证的变化",
      "label": "官方产品方向与研究分析",
      "paragraphs": [
        "修复产品及平台材料强调原生动作、自动化工作流、业务负责人参与和审计。对数据问题，变更可能涉及共享范围、权限、标签或加密，影响业务的程度并不相同。",
        "建议从一个低风险可撤销动作开始，保留修复前状态、审批、参数、执行回执及复查。通知已发出或工单已关闭，仅表示流程阶段变化；验收应证明原访问主体的实际能力和暴露程度确实改变。"
      ],
      "sources": [
        "remediate"
      ]
    },
    {
      "title": "生态集成：上下文输出、工单与防护连接",
      "label": "官方集成说明",
      "paragraphs": [
        "官方集成目录分别介绍将上下文送入 Sentinel、创建 Jira／ServiceNow 工单、向 Slack 通知数据负责人，以及将 Claude Enterprise 与 Agent Guardian 连接。不同条目的读写方向和目标并不相同。",
        "需要逐个确认哪个模块、版本和授权范围适用，是否是已发布能力，以及异常时有无重试和去重。创建工单是工作流集成，将策略发布到执行系统则属于另一层控制，二者不应混写为“自动修复”。"
      ],
      "sources": [
        "integrations"
      ]
    },
    {
      "title": "部署方式与数据边界：按模块核实",
      "label": "官方 FAQ 与分析",
      "paragraphs": [
        "DSPM FAQ 明确介绍可在客户云或本地环境部署以让敏感数据留在原处，并提供 SaaS 方式。这比单纯猜测部署形态更具体，但仍需要核实哪些组件、元数据、分类结果与诊断信息会跨边界。",
        "同一平台中的 DSPM 部署说明不能直接外推至 Agent Guardian、浏览器扩展和托管服务。应获取模块级架构、模型推理位置、密钥与凭据处理、出站流量及支持访问方式，分别验证数据驻留和运营边界。"
      ],
      "sources": [
        "dspm",
        "agent"
      ]
    },
    {
      "title": "DataWatcher 与定价：产品能力和服务责任分开",
      "label": "官方材料解读",
      "paragraphs": [
        "DataWatcher 是管理和运营平台的服务方向，官网强调帮助减少数据风险及持续运营。定价页介绍 DSPM 和 DLP 两类方案及可选附加项，具体金额需定制报价；不能因为存在定价页就认为公开了标准单价。",
        "服务采购还应确认谁认领问题、谁能批准权限变更、谁执行和验证，以及客户侧必须投入的人力。还需明确扫描量、连接数、历史保留、追加模块和托管响应分别如何计费。"
      ],
      "sources": [
        "managed",
        "pricing"
      ]
    },
    {
      "title": "演示与研究资料：建议的阅读顺序",
      "label": "资料阅读建议",
      "paragraphs": [
        "先看 DSPM 平台 Demo 了解清单、分类与问题视图，再看 Omni DLP 和 Purview 集成，最后看 Agent Guardian、Access Trail 及身份集成。产品月更可补充近期变化，短宣传片与长操作演示应分开使用。",
        "已有 SACR 全文和中文译稿可作为成熟度视角的背景资料。它解释组织如何走向修复闭环，并不构成对每个 Cyera 模块的实测证明。本页视频只核实入口、标题及可见时长，没有完整观看或复核所有界面步骤。"
      ],
      "sources": [
        "videos",
        "report"
      ]
    },
    {
      "title": "Demo 提问与本项目的可验证借鉴",
      "label": "验证建议",
      "paragraphs": [
        "要求现场展示敏感资源发现、分类证据、授权与实际访问、风险排序、处置分配和修复后复查。然后把同一资源放进一个 Agent 任务，检查其访问和工具行为能否遵循任务范围并被审计。",
        "补充权限变更后缓存延迟、无标签文件、连接器失权、影子 Agent 和绕过控制的测试。对本项目，可借鉴数据上下文与行动约束联动；最终能力仍由真实保护域、控制点和结果证据决定。"
      ],
      "sources": [
        "dspm",
        "agent",
        "remediate"
      ]
    }
  ],
  "videos": [
    {
      "id": "SIPa8cVVcS8",
      "title": "The Landing | Product Innovations from Cyera | September 2026",
      "zh": "The Landing | Product Innovations from Cyera | September 2026",
      "url": "https://www.youtube.com/watch?v=SIPa8cVVcS8",
      "duration": "5:13",
      "category": "产品与集成视频",
      "note": "关注具体模块、发布时间与依赖的控制点，产品发布说明不替代现场复测。",
      "format": "YouTube 视频",
      "verified": "官方频道标题、时长与直链已核实；未完整观看",
      "order": 1
    },
    {
      "id": "lnyUtOyZRFw",
      "title": "The Landing | Product Innovations from Cyera | August 2026",
      "zh": "The Landing | Product Innovations from Cyera | August 2026",
      "url": "https://www.youtube.com/watch?v=lnyUtOyZRFw",
      "duration": "5:48",
      "category": "产品与集成视频",
      "note": "关注具体模块、发布时间与依赖的控制点，产品发布说明不替代现场复测。",
      "format": "YouTube 视频",
      "verified": "官方频道标题、时长与直链已核实；未完整观看",
      "order": 2
    },
    {
      "id": "-JgdTHabiC8",
      "title": "Microsoft 365 Copilot Is Live: Here's What's Hiding in Your Sensitive Data",
      "zh": "Microsoft 365 Copilot Is Live: Here's What's Hiding in Your Sensitive Data",
      "url": "https://www.youtube.com/watch?v=-JgdTHabiC8",
      "duration": "1:03",
      "category": "产品与集成视频",
      "note": "关注具体模块、发布时间与依赖的控制点，产品发布说明不替代现场复测。",
      "format": "YouTube 视频",
      "verified": "官方频道标题、时长与直链已核实；未完整观看",
      "order": 3
    },
    {
      "id": "Xc4QcmJtRZ4",
      "title": "Introducing Cyera Agent Guardian",
      "zh": "Introducing Cyera Agent Guardian",
      "url": "https://www.youtube.com/watch?v=Xc4QcmJtRZ4",
      "duration": "0:48",
      "category": "产品与集成视频",
      "note": "关注具体模块、发布时间与依赖的控制点，产品发布说明不替代现场复测。",
      "format": "YouTube 视频",
      "verified": "官方频道标题、时长与直链已核实；未完整观看",
      "order": 4
    },
    {
      "id": "WobR-pc7-KM",
      "title": "The Landing | Product Innovations from Cyera | July 2026",
      "zh": "The Landing | Product Innovations from Cyera | July 2026",
      "url": "https://www.youtube.com/watch?v=WobR-pc7-KM",
      "duration": "4:44",
      "category": "产品与集成视频",
      "note": "关注具体模块、发布时间与依赖的控制点，产品发布说明不替代现场复测。",
      "format": "YouTube 视频",
      "verified": "官方频道标题、时长与直链已核实；未完整观看",
      "order": 5
    },
    {
      "id": "LlkeCERXWP8",
      "title": "Cyera + Snowflake: Govern every agent, secure every dataset, move at the speed of AI",
      "zh": "Cyera + Snowflake: Govern every agent, secure every dataset, move at the speed of AI",
      "url": "https://www.youtube.com/watch?v=LlkeCERXWP8",
      "duration": "1:03",
      "category": "产品与集成视频",
      "note": "关注具体模块、发布时间与依赖的控制点，产品发布说明不替代现场复测。",
      "format": "YouTube 视频",
      "verified": "官方频道标题、时长与直链已核实；未完整观看",
      "order": 6
    },
    {
      "id": "xJFmr_LkMRo",
      "title": "Cyera and Anthropic integration brings real-time AI security to Claude Enterprise",
      "zh": "Cyera and Anthropic integration brings real-time AI security to Claude Enterprise",
      "url": "https://www.youtube.com/watch?v=xJFmr_LkMRo",
      "duration": "0:31",
      "category": "产品与集成视频",
      "note": "关注具体模块、发布时间与依赖的控制点，产品发布说明不替代现场复测。",
      "format": "YouTube 视频",
      "verified": "官方频道标题、时长与直链已核实；未完整观看",
      "order": 7
    },
    {
      "id": "Ro62K7UeD3A",
      "title": "The Landing | Product Innovations from Cyera | May 2026",
      "zh": "The Landing | Product Innovations from Cyera | May 2026",
      "url": "https://www.youtube.com/watch?v=Ro62K7UeD3A",
      "duration": "5:01",
      "category": "产品与集成视频",
      "note": "关注具体模块、发布时间与依赖的控制点，产品发布说明不替代现场复测。",
      "format": "YouTube 视频",
      "verified": "官方频道标题、时长与直链已核实；未完整观看",
      "order": 8
    },
    {
      "id": "GHelTr366eM",
      "title": "AI Data Security: Why AI Threat Prevention Depends on Data",
      "zh": "AI Data Security: Why AI Threat Prevention Depends on Data",
      "url": "https://www.youtube.com/watch?v=GHelTr366eM",
      "duration": "0:58",
      "category": "产品与集成视频",
      "note": "关注具体模块、发布时间与依赖的控制点，产品发布说明不替代现场复测。",
      "format": "YouTube 视频",
      "verified": "官方频道标题、时长与直链已核实；未完整观看",
      "order": 9
    },
    {
      "id": null,
      "title": "Cyera's AI-Native DSPM Platform Demo",
      "zh": "Cyera's AI-Native DSPM Platform Demo",
      "url": "https://www.cyera.com/videos/cyeras-ai-native-dspm-platform-demo",
      "duration": "官网入口 · 时长未核实",
      "category": "官网演示资料",
      "note": "优先用此页核对产品界面与模块关系；官网入口已核实，未完整观看。",
      "format": "官网视频页",
      "verified": "官网资源链接及标题已核实；时长未核实",
      "order": 10
    },
    {
      "id": null,
      "title": "Meet Cyera Agent Guardian",
      "zh": "Meet Cyera Agent Guardian",
      "url": "https://www.cyera.com/videos/meet-cyera-agent-guardian",
      "duration": "官网入口 · 时长未核实",
      "category": "官网演示资料",
      "note": "优先用此页核对产品界面与模块关系；官网入口已核实，未完整观看。",
      "format": "官网视频页",
      "verified": "官网资源链接及标题已核实；时长未核实",
      "order": 11
    },
    {
      "id": null,
      "title": "Cyera Browser Shield",
      "zh": "Cyera Browser Shield",
      "url": "https://www.cyera.com/videos/cyera-browser-shield",
      "duration": "官网入口 · 时长未核实",
      "category": "官网演示资料",
      "note": "优先用此页核对产品界面与模块关系；官网入口已核实，未完整观看。",
      "format": "官网视频页",
      "verified": "官网资源链接及标题已核实；时长未核实",
      "order": 12
    },
    {
      "id": null,
      "title": "Announcing Cyera Access Trail",
      "zh": "Announcing Cyera Access Trail",
      "url": "https://www.cyera.com/videos/announcing-cyera-access-trail",
      "duration": "官网入口 · 时长未核实",
      "category": "官网演示资料",
      "note": "优先用此页核对产品界面与模块关系；官网入口已核实，未完整观看。",
      "format": "官网视频页",
      "verified": "官网资源链接及标题已核实；时长未核实",
      "order": 13
    },
    {
      "id": null,
      "title": "Cyera + Microsoft Purview DLP Demo: Accelerate Purview",
      "zh": "Cyera + Microsoft Purview DLP Demo: Accelerate Purview",
      "url": "https://www.cyera.com/videos/cyera-microsoft-purview-dlp-demo",
      "duration": "官网入口 · 时长未核实",
      "category": "官网演示资料",
      "note": "优先用此页核对产品界面与模块关系；官网入口已核实，未完整观看。",
      "format": "官网视频页",
      "verified": "官网资源链接及标题已核实；时长未核实",
      "order": 14
    },
    {
      "id": null,
      "title": "Cyera + Microsoft Copilot Demo: Secure AI Adoption",
      "zh": "Cyera + Microsoft Copilot Demo: Secure AI Adoption",
      "url": "https://www.cyera.com/videos/cyera-microsoft-copilot-demo",
      "duration": "官网入口 · 时长未核实",
      "category": "官网演示资料",
      "note": "优先用此页核对产品界面与模块关系；官网入口已核实，未完整观看。",
      "format": "官网视频页",
      "verified": "官网资源链接及标题已核实；时长未核实",
      "order": 15
    },
    {
      "id": null,
      "title": "Cyera + Okta Demo",
      "zh": "Cyera + Okta Demo",
      "url": "https://www.cyera.com/videos/cyera-okta-demo",
      "duration": "官网入口 · 时长未核实",
      "category": "官网演示资料",
      "note": "优先用此页核对产品界面与模块关系；官网入口已核实，未完整观看。",
      "format": "官网视频页",
      "verified": "官网资源链接及标题已核实；时长未核实",
      "order": 16
    },
    {
      "id": null,
      "title": "Cyera + Saviynt Demo",
      "zh": "Cyera + Saviynt Demo",
      "url": "https://www.cyera.com/videos/cyera-saviynt-demo",
      "duration": "官网入口 · 时长未核实",
      "category": "官网演示资料",
      "note": "优先用此页核对产品界面与模块关系；官网入口已核实，未完整观看。",
      "format": "官网视频页",
      "verified": "官网资源链接及标题已核实；时长未核实",
      "order": 17
    },
    {
      "id": null,
      "title": "Cyera + Cohesity Demo",
      "zh": "Cyera + Cohesity Demo",
      "url": "https://www.cyera.com/videos/cyera-cohesity-demo",
      "duration": "官网入口 · 时长未核实",
      "category": "官网演示资料",
      "note": "优先用此页核对产品界面与模块关系；官网入口已核实，未完整观看。",
      "format": "官网视频页",
      "verified": "官网资源链接及标题已核实；时长未核实",
      "order": 18
    },
    {
      "id": null,
      "title": "AI-Powered Data Classification for Unstructured Data",
      "zh": "AI-Powered Data Classification for Unstructured Data",
      "url": "https://www.cyera.com/videos/ai-powered-data-classification-for-unstructured-data",
      "duration": "官网入口 · 时长未核实",
      "category": "官网演示资料",
      "note": "优先用此页核对产品界面与模块关系；官网入口已核实，未完整观看。",
      "format": "官网视频页",
      "verified": "官网资源链接及标题已核实；时长未核实",
      "order": 19
    },
    {
      "id": null,
      "title": "Operationalizing DSPM with Cyera's DataWatcher",
      "zh": "Operationalizing DSPM with Cyera's DataWatcher",
      "url": "https://www.cyera.com/videos/operationalizing-dspm-with-cyeras-datawatcher",
      "duration": "官网入口 · 时长未核实",
      "category": "官网演示资料",
      "note": "优先用此页核对产品界面与模块关系；官网入口已核实，未完整观看。",
      "format": "官网视频页",
      "verified": "官网资源链接及标题已核实；时长未核实",
      "order": 20
    },
    {
      "id": null,
      "title": "Introducing DataPort: Cyera’s MCP-powered gateway to enterprise-grade reporting, integration, and decision-making",
      "zh": "Introducing DataPort: Cyera’s MCP-powered gateway to enterprise-grade reporting, integration, and decision-making",
      "url": "https://www.cyera.com/videos/introducing-dataport",
      "duration": "官网入口 · 时长未核实",
      "category": "官网演示资料",
      "note": "优先用此页核对产品界面与模块关系；官网入口已核实，未完整观看。",
      "format": "官网视频页",
      "verified": "官网资源链接及标题已核实；时长未核实",
      "order": 21
    }
  ],
  "tours": [
    {
      "title": "已归档的 SACR 成熟度报告",
      "url": "../资料库/Cyera/AI时代的数据安全成熟度模型-英文原版.pdf",
      "note": "本地英文 PDF，作为组织成熟度背景。"
    },
    {
      "title": "完整中文正文译稿",
      "url": "../资料库/Cyera/AI时代的数据安全成熟度模型-中文译稿.md",
      "note": "已有正文译稿；模型与厂商产品实测分开使用。"
    }
  ]
};

// 60道原创情境，逐题标注理论关联；不冒充真人说过这些题面。
export const dimensions=[
  {
    "id": "choice",
    "name": "自己拿主意",
    "high": "更常按自己的需要选",
    "low": "更常参考外部标准",
    "chapter": "ch04"
  },
  {
    "id": "action",
    "name": "真去干点啥",
    "high": "更常先做一个具体动作",
    "low": "更常先整理、表态和准备",
    "chapter": "ch13"
  },
  {
    "id": "evidence",
    "name": "梗归梗，证据呢",
    "high": "更常核对来源和条件",
    "low": "更常先凭印象和气势判断",
    "chapter": "ch02"
  },
  {
    "id": "space",
    "name": "给自己留条退路",
    "high": "更常允许休息、拒绝和不同选择",
    "low": "更常追求统一安排与持续产出",
    "chapter": "ch14"
  }
];
export const theories=[
  {
    "id": "boji",
    "name": "薄肌理论"
  },
  {
    "id": "dashui",
    "name": "大水理论"
  },
  {
    "id": "hu",
    "name": "户晨风 · 苹果/安卓梗"
  },
  {
    "id": "sun",
    "name": "孙学"
  }
];
export const questions=[
  {
    "theme": "boji",
    "dimension": "choice",
    "chapter": "ch01",
    "concept": "身体不是入场券",
    "prompt": "薄肌群开始查腹肌，没六块不让发言。你怎么进群？",
    "options": [
      {
        "text": "先潜水，等练出点效果再发言",
        "score": 2
      },
      {
        "text": "发张旧照，先保住群籍",
        "score": 1
      },
      {
        "text": "马上买腹肌贴，身份先到位",
        "score": 0
      },
      {
        "text": "我来练身体，不来办腹肌身份证",
        "score": 3
      }
    ],
    "anchor": "reserve",
    "connection": "把身体能力被抬成社会入场券的夸张往前推一步。",
    "high": "你把训练和群里评身份分开了。腹肌没必要兼任身份证。",
    "low": "你更想先取得圈里的认可，训练目标容易被群规接管。",
    "image": null,
    "imageText": "",
    "id": "t01",
    "section": "终于有一个地方能加重量",
    "kind": "观点冲突",
    "reference": {
      "label": "访谈：身体与战略储备",
      "time": "01:05:26",
      "url": "https://www.bilibili.com/video/BV1fcHD6cEw3/?t=3926",
      "status": "pending",
      "note": "第三方转录定位，原声和逐字归属待核",
      "transcript": "https://github.com/AayuBal/shaoailun-sunyuchen-podcast/blob/main/%E5%85%A8%E6%96%87.md"
    }
  },
  {
    "theme": "boji",
    "dimension": "choice",
    "chapter": "ch01",
    "concept": "薄肌六个月预订单",
    "prompt": "身体还是旧版本，薄肌群却已经给你发六个月预订单。你认哪张进度条？",
    "options": [
      {
        "text": "看真实状态和自己的目标，时间到了也不硬认交付",
        "score": 3
      },
      {
        "text": "先记录实际变化，过段时间再评估",
        "score": 2
      },
      {
        "text": "先保留预订单，不然群里不好解释",
        "score": 1
      },
      {
        "text": "群里说交付就是交付，肚子属于显示延迟",
        "score": 0
      }
    ],
    "anchor": "health",
    "connection": "转录约02:52:04谈认知先行与未来六个月的身体目标，紧邻执行条件；不是效果保证。",
    "high": "你先看自己的实际变化和需要，预订单没有提前变成验收单。",
    "low": "你更想先保住版本承诺，实际变化可能要等口号先下台。",
    "image": null,
    "imageText": "",
    "id": "t02",
    "section": "终于有一个地方能加重量",
    "kind": "生活情境",
    "reference": {
      "label": "访谈：认知先行与六个月目标",
      "time": "02:52:04",
      "url": "https://www.bilibili.com/video/BV1fcHD6cEw3/?t=10324",
      "status": "pending",
      "note": "第三方转录约02:52:04；原段保留执行条件，非无条件身体变化承诺。原声待核。",
      "transcript": "https://github.com/AayuBal/shaoailun-sunyuchen-podcast/blob/main/%E5%85%A8%E6%96%87.md"
    }
  },
  {
    "theme": "boji",
    "dimension": "choice",
    "chapter": "ch03",
    "concept": "理论套餐",
    "prompt": "薄肌教程后面突然捆绑英语课、发型课和人生课。你点哪项？",
    "options": [
      {
        "text": "全买。都薄肌了，人生必须配套",
        "score": 0
      },
      {
        "text": "只拿现在用得上的，套餐先别端上来",
        "score": 3
      },
      {
        "text": "先试听一项，合适再说",
        "score": 2
      },
      {
        "text": "收藏整个套餐，等打折",
        "score": 1
      }
    ],
    "anchor": "health",
    "connection": "访谈把薄肌、AI、语言和个人成长连接起来；情境检验是否整套照收。",
    "high": "你把套餐拆开了。练肩不自动附赠一套人生。",
    "low": "你更愿意一次接收完整方案，省了挑选，也容易多买问题。",
    "image": null,
    "imageText": "",
    "id": "t03",
    "section": "把志愿表拍成片头",
    "kind": "观点冲突",
    "reference": {
      "label": "访谈：身体的长期管理",
      "time": "00:52:06",
      "url": "https://www.bilibili.com/video/BV1fcHD6cEw3/?t=3126",
      "status": "pending",
      "note": "第三方转录主题归纳，不是医学结论",
      "transcript": "https://github.com/AayuBal/shaoailun-sunyuchen-podcast/blob/main/%E5%85%A8%E6%96%87.md"
    }
  },
  {
    "theme": "boji",
    "dimension": "choice",
    "chapter": "ch01",
    "concept": "主动与被动薄肌",
    "prompt": "画里的人也很壮。薄肌群却说：工作练出来的不算版本答案。你想先问？",
    "options": [
      {
        "text": "先找一张更像博主的照片",
        "score": 1
      },
      {
        "text": "让他换套衣服，先完成薄肌认证",
        "score": 0
      },
      {
        "text": "他自己想要什么，身体状态怎样",
        "score": 3
      },
      {
        "text": "群里的薄肌定义到底是哪版",
        "score": 2
      }
    ],
    "anchor": "active",
    "connection": "借访谈后段主动与被动身体管理的区分，追问选择权，避免贬低劳动者。",
    "high": "你先问人和处境，没让外观标签一票决定身份。",
    "low": "你先套圈内模板。图可以分类，人未必需要过审。",
    "image": "fig003",
    "imageText": "原画集《思想者》主题二创：人物保持沉思坐姿，手里有物件。此图不证明其职业、体能或训练经历。",
    "id": "t04",
    "section": "终于有一个地方能加重量",
    "kind": "看图选择",
    "reference": {
      "label": "访谈：主动与被动身体管理",
      "time": "02:50:47",
      "url": "https://www.bilibili.com/video/BV1fcHD6cEw3/?t=10247",
      "status": "pending",
      "note": "第三方转录后段主题，具体落点待原片核对",
      "transcript": "https://github.com/AayuBal/shaoailun-sunyuchen-podcast/blob/main/%E5%85%A8%E6%96%87.md"
    }
  },
  {
    "theme": "boji",
    "dimension": "action",
    "chapter": "ch13",
    "concept": "理论与第一次行动",
    "prompt": "你看完四小时薄肌访谈，已经能讲国力了。今晚先干什么？",
    "options": [
      {
        "text": "把想问的训练问题写下来",
        "score": 2
      },
      {
        "text": "给访谈再做一份三万字笔记",
        "score": 1
      },
      {
        "text": "先在群里宣布进入战略储备阶段",
        "score": 0
      },
      {
        "text": "查清适合自己的入门方式，做一个能完成的小安排",
        "score": 3
      }
    ],
    "anchor": "reserve",
    "connection": "把战略储备的宏大表述落到一个人实际能做的事，不提供训练处方。",
    "high": "你把大词落到一步小事。国力先等会儿，日程终于动了。",
    "low": "你先做了宣言或整理，行动还没获得排期。",
    "image": null,
    "imageText": "",
    "id": "t05",
    "section": "会解释的人也可能忘记发消息",
    "kind": "观点冲突",
    "reference": {
      "label": "访谈：身体与战略储备",
      "time": "01:05:26",
      "url": "https://www.bilibili.com/video/BV1fcHD6cEw3/?t=3926",
      "status": "pending",
      "note": "第三方转录定位，原声和逐字归属待核",
      "transcript": "https://github.com/AayuBal/shaoailun-sunyuchen-podcast/blob/main/%E5%85%A8%E6%96%87.md"
    }
  },
  {
    "theme": "boji",
    "dimension": "action",
    "chapter": "ch07",
    "concept": "AI训练秘书",
    "prompt": "你让AI做薄肌计划，它先问睡眠和时间，你先给它发了自拍。下一步？",
    "options": [
      {
        "text": "补充限制，核对建议再决定怎么用",
        "score": 3
      },
      {
        "text": "先问清它依据什么安排",
        "score": 2
      },
      {
        "text": "继续换模型，找一个夸我有天赋的",
        "score": 1
      },
      {
        "text": "把十份计划叠起来，薄肌必须加速",
        "score": 0
      }
    ],
    "anchor": "ai",
    "connection": "访谈谈用AI管理饮食、训练和生活；情境强调输入限制与人工判断。",
    "high": "你补了真实条件。AI终于不用看脸猜作息了。",
    "low": "你在寻找更爽的方案或反馈，可执行安排还没确定。",
    "image": null,
    "imageText": "",
    "id": "t06",
    "section": "镜头外的螺丝",
    "kind": "生活情境",
    "reference": {
      "label": "访谈：AI辅助生活与决策",
      "time": "00:07:58",
      "url": "https://www.bilibili.com/video/BV1fcHD6cEw3/?t=478",
      "status": "pending",
      "note": "第三方转录主题归纳，原声待核",
      "transcript": "https://github.com/AayuBal/shaoailun-sunyuchen-podcast/blob/main/%E5%85%A8%E6%96%87.md"
    }
  },
  {
    "theme": "boji",
    "dimension": "action",
    "chapter": "ch01",
    "concept": "收藏不算训练",
    "prompt": "你的薄肌收藏夹已超过卧推重量。健身房就在楼下，你会？",
    "options": [
      {
        "text": "把收藏夹改名为训练日志，先完成转型",
        "score": 0
      },
      {
        "text": "先确认入门和安全问题，再安排一次体验",
        "score": 3
      },
      {
        "text": "问朋友能不能陪我了解器械",
        "score": 2
      },
      {
        "text": "再看一遍最佳新人计划",
        "score": 1
      }
    ],
    "anchor": "health",
    "connection": "从访谈的身体管理主张转向真实安排，区分看教程和实施。",
    "high": "你准备把收藏变成日程，进步终于不用靠文件夹增重。",
    "low": "你先继续准备或改名，收藏夹的肌肉还在领先。",
    "image": null,
    "imageText": "",
    "id": "t07",
    "section": "终于有一个地方能加重量",
    "kind": "观点冲突",
    "reference": {
      "label": "访谈：身体的长期管理",
      "time": "00:52:06",
      "url": "https://www.bilibili.com/video/BV1fcHD6cEw3/?t=3126",
      "status": "pending",
      "note": "第三方转录主题归纳，不是医学结论",
      "transcript": "https://github.com/AayuBal/shaoailun-sunyuchen-podcast/blob/main/%E5%85%A8%E6%96%87.md"
    }
  },
  {
    "theme": "boji",
    "dimension": "action",
    "chapter": "ch12",
    "concept": "身体也要维护",
    "prompt": "薄肌群说身体是长期资产。你最近明显不舒服，还欠一条打卡。你会？",
    "options": [
      {
        "text": "先补个旧视频，打卡不能断",
        "score": 1
      },
      {
        "text": "继续扛，战略资产不能示弱",
        "score": 0
      },
      {
        "text": "先停下硬撑，按需要寻求合适帮助",
        "score": 3
      },
      {
        "text": "把今天安排调轻，先弄清状况",
        "score": 2
      }
    ],
    "anchor": "health",
    "connection": "将长期身体能力与追逐打卡对照，不以薄肌话术替代健康判断。",
    "high": "你把身体放在打卡前面。资产维护总比资产嘴硬实际。",
    "low": "你更想保住连续记录，身体的反馈可能被你延后处理。",
    "image": null,
    "imageText": "",
    "id": "t08",
    "section": "知道还有多少 很让人安心",
    "kind": "生活情境",
    "reference": {
      "label": "访谈：身体的长期管理",
      "time": "00:52:06",
      "url": "https://www.bilibili.com/video/BV1fcHD6cEw3/?t=3126",
      "status": "pending",
      "note": "第三方转录主题归纳，不是医学结论",
      "transcript": "https://github.com/AayuBal/shaoailun-sunyuchen-podcast/blob/main/%E5%85%A8%E6%96%87.md"
    }
  },
  {
    "theme": "boji",
    "dimension": "evidence",
    "chapter": "ch02",
    "concept": "国力的证据",
    "prompt": "有人把“薄肌决定国力”印成图表，横轴只有腹肌块数。你先看？",
    "options": [
      {
        "text": "这是研究、观点还是纯梗",
        "score": 2
      },
      {
        "text": "配图是不是很有说服力",
        "score": 1
      },
      {
        "text": "薄肌都战略储备了，还查什么",
        "score": 0
      },
      {
        "text": "国力怎么定义，数据从哪来",
        "score": 3
      }
    ],
    "anchor": "reserve",
    "connection": "用户提供的梗与访谈战略储备段相近，但不能把夸张观点当因果证据。",
    "high": "你先查定义和来源。腹肌能分块，不等于国力能这样算。",
    "low": "你先吃下了图表的气势，这张图可能只统计了排版。",
    "image": null,
    "imageText": "",
    "id": "t09",
    "section": "从脸上领取立场",
    "kind": "观点冲突",
    "reference": {
      "label": "访谈：身体与战略储备",
      "time": "01:05:26",
      "url": "https://www.bilibili.com/video/BV1fcHD6cEw3/?t=3926",
      "status": "pending",
      "note": "第三方转录定位，原声和逐字归属待核",
      "transcript": "https://github.com/AayuBal/shaoailun-sunyuchen-podcast/blob/main/%E5%85%A8%E6%96%87.md"
    }
  },
  {
    "theme": "boji",
    "dimension": "evidence",
    "chapter": "ch01",
    "concept": "体型不等于全部健康",
    "prompt": "薄肌群发一张人物图，说看体型就知道谁最健康。你会？",
    "options": [
      {
        "text": "先问健康指标，单张图说明不了全貌",
        "score": 3
      },
      {
        "text": "把它当审美讨论，不当诊断",
        "score": 2
      },
      {
        "text": "先查谁的身材更符合群规",
        "score": 1
      },
      {
        "text": "看起来够薄，其他指标可免检",
        "score": 0
      }
    ],
    "anchor": "health",
    "connection": "访谈中存在对健康和体型的大幅推断；图片题只讨论证据边界。",
    "high": "你没让一张图包办健康结论。相册暂时不用转行做医院。",
    "low": "你更容易按外观定结论，图里没展示的条件也被省略了。",
    "image": "fig001",
    "imageText": "二创人物的人脸前放有手机；画面借用名画构图。图片无法提供任何人的医学检查数据。",
    "id": "t10",
    "section": "终于有一个地方能加重量",
    "kind": "看图选择",
    "reference": {
      "label": "访谈：身体的长期管理",
      "time": "00:52:06",
      "url": "https://www.bilibili.com/video/BV1fcHD6cEw3/?t=3126",
      "status": "pending",
      "note": "第三方转录主题归纳，不是医学结论",
      "transcript": "https://github.com/AayuBal/shaoailun-sunyuchen-podcast/blob/main/%E5%85%A8%E6%96%87.md"
    }
  },
  {
    "theme": "boji",
    "dimension": "evidence",
    "chapter": "ch02",
    "concept": "补剂神话",
    "prompt": "一张薄肌切片说吃某种粉就能超过顶级富豪。你第一反应？",
    "options": [
      {
        "text": "立刻下单，今晚先超三个",
        "score": 0
      },
      {
        "text": "先找完整上下文和证据，不把它当效果保证",
        "score": 3
      },
      {
        "text": "把夸张比较和实际用途分开",
        "score": 2
      },
      {
        "text": "看看推荐链接销量再判断",
        "score": 1
      }
    ],
    "anchor": "powder",
    "connection": "来自转录约03:00的夸张比较线索，原声待核，不认可补剂功效断言。",
    "high": "你拆开了笑点和效果。购物车没被名人名单接管。",
    "low": "你先跟着热度走，比较对象够大不代表证据够足。",
    "image": null,
    "imageText": "",
    "id": "t11",
    "section": "从脸上领取立场",
    "kind": "观点冲突",
    "reference": {
      "label": "访谈：夸张的身体比较",
      "time": "03:00:21",
      "url": "https://www.bilibili.com/video/BV1fcHD6cEw3/?t=10821",
      "status": "pending",
      "note": "第三方转录约03:00:21，非效果证据，原声待核",
      "transcript": "https://github.com/AayuBal/shaoailun-sunyuchen-podcast/blob/main/%E5%85%A8%E6%96%87.md"
    }
  },
  {
    "theme": "boji",
    "dimension": "evidence",
    "chapter": "ch09",
    "concept": "薄肌截图考古",
    "prompt": "同一张薄肌“原话”截图被十个号转发，没有一个放原片。你会？",
    "options": [
      {
        "text": "十个号总有一个核过吧",
        "score": 1
      },
      {
        "text": "字体这么像字幕，直接算原话",
        "score": 0
      },
      {
        "text": "查原视频、说话人和前后句",
        "score": 3
      },
      {
        "text": "先标待核，只当梗看",
        "score": 2
      }
    ],
    "anchor": "reserve",
    "connection": "针对访谈转录和流传梗的出处核对；不把传播次数当原声证明。",
    "high": "你要的是出处。截图开始排队，也不能排成原视频。",
    "low": "你把转发量当核对次数，同一个错误也能复制十份。",
    "image": null,
    "imageText": "",
    "id": "t12",
    "section": "案例里的名字很方便",
    "kind": "生活情境",
    "reference": {
      "label": "访谈：身体与战略储备",
      "time": "01:05:26",
      "url": "https://www.bilibili.com/video/BV1fcHD6cEw3/?t=3926",
      "status": "pending",
      "note": "第三方转录定位，原声和逐字归属待核",
      "transcript": "https://github.com/AayuBal/shaoailun-sunyuchen-podcast/blob/main/%E5%85%A8%E6%96%87.md"
    }
  },
  {
    "theme": "boji",
    "dimension": "space",
    "chapter": "ch14",
    "concept": "薄肌也能放假",
    "prompt": "薄肌群规定周末必须交身体复盘。你这周只想好好休息。怎么回？",
    "options": [
      {
        "text": "简单报个近况，其他下周再说",
        "score": 2
      },
      {
        "text": "休息可以，但必须写三千字理由",
        "score": 1
      },
      {
        "text": "把休息也做成生产力项目，绝不留白",
        "score": 0
      },
      {
        "text": "这周不交，我的周末先归我",
        "score": 3
      }
    ],
    "anchor": "health",
    "connection": "对长期身体管理与日常休息的编辑对照，非原访谈主张。",
    "high": "你给休息留了位置，周末不用先拿到群里的公章。",
    "low": "你把休息也变成交付物，放假可能只是换了份工作。",
    "image": null,
    "imageText": "",
    "id": "t13",
    "section": "不把周末变成预备上班",
    "kind": "观点冲突",
    "reference": {
      "label": "访谈：身体的长期管理",
      "time": "00:52:06",
      "url": "https://www.bilibili.com/video/BV1fcHD6cEw3/?t=3126",
      "status": "pending",
      "note": "第三方转录主题归纳，不是医学结论",
      "transcript": "https://github.com/AayuBal/shaoailun-sunyuchen-podcast/blob/main/%E5%85%A8%E6%96%87.md"
    }
  },
  {
    "theme": "boji",
    "dimension": "space",
    "chapter": "ch15",
    "concept": "别替朋友管身体",
    "prompt": "朋友不想练薄肌，你已经把访谈发了七遍。第八遍你会？",
    "options": [
      {
        "text": "先问他想不想聊，不想就停",
        "score": 3
      },
      {
        "text": "给个简短入口，让他自己决定",
        "score": 2
      },
      {
        "text": "约个饭，顺便进行四小时科普",
        "score": 1
      },
      {
        "text": "做成起床铃声，知识必须追上他",
        "score": 0
      }
    ],
    "anchor": "reserve",
    "connection": "访谈的强烈说服语气不构成替别人决定的许可。",
    "high": "你把邀请和接管分开了。朋友不是待更新的固件。",
    "low": "你更想让朋友接受整套观点，留给对方的拒绝空间较少。",
    "image": null,
    "imageText": "",
    "id": "t14",
    "section": "对方不是一项反馈",
    "kind": "生活情境",
    "reference": {
      "label": "访谈：身体与战略储备",
      "time": "01:05:26",
      "url": "https://www.bilibili.com/video/BV1fcHD6cEw3/?t=3926",
      "status": "pending",
      "note": "第三方转录定位，原声和逐字归属待核",
      "transcript": "https://github.com/AayuBal/shaoailun-sunyuchen-podcast/blob/main/%E5%85%A8%E6%96%87.md"
    }
  },
  {
    "theme": "boji",
    "dimension": "space",
    "chapter": "ch01",
    "concept": "训练还是周报",
    "prompt": "薄肌软件弹窗：今天没进步，请解释。你会怎么设置？",
    "options": [
      {
        "text": "打开全群排行榜，谁休息谁解释",
        "score": 0
      },
      {
        "text": "关掉不需要的催促，保留对我有用的记录",
        "score": 3
      },
      {
        "text": "调低提醒频率",
        "score": 2
      },
      {
        "text": "再加一个提醒，防止自己偷懒",
        "score": 1
      }
    ],
    "anchor": "health",
    "connection": "将身体长期管理与外部排名压力对照，不把数据当全部生活。",
    "high": "你让记录服务生活，没有反过来向软件汇报人生。",
    "low": "你更依赖督促和排行，休息可能被误认成掉队。",
    "image": null,
    "imageText": "",
    "id": "t15",
    "section": "终于有一个地方能加重量",
    "kind": "观点冲突",
    "reference": {
      "label": "访谈：身体的长期管理",
      "time": "00:52:06",
      "url": "https://www.bilibili.com/video/BV1fcHD6cEw3/?t=3126",
      "status": "pending",
      "note": "第三方转录主题归纳，不是医学结论",
      "transcript": "https://github.com/AayuBal/shaoailun-sunyuchen-podcast/blob/main/%E5%85%A8%E6%96%87.md"
    }
  },
  {
    "theme": "dashui",
    "dimension": "choice",
    "chapter": "ch04",
    "concept": "大瓶与身份",
    "prompt": "你刚拎起大水，朋友说这瓶牌子不够“苹果”。你回？",
    "options": [
      {
        "text": "先把标签撕了，别影响人设",
        "score": 1
      },
      {
        "text": "换最贵那桶，水也要上桌",
        "score": 0
      },
      {
        "text": "我买水解渴，不给瓶子办阶级",
        "score": 3
      },
      {
        "text": "下次看看口感和价格再选",
        "score": 2
      }
    ],
    "anchor": "water",
    "connection": "把大水的容器/消费梗与品牌标签碰撞，不认定任何品牌人格。",
    "high": "你把喝水和身份分开了，瓶盖不用兼任爵位。",
    "low": "你更看重瓶子的社交表现，解渴反而要往后排。",
    "image": null,
    "imageText": "",
    "id": "t16",
    "section": "四个数字够大家记很久",
    "kind": "生活情境",
    "reference": {
      "label": "邵艾伦日常发布：大水是对嘞",
      "time": null,
      "url": "https://www.bilibili.com/video/BV17wpF6HEaY/",
      "status": "title",
      "note": "可核对发布标题；大水题为编辑设计，不认证首创人"
    }
  },
  {
    "theme": "dashui",
    "dimension": "choice",
    "chapter": "ch03",
    "concept": "大水全家桶",
    "prompt": "你只想买个水杯，店铺给你推荐大水人生进阶套装。你怎么选？",
    "options": [
      {
        "text": "先买最需要的一件",
        "score": 2
      },
      {
        "text": "收藏全套，等成为自律的人",
        "score": 1
      },
      {
        "text": "全部带走，少一件理论就不完整",
        "score": 0
      },
      {
        "text": "杯子合用就行，人生配件先退下",
        "score": 3
      }
    ],
    "anchor": "water",
    "connection": "针对大水消费参与场景的原创题，不是推广者原话。",
    "high": "你只买要用的东西。水杯还没上岗，人生总监先被辞退了。",
    "low": "你更愿意靠整套装备启动，可能把入门成本先练大了。",
    "image": null,
    "imageText": "",
    "id": "t17",
    "section": "把志愿表拍成片头",
    "kind": "观点冲突",
    "reference": {
      "label": "邵艾伦日常发布：大水是对嘞",
      "time": null,
      "url": "https://www.bilibili.com/video/BV17wpF6HEaY/",
      "status": "title",
      "note": "可核对发布标题；大水题为编辑设计，不认证首创人"
    }
  },
  {
    "theme": "dashui",
    "dimension": "choice",
    "chapter": "ch04",
    "concept": "小瓶也有使用场景",
    "prompt": "你出门十分钟只带小水，群友判你理论不及格。你会？",
    "options": [
      {
        "text": "看我这次需要，瓶子不用全年统一",
        "score": 3
      },
      {
        "text": "解释一下今天的行程",
        "score": 2
      },
      {
        "text": "把小瓶藏进大袋子",
        "score": 1
      },
      {
        "text": "临时买一桶，出门先负重",
        "score": 0
      }
    ],
    "anchor": "water",
    "connection": "大水梗的核心场景是容器与便利，不是统一规定每次都带大桶。",
    "high": "你按场景选择，十分钟路程不用申请远洋补给。",
    "low": "你更想符合群里的统一标准，便利容易让位给表演。",
    "image": null,
    "imageText": "",
    "id": "t18",
    "section": "四个数字够大家记很久",
    "kind": "生活情境",
    "reference": {
      "label": "邵艾伦日常发布：大水是对嘞",
      "time": null,
      "url": "https://www.bilibili.com/video/BV17wpF6HEaY/",
      "status": "title",
      "note": "可核对发布标题；大水题为编辑设计，不认证首创人"
    }
  },
  {
    "theme": "dashui",
    "dimension": "action",
    "chapter": "ch13",
    "concept": "水杯开光",
    "prompt": "大水杯已经到货三天，你一直在拍开箱。现在？",
    "options": [
      {
        "text": "先研究十二种杯套，喝水稍后",
        "score": 0
      },
      {
        "text": "清洗好放到顺手处，按自己需要用",
        "score": 3
      },
      {
        "text": "先检查材质和使用说明",
        "score": 2
      },
      {
        "text": "再拍一条，等账号有仪式感",
        "score": 1
      }
    ],
    "anchor": "water",
    "connection": "把大水器物热度落到实际使用，不涉及饮水剂量。",
    "high": "你准备真用杯子了，它终于有望结束模特生涯。",
    "low": "你先完善展示和配件，杯子的主要工作还是出镜。",
    "image": null,
    "imageText": "",
    "id": "t19",
    "section": "会解释的人也可能忘记发消息",
    "kind": "观点冲突",
    "reference": {
      "label": "邵艾伦日常发布：大水是对嘞",
      "time": null,
      "url": "https://www.bilibili.com/video/BV17wpF6HEaY/",
      "status": "title",
      "note": "可核对发布标题；大水题为编辑设计，不认证首创人"
    }
  },
  {
    "theme": "dashui",
    "dimension": "action",
    "chapter": "ch07",
    "concept": "大水工位",
    "prompt": "你买的大水桶放不进书包，天天留在家里。下一步？",
    "options": [
      {
        "text": "继续找通勤负重视频",
        "score": 1
      },
      {
        "text": "先换更大的包，理论不能让步",
        "score": 0
      },
      {
        "text": "换个实际能带的方案",
        "score": 3
      },
      {
        "text": "试试固定放在常用位置",
        "score": 2
      }
    ],
    "anchor": "water",
    "connection": "比较器物与真实生活的适配，不以大瓶作为美德。",
    "high": "你改的是使用办法，没让通勤替水桶打工。",
    "low": "你更倾向围着装备重做生活，原来的不便可能越配越大。",
    "image": null,
    "imageText": "",
    "id": "t20",
    "section": "镜头外的螺丝",
    "kind": "生活情境",
    "reference": {
      "label": "邵艾伦日常发布：大水是对嘞",
      "time": null,
      "url": "https://www.bilibili.com/video/BV17wpF6HEaY/",
      "status": "title",
      "note": "可核对发布标题；大水题为编辑设计，不认证首创人"
    }
  },
  {
    "theme": "dashui",
    "dimension": "action",
    "chapter": "ch04",
    "concept": "省钱记账",
    "prompt": "你说大水替代饮料能省钱，月底却不知道花了多少。你先？",
    "options": [
      {
        "text": "先记接下来几次购买",
        "score": 2
      },
      {
        "text": "做张省钱海报，金额之后补",
        "score": 1
      },
      {
        "text": "把杯子的价格当投资，永不记成本",
        "score": 0
      },
      {
        "text": "翻一周真实账单，算同口径支出",
        "score": 3
      }
    ],
    "anchor": "water",
    "connection": "大水参与者常谈价格与便利，此题要求把宣传落实为可核算行为。",
    "high": "你先看账，省钱终于有了数字以外的依据。",
    "low": "你先替结果做包装，水费可能还没进这套理论。",
    "image": null,
    "imageText": "",
    "id": "t21",
    "section": "四个数字够大家记很久",
    "kind": "观点冲突",
    "reference": {
      "label": "邵艾伦日常发布：大水是对嘞",
      "time": null,
      "url": "https://www.bilibili.com/video/BV17wpF6HEaY/",
      "status": "title",
      "note": "可核对发布标题；大水题为编辑设计，不认证首创人"
    }
  },
  {
    "theme": "dashui",
    "dimension": "action",
    "chapter": "ch08",
    "concept": "大水拍摄现场",
    "prompt": "桌上摆着四桶大水，工作文件已经无处安放。你会？",
    "options": [
      {
        "text": "留实际需要的，给工作腾位置",
        "score": 3
      },
      {
        "text": "调整摆放，试哪种顺手",
        "score": 2
      },
      {
        "text": "继续买展示架，把工位改成水展",
        "score": 1
      },
      {
        "text": "先拍照宣布高效，文件晚点找",
        "score": 0
      }
    ],
    "anchor": "water",
    "connection": "从大水的实际容器场景讨论摆拍与使用冲突。",
    "high": "你先恢复使用，工位终于不用申请水库编制。",
    "low": "你更想维持展示，完成工作得先绕过摄影棚。",
    "image": null,
    "imageText": "",
    "id": "t22",
    "section": "画框外还有一张床",
    "kind": "生活情境",
    "reference": {
      "label": "邵艾伦日常发布：大水是对嘞",
      "time": null,
      "url": "https://www.bilibili.com/video/BV17wpF6HEaY/",
      "status": "title",
      "note": "可核对发布标题；大水题为编辑设计，不认证首创人"
    }
  },
  {
    "theme": "dashui",
    "dimension": "evidence",
    "chapter": "ch04",
    "concept": "大瓶单价",
    "prompt": "货架上大瓶写着家庭装，小瓶正在打折。大水理论怎么选？",
    "options": [
      {
        "text": "名字有家庭两个字，经济学已认证",
        "score": 0
      },
      {
        "text": "算每升价格，也看我能否用完",
        "score": 3
      },
      {
        "text": "先看容量和活动条件",
        "score": 2
      },
      {
        "text": "包装大就一定划算",
        "score": 1
      }
    ],
    "anchor": "water",
    "connection": "检验大水价格梗里的比较口径，包装大小不等于实际单价。",
    "high": "你把价签算清楚了，家庭装不用自带经济学学位。",
    "low": "你先信包装标签，价格的分母暂时失踪。",
    "image": null,
    "imageText": "",
    "id": "t23",
    "section": "四个数字够大家记很久",
    "kind": "观点冲突",
    "reference": {
      "label": "邵艾伦日常发布：大水是对嘞",
      "time": null,
      "url": "https://www.bilibili.com/video/BV17wpF6HEaY/",
      "status": "title",
      "note": "可核对发布标题；大水题为编辑设计，不认证首创人"
    }
  },
  {
    "theme": "dashui",
    "dimension": "evidence",
    "chapter": "ch02",
    "concept": "饮料颜色法庭",
    "prompt": "有人说饮品只要有颜色就一律不好。你怎么接大水这个梗？",
    "options": [
      {
        "text": "发给朋友，颜色已经说明一切",
        "score": 1
      },
      {
        "text": "无色就是通行证，不用看标签",
        "score": 0
      },
      {
        "text": "笑归笑，成分和个人情况另查",
        "score": 3
      },
      {
        "text": "先分清这是玩梗还是实际建议",
        "score": 2
      }
    ],
    "anchor": "water",
    "connection": "以流传的颜色二分梗作编辑情境，不认证原话、不作营养判断。",
    "high": "你没让颜色代替成分表。饮料暂时不用靠褪色申诉。",
    "low": "你先用颜色分类，复杂情况被压成了色卡。",
    "image": null,
    "imageText": "",
    "id": "t24",
    "section": "从脸上领取立场",
    "kind": "生活情境",
    "reference": {
      "label": "邵艾伦日常发布：大水是对嘞",
      "time": null,
      "url": "https://www.bilibili.com/video/BV17wpF6HEaY/",
      "status": "title",
      "note": "可核对发布标题；大水题为编辑设计，不认证首创人"
    }
  },
  {
    "theme": "dashui",
    "dimension": "evidence",
    "chapter": "ch09",
    "concept": "水瓶万能宣传",
    "prompt": "大水评论区说同一款水能让所有人状态起飞。你先看什么？",
    "options": [
      {
        "text": "先把购物评价与健康证据分开",
        "score": 2
      },
      {
        "text": "评论越整齐越像有效",
        "score": 1
      },
      {
        "text": "瓶身写了能量，应该不差",
        "score": 0
      },
      {
        "text": "有没有可靠依据，是否说清适用范围",
        "score": 3
      }
    ],
    "anchor": "water",
    "connection": "只讨论健康宣传的核查方式，不提供饮水量或治疗建议。",
    "high": "你先查承诺的依据。评论区整齐不等于结果统一。",
    "low": "你更先接受热闹反馈，效果保证可能只是同一句文案。",
    "image": null,
    "imageText": "",
    "id": "t25",
    "section": "案例里的名字很方便",
    "kind": "观点冲突",
    "reference": {
      "label": "邵艾伦日常发布：大水是对嘞",
      "time": null,
      "url": "https://www.bilibili.com/video/BV17wpF6HEaY/",
      "status": "title",
      "note": "可核对发布标题；大水题为编辑设计，不认证首创人"
    }
  },
  {
    "theme": "dashui",
    "dimension": "evidence",
    "chapter": "ch10",
    "concept": "大水署名考古",
    "prompt": "一段大水段子被轮流署给三个博主。你准备往哪挂？",
    "options": [
      {
        "text": "找首发和原文，找不到就不署真人",
        "score": 3
      },
      {
        "text": "保留待核标签再分享线索",
        "score": 2
      },
      {
        "text": "谁最火就挂谁，观众好理解",
        "score": 1
      },
      {
        "text": "挂孙哥，理论听着就完整",
        "score": 0
      }
    ],
    "anchor": "water",
    "connection": "大水首发与推广者未完全回溯；此题检验出处而非猜名气。",
    "high": "你让署名等证据，流量没有直接继承著作权。",
    "low": "你更愿意先让段子归队，名字可能比出处跑得快。",
    "image": null,
    "imageText": "",
    "id": "t26",
    "section": "一个名字变成公共按钮",
    "kind": "生活情境",
    "reference": {
      "label": "邵艾伦日常发布：大水是对嘞",
      "time": null,
      "url": "https://www.bilibili.com/video/BV17wpF6HEaY/",
      "status": "title",
      "note": "可核对发布标题；大水题为编辑设计，不认证首创人"
    }
  },
  {
    "theme": "dashui",
    "dimension": "space",
    "chapter": "ch14",
    "concept": "奶茶也要写检讨？",
    "prompt": "你喝了杯奶茶，大水群要求提交叛教说明。你会？",
    "options": [
      {
        "text": "以后喝之前先在群里报备",
        "score": 0
      },
      {
        "text": "我可以玩梗，也可以自己选喝什么",
        "score": 3
      },
      {
        "text": "简单说今天想喝，不展开辩论",
        "score": 2
      },
      {
        "text": "写个热量复盘，争取宽大处理",
        "score": 1
      }
    ],
    "anchor": "water",
    "connection": "大水消费梗延伸到日常选择权，非任何人的正式教规。",
    "high": "你给选择留了空间，奶茶不用先走组织流程。",
    "low": "你更愿意接受群里的监督，喝什么也可能变成考勤。",
    "image": null,
    "imageText": "",
    "id": "t27",
    "section": "不把周末变成预备上班",
    "kind": "观点冲突",
    "reference": {
      "label": "邵艾伦日常发布：大水是对嘞",
      "time": null,
      "url": "https://www.bilibili.com/video/BV17wpF6HEaY/",
      "status": "title",
      "note": "可核对发布标题；大水题为编辑设计，不认证首创人"
    }
  },
  {
    "theme": "dashui",
    "dimension": "space",
    "chapter": "ch15",
    "concept": "大水待客",
    "prompt": "朋友来家里想喝茶，你只有大水理论想讲。你会？",
    "options": [
      {
        "text": "先讲十分钟为什么应该喝水",
        "score": 1
      },
      {
        "text": "把茶具收起来，朋友必须升级",
        "score": 0
      },
      {
        "text": "问他想喝什么，有条件就准备",
        "score": 3
      },
      {
        "text": "说清现有选择，让他自己挑",
        "score": 2
      }
    ],
    "anchor": "water",
    "connection": "把个人饮品偏好与替别人作主对照。",
    "high": "你先问客人，不把来访变成理论入学考试。",
    "low": "你更想让客人接受同一套选择，待客容易变授课。",
    "image": null,
    "imageText": "",
    "id": "t28",
    "section": "对方不是一项反馈",
    "kind": "生活情境",
    "reference": {
      "label": "邵艾伦日常发布：大水是对嘞",
      "time": null,
      "url": "https://www.bilibili.com/video/BV17wpF6HEaY/",
      "status": "title",
      "note": "可核对发布标题；大水题为编辑设计，不认证首创人"
    }
  },
  {
    "theme": "dashui",
    "dimension": "space",
    "chapter": "ch14",
    "concept": "大水排行榜",
    "prompt": "群里开始比谁一天喝得多，你只想按自己需要来。你会？",
    "options": [
      {
        "text": "把排行榜提醒关掉",
        "score": 2
      },
      {
        "text": "先跟一天，不能落在平均线后面",
        "score": 1
      },
      {
        "text": "不问需要，排名先冲上去",
        "score": 0
      },
      {
        "text": "不参加拼量，身体需求不是竞赛",
        "score": 3
      }
    ],
    "anchor": "water",
    "connection": "明确反对把网络梗误作拼量任务；不是具体健康剂量建议。",
    "high": "你退出了不需要的比赛。水杯没有义务参加排位赛。",
    "low": "你更怕排名落后，真实需求可能被榜单挤掉。",
    "image": null,
    "imageText": "",
    "id": "t29",
    "section": "不把周末变成预备上班",
    "kind": "观点冲突",
    "reference": {
      "label": "邵艾伦日常发布：大水是对嘞",
      "time": null,
      "url": "https://www.bilibili.com/video/BV17wpF6HEaY/",
      "status": "title",
      "note": "可核对发布标题；大水题为编辑设计，不认证首创人"
    }
  },
  {
    "theme": "dashui",
    "dimension": "space",
    "chapter": "ch08",
    "concept": "杯子也想下班",
    "prompt": "周末出门，朋友说必须拎巨桶才能拍大水合照。你更想？",
    "options": [
      {
        "text": "带合用的，照片不必全员复制",
        "score": 3
      },
      {
        "text": "拍一张就好，别影响行程",
        "score": 2
      },
      {
        "text": "为了队形，轮流背桶一天",
        "score": 1
      },
      {
        "text": "行程可以取消，画面必须统一",
        "score": 0
      }
    ],
    "anchor": "water",
    "connection": "大水展示与实际同行体验的原创冲突，不暗示真实博主这样要求。",
    "high": "你给行程留了空间，出门不用先搬一套布景。",
    "low": "你更愿意为整齐付出时间，合照可能反过来安排整天。",
    "image": null,
    "imageText": "",
    "id": "t30",
    "section": "画框外还有一张床",
    "kind": "生活情境",
    "reference": {
      "label": "邵艾伦日常发布：大水是对嘞",
      "time": null,
      "url": "https://www.bilibili.com/video/BV17wpF6HEaY/",
      "status": "title",
      "note": "可核对发布标题；大水题为编辑设计，不认证首创人"
    }
  },
  {
    "theme": "hu",
    "dimension": "choice",
    "chapter": "ch04",
    "concept": "手机先替你发言",
    "prompt": "安卓/苹果梗聊上头了，饭局开场先查手机。你把哪件事摆前面？",
    "options": [
      {
        "text": "看清标志再决定听谁说话",
        "score": 0
      },
      {
        "text": "聊人和事情，手机先放桌上",
        "score": 3
      },
      {
        "text": "解释自己为什么选这款",
        "score": 2
      },
      {
        "text": "借个苹果镇场子",
        "score": 1
      }
    ],
    "anchor": "labels",
    "connection": "户晨风相关消费标签语境；不认同品牌能判断人格。",
    "high": "你让人先开口，手机暂时不用代领发言证。",
    "low": "你先按设备排座位，谈话内容还没拿到报名表。",
    "image": null,
    "imageText": "",
    "id": "t31",
    "section": "四个数字够大家记很久",
    "kind": "观点冲突",
    "reference": {
      "label": "户晨风相关消费标签语境",
      "time": null,
      "url": "https://www.cac.gov.cn/2025-12/03/c_1766488328081202.htm",
      "status": "context",
      "note": "依据既有书稿与公开通报的主题背景，不是本人逐字语录"
    }
  },
  {
    "theme": "hu",
    "dimension": "choice",
    "chapter": "ch04",
    "concept": "旧苹果和新安卓",
    "prompt": "同预算，旧苹果与合用的新安卓打擂台。你的裁判标准是？",
    "options": [
      {
        "text": "选更好向朋友解释的",
        "score": 1
      },
      {
        "text": "标志先赢，需求可以配合",
        "score": 0
      },
      {
        "text": "自己的需求、状态和总成本",
        "score": 3
      },
      {
        "text": "先试用，再问几个同需求的人",
        "score": 2
      }
    ],
    "anchor": "labels",
    "connection": "以消费标签讨论选择依据，不为任何品牌作购买推荐。",
    "high": "你按实际使用判，标志没有直接保送冠军。",
    "low": "你更重视圈内认可，设备可能要替你演身份。",
    "image": null,
    "imageText": "",
    "id": "t32",
    "section": "四个数字够大家记很久",
    "kind": "生活情境",
    "reference": {
      "label": "户晨风相关消费标签语境",
      "time": null,
      "url": "https://www.cac.gov.cn/2025-12/03/c_1766488328081202.htm",
      "status": "context",
      "note": "依据既有书稿与公开通报的主题背景，不是本人逐字语录"
    }
  },
  {
    "theme": "hu",
    "dimension": "choice",
    "chapter": "ch15",
    "concept": "给爸妈升级群籍",
    "prompt": "家人说旧安卓够用，群友说该给他们升级阶层。你会？",
    "options": [
      {
        "text": "一起看看有无具体不便",
        "score": 2
      },
      {
        "text": "先买了，适应成本让他们克服",
        "score": 1
      },
      {
        "text": "把家庭群改名苹果之家，先完成升级",
        "score": 0
      },
      {
        "text": "先听家人的使用需要",
        "score": 3
      }
    ],
    "anchor": "labels",
    "connection": "把品牌标签和亲人实际需要碰撞，不把消费等同阶层。",
    "high": "你先问使用者，亲人不用替你的消费立场完成作业。",
    "low": "你更想先完成身份升级，真正用设备的人可能被安排了。",
    "image": null,
    "imageText": "",
    "id": "t33",
    "section": "对方不是一项反馈",
    "kind": "观点冲突",
    "reference": {
      "label": "户晨风相关消费标签语境",
      "time": null,
      "url": "https://www.cac.gov.cn/2025-12/03/c_1766488328081202.htm",
      "status": "context",
      "note": "依据既有书稿与公开通报的主题背景，不是本人逐字语录"
    }
  },
  {
    "theme": "hu",
    "dimension": "choice",
    "chapter": "ch04",
    "concept": "壳子改变命运",
    "prompt": "画里手机挡住脸。有人说只要换个标，整个人立刻高级。你最想换什么？",
    "options": [
      {
        "text": "先看画面和我的真实需要",
        "score": 3
      },
      {
        "text": "换个角度，看看作者在玩什么",
        "score": 2
      },
      {
        "text": "换一个能被认出来的标",
        "score": 1
      },
      {
        "text": "脸无所谓，标要占画面一半",
        "score": 0
      }
    ],
    "anchor": "labels",
    "connection": "借原画里的手机遮脸讨论品牌代替人的标签化。",
    "high": "你把画里的梗和人的价值分开，标志不用负责长脸。",
    "low": "你更看重识别标记，人物容易退成品牌背景。",
    "image": "fig001",
    "imageText": "人物脸前有手机，画面为名画构图二创；不展示设备的真实性能，也不代表人物使用偏好。",
    "id": "t34",
    "section": "四个数字够大家记很久",
    "kind": "看图选择",
    "reference": {
      "label": "户晨风相关消费标签语境",
      "time": null,
      "url": "https://www.cac.gov.cn/2025-12/03/c_1766488328081202.htm",
      "status": "context",
      "note": "依据既有书稿与公开通报的主题背景，不是本人逐字语录"
    }
  },
  {
    "theme": "hu",
    "dimension": "action",
    "chapter": "ch07",
    "concept": "连麦回音修复",
    "prompt": "苹果/安卓大战打到连麦回音。你这边真有回音，先干嘛？",
    "options": [
      {
        "text": "先给对面判个安卓，回音稍后修",
        "score": 0
      },
      {
        "text": "检查扬声器、耳机和设置",
        "score": 3
      },
      {
        "text": "先换个输入方式测试",
        "score": 2
      },
      {
        "text": "先解释我的手机是什么档次",
        "score": 1
      }
    ],
    "anchor": "labels",
    "connection": "从连麦设备梗回到可执行的排障，不据设备判断人。",
    "high": "你先修问题，回音终于不用参加品牌辩论。",
    "low": "你先争标签，麦克风还在重复刚才那句话。",
    "image": null,
    "imageText": "",
    "id": "t35",
    "section": "镜头外的螺丝",
    "kind": "观点冲突",
    "reference": {
      "label": "户晨风相关消费标签语境",
      "time": null,
      "url": "https://www.cac.gov.cn/2025-12/03/c_1766488328081202.htm",
      "status": "context",
      "note": "依据既有书稿与公开通报的主题背景，不是本人逐字语录"
    }
  },
  {
    "theme": "hu",
    "dimension": "action",
    "chapter": "ch13",
    "concept": "消费理论实践",
    "prompt": "你准备做一期苹果/安卓消费观察，第一步拍什么？",
    "options": [
      {
        "text": "先写结论，再去找镜头",
        "score": 1
      },
      {
        "text": "先排好谁高级，采访负责证明",
        "score": 0
      },
      {
        "text": "先定具体比较问题，记录同口径材料",
        "score": 3
      },
      {
        "text": "先找愿意讲真实使用体验的人",
        "score": 2
      }
    ],
    "anchor": "labels",
    "connection": "针对消费比较与采访方法的编辑题，不是户晨风个人经历。",
    "high": "你先搭比较办法，镜头不用替预设结论找工作。",
    "low": "你先排结论，材料容易被挑成支持你的样子。",
    "image": null,
    "imageText": "",
    "id": "t36",
    "section": "会解释的人也可能忘记发消息",
    "kind": "生活情境",
    "reference": {
      "label": "户晨风相关消费标签语境",
      "time": null,
      "url": "https://www.cac.gov.cn/2025-12/03/c_1766488328081202.htm",
      "status": "context",
      "note": "依据既有书稿与公开通报的主题背景，不是本人逐字语录"
    }
  },
  {
    "theme": "hu",
    "dimension": "action",
    "chapter": "ch04",
    "concept": "品牌售后现场",
    "prompt": "你最支持的品牌出了故障，安卓/苹果群还在替它加油。你先？",
    "options": [
      {
        "text": "先核对能否复现和保修条件",
        "score": 2
      },
      {
        "text": "先等群里统一口径",
        "score": 1
      },
      {
        "text": "先删故障图，不能让对家赢",
        "score": 0
      },
      {
        "text": "保存故障记录，按实际问题处理售后",
        "score": 3
      }
    ],
    "anchor": "labels",
    "connection": "把品牌立场与具体问题处理分开，不断言任何品牌品质。",
    "high": "你先解决自己的故障，品牌不用你垫付沉默。",
    "low": "你更先照顾阵营形象，自己的问题可能继续等口径。",
    "image": null,
    "imageText": "",
    "id": "t37",
    "section": "四个数字够大家记很久",
    "kind": "观点冲突",
    "reference": {
      "label": "户晨风相关消费标签语境",
      "time": null,
      "url": "https://www.cac.gov.cn/2025-12/03/c_1766488328081202.htm",
      "status": "context",
      "note": "依据既有书稿与公开通报的主题背景，不是本人逐字语录"
    }
  },
  {
    "theme": "hu",
    "dimension": "evidence",
    "chapter": "ch02",
    "concept": "标志能测人格？",
    "prompt": "有人说看一眼手机就知道一个人靠不靠谱。你怎么接户晨风这个梗？",
    "options": [
      {
        "text": "可靠得看具体行为，手机当不了证明",
        "score": 3
      },
      {
        "text": "先分清在玩梗还是下真实判断",
        "score": 2
      },
      {
        "text": "命中几个熟人，足够说明问题",
        "score": 1
      },
      {
        "text": "手机掏出来，履历不用看了",
        "score": 0
      }
    ],
    "anchor": "labels",
    "connection": "消费标签的证据边界，不把个人品质绑定品牌。",
    "high": "你看具体行为，手机没被临时聘成人事主管。",
    "low": "你先凭标签找印象，反例容易在进门时被拦下。",
    "image": null,
    "imageText": "",
    "id": "t38",
    "section": "从脸上领取立场",
    "kind": "生活情境",
    "reference": {
      "label": "户晨风相关消费标签语境",
      "time": null,
      "url": "https://www.cac.gov.cn/2025-12/03/c_1766488328081202.htm",
      "status": "context",
      "note": "依据既有书稿与公开通报的主题背景，不是本人逐字语录"
    }
  },
  {
    "theme": "hu",
    "dimension": "evidence",
    "chapter": "ch09",
    "concept": "购买力账本",
    "prompt": "有人拿两张价签证明某地生活全面碾压。你先补哪项？",
    "options": [
      {
        "text": "两张图够了，其他都算狡辩",
        "score": 0
      },
      {
        "text": "收入、规格、时间和必要开支的同口径信息",
        "score": 3
      },
      {
        "text": "先确认拍摄地点与商品是否可比",
        "score": 2
      },
      {
        "text": "价格看起来震撼，就先转发",
        "score": 1
      }
    ],
    "anchor": "labels",
    "connection": "消费观察与购买力比较需要口径，不据个例判断整体。",
    "high": "你补了比较条件，价签终于不再一个人扛整座城市。",
    "low": "你更先接受鲜明对比，两张照片可能承担了太多结论。",
    "image": null,
    "imageText": "",
    "id": "t39",
    "section": "案例里的名字很方便",
    "kind": "观点冲突",
    "reference": {
      "label": "户晨风相关消费标签语境",
      "time": null,
      "url": "https://www.cac.gov.cn/2025-12/03/c_1766488328081202.htm",
      "status": "context",
      "note": "依据既有书稿与公开通报的主题背景，不是本人逐字语录"
    }
  },
  {
    "theme": "hu",
    "dimension": "evidence",
    "chapter": "ch10",
    "concept": "切片标题审判",
    "prompt": "安卓/苹果切片写着主播彻底认输，点进去只有三秒沉默。你会？",
    "options": [
      {
        "text": "沉默就是实锤，进入转发",
        "score": 1
      },
      {
        "text": "三秒足够，给它配个判决书",
        "score": 0
      },
      {
        "text": "找前后完整对话再判断",
        "score": 3
      },
      {
        "text": "先当标题党的可能线索",
        "score": 2
      }
    ],
    "anchor": "labels",
    "connection": "争议切片的标题不等于完整语境，不编本人台词。",
    "high": "你查上下文，沉默三秒没有自动获得法律效力。",
    "low": "你先接受剪辑的结论，省掉的内容也可能正是关键。",
    "image": null,
    "imageText": "",
    "id": "t40",
    "section": "一个名字变成公共按钮",
    "kind": "生活情境",
    "reference": {
      "label": "户晨风相关消费标签语境",
      "time": null,
      "url": "https://www.cac.gov.cn/2025-12/03/c_1766488328081202.htm",
      "status": "context",
      "note": "依据既有书稿与公开通报的主题背景，不是本人逐字语录"
    }
  },
  {
    "theme": "hu",
    "dimension": "evidence",
    "chapter": "ch04",
    "concept": "价格是不是身价",
    "prompt": "苹果/安卓群说贵十倍就一定好十倍。你先问？",
    "options": [
      {
        "text": "先看完整价格和实际体验",
        "score": 2
      },
      {
        "text": "价格明码标了，价值自然明码",
        "score": 1
      },
      {
        "text": "贵的讲话，便宜的做笔记",
        "score": 0
      },
      {
        "text": "好在哪些用途，怎么测到十倍",
        "score": 3
      }
    ],
    "anchor": "labels",
    "connection": "将价格与具体性能、使用价值分开，不推断人格。",
    "high": "你要的是比较指标，价差没有直接换算成人差。",
    "low": "你先让价格背书，具体好在哪里还没开始讨论。",
    "image": null,
    "imageText": "",
    "id": "t41",
    "section": "四个数字够大家记很久",
    "kind": "观点冲突",
    "reference": {
      "label": "户晨风相关消费标签语境",
      "time": null,
      "url": "https://www.cac.gov.cn/2025-12/03/c_1766488328081202.htm",
      "status": "context",
      "note": "依据既有书稿与公开通报的主题背景，不是本人逐字语录"
    }
  },
  {
    "theme": "hu",
    "dimension": "space",
    "chapter": "ch15",
    "concept": "饭局不查配置",
    "prompt": "好友用便宜安卓，被另一人拿梗反复挤兑。你更可能？",
    "options": [
      {
        "text": "说梗到这儿就行，继续聊别的",
        "score": 3
      },
      {
        "text": "先看好友是否想继续玩",
        "score": 2
      },
      {
        "text": "私下劝好友换机，省得被说",
        "score": 1
      },
      {
        "text": "让大家轮流报配置，公平一点",
        "score": 0
      }
    ],
    "anchor": "labels",
    "connection": "娱乐梗的边界取决于人，不把消费差异变羞辱。",
    "high": "你给朋友留了退路，饭局没有升级成设备年审。",
    "low": "你更愿意让人适应标签规则，可能把不舒服当成硬件问题。",
    "image": null,
    "imageText": "",
    "id": "t42",
    "section": "对方不是一项反馈",
    "kind": "生活情境",
    "reference": {
      "label": "户晨风相关消费标签语境",
      "time": null,
      "url": "https://www.cac.gov.cn/2025-12/03/c_1766488328081202.htm",
      "status": "context",
      "note": "依据既有书稿与公开通报的主题背景，不是本人逐字语录"
    }
  },
  {
    "theme": "hu",
    "dimension": "space",
    "chapter": "ch10",
    "concept": "一句梗用一天",
    "prompt": "群里今天所有话题都被归为苹果或安卓。你想停一下，怎么说？",
    "options": [
      {
        "text": "先把退群也分出苹果退群和安卓退群",
        "score": 0
      },
      {
        "text": "这套先下班，换个话题",
        "score": 3
      },
      {
        "text": "先静音，想聊别的时再来",
        "score": 2
      },
      {
        "text": "再造个更细的等级表",
        "score": 1
      }
    ],
    "anchor": "labels",
    "connection": "把退出梗循环作为实际选择，不硬说所有人都享受标签。",
    "high": "你允许话题下班，分类器终于不用处理整个宇宙。",
    "low": "你继续扩展分类，离开这个梗也得先填分类表。",
    "image": null,
    "imageText": "",
    "id": "t43",
    "section": "一个名字变成公共按钮",
    "kind": "观点冲突",
    "reference": {
      "label": "户晨风相关消费标签语境",
      "time": null,
      "url": "https://www.cac.gov.cn/2025-12/03/c_1766488328081202.htm",
      "status": "context",
      "note": "依据既有书稿与公开通报的主题背景，不是本人逐字语录"
    }
  },
  {
    "theme": "hu",
    "dimension": "space",
    "chapter": "ch15",
    "concept": "借手机不借身份",
    "prompt": "朋友手机没电借你安卓拍照，另一个人开始起哄。你会？",
    "options": [
      {
        "text": "等借到苹果再拍，免得尴尬",
        "score": 1
      },
      {
        "text": "取消合照，身份不能混用",
        "score": 0
      },
      {
        "text": "拍照就拍照，别替朋友分人",
        "score": 3
      },
      {
        "text": "先确认朋友是否介意被玩梗",
        "score": 2
      }
    ],
    "anchor": "labels",
    "connection": "手机实用需求与社交标签冲突，不暗示品牌决定交友资格。",
    "high": "你先照顾人和这次需求，一张合照不用附户籍证明。",
    "low": "你更想回避标签压力，原本简单的合照被提高了门槛。",
    "image": null,
    "imageText": "",
    "id": "t44",
    "section": "对方不是一项反馈",
    "kind": "生活情境",
    "reference": {
      "label": "户晨风相关消费标签语境",
      "time": null,
      "url": "https://www.cac.gov.cn/2025-12/03/c_1766488328081202.htm",
      "status": "context",
      "note": "依据既有书稿与公开通报的主题背景，不是本人逐字语录"
    }
  },
  {
    "theme": "hu",
    "dimension": "space",
    "chapter": "ch14",
    "concept": "消费升级休假",
    "prompt": "你终于换了新手机，苹果/安卓群却说还得配电脑、车和房。你会？",
    "options": [
      {
        "text": "按需要慢慢来，先不跟单",
        "score": 2
      },
      {
        "text": "列出全套清单，假期研究怎么追",
        "score": 1
      },
      {
        "text": "先透支气势，人生不能配件不齐",
        "score": 0
      },
      {
        "text": "我这次只换手机，其他不报名",
        "score": 3
      }
    ],
    "anchor": "labels",
    "connection": "品牌分类延伸成生活套餐的原创情境，不提供借贷或购买建议。",
    "high": "你给消费画了边界，手机没有顺手签下整个人生。",
    "low": "你更愿意继续追整套标准，一次升级可能没有结束键。",
    "image": null,
    "imageText": "",
    "id": "t45",
    "section": "不把周末变成预备上班",
    "kind": "观点冲突",
    "reference": {
      "label": "户晨风相关消费标签语境",
      "time": null,
      "url": "https://www.cac.gov.cn/2025-12/03/c_1766488328081202.htm",
      "status": "context",
      "note": "依据既有书稿与公开通报的主题背景，不是本人逐字语录"
    }
  },
  {
    "theme": "sun",
    "dimension": "choice",
    "chapter": "ch03",
    "concept": "AI军师与自己",
    "prompt": "孙学群让你把人生交给AI。AI第一条建议就和你的现实限制打架，你会？",
    "options": [
      {
        "text": "把限制补进去，决定仍由我来做",
        "score": 3
      },
      {
        "text": "换种问法比较一下理由",
        "score": 2
      },
      {
        "text": "换模型，直到它给我版本答案",
        "score": 1
      },
      {
        "text": "它已经是军师了，我只负责执行",
        "score": 0
      }
    ],
    "anchor": "ai",
    "connection": "访谈强调AI辅助生活与行动；此题检验执行与自主判断的边界。",
    "high": "你让AI看见限制，也保留了决定权。军师没直接继承主公。",
    "low": "你更想把决定交给模型，现实限制可能被当作执行不够。",
    "image": null,
    "imageText": "",
    "id": "t46",
    "section": "把志愿表拍成片头",
    "kind": "生活情境",
    "reference": {
      "label": "访谈：AI辅助生活与决策",
      "time": "00:07:58",
      "url": "https://www.bilibili.com/video/BV1fcHD6cEw3/?t=478",
      "status": "pending",
      "note": "第三方转录主题归纳，原声待核",
      "transcript": "https://github.com/AayuBal/shaoailun-sunyuchen-podcast/blob/main/%E5%85%A8%E6%96%87.md"
    }
  },
  {
    "theme": "sun",
    "dimension": "choice",
    "chapter": "ch05",
    "concept": "先探图还是先签约",
    "prompt": "孙学说先探图，你却刚看一条旅行视频就想搬过去。你先？",
    "options": [
      {
        "text": "把视频收藏成目的地，算已经探过",
        "score": 0
      },
      {
        "text": "查工作、预算、规则和自己的限制",
        "score": 3
      },
      {
        "text": "先和在当地生活的人聊具体问题",
        "score": 2
      },
      {
        "text": "机票最有气势，先买再补地图",
        "score": 1
      }
    ],
    "anchor": "map",
    "connection": "访谈以游戏开图比喻扩大信息样本，不能把观看当成实地条件已满足。",
    "high": "你先补地图，片头风景没有替你签生活合同。",
    "low": "你更先选一个鲜明方向，地图的空白可能被BGM盖住。",
    "image": null,
    "imageText": "",
    "id": "t47",
    "section": "有人能换路 有人先得走完",
    "kind": "观点冲突",
    "reference": {
      "label": "原片简介：先探图再决定",
      "time": "00:33:05",
      "url": "https://www.bilibili.com/video/BV1fcHD6cEw3/?t=1985",
      "status": "description",
      "note": "本人简介可核，时间来自第三方转录定位"
    }
  },
  {
    "theme": "sun",
    "dimension": "choice",
    "chapter": "ch12",
    "concept": "自由与资产",
    "prompt": "孙学群说要保持机动性，你已经有不能随便搬走的责任。你怎么理解？",
    "options": [
      {
        "text": "为了证明自由，立刻全改",
        "score": 1
      },
      {
        "text": "先照着最火的人生路线走",
        "score": 0
      },
      {
        "text": "先看哪些选择真的能调整，不照搬别人的条件",
        "score": 3
      },
      {
        "text": "做一份现实限制清单再想",
        "score": 2
      }
    ],
    "anchor": "freedom",
    "connection": "访谈的机动性与自由观点需要个人处境；不要求高风险迁移或处置资产。",
    "high": "你按处境找能动的部分，自由不用靠突然清空生活证明。",
    "low": "你更想用明显动作或现成路线表态，责任条件可能没来得及入场。",
    "image": null,
    "imageText": "",
    "id": "t48",
    "section": "知道还有多少 很让人安心",
    "kind": "生活情境",
    "reference": {
      "label": "访谈：自由、机动性与财富",
      "time": "02:43:27",
      "url": "https://www.bilibili.com/video/BV1fcHD6cEw3/?t=9807",
      "status": "pending",
      "note": "第三方转录主题，个人观点不等于适用所有人",
      "transcript": "https://github.com/AayuBal/shaoailun-sunyuchen-podcast/blob/main/%E5%85%A8%E6%96%87.md"
    }
  },
  {
    "theme": "sun",
    "dimension": "choice",
    "chapter": "ch03",
    "concept": "四套理论会诊",
    "prompt": "孙学让你探图，薄肌让你练，大水让你拎桶。今晚只剩一小时，怎么排？",
    "options": [
      {
        "text": "每样留一点时间，试试哪项合适",
        "score": 2
      },
      {
        "text": "问群里哪套目前版本最高",
        "score": 1
      },
      {
        "text": "全安排上，身体负责解决时间问题",
        "score": 0
      },
      {
        "text": "先选我眼下真需要的一件",
        "score": 3
      }
    ],
    "anchor": "ai",
    "connection": "把访谈中的复合人生方案与用户点名的大水梗碰撞，非真实对话。",
    "high": "你先定需要，四套理论没有联合接管你的日历。",
    "low": "你更依赖版本排名或全套安排，一小时可能被口号透支。",
    "image": null,
    "imageText": "",
    "id": "t49",
    "section": "把志愿表拍成片头",
    "kind": "观点冲突",
    "reference": {
      "label": "访谈：AI辅助生活与决策",
      "time": "00:07:58",
      "url": "https://www.bilibili.com/video/BV1fcHD6cEw3/?t=478",
      "status": "pending",
      "note": "第三方转录主题归纳，原声待核",
      "transcript": "https://github.com/AayuBal/shaoailun-sunyuchen-podcast/blob/main/%E5%85%A8%E6%96%87.md"
    }
  },
  {
    "theme": "sun",
    "dimension": "action",
    "chapter": "ch13",
    "concept": "个人说明书",
    "prompt": "孙学群开始做给AI看的个人说明书。你打开空白文档，第一行写？",
    "options": [
      {
        "text": "眼下要解决的事、限制和可分享的信息",
        "score": 3
      },
      {
        "text": "先列几条事实，边用边补",
        "score": 2
      },
      {
        "text": "先选一个史诗级标题",
        "score": 1
      },
      {
        "text": "先研究四十种文件结构，人生稍后录入",
        "score": 0
      }
    ],
    "anchor": "ai",
    "connection": "访谈建议把个人背景结构化输入AI；实际隐私信息无需上传到本网站。",
    "high": "你先写可用内容，个人说明书终于不只是封面工程。",
    "low": "你先完善形式，AI还得继续凭空猜你是谁。",
    "image": null,
    "imageText": "",
    "id": "t50",
    "section": "会解释的人也可能忘记发消息",
    "kind": "生活情境",
    "reference": {
      "label": "访谈：AI辅助生活与决策",
      "time": "00:07:58",
      "url": "https://www.bilibili.com/video/BV1fcHD6cEw3/?t=478",
      "status": "pending",
      "note": "第三方转录主题归纳，原声待核",
      "transcript": "https://github.com/AayuBal/shaoailun-sunyuchen-podcast/blob/main/%E5%85%A8%E6%96%87.md"
    }
  },
  {
    "theme": "sun",
    "dimension": "action",
    "chapter": "ch07",
    "concept": "全球客户第一单",
    "prompt": "孙学说把市场放大，你的作品还没给一个真实用户看过。你先？",
    "options": [
      {
        "text": "先做全球战略发布会，产品后补",
        "score": 0
      },
      {
        "text": "找一个明确需求，做小样并问真实反馈",
        "score": 3
      },
      {
        "text": "先列可联系的几个对象",
        "score": 2
      },
      {
        "text": "把简介改成全球化创业者",
        "score": 1
      }
    ],
    "anchor": "global",
    "connection": "访谈用全球市场扩大机会的观点；不保证任何收入。",
    "high": "你先去接触一个真实需求，全球计划终于有了第一个收件人。",
    "low": "你先做身份和战略，客户暂时只能购买你的自我介绍。",
    "image": null,
    "imageText": "",
    "id": "t51",
    "section": "镜头外的螺丝",
    "kind": "观点冲突",
    "reference": {
      "label": "访谈：全球市场与机会",
      "time": "00:37:20",
      "url": "https://www.bilibili.com/video/BV1fcHD6cEw3/?t=2240",
      "status": "pending",
      "note": "第三方转录主题，不构成收入承诺",
      "transcript": "https://github.com/AayuBal/shaoailun-sunyuchen-podcast/blob/main/%E5%85%A8%E6%96%87.md"
    }
  },
  {
    "theme": "sun",
    "dimension": "action",
    "chapter": "ch13",
    "concept": "财富自由模拟器",
    "prompt": "孙学聊到中奖后的人生模拟。你玩了一次就破产，接下来？",
    "options": [
      {
        "text": "删档，必须保留财富自由人设",
        "score": 1
      },
      {
        "text": "写条帖：模拟器不理解我的认知",
        "score": 0
      },
      {
        "text": "看是哪项选择导致的，改一个再试",
        "score": 3
      },
      {
        "text": "先弄清游戏规则，别急着当现实结论",
        "score": 2
      }
    ],
    "anchor": "game",
    "connection": "访谈以中奖模拟谈认知与决策；游戏输赢不能诊断现实能力。",
    "high": "你把结果当一次反馈，存档没被拉去替人格背锅。",
    "low": "你先保护自己的解释，这次体验里的具体反馈可能被跳过。",
    "image": null,
    "imageText": "",
    "id": "t52",
    "section": "会解释的人也可能忘记发消息",
    "kind": "生活情境",
    "reference": {
      "label": "访谈：中奖后的人生模拟",
      "time": "03:02:00",
      "url": "https://www.bilibili.com/video/BV1fcHD6cEw3/?t=10920",
      "status": "pending",
      "note": "第三方转录主题，游戏不具有认知诊断效度",
      "transcript": "https://github.com/AayuBal/shaoailun-sunyuchen-podcast/blob/main/%E5%85%A8%E6%96%87.md"
    }
  },
  {
    "theme": "sun",
    "dimension": "action",
    "chapter": "ch07",
    "concept": "亡国和写词怎么记账",
    "prompt": "孙学记账本把亡国列消费，把写词列创造。你刚有一段糟心经历，接下来想？",
    "options": [
      {
        "text": "先记下具体感受，想写时再做",
        "score": 2
      },
      {
        "text": "继续研究创造的定义，作品等完美",
        "score": 1
      },
      {
        "text": "先宣布诗人身份，作品稍后补",
        "score": 0
      },
      {
        "text": "想写就先写个小片段，不强迫自己把难受包装成成功",
        "score": 3
      }
    ],
    "anchor": "create",
    "connection": "转录约04:12:59用李煜经历作创造/消费比喻，随后承认休息与消费也能帮助恢复；不要求把痛苦变成绩效。",
    "high": "你准备把经历写成一个具体片段，也没规定难受必须产出名作。",
    "low": "你先拿到诗人身份，具体表达还在等上线。",
    "image": null,
    "imageText": "",
    "id": "t53",
    "section": "镜头外的螺丝",
    "kind": "观点冲突",
    "reference": {
      "label": "访谈：创造与消费的李煜比喻",
      "time": "04:12:59",
      "url": "https://www.bilibili.com/video/BV1fcHD6cEw3/?t=15179",
      "status": "pending",
      "note": "第三方转录约04:12:59。历史比喻不是对所有人的创作要求，原声待核。",
      "transcript": "https://github.com/AayuBal/shaoailun-sunyuchen-podcast/blob/main/%E5%85%A8%E6%96%87.md"
    }
  },
  {
    "theme": "sun",
    "dimension": "evidence",
    "chapter": "ch02",
    "concept": "AI同意我三次",
    "prompt": "孙学群友说三个AI都同意他，所以想法必赚。你先问？",
    "options": [
      {
        "text": "输入是否同源，事实和风险有无独立核对",
        "score": 3
      },
      {
        "text": "把模型意见当线索，不当收益保证",
        "score": 2
      },
      {
        "text": "三个军师总比一个强，先信",
        "score": 1
      },
      {
        "text": "让AI再夸一次，凑齐四大名捕",
        "score": 0
      }
    ],
    "anchor": "ai",
    "connection": "访谈高度重视AI辅助，但模型同意不等于独立证据或收益承诺。",
    "high": "你查的是意见怎么来，三个聊天框没有自动组成审计所。",
    "low": "你先信一致赞同，模型可能只是在重复同一份前提。",
    "image": null,
    "imageText": "",
    "id": "t54",
    "section": "从脸上领取立场",
    "kind": "生活情境",
    "reference": {
      "label": "访谈：AI辅助生活与决策",
      "time": "00:07:58",
      "url": "https://www.bilibili.com/video/BV1fcHD6cEw3/?t=478",
      "status": "pending",
      "note": "第三方转录主题归纳，原声待核",
      "transcript": "https://github.com/AayuBal/shaoailun-sunyuchen-podcast/blob/main/%E5%85%A8%E6%96%87.md"
    }
  },
  {
    "theme": "sun",
    "dimension": "evidence",
    "chapter": "ch12",
    "concept": "成功者路线图",
    "prompt": "孙学切片把一次成功讲成复制步骤。你最想补什么？",
    "options": [
      {
        "text": "先收藏，给它改名保底路线",
        "score": 0
      },
      {
        "text": "当时条件、失败样本和哪些环节不能复制",
        "score": 3
      },
      {
        "text": "先分清个人经历与普遍结论",
        "score": 2
      },
      {
        "text": "结果够大，过程自然正确",
        "score": 1
      }
    ],
    "anchor": "map",
    "connection": "访谈个人经历不等于任何人照做都成功；不作投资或职业保证。",
    "high": "你在找可比条件，别人的终点没有自动变成你的导航。",
    "low": "你更先信结果的气势，路径里的偶然性容易被删掉。",
    "image": null,
    "imageText": "",
    "id": "t55",
    "section": "知道还有多少 很让人安心",
    "kind": "观点冲突",
    "reference": {
      "label": "原片简介：先探图再决定",
      "time": "00:33:05",
      "url": "https://www.bilibili.com/video/BV1fcHD6cEw3/?t=1985",
      "status": "description",
      "note": "本人简介可核，时间来自第三方转录定位"
    }
  },
  {
    "theme": "sun",
    "dimension": "evidence",
    "chapter": "ch02",
    "concept": "太空体验与人生答案",
    "prompt": "孙学群看完太空体验那段，要求今晚交人生终极答案。你先怎么看？",
    "options": [
      {
        "text": "镜头够远，人生问题应该都能免答",
        "score": 1
      },
      {
        "text": "把账单缩小看，欠费也应该跟着消失",
        "score": 0
      },
      {
        "text": "先看他怎样得出想法，不把个人体验当通用结论",
        "score": 3
      },
      {
        "text": "当作一种经验，自己的问题照样具体处理",
        "score": 2
      }
    ],
    "anchor": "earth",
    "connection": "转录约03:14:40谈太空体验改变原先意义观，后续主张继续体验；个人经验不能自动变成全体答案。",
    "high": "你把个人体验与通用结论分开。上了太空也不能替全群交人生答案。",
    "low": "你先让宏大视角包办问题，生活里的具体事情还没获得处理。",
    "image": null,
    "imageText": "",
    "id": "t56",
    "section": "从脸上领取立场",
    "kind": "生活情境",
    "reference": {
      "label": "访谈：太空体验与意义变化",
      "time": "03:14:40",
      "url": "https://www.bilibili.com/video/BV1fcHD6cEw3/?t=11680",
      "status": "pending",
      "note": "第三方转录约03:14:40，个人体验与人生探索，非实际烦恼已经解决。原声待核。",
      "transcript": "https://github.com/AayuBal/shaoailun-sunyuchen-podcast/blob/main/%E5%85%A8%E6%96%87.md"
    }
  },
  {
    "theme": "sun",
    "dimension": "space",
    "chapter": "ch14",
    "concept": "创造也得下班",
    "prompt": "孙学群说少消费多创造，你只是想玩一会儿游戏。你会？",
    "options": [
      {
        "text": "先留好时间，玩完再说",
        "score": 2
      },
      {
        "text": "玩也必须研究商业模式",
        "score": 1
      },
      {
        "text": "不产出就不配玩，先写自我检讨",
        "score": 0
      },
      {
        "text": "可以休息，今天不必把快乐做成项目",
        "score": 3
      }
    ],
    "anchor": "create",
    "connection": "将创造观点与休息选择对照，不伪称访谈否定一切娱乐。",
    "high": "你没让休息先交作品，游戏今晚终于可以只是游戏。",
    "low": "你给快乐加了产出门槛，放松也要等立项。",
    "image": null,
    "imageText": "",
    "id": "t57",
    "section": "不把周末变成预备上班",
    "kind": "观点冲突",
    "reference": {
      "label": "访谈：消费也能帮助恢复",
      "time": "04:16:02",
      "url": "https://www.bilibili.com/video/BV1fcHD6cEw3/?t=15362",
      "status": "pending",
      "note": "第三方转录约04:16:02也承认消费与休息的作用，不应剪成必须100%工作。原声待核。",
      "transcript": "https://github.com/AayuBal/shaoailun-sunyuchen-podcast/blob/main/%E5%85%A8%E6%96%87.md"
    }
  },
  {
    "theme": "sun",
    "dimension": "space",
    "chapter": "ch15",
    "concept": "感情不是追加预算",
    "prompt": "恋爱碰壁，孙学群给出的补丁是加预算。你先想说什么？",
    "options": [
      {
        "text": "钱不能替对方答应，先尊重真实回应",
        "score": 3
      },
      {
        "text": "先谈清双方要什么，不急着加码",
        "score": 2
      },
      {
        "text": "再做一次豪华安排，看看有没有转机",
        "score": 1
      },
      {
        "text": "预算继续上调，对方必须看见诚意",
        "score": 0
      }
    ],
    "anchor": "freedom",
    "connection": "转录约03:06:36讨论感情中金钱的边界与放大作用；此处群聊和选项是原创，不伪造嘉宾台词。",
    "high": "你给对方留了真实选择，回应不是付款后必达的快递。",
    "low": "你更想靠追加投入换回应，关系容易被当成必须验收的项目。",
    "image": null,
    "imageText": "",
    "id": "t58",
    "section": "对方不是一项反馈",
    "kind": "生活情境",
    "reference": {
      "label": "访谈：金钱与感情的边界",
      "time": "03:06:36",
      "url": "https://www.bilibili.com/video/BV1fcHD6cEw3/?t=11196",
      "status": "pending",
      "note": "第三方转录约03:06:36，仅作观点对照，不认定任何关系能用投入换回应。原声待核。",
      "transcript": "https://github.com/AayuBal/shaoailun-sunyuchen-podcast/blob/main/%E5%85%A8%E6%96%87.md"
    }
  },
  {
    "theme": "sun",
    "dimension": "space",
    "chapter": "ch14",
    "concept": "创业到一百多岁",
    "prompt": "孙学访谈聊到超长创业计划。你连今晚都想提前下班，怎么办？",
    "options": [
      {
        "text": "今天加班到零点，向百年创业对齐",
        "score": 0
      },
      {
        "text": "别人的长计划不取消我今天的休息",
        "score": 3
      },
      {
        "text": "先把眼下工作和明天安排说清",
        "score": 2
      },
      {
        "text": "先把退休计划删掉，气势不能输",
        "score": 1
      }
    ],
    "anchor": "long",
    "connection": "转录含长期创业与持续体验的愿景，不是对观众工时的要求。",
    "high": "你把别人的愿景和自己的作息分开，百年计划不用今晚一次付清。",
    "low": "你更想用工时对齐愿景，口号可能先借走了今晚。",
    "image": null,
    "imageText": "",
    "id": "t59",
    "section": "不把周末变成预备上班",
    "kind": "观点冲突",
    "reference": {
      "label": "访谈：超长创业愿景",
      "time": "03:26:15",
      "url": "https://www.bilibili.com/video/BV1fcHD6cEw3/?t=12375",
      "status": "pending",
      "note": "第三方转录约03:26:15；不是观众行动要求",
      "transcript": "https://github.com/AayuBal/shaoailun-sunyuchen-podcast/blob/main/%E5%85%A8%E6%96%87.md"
    }
  },
  {
    "theme": "sun",
    "dimension": "space",
    "chapter": "ch15",
    "concept": "远方机会和家里的人",
    "prompt": "孙学群说哪里有机会就去哪。你答应陪家人处理一件事，时间撞了。你先？",
    "options": [
      {
        "text": "直接走，牵挂属于低效资产",
        "score": 1
      },
      {
        "text": "哪边声量大听哪边，决定省了",
        "score": 0
      },
      {
        "text": "把两边需要说清楚，协商可行安排",
        "score": 3
      },
      {
        "text": "先确认机会是否必须这个时间",
        "score": 2
      }
    ],
    "anchor": "freedom",
    "connection": "机动性观点与实际关系责任碰撞，不要求观众复制他人家庭选择。",
    "high": "你先处理真实约定，机会和关系都不用被一句口号结案。",
    "low": "你先用口号或外部声音决定，双方具体需要可能都没问清。",
    "image": null,
    "imageText": "",
    "id": "t60",
    "section": "对方不是一项反馈",
    "kind": "生活情境",
    "reference": {
      "label": "访谈：自由、机动性与财富",
      "time": "02:43:27",
      "url": "https://www.bilibili.com/video/BV1fcHD6cEw3/?t=9807",
      "status": "pending",
      "note": "第三方转录主题，个人观点不等于适用所有人",
      "transcript": "https://github.com/AayuBal/shaoailun-sunyuchen-podcast/blob/main/%E5%85%A8%E6%96%87.md"
    }
  }
];

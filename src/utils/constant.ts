export const ProvinceList = [
  '山东',
  '福建',
  '河北',
  '河南',
  '重庆',
  '湖北',
  '湖南',
  '江西',
  '海南',
  '黑龙江',
  '天津',
  '贵州',
  '陕西',
  '新疆',
  '江苏',
  '安徽',
  '西藏',
  '吉林',
  '上海',
  '山西',
  '甘肃',
  '宁夏',
  '四川',
  '浙江',
  '广西',
  '云南',
  '内蒙古',
  '辽宁',
  '广东',
  '青海',
  '北京'
]

export const UnpreferedSubList = ['化学', '生物', '政治', '地理']

export const SubAndMajBenke: Map<string, Array<string>> = new Map([
  [
    '农学',
    ['动物医学类', '自然保护与环境生态类', '草学类', '动物生产类', '水产类', '植物生产类', '林学类']
  ],
  ['教育学', ['体育学类', '教育学类']],
  [
    '医学',
    [
      '护理学类',
      '口腔医学类',
      '中西医结合类',
      '中药学类',
      '基础医学类',
      '法医学类',
      '医学技术类',
      '临床医学类',
      '药学类',
      '中医学类',
      '公共卫生与预防医学类'
    ]
  ],
  ['文学', ['中国语言文学类', '新闻传播学类', '外国语言文学类']],
  ['艺术学', ['戏剧与影视学类', '设计学类', '音乐与舞蹈学类', '艺术学理论类', '美术学类']],
  [
    '工学',
    [
      '农业工程类',
      '材料类',
      '计算机类',
      '测绘类',
      '水利类',
      '林业工程类',
      '化工与制药类',
      '仪器类',
      '电子信息类',
      '海洋工程类',
      '生物医学工程类',
      '公安技术类',
      '机械类',
      '轻工类',
      '电气类',
      '地质类',
      '能源动力类',
      '纺织类',
      '土木类',
      '食品科学与工程类',
      '自动化类',
      '矿业类',
      '航空航天类',
      '生物工程类',
      '力学类',
      '核工程类',
      '兵器类',
      '建筑类',
      '安全科学与工程类',
      '交通运输类',
      '环境科学与工程类'
    ]
  ],
  ['法学', ['社会学类', '马克思主义理论类', '公安学类', '政治学类', '民族学类', '法学类']],
  ['哲学', ['哲学类']],
  ['经济学', ['金融学类', '经济与贸易类', '财政学类', '经济学类']],
  ['历史学', ['历史学类']],
  [
    '理学',
    [
      '地质学类',
      '物理学类',
      '天文学类',
      '地理科学类',
      '统计学类',
      '生物科学类',
      '海洋科学类',
      '化学类',
      '数学类',
      '地球物理学类',
      '大气科学类',
      '心理学类'
    ]
  ],
  [
    '管理学',
    [
      '电子商务类',
      '工商管理类',
      '公共管理类',
      '工业工程类',
      '旅游管理类',
      '农业经济管理类',
      '图书情报与档案管理类',
      '管理科学与工程类',
      '物流管理与工程类'
    ]
  ]
])

export const SubAndMajZhuanke: Map<string, Array<string>> = new Map([
  ['电子与信息大类', ['电子信息类', '计算机类', '通信类', '集成电路类']],
  [
    '公安与司法大类',
    ['安全防范类', '司法技术类', '公安技术类', '侦查类', '法律执行类', '公安管理类', '法律实务类']
  ],
  [
    '交通运输大类',
    [
      '道路运输类',
      '航空运输类',
      '邮政类',
      '管道运输类',
      '铁道运输类',
      '水上运输类',
      '城市轨道交通类'
    ]
  ],
  ['水利大类', ['水利工程与管理类', '水文水资源类', '水土保持与水环境类', '水利水电设备类']],
  [
    '土木建筑大类',
    [
      '建设工程管理类',
      '建筑设计类',
      '建筑设备类',
      '城乡规划与管理类',
      '建筑工程管理类',
      '市政工程类',
      '土建施工类',
      '房地产类'
    ]
  ],
  ['轻工纺织大类', ['包装类', '纺织服装类', '印刷类', '轻化工类']],
  [
    '医药卫生大类',
    [
      '公共卫生与卫生管理类',
      '中医药类',
      '医学技术类',
      '护理类',
      '临床医学类',
      '健康管理与促进类',
      '药学类',
      '康复治疗类',
      '眼视光类'
    ]
  ],
  ['食品药品与粮食大类', ['食品类', '粮食类', '药品与医疗器械类']],
  [
    '资源环境与安全大类',
    [
      '测绘地理信息类',
      '金属与非金属矿类',
      '资源勘查类',
      '煤炭类',
      '环境保护类',
      '石油与天然气类',
      '气象类',
      '地质类',
      '安全类'
    ]
  ],
  ['公共管理与服务大类', ['公共事业类', '公共管理类', '公共服务类', '文秘类']],
  ['旅游大类', ['旅游类', '餐饮类']],
  ['新闻传播大类', ['广播影视类', '新闻出版类']],
  ['旅游大类', ['旅游类', '餐饮类']],
  ['教育与体育大类', ['体育类', '语言类', '教育类']],
  ['农林牧渔大类', ['农业类', '渔业类', '林业类', '畜牧业类']],
  ['文化艺术大类', ['表演艺术类', '民族文化艺术类', '文化服务类', '艺术设计类']],
  [
    '能源动力与材料大类',
    [
      '电力技术类',
      '黑色金属材料类',
      '建筑材料类',
      '有色金属材料类',
      '非金属材料类',
      '热能与发电工程类',
      '新能源发电工程类'
    ]
  ],
  [
    '装备制造大类',
    [
      '航空装备类',
      '机电设备类',
      '机械设计制造类',
      '汽车制造类',
      '自动化类',
      '轨道装备类',
      '船舶与海洋工程装备类'
    ]
  ],
  [
    '财经商贸大类',
    [
      '财政税务类',
      '电子商务类',
      '工商管理类',
      '统计类',
      '经济贸易类',
      '物流类',
      '金融类',
      '财务会计类'
    ]
  ],
  ['生物与化工大类', ['生物技术类', '化工技术类']]
])
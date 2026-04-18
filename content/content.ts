export type Publication = {
  authors: string;
  year: number;
  title: string;
  outlet: string;
  details?: string;
  language: "zh" | "en";
  notes?: string[];
  featured?: boolean;
};

export type Course = {
  titleZh: string;
  titleEn: string;
  levelZh: string;
  levelEn: string;
  semesterZh: string;
  semesterEn: string;
};

export type Presentation = {
  date: string;
  eventZh?: string;
  eventEn?: string;
  institutionZh?: string;
  institutionEn?: string;
};

export type Grant = {
  funderZh: string;
  funderEn?: string;
  typeZh?: string;
  typeEn?: string;
  statusZh?: string;
  statusEn?: string;
  roleZh?: string;
  roleEn?: string;
};

export type Education = {
  start: string;
  end: string;
  degreeZh: string;
  degreeEn: string;
  institutionZh: string;
  institutionEn: string;
  advisorZh?: string;
  advisorEn?: string;
  noteZh?: string;
  noteEn?: string;
};

export type Position = {
  start: string;
  end: string;
  titleZh: string;
  titleEn: string;
  institutionZh: string;
  institutionEn: string;
};

export type SiteContent = {
  profile: {
    nameZh: string;
    nameEn: string;
    titleZh: string;
    titleEn: string;
    affiliationZh: string;
    affiliationEn: string;
    email: string;
    locationZh: string;
    locationEn: string;
    cvUpdated: string;
  };

  seo: {
    siteTitleZh: string;
    siteTitleEn: string;
    siteDescriptionZh: string;
    siteDescriptionEn: string;
    keywordsZh: string[];
    keywordsEn: string[];
  };

  hero: {
    titleZh: string;
    subtitleZh: string;
    titleEn: string;
    subtitleEn: string;
  };

  bio: {
    shortZh: string;
    shortEn: string;
    homepageZh: string;
    homepageEn: string;
  };

  researchInterests: {
    zh: string[];
    en: string[];
  };

  positions: Position[];
  education: Education[];
  featuredPublications: Publication[];
  publications: Publication[];
  otherPublications: {
    titleZh: string;
    titleEn?: string;
    publisherZh: string;
    publisherEn?: string;
    roleZh?: string;
    roleEn?: string;
  }[];
  grants: Grant[];
  awards: string[];
  courses: Course[];
  reviewing: string[];
  presentations: Presentation[];
  skills: {
    software: string[];
    languagesZh: string[];
    languagesEn: string[];
  };
  links: {
    googleScholar: string;
    orcid: string;
    researchGate: string;
    ssrn: string;
    github: string;
    departmentPage: string;
    cvPdf: string;
  };
};

export const siteContent: SiteContent = {
  profile: {
    nameZh: "唐浩丹",
    nameEn: "Haodan Tang",
    titleZh: "讲师、硕士生导师",
    titleEn: "Lecturer, Master's Supervisor",
    affiliationZh: "西南财经大学国际商学院",
    affiliationEn: "School of International Business (SIB), Southwestern University of Finance and Economics (SWUFE)",
    email: "tanghd@swufe.edu.cn",
    locationZh: "中国·成都",
    locationEn: "Chengdu, China",
    cvUpdated: "2026-04-18",
  },

  seo: {
    siteTitleZh: "唐浩丹 | 学术主页",
    siteTitleEn: "Haodan Tang | Academic Website",
    siteDescriptionZh:
      "唐浩丹，西南财经大学国际商学院讲师、硕士生导师。研究方向包括数字经济、国际投资、创新经济、科技金融与产业经济。",
    siteDescriptionEn:
      "Haodan Tang is a Lecturer at the School of International Business (SIB), Southwestern University of Finance and Economics (SWUFE). His research focuses on the digital economy, international investment, innovation economics, technology finance, and industrial economics.",
    keywordsZh: ["唐浩丹", "西南财经大学", "国际商学院", "数字经济", "国际投资", "创新经济", "科技金融", "产业经济"],
    keywordsEn: [
      "Haodan Tang",
      "SWUFE",
      " School of International Business",
      "Digital Economy",
      "International Investment",
      "Innovation Economics",
      "Technology Finance",
      "Industrial Economics",
    ],
  },

  hero: {
    titleZh: "唐浩丹",
    subtitleZh: "西南财经大学国际商学院 讲师、硕士生导师",
    titleEn: "Haodan Tang",
    subtitleEn: "Lecturer, International Business School, Southwestern University of Finance and Economics",
  },

  bio: {
    shortZh:
      "唐浩丹，西南财经大学国际商学院讲师、硕士生导师。研究聚焦数字经济、国际投资、创新经济、科技金融与产业经济。",
    shortEn:
      "Haodan Tang is a Lecturer and Master's Supervisor at the International Business School, Southwestern University of Finance and Economics. His research focuses on the digital economy, international investment, innovation economics, technology finance, and industrial economics.",
    homepageZh:
      "唐浩丹，西南财经大学国际商学院讲师、硕士生导师。毕业于南开大学经济学院世界经济专业，获经济学博士学位，并曾于康奈尔大学 Dyson 应用经济与管理学院联合培养。其研究主要围绕数字经济、国际投资、创新经济、科技金融与产业经济展开，重点关注数字技术、企业行为与市场绩效之间的关系，以及数字化转型和跨境投资对企业竞争优势与创新活动的影响。",
    homepageEn:
      "Haodan Tang is a Lecturer and Master's Supervisor at the School of International Business (SIB), Southwestern University of Finance and Economics (SWUFE). He received his Ph.D. in World Economy from Nankai University and was a joint Ph.D. student at the Dyson School of Applied Economics and Management, Cornell University. His research lies at the intersection of the digital economy, international investment, innovation economics, technology finance, and industrial economics, with a particular interest in how digital technologies reshape firm behavior, market performance, innovation, and cross-border business strategy.",
  },

  researchInterests: {
    zh: ["数字经济", "国际投资", "创新经济", "科技金融", "产业经济"],
    en: [
      "Digital Economy",
      "International Investment",
      "Innovation Economics",
      "Technology Finance",
      "Industrial Economics",
    ],
  },

  positions: [
    {
      start: "2023",
      end: "至今",
      titleZh: "讲师、硕士生导师",
      titleEn: "Lecturer, Master's Supervisor",
      institutionZh: "西南财经大学国际商学院",
      institutionEn: "School of International Business (SIB), Southwestern University of Finance and Economics (SWUFE)",
    },
  ],

  education: [
    {
      start: "2019",
      end: "2023",
      degreeZh: "经济学博士（世界经济）",
      degreeEn: "Ph.D. in Economics (World Economy)",
      institutionZh: "南开大学经济学院",
      institutionEn: "School of Economics, Nankai University",
      advisorZh: "蒋殿春",
      advisorEn: "Dianchun Jiang",
    },
    {
      start: "2021",
      end: "2022",
      degreeZh: "联合培养博士",
      degreeEn: "Joint Ph.D. Training",
      institutionZh: "康奈尔大学商学院 Dyson 应用经济与管理学院",
      institutionEn: "Dyson School of Applied Economics and Management, Cornell University",
      advisorEn: "Shanjun Li",
    },
    {
      start: "2017",
      end: "2019",
      degreeZh: "提前直攻博（数量经济学）",
      degreeEn: "Early-entry Ph.D. Track in Quantitative Economics",
      institutionZh: "南开大学经济学院",
      institutionEn: "School of Economics, Nankai University",
      advisorZh: "攸频",
      advisorEn: "You Pin",
    },
    {
      start: "2013",
      end: "2017",
      degreeZh: "理学学士（数学与应用数学）",
      degreeEn: "B.S. in Mathematics and Applied Mathematics",
      institutionZh: "西南交通大学数学学院",
      institutionEn: "School of Mathematics, Southwest Jiaotong University",
      noteZh: "推免硕士",
      noteEn: "Recommended for graduate studies",
    },
  ],

  featuredPublications: [
        {
      authors: "Haodan Tang, Gang Xu",
      year: 2025,
      title: "Digital Wings: The Effect of Digital Technology Adoption on Market Power",
      outlet: "Journal of Economics & Management Strategy",
      details: "34(4): 991-1017",
      language: "en",
      featured: true,
    },
    {
      authors: "唐浩丹、方森辉、蒋殿春",
      year: 2022,
      title: "数字化转型的市场绩效：数字并购能提升制造业企业市场势力吗？",
      outlet: "《数量经济技术经济研究》",
      language: "zh",
      featured: true,
    },
    {
      authors: "蒋殿春、唐浩丹",
      year: 2021,
      title: "数字型跨国并购：特征及驱动力",
      outlet: "《财贸经济》",
      language: "zh",
      featured: true,
    },
    {
      authors: "Haodan Tang, Kaiwen Wu, Jing Zhou",
      year: 2025,
      title: "Smarter Supply Chains, Stronger Resilience? The Impact of AI on Preparation, Response, and Recovery",
      outlet: "Economics Letters",
      details: "254, 112488",
      language: "en",
      featured: true,
    },
    {
      authors: "Haodan Tang, Jiaxuan Liang, Senhui Fang",
      year: 2024,
      title: "The Innovation Effect of Digital M&As: Evidence from China",
      outlet: "International Review of Financial Analysis",
      details: "96, 103595",
      language: "en",
      featured: true,
    },
    {
      authors: "Haodan Tang, Senhui Fang, Dianchun Jiang",
      year: 2022,
      title: "The Market Value Effect of Digital Mergers and Acquisitions: Evidence from China",
      outlet: "Economic Modelling",
      details: "116, 106006",
      language: "en",
      featured: true,
    },
  ],

  publications: [
    {
      authors: "Haodan Tang, Kaiwen Wu, Jing Zhou",
      year: 2025,
      title: "Smarter Supply Chains, Stronger Resilience? The Impact of AI on Preparation, Response, and Recovery",
      outlet: "Economics Letters",
      details: "254, 112488",
      language: "en",
    },
    {
      authors: "Haodan Tang, Ruifeng Zhao, Dianchun Jiang, Ziqi Chu",
      year: 2025,
      title: "Associate with the Green to Become Greener: TMT Network and Corporate ESG Performance",
      outlet: "Corporate Social Responsibility and Environmental Management",
      details: "32(4): 5521-5539",
      language: "en",
    },
    {
      authors: "海鹏、唐浩丹",
      year: 2025,
      title: "异地商会与资本跨区域流动：基于企业异地并购的视角",
      outlet: "《管理评论》",
      language: "zh",
    },
    {
      authors: "海鹏、吴晓楠、唐浩丹",
      year: 2025,
      title: "产品质量认证与企业跨区域市场进入：兼论对全国统一大市场建设的启示",
      outlet: "《宏观质量研究》",
      language: "zh",
    },
    {
      authors: "Haodan Tang, Gang Xu",
      year: 2025,
      title: "Digital Wings: The Effect of Digital Technology Adoption on Market Power",
      outlet: "Journal of Economics & Management Strategy",
      details: "34(4): 991-1017",
      language: "en",
    },
    {
      authors: "Haodan Tang, Jiaxuan Liang, Senhui Fang",
      year: 2024,
      title: "The Innovation Effect of Digital M&As: Evidence from China",
      outlet: "International Review of Financial Analysis",
      details: "96, 103595",
      language: "en",
    },
    {
      authors: "Chuanchuan Li, Lei Li, Haodan Tang, Yanyan Zheng",
      year: 2023,
      title: "Human Capital Expansion and FDI Exit: Evidence from China",
      outlet: "China and World Economy",
      details: "31(05): 116-134",
      language: "en",
    },
    {
      authors: "唐浩丹、方森辉、蒋殿春",
      year: 2022,
      title: "数字化转型的市场绩效：数字并购能提升制造业企业市场势力吗？",
      outlet: "《数量经济技术经济研究》",
      language: "zh",
      notes: [
        "人大复印资料《企业管理研究》2023年第7期全文转载",
        "全文收录于《中国反垄断与规制经济学学术年鉴（2023卷）》",
        "《新华文摘》2023年第9期观点摘编",
      ],
    },
    {
      authors: "Haodan Tang, Senhui Fang, Dianchun Jiang",
      year: 2022,
      title: "The Market Value Effect of Digital Mergers and Acquisitions: Evidence from China",
      outlet: "Economic Modelling",
      details: "116, 106006",
      language: "en",
    },
    {
      authors: "方森辉、唐浩丹、蒋殿春",
      year: 2022,
      title: "数字并购与企业创新——来自上市企业的证据",
      outlet: "《管理科学》",
      language: "zh",
    },
    {
      authors: "蒋殿春、唐浩丹",
      year: 2021,
      title: "数字型跨国并购：特征及驱动力",
      outlet: "《财贸经济》",
      language: "zh",
      notes: ["人大复印资料《世界经济导刊》2022年第1期全文转载"],
    },
    {
      authors: "李川川、李磊、唐浩丹",
      year: 2021,
      title: "服务业开放、制度质量与企业创新",
      outlet: "《云南财经大学学报》",
      language: "zh",
    },
    {
      authors: "唐浩丹、蒋殿春",
      year: 2021,
      title: "数字并购与企业数字化转型：内涵、事实与经验",
      outlet: "《经济学家》",
      language: "zh",
    },
    {
      authors: "蒋殿春、唐浩丹、方森辉",
      year: 2020,
      title: "新冠疫情与中国数字经济对外投资：影响和展望",
      outlet: "《国际贸易》",
      language: "zh",
    },
  ],

  otherPublications: [
    {
      titleZh: "《数字经济与中国》",
      titleEn: "Digital Economy and China",
      publisherZh: "世界经济论坛-南开大学联合报告（双语），南开大学出版社",
      roleZh: "第五章主要作者",
    },
    {
      titleZh: "《联合国事务年度评论：2016-2017》",
      publisherZh: "社会科学文献出版社",
      roleZh: "第三章作者",
    },
  ],

  grants: [
    {
      funderZh: "教育部人文社会科学研究基金",
      funderEn: "Ministry of Education Humanities and Social Sciences Research Fund",
      typeZh: "青年项目",
      statusZh: "在研",
      roleZh: "主持1项 / 参与1项",
    },
    {
      funderZh: "国家自然科学基金",
      funderEn: "National Natural Science Foundation of China",
      typeZh: "面上项目",
      statusZh: "在研",
      roleZh: "参与",
    },
    {
      funderZh: "国家社科基金",
      funderEn: "National Social Science Fund of China",
      typeZh: "青年项目",
      statusZh: "在研",
      roleZh: "参与",
    },
    {
      funderZh: "四川省自然科学基金",
      funderEn: "Sichuan Natural Science Foundation",
      typeZh: "青年项目",
      statusZh: "在研",
      roleZh: "主持",
    },
    {
      funderZh: "西南财经大学中央高校基本科研业务费",
      funderEn: "Fundamental Research Funds for the Central Universities, SWUFE",
      typeZh: "青年教师成长项目",
      statusZh: "结项（优秀）",
      roleZh: "主持",
    },
    {
      funderZh: "西南财经大学引进人才科研启动资助项目",
      funderEn: "SWUFE Research Start-up Grant for Introduced Talents",
      typeZh: "重点项目",
      statusZh: "结项",
      roleZh: "主持",
    },
  ],

  awards: [
    "南开大学优秀博士学位论文",
    "首届全国大学生发展经济学论文大赛特等奖，并作为获奖代表进行大会发言",
    "《世界经济年鉴 2022》“国际投资学 2021年最佳中文论文 Top10”",
    "第七届全国经济学研究生论文大赛三等奖",
    "复旦大学全国博士生学术论坛三等奖",
    "第四届未来经济学家论坛优秀奖",
  ],

  courses: [
    {
      titleZh: "国际商务（英）",
      titleEn: "International Business",
      levelZh: "本科二年级",
      levelEn: "Undergraduate",
      semesterZh: "春季学期",
      semesterEn: "Spring",
    },
    {
      titleZh: "中级国际商务",
      titleEn: "Intermediate International Business",
      levelZh: "硕士一年级（MIB）",
      levelEn: "Master's (MIB)",
      semesterZh: "秋季学期",
      semesterEn: "Fall",
    },
    {
      titleZh: "数字化经济中的跨国公司战略管理（英）",
      titleEn: "Strategic Management of Multinational Corporations in the Digital Economy",
      levelZh: "硕士一年级（留学生）",
      levelEn: "Master's (International Students)",
      semesterZh: "春季学期",
      semesterEn: "Spring",
    },
    {
      titleZh: "数字化经济中的跨国公司战略管理专题（II）",
      titleEn: "Topics in Strategic Management of Multinational Corporations in the Digital Economy (II)",
      levelZh: "博士一年级",
      levelEn: "PhD",
      semesterZh: "春季学期",
      semesterEn: "Spring",
    },
  ],

  reviewing: [
    "《数量经济技术经济研究》",
    "《系统工程理论与实践》",
    "China and World Economy",
    "International Review of Financial Analysis",
  ],

  presentations: [
    {
      date: "2025.06",
      eventZh: "CCER夏季论坛",
      institutionZh: "北京大学国家发展研究院",
    },
    {
      date: "2024.09",
      eventZh: "首届数字经济学术年会",
      institutionZh: "南京大学数字经济与管理学院",
    },
    {
      date: "2023.06",
      eventZh: "第九届香樟经济学年会",
      institutionZh: "中国人民大学经济学院",
    },
    {
      date: "2022.01",
      eventZh: "第三届中国企业创新与发展论坛",
      institutionZh: "四川大学商学院",
    },
    {
      date: "2021.12",
      eventZh: "第四届未来经济学家论坛",
      institutionZh: "中央财经大学经济学院",
    },
    {
      date: "2021.11",
      eventZh: "复旦大学全国博士生学术论坛-经济分论坛",
      institutionZh: "复旦大学经济学院",
    },
    {
      date: "2021.10",
      eventZh: "第十届国际投资论坛",
      institutionZh: "中山大学国际金融学院",
    },
    {
      date: "2021.07",
      eventZh: "首届全国大学生发展经济学论文大赛",
      institutionZh: "南京大学经济学院",
    },
    {
      date: "2021.07",
      eventZh: "第三届中国工业经济学会青年杯论文竞赛",
      institutionZh: "首都经贸大学杂志社",
    },
    {
      date: "2021.06",
      eventEn: "The Chinese Economists Society (CES) 2021 Annual Conference",
      institutionEn: "Chinese Economists Society",
    },
    {
      date: "2021.05",
      eventZh: "第七届经济学研究生学术年会",
      institutionZh: "华中科技大学经济学院",
    },
    {
      date: "2020.12",
      eventZh: "第二十届中国经济学年会",
      institutionZh: "北京大学汇丰商学院",
    },
    {
      date: "2020.11",
      eventZh: "第二届互联网与数字经济论坛",
      institutionZh: "南京大学经济学院",
    },
    {
      date: "2019.09",
      eventZh: "第八届国际投资论坛",
      institutionZh: "南开大学经济学院",
    },
  ],

  skills: {
    software: ["Stata", "R", "Matlab", "LaTeX"],
    languagesZh: ["普通话", "英语（流利）"],
    languagesEn: ["Mandarin Chinese", "English (Fluent)"],
  },

  links: {
    googleScholar: "https://scholar.google.com/citations?user=8dxaWRoAAAAJ&hl=zh-CN",
    orcid: "https://orcid.org/0000-0002-7913-7733",
    researchGate: "",
    ssrn: "",
    github: "",
    departmentPage: "https://sib.swufe.edu.cn/info/1103/1663.htm",
    cvPdf: "/cv/CV_THD.pdf",
  },
};

export const navZh = [
  { label: "首页", href: "/" },
  { label: "研究", href: "/research" },
  { label: "教学", href: "/teaching" },
  { label: "简历", href: "/cv" },
  { label: "学术服务", href: "/service" },
  { label: "联系方式", href: "/contact" },
];

export const navEn = [
  { label: "Home", href: "/en" },
  { label: "Research", href: "/en/research" },
  { label: "Teaching", href: "/en/teaching" },
  { label: "CV", href: "/en/cv" },
  { label: "Service", href: "/en/service" },
  { label: "Contact", href: "/en/contact" },
];

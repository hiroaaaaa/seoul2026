const siteInfo = {
  version: '2026-06-27 v3.2',
  label: '交通修復版｜cards交通完整恢復',
  title: '首爾親子行程｜手機交通卡',
  subtitle: '4大3小｜住宿：弘大／麻浦',
  footerNote: '非精準票價，現場以 Naver Map / KakaoMap / 車資 App 為準。'
};

const places = {

  hotel: {
    name: '住宿（弘大／麻浦）',
    ko: '서울 마포구 양화로23길 16-5',
    addr: '16-5, Yanghwa-ro 23-gil, Mapo-gu, Seoul',
    lat: 37.55705,
    lng: 126.92372,
    meet: '住宿門口'
  },

  hongdaeStation: {
    name: '弘大入口站',
    ko: '홍대입구역',
    addr: 'Hongik Univ. Station',
    lat: 37.55719,
    lng: 126.92538,
    meet: '出口'
  },

  hongdaeExchange: {
    name: '弘大換錢',
    ko: '홍대 환전소',
    addr: '弘大商圈',
    lat: 37.556,
    lng: 126.924,
    meet: '弘大商圈'
  },

  day1Food: {
    name: '쟁반집8292',
    ko: '쟁반집8292 홍대점',
    addr: '서울 마포구 서교동 330-16',
    lat: 37.55422,
    lng: 126.92294,
    meet: '店門口'
  },

  standardBread: {
    name: 'Standard Bread 聖水',
    ko: '스탠다드브레드 성수',
    addr: 'Seongsu',
    lat: 37.54454,
    lng: 127.05520,
    meet: '店門口'
  },

  lowkeyCafe: {
    name: 'LOWKEY Coffee',
    ko: 'LOWKEY',
    addr: '聖水',
    lat: 37.545,
    lng: 127.054,
    meet: '店門口'
  },

  eungdongMinari: {
    name: '능동미나리',
    ko: '능동미나리',
    addr: '首爾',
    lat: 37.548,
    lng: 127.056,
    meet: '店門口',
    metro: '聖水站轉2號線至三成站，約15–20分',
    taxi: '約10–15分'
  },

  starfield: {
    name: 'COEX 星空圖書館',
    ko: '별마당도서관',
    addr: 'COEX',
    lat: 37.51003,
    lng: 127.06020,
    meet: 'COEX入口',
    metro: '三成站步行5–8分',
    taxi: '約20–30分'
  },

  dongA: {
    name: '昌信洞玩具街',
    ko: '동아완구',
    addr: '서울 종로구 종로52길 5',
    lat: 37.57155,
    lng: 127.01278,
    meet: '店門口',
    metro: '弘大→東大門站約40–50分',
    taxi: '約20–30分'
  },

  gwangjang: {
    name: '廣藏市場',
    ko: '광장시장',
    addr: '서울 종로구 창경궁로 88',
    lat: 37.57009,
    lng: 126.99936,
    meet: '主要入口',
    metro: '東大門歷史文化公園站步行10分',
    taxi: '約10–15分'
  },

  nyunyu: {
    name: 'NYUNYU',
    ko: 'NYUNYU',
    addr: '동대문',
    lat: 37.56862,
    lng: 127.00870,
    meet: '店門口',
    metro: '東大門站步行5分',
    taxi: '約5–10分'
  },

  seoulStationLotteMart: {
    name: '首爾站樂天超市',
    ko: '롯데마트 서울역점',
    addr: '서울 중구 한강대로 405',
    lat: 37.5551,
    lng: 126.9723,
    meet: '入口',
    metro: '東大門→首爾站約20–25分',
    taxi: '約15–25分'
  },

  lotteWorld: {
    name: '蠶室樂天世界',
    ko: '롯데월드',
    addr: '서울 송파구 올림픽로 240',
    lat: 37.51112,
    lng: 127.09817,
    meet: '正門',
    metro: '弘大→蠶室約50–60分',
    taxi: '約40–60分'
  },

  lotteMall: {
    name: '樂天世界 Mall',
    ko: '롯데월드몰',
    addr: '서울 송파구 올림픽로 300',
    lat: 37.51375,
    lng: 127.10444,
    meet: 'B1餐飲',
    metro: '園區連通',
    taxi: '同區'
  },

  airportT2: {
    name: '仁川機場 T2',
    ko: '인천국제공항 제2여객터미널',
    addr: 'Incheon International Airport Terminal 2',
    lat: 37.46890,
    lng: 126.43380,
    meet: '出發大廳'
  }
};

const days = [
{
  day: 'Day 1｜抵達弘大',
  summary: '機場 → 弘大',
  cards: [
    { cls:'airport', to:'hotel', title:'✈️ 仁川 → 弘大', metro:'AREX直達約55–60分，₩29,000–32,000', taxi:'Van約50–70分' }
  ]
},
{
  day: 'Day 2｜聖水＋COEX',
  summary: '聖水 → COEX',
  cards: [
    { cls:'', to:'standardBread', title:'☕ Standard Bread', metro:'弘大→聖水約25–35分', taxi:'約20–30分' },
    { cls:'', to:'lowkeyCafe', title:'☕ LOWKEY', metro:'聖水區內步行', taxi:'短程' },
    { cls:'food', to:'eungdongMinari', title:'🍜 午餐', metro:'聖水→店約10–15分', taxi:'10–15分' },
    { cls:'', to:'starfield', title:'📚 COEX', metro:'聖水→三成約15–20分', taxi:'15–25分' },
    { cls:'food', to:'hotel', title:'🥓 弘大晚餐', metro:'COEX→弘大約50–60分', taxi:'40–60分' }
  ]
},
{
  day: 'Day 3｜東大門＋採買',
  summary: '玩具街 → 廣藏 → NYUNYU → 樂天超市',
  cards: [
    { cls:'', to:'dongA', title:'🧸 玩具街', metro:'弘大→東大門約40–50分', taxi:'20–30分' },
    { cls:'food', to:'gwangjang', title:'🍜 廣藏市場', metro:'步行10分', taxi:'10–15分' },
    { cls:'', to:'nyunyu', title:'🛍 NYUNYU', metro:'步行5分', taxi:'5–10分' },
    { cls:'food', to:'seoulStationLotteMart', title:'🛒 首爾站樂天超市', metro:'東大門→首爾站20–25分', taxi:'15–25分' }
  ]
},
{
  day: 'Day 4｜樂天世界',
  summary: '全天樂園',
  cards: [
    { cls:'long', to:'lotteWorld', title:'🎢 樂天世界', metro:'弘大→蠶室50–60分', taxi:'40–60分' },
    { cls:'food', to:'lotteMall', title:'🍽 Mall備案', metro:'園區內', taxi:'同區' }
  ]
},
{
  day: 'Day 5｜返台',
  summary: '機場',
  cards: [
    { cls:'airport', to:'hotel', title:'✈️ 回程', metro:'AREX 55–60分', taxi:'50–70分' }
  ]
}
];

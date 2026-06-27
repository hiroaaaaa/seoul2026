const siteInfo = {
  version: '2026-06-27 v3.0',
  label: '動線優化｜聖水COEX版＋首爾站補貨整合',
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
    meet: '店門口'
  },

  starfield: {
    name: 'COEX 星空圖書館',
    ko: '별마당도서관',
    addr: 'COEX',
    lat: 37.51003,
    lng: 127.06020,
    meet: 'COEX入口'
  },

  dongA: {
    name: '昌信洞玩具街',
    ko: '동아완구',
    addr: '서울 종로구 종로52길 5',
    lat: 37.57155,
    lng: 127.01278,
    meet: '店門口'
  },

  gwangjang: {
    name: '廣藏市場',
    ko: '광장시장',
    addr: '서울 종로구 창경궁로 88',
    lat: 37.57009,
    lng: 126.99936,
    meet: '主要入口'
  },

  nyunyu: {
    name: 'NYUNYU',
    ko: 'NYUNYU',
    addr: '동대문',
    lat: 37.56862,
    lng: 127.00870,
    meet: '店門口'
  },

  mangoBusy: {
    name: 'Mango Busy',
    ko: 'Mango Busy',
    addr: 'DDP周邊',
    google: 'https://maps.app.goo.gl/yFvTRT8qF5hmxeTW8',
    noUber: true,
    meet: 'Google定位'
  },

  lotteWorld: {
    name: '蠶室樂天世界',
    ko: '롯데월드',
    addr: '서울 송파구 올림픽로 240',
    lat: 37.51112,
    lng: 127.09817,
    meet: '正門'
  },

  lotteMall: {
    name: '樂天世界 Mall',
    ko: '롯데월드몰',
    addr: '서울 송파구 올림픽로 300',
    lat: 37.51375,
    lng: 127.10444,
    meet: 'B1餐飲'
  },

  seoulStationLotteMart: {
    name: '首爾站樂天超市',
    ko: '롯데마트 서울역점',
    addr: '서울 중구 한강대로 405',
    lat: 37.5551,
    lng: 126.9723,
    meet: '入口'
  },

  crabWorld: {
    name: '花蟹世界',
    ko: '꽃게나라',
    addr: 'Google Maps',
    google: 'https://maps.app.goo.gl/MLtG4quMSr8ktWqeA',
    meet: '店門口'
  }
};

const days = [
{
  day: 'Day 1｜抵達弘大',
  summary: '機場 → 弘大',
  cards: [
    { cls:'airport', to:'hotel', title:'✈️ 仁川 → 弘大' }
  ]
},
{
  day: 'Day 2｜聖水＋COEX',
  summary: '聖水 → COEX',
  cards: [
    { cls:'', to:'standardBread', title:'☕ Standard Bread' },
    { cls:'', to:'lowkeyCafe', title:'☕ LOWKEY' },
    { cls:'food', to:'eungdongMinari', title:'🍜 午餐' },
    { cls:'', to:'starfield', title:'📚 COEX' },
    { cls:'food', to:'hotel', title:'🥓 弘大晚餐' }
  ]
},
{
  day: 'Day 3｜東大門＋採買',
  summary: '玩具街 → 廣藏 → NYUNYU → 樂天超市',
  cards: [
    { cls:'', to:'dongA', title:'🧸 玩具街' },
    { cls:'food', to:'gwangjang', title:'🍜 廣藏市場' },
    { cls:'', to:'nyunyu', title:'🛍 NYUNYU' },
    { cls:'food', to:'seoulStationLotteMart', title:'🛒 首爾站樂天超市' }
  ]
},
{
  day: 'Day 4｜樂天世界',
  summary: '全天樂園',
  cards: [
    { cls:'long', to:'lotteWorld', title:'🎢 樂天世界' },
    { cls:'food', to:'lotteMall', title:'🍽 Mall備案' }
  ]
},
{
  day: 'Day 5｜返台',
  summary: '機場',
  cards: [
    { cls:'airport', to:'hotel', title:'✈️ 回程' }
  ]
}
];
const siteInfo = {
  version: '2026-06-26 v1.6',
  label: '移除樂天超市採買＋親子動線穩定版',
  title: '首爾親子行程｜手機交通卡',
  subtitle: '4大3小｜住宿：弘大／麻浦',
  footerNote: '非精準票價，現場以 Naver Map / KakaoMap / Google Maps / 車資 App 為準。'
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
    meet: '弘大入口站出口'
  },

  day1Food: {
    name: '쟁반집8292 / jaengban家',
    ko: '쟁반집8292 홍대점',
    addr: '서울 마포구 서교동 330-16',
    lat: 37.55422,
    lng: 126.92294,
    meet: '店門口'
  },

  standardBread: {
    name: 'Standard Bread 聖水',
    ko: '스탠다드브레드 성수',
    addr: 'Standard Bread Seongsu',
    lat: 37.54454,
    lng: 127.05520,
    meet: '店門口'
  },

  pulPig: {
    name: '水芹烤豬五花 / 풀뜯는돼지',
    ko: '풀뜯는돼지',
    addr: '서울특별시 마포구 동교로32길 7 1층',
    lat: 37.56205,
    lng: 126.92555,
    meet: '店門口'
  },

  starfield: {
    name: '星空圖書館（COEX）',
    ko: '별마당도서관',
    addr: '스타필드 코엑스몰',
    lat: 37.51003,
    lng: 127.06020,
    meet: 'COEX入口'
  },

  dongA: {
    name: '동아완구／昌信洞玩具街',
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
    name: 'NYUNYU 東大門',
    ko: 'NYUNYU 동대문 / 뉴뉴 동대문',
    addr: 'NYUNYU Dongdaemun',
    lat: 37.56862,
    lng: 127.00870,
    meet: '店門口'
  },

  mangoBusy: {
    name: 'Mango Busy 東大門',
    ko: 'Mango Busy',
    addr: '東大門／DDP周邊',
    google: 'https://maps.app.goo.gl/yFvTRT8qF5hmxeTW8',
    noUber: true,
    meet: 'Google Maps定位'
  },

  lotte: {
    name: '蠶室樂天世界',
    ko: '롯데월드 어드벤처',
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
    meet: '入口'
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
  day:'Day 1｜抵達弘大',
  summary:'機場 → 弘大 → 輕補給',
  cards:[
    {cls:'airport',to:'hotel',title:'✈️ 仁川 → 弘大',metro:'AREX約55–60分',taxi:'Van優先'},
    {cls:'food',to:'day1Food',title:'🛍 弘大補給',metro:'便利店 / Olive Young',taxi:'步行'}
  ]
},

{
  day:'Day 2｜聖水＋明洞＋醬蟹',
  summary:'聖水 → 明洞 → 新世界百貨',
  cards:[
    {cls:'',to:'standardBread',title:'☕ 聖水',metro:'地鐵',taxi:'-'},
    {cls:'',to:'starfield',title:'🏙 明洞',metro:'移動',taxi:'-'},
    {cls:'food',to:'hotel',title:'🦀 大瓦房醬蟹',metro:'新世界百貨',taxi:'備案烏達里'}
  ]
},

{
  day:'Day 3｜東大門',
  summary:'玩具街 → 廣藏市場 → NYUNYU → Mango Busy',
  cards:[
    {cls:'',to:'dongA',title:'🧸 玩具街'},
    {cls:'',to:'gwangjang',title:'🍜 廣藏市場'},
    {cls:'',to:'nyunyu',title:'🛍 NYUNYU'},
    {cls:'food',to:'mangoBusy',title:'🛍 Mango Busy'},
    {cls:'',to:'hotel',title:'🏪 輕補貨（超商）'}
  ]
},

{
  day:'Day 4｜樂天世界',
  summary:'全天樂天世界',
  cards:[
    {cls:'long',to:'lotte',title:'🎢 樂天世界'},
    {cls:'food',to:'lotteMall',title:'🍽 Mall備案'}
  ]
},

{
  day:'Day 5｜返台',
  summary:'弘大 → 機場',
  cards:[
    {cls:'airport',to:'airportT2',title:'✈️ 前往機場'}
  ]
}
];
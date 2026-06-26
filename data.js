const siteInfo = {
  version: '2026-06-26 v2.0',
  label: '完整修復版＋親子動線優化',
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
    addr: 'Seongsu',
    lat: 37.54454,
    lng: 127.05520,
    meet: '店門口'
  },

  pulPig: {
    name: '水芹烤豬五花 / 풀뜯는돼지',
    ko: '풀뜯는돼지',
    addr: '서울 마포구 동교로32길 7 1층',
    lat: 37.56205,
    lng: 126.92555,
    meet: '店門口'
  },

  starfield: {
    name: '明洞／新世界百貨',
    ko: '신세계백화점 본점',
    addr: '서울 중구 소공로 63',
    lat: 37.56014,
    lng: 126.98040,
    meet: '新世界百貨入口'
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
    ko: 'NYUNYU 동대문',
    addr: '동대문',
    lat: 37.56862,
    lng: 127.00870,
    meet: '店門口'
  },

  mangoBusy: {
    name: 'Mango Busy 東大門',
    ko: 'Mango Busy',
    addr: 'DDP周邊',
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
  summary:'機場 → 弘大',
  cards:[
    {
      cls:'airport',
      to:'hotel',
      title:'✈️ 仁川 → 弘大',
      metro:'AREX：T2 → 弘大入口站（約55–60分，0轉乘）',
      taxi:'Van優先；7人建議大型車'
    },
    {
      cls:'food',
      to:'day1Food',
      title:'🛍 弘大補給',
      metro:'步行／商圈移動',
      taxi:'短距離可步行'
    }
  ]
},

{
  day:'Day 2｜聖水＋明洞＋醬蟹',
  summary:'聖水 → 明洞 → 醬蟹',
  cards:[
    {
      cls:'',
      to:'standardBread',
      title:'☕ 聖水 Standard Bread',
      metro:'弘大 → 聖水（約25–35分，0轉乘）',
      taxi:'地鐵優先'
    },
    {
      cls:'',
      to:'starfield',
      title:'🏙 明洞／新世界百貨',
      metro:'聖水 → 明洞（約20–30分）',
      taxi:'可叫車但易塞車'
    },
    {
      cls:'food',
      to:'starfield',
      title:'🦀 大瓦房醬蟹（主）',
      metro:'新世界百貨地下',
      taxi:'備案：烏達里醬蟹'
    }
  ]
},

{
  day:'Day 3｜東大門',
  summary:'玩具街 → 廣藏市場 → NYUNYU → Mango Busy',
  cards:[
    {cls:'',to:'dongA',title:'🧸 玩具街',metro:'弘大→東大門（約40–50分）',taxi:'1轉乘'},
    {cls:'',to:'gwangjang',title:'🍜 廣藏市場',metro:'步行',taxi:'短程'},
    {cls:'',to:'nyunyu',title:'🛍 NYUNYU',metro:'同區',taxi:'集合點'},
    {cls:'food',to:'mangoBusy',title:'🛍 Mango Busy',metro:'DDP周邊',taxi:'以地圖為準'},
    {cls:'',to:'hotel',title:'🏪 超商補給',metro:'弘大回程',taxi:'可叫車'}
  ]
},

{
  day:'Day 4｜樂天世界',
  summary:'全天樂園',
  cards:[
    {
      cls:'long',
      to:'lotte',
      title:'🎢 樂天世界',
      metro:'弘大 → 蠶室（約50–60分）',
      taxi:'建議Van或2車'
    },
    {
      cls:'food',
      to:'lotteMall',
      title:'🍽 晚餐備案（B1大瓦房醬蟹）',
      metro:'同區',
      taxi:'步行'
    }
  ]
},

{
  day:'Day 5｜返台',
  summary:'弘大 → 機場（CI161 12:45）',
  cards:[
    {
      cls:'airport',
      to:'airportT2',
      title:'✈️ 前往仁川機場',
      metro:'AREX 約60分',
      taxi:'建議09:30出發'
    }
  ]
}
];
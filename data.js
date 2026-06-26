const siteInfo = {
  version: '2026-06-26 v3.1',
  label: '交通細節升級版（含完整轉乘＋費用）',
  title: '首爾親子行程｜手機交通卡',
  subtitle: '4大3小｜住宿：弘大／麻浦',
  footerNote: '交通與費用為估算，實際以 Naver Map / 現場為準。'
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

  incheonT2: {
    name: '仁川機場 T2',
    ko: '인천국제공항 제2여객터미널',
    addr: 'Incheon Airport Terminal 2',
    lat: 37.46890,
    lng: 126.43380,
    meet: '出發大廳'
  },

  day1Food: {
    name: '弘大補給',
    ko: '홍대',
    addr: '弘大商圈',
    lat: 37.556,
    lng: 126.923,
    meet: '弘大商圈'
  },

  standardBread: {
    name: 'Standard Bread 聖水',
    ko: '스탠다드브레드 성수',
    addr: 'Seongsu',
    lat: 37.54454,
    lng: 127.05520,
    meet: '店門口'
  },

  myeongdongShinsegae: {
    name: '明洞新世界百貨',
    ko: '신세계백화점 본점',
    addr: '서울 중구 소공로 63',
    lat: 37.56014,
    lng: 126.98040,
    meet: '百貨入口'
  },

  waDaeGang: {
    name: '大瓦房醬蟹（主）',
    ko: '대가방',
    addr: '新世界百貨餐廳樓層',
    lat: 37.56014,
    lng: 126.98040,
    meet: '餐廳'
  },

  udari: {
    name: '烏達里醬蟹（備案）',
    ko: '우다리',
    addr: '明洞附近',
    lat: 37.561,
    lng: 126.983,
    meet: '店門口'
  },

  dongA: {
    name: '東大門玩具街',
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
    addr: 'Google Maps定位',
    google: 'https://maps.app.goo.gl/MLtG4quMSr8ktWqeA',
    meet: '店門口'
  }
};

const days = [
{
  day: 'Day 1｜抵達弘大',
  summary: '機場 → 弘大',
  cards: [
    {
      cls: 'airport',
      to: 'hotel',
      title: '✈️ 仁川 → 弘大',
      metro: 'AREX直達 55–60分',
      metroDetail: {
        route: '仁川T2 → 弘大入口站',
        transfer: 0,
        time: '55–60分',
        fare: '₩4,500–₩9,500'
      },
      taxiDetail: {
        time: '50–70分',
        cost: '₩60,000–₩90,000',
        note: '7人建議Van'
      }
    }
  ]
},

{
  day: 'Day 2｜聖水＋明洞＋醬蟹',
  summary: '聖水 → 明洞 → 醬蟹',

  cards: [
    {
      cls: '',
      to: 'standardBread',
      title: '☕ 弘大 → 聖水',

      metro: '2號線直達（0轉乘）',
      metroDetail: {
        route: '弘大入口站 → 聖水站',
        transfer: 0,
        time: '25–35分',
        fare: '₩1,400–₩1,800'
      },
      taxiDetail: {
        time: '20–30分',
        cost: '₩15,000–₩25,000'
      }
    },

    {
      cls: '',
      to: 'myeongdongShinsegae',
      title: '🏙 聖水 → 明洞',

      metro: '2號線直達（0轉乘）',
      metroDetail: {
        route: '聖水站 → 乙支路入口站',
        transfer: 0,
        time: '20–30分',
        fare: '₩1,400–₩1,800'
      },
      taxiDetail: {
        time: '25–40分',
        cost: '₩20,000–₩35,000'
      }
    },

    {
      cls: 'food',
      to: 'waDaeGang',
      title: '🦀 大瓦房醬蟹（主）',

      metro: '步行5–8分',
      metroDetail: {
        route: '乙支路入口站 → 新世界百貨',
        transfer: 0,
        time: '5–8分',
        fare: '₩0'
      },
      taxiDetail: {
        note: '明洞不建議叫車'
      }
    }
  ]
},

{
  day: 'Day 3｜東大門＋採買',
  summary: '玩具街 → 廣藏 → NYUNYU → Mango Busy → 樂天超市',

  cards: [
    { cls: '', to: 'dongA', title: '🧸 玩具街' },
    { cls: '', to: 'gwangjang', title: '🍜 廣藏市場' },
    { cls: '', to: 'nyunyu', title: '🛍 NYUNYU' },
    { cls: 'food', to: 'mangoBusy', title: '🛍 Mango Busy' },
    {
      cls: 'food',
      to: 'seoulStationLotteMart',
      title: '🛒 首爾站樂天超市',
      metro: '東大門 → 首爾站 10–15分',
      metroDetail: {
        route: '東大門 → 首爾站',
        transfer: 0,
        time: '10–15分',
        fare: '₩1,400–₩1,800'
      }
    }
  ]
},

{
  day: 'Day 4｜樂天世界',
  summary: '全天樂園',
  cards: [
    { cls: 'long', to: 'lotteWorld', title: '🎢 樂天世界' },
    {
      cls: 'food',
      to: 'lotteMall',
      title: '🍽 B1醬蟹備註'
    }
  ]
},

{
  day: 'Day 5｜返台',
  summary: 'CI161 12:45 → 機場',
  cards: [
    {
      cls: 'airport',
      to: 'incheonT2',
      title: '✈️ 弘大 → 機場',
      metro: 'AREX 55–60分',
      metroDetail: {
        route: '弘大入口站 → 仁川T2',
        transfer: 0,
        time: '55–60分',
        fare: '₩4,500–₩9,500'
      },
      taxiDetail: {
        time: '50–70分',
        cost: '₩60,000–₩90,000'
      }
    }
  ]
}
];
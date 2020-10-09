export default [
  {
    id: 'knife',
    title: 'Разделочный нож 20 см',
    frogogoCodes: 20,
    frogogoDiscount: 90,
    stickers: 8,
    price: 2299,
    discountedPrice: 499,
    frogogoDiscountedPrice: 299,
    image: require('@/assets/images/knife/im-razdelochny-01@2x.png'),
  },
  {
    id: 'knife2',
    title: 'Нож для овощей 8,5 см',
    stickers: 8,
    price: 1999,
    discountedPrice: 399,
    image: require('@/assets/images/knife2/im-dlyaochistki-03@2x.png'),
  },
  {
    id: 'knife3',
    title: 'Универсальный нож 12,5 см',
    stickers: 8,
    price: 2299,
    discountedPrice: 499,
    image: require('@/assets/images/knife3/im-universal-01@2x.png'),
  },
  {
    id: 'knife4',
    title: 'Поварской нож 20 см',
    stickers: 10,
    price: 3499,
    discountedPrice: 699,
    image: require('@/assets/images/knife4/im-povarskoi-03@2x.png'),
  },
  {
    id: 'knife5',
    title: 'Нож Сантоку 18 см',
    stickers: 10,
    price: 3499,
    discountedPrice: 699,
    image: require('@/assets/images/knife5/im-santoku-01@2x.png'),
  },
  {
    id: 'knife6',
    title: 'Тесак 16,5 см',
    stickers: 10,
    price: 4599,
    discountedPrice: 899,
    image: require('@/assets/images/knife6/im-tesak-03@2x.png'),
  },
  {
    id: 'knife7',
    title: 'Нож дамасская сталь',
    stickers: 15,
    price: 10999,
    discountedPrice: 3999,
    image: require('@/assets/images/knife7/im-domask-01@2x.png'),
    description: 'Дамаск (дамасская сталь) – это вид узорчатой стали, которая используется для изготовления особо прочных клинков ножей. Данный металл состоит из 67 слоев разных типов стали с различным содержанием углерода (высокого и низкого), соединенных путем многократной ковки.',
    specifications: [
      'Ручка из материала Пакка',
      'Твердость по шкале Роквелла 60±2',
      'Высокая прочность лезвия',
      'Безупречная острота режущей кромки'
    ]
  },
  {
    id: 'tochilka',
    title: 'Ножеточка Bugatti',
    stickers: 10,
    price: 2699,
    discountedPrice: 799,
    image: require('@/assets/images/tochilka/im-tochilka-01@2x.png'),
  },
  {
    id: 'podstavka',
    title: 'Подставка Bugatti',
    stickers: 12,
    price: 5999,
    discountedPrice: 1699,
    image: require('@/assets/images/podstavka/im-podstavka-01@2x.png'),
  },
  {
    id: 'forma',
    title: 'Керамическая форма для запекания прямоугольная 28×17 см',
    stickers: 8,
    price: 2499,
    discountedPrice: 699,
    image: require('@/assets/images/forma/im-forma-28-01@2x.png'),
    specifications: [
      'Прочная керамика',
      'Устойчивое антипригарное покрытие',
      'Подходит для приготовления в духовке и для сервировки блюд'
    ],
    pictograms: ['oven', 'dishwasher']
  },
  {
    id: 'forma-big',
    title: 'Керамическая форма для запекания прямоугольная 41×24 см',
    stickers: 8,
    price: 2999,
    discountedPrice: 999,
    image: require('@/assets/images/forma/im-forma-28-01@2x.png'),
    specifications: [
      'Прочная керамика',
      'Устойчивое антипригарное покрытие',
      'Подходит для приготовления в духовке и для сервировки блюд'
    ],
    pictograms: ['oven', 'dishwasher']
  },
  {
    id: 'roster',
    title: 'Ростер с крышкой 32×20×11 см (4 л)',
    stickers: 12,
    price: 8599,
    discountedPrice: 2899,
    image: require('@/assets/images/roster/im-roster-01@2x.png'),
    specifications: [
      'Литой алюминий с прочным и безопасным антипригарным покрытием',
      '«арома-ручка» с микроотверстием для дозированной подачи жидких компонентов',
      'Съемные силиконовые ручки выдерживающие температуру до 250 °С',
      'Крышка служит удобной термостойкой подставкой'
    ],
    pictograms: ['dishwasher', 'gas', 'electric', 'induction', 'oven250']
  },
  {
    id: 'kastryulya',
    title: 'Чугунная кастрюля с крышкой 24 см',
    stickers: 15,
    price: 11999,
    discountedPrice: 3999,
    image: require('@/assets/images/kastryulya/im-kastryulya-03@2x.png'),
    description: 'Крышка в перевернутом виде служит сковородой-гриль и подходит для приготовления стейков с характерным рисунком',
    specifications: [
      'Экологически безопасный чугун',
      'Подходит для духовки, газового гриля и мангалов с рассекателем пламени'
    ],
    pictograms: ['electric', 'induction', 'gas', 'glassСeramics', 'ceramic', 'oven']
  },
]

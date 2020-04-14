<template>
  <div class="pt-10 pb-32 bg-secondary-500 -mt-1">
    <div class="container">
      <h2 class="text-bold text-white text-3xl md:text-5xl leading-tight mb-32"
          id="collections">
        Коллекция Ducati Corse
      </h2>
      <div class="collections">
        <Collection v-for="collection in collections" :collection="collection"/>
      </div>
    </div>
  </div>
</template>

<script>
import Collection from '@/components/Collection.vue'

export default {
  name: 'Collections',
  components: {
    Collection
  },
  data() {
    return {
      collections: [
        {
          positionLeft: true,
          title: 'Светодиодный фонарь',
          description: [
            'Работает от 3 батареек ААА (не идут в комплекте)',
            '3 режима яркости',
            'При включении активируется последний использованный режим',
            'Ремешок на руку (в комплекте)'
          ],
          stickers: 6,
          price: '1 799',
          discountedPrice: '699',
          imagesPathName: 'lamp'
        },
        {
          positionLeft: false,
          title: 'Многофункциональный нож',
          description: [
            'Ножницы',
            'Маленькая пила',
            'Нож',
            'Игла',
            'Шило',
            'Пилочка для ногтей',
            'Крестовая отвертка',
            'Штопор',
            'Открывалка для банок',
            'Открывалка для бутылок',
            'Фонарик работает от 3 батареек LR621 (не идут в комплекте)'
          ],
          caption: 'Высококачественная нержавеющая сталь',
          stickers: 6,
          price: '1 499',
          discountedPrice: '599',
          imagesPathName: 'knife'
        },
        {
          positionLeft: true,
          title: 'Рюкзак малый 40х25х15 см',
          description: [
            'Увеличенное количество отделений',
            'Вместительное основное отделение',
            'Боковые сетчатые карманы',
            '2 маленьких кармана',
            'Широкие регулируемые лямки',
            'Усиленные молнии'
          ],
          stickers: 6,
          price: '2 499',
          discountedPrice: '999',
          imagesPathName: 'sbackpack'
        },
        {
          positionLeft: false,
          title: 'Рюкзак большой 48х33х18 см',
          description: [
            'Увеличенное количество отделений',
            'Вместительное основное отделение',
            'Отделение для ноутбука',
            'Боковые сетчатые карманы',
            '3 маленьких кармана',
            'Широкие регулируемые лямки',
            'Усиленные молнии'
          ],
          stickers: 10,
          price: '3 999',
          discountedPrice: '1 499',
          imagesPathName: 'bbackpack'
        },
        {
          positionLeft: true,
          title: 'Термос 1 л',
          description: [
            'Герметичная  крышка с силиконовым уплотнителем',
            '2 чашки в комплекте'
          ],
          caption: 'Высококачественная нержавеющая сталь',
          stickers: 8,
          price: '2 499',
          discountedPrice: '999',
          imagesPathName: 'thermos'
        },
        {
          positionLeft: false,
          title: 'Реверсивный зонт-трость',
          description: [
            'Инновационная конструкция – обратное (реверсивное) сложение',
            'Двойной купол',
            'Ручной механизм'
          ],
          stickers: 8,
          price: '3 499',
          discountedPrice: '1 399',
          imagesPathName: 'zont'
        },
        {
          positionLeft: true,
          title: 'Чемодан пластиковый «ручная кладь», 54х36х21 см',
          description: [
            'Металлическая выдвигающаяся ручка',
            'Ударопрочный пластиковый корпус',
            'Поворотные колеса на 360°',
            'Кодовый замок',
            'Нейлоновая усиленная молния',
            '2 внутренних отделения на молнии',
            'Эластичные ленты для фиксации багажа'
          ],
          stickers: 12,
          price: '9 999',
          discountedPrice: '3 799',
          imagesPathName: 'case'
        },
        {
          positionLeft: false,
          title: 'Чемодан пластиковый большой, 60х41х26 см',
          description: [
            'Металлическая выдвигающаяся ручка',
            'Ударопрочный пластиковый корпус',
            'Поворотные колеса на 360°',
            'Кодовый замок',
            'Нейлоновая усиленная молния',
            '2 внутренних отделения на молнии',
            'Эластичные ленты для фиксации багажа'
          ],
          stickers: 14,
          price: '12 999',
          discountedPrice: '4 599',
          imagesPathName: 'bcase'
        }
      ]
    }
  }
}
</script>

<style scoped lang="css">
</style>

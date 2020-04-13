<template>
  <div class="pt-20 pb-32 bg-secondary-500">
    <div class="container">
      <h2 class="text-bold text-white text-3xl md:text-5xl leading-tight mb-32">
        Коллекция Ducati Corse
      </h2>
      <div v-for="collection in collections">
        <Collection :collection="collection"/>
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
          price: 1799,
          discountedPrice: 699,
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
          price: 1499,
          discountedPrice: 599,
          imagesPathName: 'knife'
        }
      ]
    }
  }
}
</script>

<style scoped lang="css">
</style>

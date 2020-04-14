<template>
  <div class="pt-10 bg-secondary-500 -mt-1 bg-cover"
       :style="{ background: '#6c1c1b center / cover no-repeat url(\'' + require('@/assets/images/footer-bg.jpg') + '\')' }">
    <div class="container">
      <h2
        class="text-bold text-white text-3xl md:text-5xl leading-tight mb-32"
        id="participants"
      >
        Гипермаркеты — участники акции
      </h2>
      <div class="flex flex-col md:flex-row mb-12">
        <div class="flex-1 mr-20 overflow-y-scroll" style="height: 560px">
        </div>
        <div class="flex-1 rounded-lg overflow-hidden">
          <yandex-map :coords="coords" zoom="10" :settings="settings">
            <ymap-marker
              :coords="coords"
              marker-id="123123"
              marker-type="placemark"
            />
          </yandex-map>
        </div>
      </div>

      <div class="flex flex-col md:flex-row md:items-center md:justify-between pb-5 border-b border-grey">
        <Contacts />
        <p class="md:ml-32 mt-5 mb:mt-0 flex-1 text-regular text-xs text-white">Подробную информации о товаре, порядке получения скидки, месте и сроках ее проведения можно узнать у организатора акции ООО «КЛР» (ИНН 7731452742) по телефону бесплатной «горячей линии» 8 800 555 07 08 в рабочие дни с 9:00 до 18:00 (время московское)</p>
      </div>
      <div class="py-5">
        <span class="text-regular text-xs text-grey">Copyright © {{ new Date().getFullYear() }} KLR. Все права защищены.</span>
      </div>
    </div>
  </div>
</template>

<script>
import { yandexMap, ymapMarker, loadYmap } from 'vue-yandex-maps'
import Contacts from '@/components/Contacts.vue'

export default {
  name: 'Participants',
  components: { yandexMap, ymapMarker, Contacts },
  data() {
    return {
      settings: {
        apiKey: 'b7edca89-0215-4a38-b339-d2426d76d2ee',
        lang: 'ru_RU',
        coordorder: 'latlong',
        version: '2.1'
      },
      coords: [54.82896654088406, 39.831893822753904],
      placemarks: [
        {
          coords: [54.82896654088406, 39.831893822753904],
          properties: {
            balloonContentBody: 'asdfd',
            balloonContentFooter: '1',
            balloonContentHeader: '1'
          },
          clusterName: '1',
          markerId: '1'
        },
        {
          coords: [54.82796654088306, 39.831893822753904],
          properties: {
            balloonContentBody: 'asdfasdf',
            balloonContentFooter: '1',
            balloonContentHeader: '1'
          },
          clusterName: '1',
          markerId: '2'
        },
        {
          coords: [54.82996654088506, 39.831893822753904],
          properties: {
            balloonContentBody: 'asdfasdf',
            balloonContentFooter: '1',
            balloonContentHeader: '1'
          },
          clusterName: '1',
          markerId: '3'
        }
      ],
      layout: '<div>{{ properties.balloonContentHeader }}</div><div>{{ properties.balloonContentBody }}</div><div>{{ properties.balloonContentFooter }}</div>'
    }
  }
}
</script>

<style scoped lang="css">
.ymap-container {
  height: 560px;
}
</style>

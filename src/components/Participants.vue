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
        <div class="flex-1 md:mr-20 overflow-y-scroll mb-8 md:mb-0" style="height: 560px">
          <div v-for="participant in this.participants">
            <div class="flex flex-col sm:flex-row sm:items-center mb-2 pb-2 sm:mb-4 sm:pb-4 border-b border-grey cursor-pointer" @click="asd">
              <span class="text-lg text-white text-bold mr-3">г. {{ participant.city }} </span>
              <span class="text-lg text-regular text-grey">{{ participant.address }}</span>
            </div>
          </div>
        </div>
        <div class="flex-1 rounded-lg overflow-hidden">
          <div id="map"></div>
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
import { loadYmap } from 'vue-yandex-maps'
import Contacts from '@/components/Contacts.vue'
import ParticipantsData from '@/data/participantsData.js'

export default {
  name: 'Participants',
  components: { Contacts },
  data() {
    return {
      yMaps: {
        settings: {
          apiKey: 'b7edca89-0215-4a38-b339-d2426d76d2ee',
          lang: 'ru_RU',
          version: '2.1'
        },
        coords: [48.745056, 44.518565],
        zoom: 5
      },
      participants: ParticipantsData
    }
  },
  async mounted() {
    let index = 0

    // Geocoder
    for (const participant of this.participants) {
      const request = await this.request(`https://geocode-maps.yandex.ru/1.x/?format=json&apikey=${this.yMaps.settings.apiKey}&geocode=${participant.address}`)
      const position = request.response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos
      const coords = position.split(' ').reverse()

      this.participants[index].coords = coords
      index++
    }

    // Load Yandex map
    await loadYmap({ ...this.yMaps.settings, debug: true })

    ymaps.ready(mapInit => {
      const yandexMap = new ymaps.Map('map',
        {
          center: this.yMaps.coords,
          zoom: this.yMaps.zoom
        },
        {
          searchControlProvider: 'yandex#search'
        }
      )

      // Add placemarks
      this.participants.map(marker => {
        const placemark = new ymaps.Placemark(marker.coords, {}, {
            iconLayout: 'default#image',
            iconImageHref: require('@/assets/images/point-map.svg'),
            iconImageSize: [48, 48],
            iconImageOffset: [-24, -24],
            iconContentOffset: [15, 15],
            iden: marker.address
        })

        yandexMap.geoObjects.add(placemark)

        // Add events for placemarks
        placemark.events.add ('click', () => {
          yandexMap.setCenter(marker.coords, 12)
        })
      })
    })
  },
  methods: {
    async request(url, method = 'GET', data = null) {
      try {
        const headers = {}
        let body

        if (data) {
          headers['Content-Type'] = 'application/json'
          body = JSON.stringify(data)
        }

        const response = await fetch(url, {
          method,
          headers,
          body
        })
        return await response.json()
      } catch (e) {
        console.warn('Error:', e.message)
      }
    },
    asd() {
      console.log(map)
    }
  }
}
</script>

<style scoped lang="css">
#map {
  height: 35rem
}
</style>

<template>
  <div class="pt-10 bg-secondary-500 -mt-1 bg-cover"
       :style="{ background: '#6c1c1b center / cover no-repeat url(\'' + require('@/assets/images/footer-bg.jpg') + '\')' }">
    <div class="container">
      <h2
        class="text-bold text-white text-3xl md:text-5xl leading-tight mb-12 md:mb-32"
        id="participants"
      >
        Гипермаркеты — участники акции
      </h2>
      <div class="flex flex-col md:flex-row mb-12">
        <div class="participants md:flex-1 md:mr-20 overflow-y-scroll mb-8 md:mb-0 pr-5">
          <div v-for="participant in this.participants">
            <div class="flex flex-col sm:flex-row sm:items-center mb-2 pb-2 sm:mb-4 sm:pb-4 border-b border-secondary-100 cursor-pointer participant"
                 @click="clickedParticipantAddress = participant.address; setCenterToPlacemark()"
                 :data-address="participant.address">
              <span class="text-lg text-white text-bold mr-3 truncate">{{ participant.district ? participant.district : 'г' }}. {{ participant.city }} </span>
              <span class="text-lg text-regular text-grey truncate">{{ participant.address }}</span>
              <span class="hidden md:flex flex-1 text-right"><img :src="require('@/assets/images/icon-arrow-down.svg')" class="arrow-right" /></span>
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
        coords: [55.618181, 37.509568],
        zoom: 4,
        map: Object
      },
      participants: ParticipantsData,
      clickedParticipantAddress: String
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
      this.yMaps.map = new ymaps.Map('map',
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
            iconImageSize: [70, 70],
            iconImageOffset: [-24, -24],
            iconContentOffset: [15, 15],
            id: marker.address
        })

        this.yMaps.map.geoObjects.add(placemark)

        // Add events for placemarks
        placemark.events.add ('click', () => {
          this.yMaps.map.setCenter(marker.coords, 12)
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
    setCenterToPlacemark() {
      let coords = []

      this.yMaps.map.geoObjects.each(geoObject => {
        if (geoObject.options.get('id') === this.clickedParticipantAddress) {
          coords = geoObject.geometry.getCoordinates()
        }
      })

      this.yMaps.map.setCenter(coords, 12)
    }
  }
}
</script>

<style scoped lang="css">
#map {
  height: 35rem
}

.participants {
  @apply h-48;
}

.participant .arrow-right {
  @apply w-5 h-5 ml-auto invisible;

  transform: rotate(-90deg);
  transition: 150ms all ease-in;
}

.participant:hover .arrow-right {
  @apply visible;
}

/* Custom scrollbar */
.participants::-webkit-scrollbar {
  width: 5px;

  @apply rounded bg-secondary-100;
}

.participants::-webkit-scrollbar-track {
  @apply rounded-lg;
}

.participants::-webkit-scrollbar-thumb {
  @apply rounded-lg bg-primary-300;
}

.participants::-webkit-scrollbar-thumb:hover {
  @apply bg-primary-500;
}

@media (min-width: 768px) {
  .participants {
    height: 35rem;
  }
}
</style>

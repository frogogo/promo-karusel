<template>
  <div class="pt-10">
    <div class="container" id="participants">
      <h2
        class="text-bold text-white text-3xl md:text-5xl leading-tight mb-12 md:mb-32"
      >
        Гипермаркеты — участники акции
      </h2>
      <div class="flex flex-col md:flex-row mb-12">
        <div
          class="participants md:flex-1 overflow-y-scroll mb-8 md:mb-0 md:pr-5 md:mr-16"
        >
          <div
            v-for="participant in this.participants"
            :key="participant.address"
          >
            <div
              class="participant relative"
              ref="participant"
              :id="participant.address"
              :class="
                selectedAddress === participant.address && 'participant--active'
              "
              @click="
                selectedAddress = participant.address;
                selectParticipant();
              "
            >
              <span
                class="text-lg text-white text-bold mr-3 truncate flex-none"
              >
                {{ participant.district ? participant.district : "г" }}.
                {{ participant.city }}
              </span>
              <span class="text-lg text-regular text-grey truncate address">
                {{ participant.address }}
              </span>
              <span
                class="close-icon"
                @click.stop="
                  selectedAddress = '';
                  initializeParticipants();
                "
              >
                <img
                  :src="require('@/assets/images/icon-close.svg')"
                  alt="Закрыть"
                />
              </span>
            </div>
          </div>
        </div>
        <div class="md:flex-1 rounded-lg overflow-hidden">
          <div id="map"></div>
        </div>
      </div>

      <div
        class="flex flex-col md:flex-row md:items-center md:justify-between pb-5 border-b border-lightGrey"
      >
        <Contacts />
        <p class="md:ml-32 mt-5 md:mt-0 flex-1 text-regular text-xs text-white">
          Подробную информации о товаре, порядке получения скидки, месте и
          сроках ее проведения можно узнать у организатора акции ООО «КЛР» (ИНН
          7731452742) по телефону бесплатной «горячей линии» 8 800 555 07 88 в
          рабочие дни с 9:00 до 18:00 (время московское)
        </p>
      </div>
      <div class="py-5">
        <span class="text-regular text-xs text-grey">
          Copyright © {{ new Date().getFullYear() }} KLR. Все права защищены.
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import { loadYmap } from "vue-yandex-maps";
import Contacts from "@/components/Contacts.vue";
import ParticipantsData from "@/data/participantsData.js";

export default {
  name: "Participants",
  components: { Contacts },
  data() {
    return {
      yMaps: {
        settings: {
          apiKey: "b7edca89-0215-4a38-b339-d2426d76d2ee",
          lang: "ru_RU",
          version: "2.1",
        },
        coords: [55.618181, 45.509568],
        zoom: 4,
        map: Object,
      },
      participants: ParticipantsData,
      selectedAddress: String,
    };
  },
  async mounted() {
    // Load Yandex map
    await loadYmap({ ...this.yMaps.settings, debug: true });

    // Init Yandex map
    ymaps.ready((mapInit) => {
      this.yMaps.map = new ymaps.Map(
        "map",
        {
          center: this.yMaps.coords,
          zoom: this.yMaps.zoom,
        },
        {
          searchControlProvider: "yandex#search",
        }
      );

      this.initializeParticipants();
    });
  },
  methods: {
    initializeGeoObject(coords, address) {
      const placemark = new ymaps.Placemark(
        coords,
        {},
        {
          iconLayout: "default#image",
          iconImageHref: require("@/assets/images/point-map.png"),
          iconImageSize: [50, 50],
          id: address,
        }
      );

      // Add placemarks
      this.yMaps.map.geoObjects.add(placemark);

      // Add events for placemarks
      placemark.events.add("click", () => {
        if (this.selectedAddress !== address) {
          this.selectedAddress = address;
        }

        this.$refs.participant.map((el) => {
          el.id === address && el.scrollIntoView({ block: "center" });
        });

        this.yMaps.map.setCenter(coords, 17);
      });
    },
    selectParticipant() {
      this.participants.map((element) => {
        if (element.address === this.selectedAddress) {
          this.yMaps.map.setCenter(element.coords, 17);
        }
      });
    },
    initializeParticipants() {
      this.participants.map((element) => {
        this.initializeGeoObject(element.coords, element.address);
      });

      this.yMaps.map.setCenter(this.yMaps.coords, this.yMaps.zoom);
    },
  },
};
</script>

<style scoped lang="css">
#map {
  height: 35rem;
  @apply rounded-lg;
}

.participants {
  @apply h-48;
}

.participant {
  @apply flex flex-col py-2 border-b cursor-pointer;

  border-color: rgba(255, 255, 255, 0.2);
  transition: all 150ms ease-in;
}

.close-icon {
  @apply hidden absolute p-4 right-0;
}

.close-icon:hover {
  transition: all 150ms ease-in;
  transform: scale(1.4);
}

.participant--active {
  background: rgba(255, 255, 255, 0.2);
}

.participant--active .close-icon {
  @apply block;
}

.participant--active .address {
  @apply .pr-8;
}

/* Custom scrollbar */
.participants::-webkit-scrollbar {
  width: 5px;

  @apply rounded;

  background: rgba(255, 255, 255, 0.2);
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

@media (min-width: 640px) {
  .participant {
    @apply flex-row items-center py-4;
  }
}

@media (min-width: 768px) {
  .participants {
    height: 35rem;
  }
}
</style>

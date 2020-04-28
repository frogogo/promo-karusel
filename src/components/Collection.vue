<template>
  <div class="flex flex-col items-center mb-32 md:mb-48 collection"
       :class="collection.positionLeft ? ' lg:flex-row' : ' lg:flex-row-reverse'">
    <div class="flex flex-1"
         :class="collection.positionLeft ? ' lg:flex-row': ' lg:flex-row-reverse'">
      <div class="hidden md:block">
        <div class="disc disc--sm" style="top: -3rem">
          <v-lazy-image
            :src="require(`@/assets/images/${collection.id}/${orderOfCollectionImages[0]}.png`)"
            class="disc__img disc__img--top"
            :alt="collection.title"
          />
        </div>
        <div class="disc disc--sm" style="bottom: -3rem">
          <v-lazy-image
            :src="require(`@/assets/images/${collection.id}/${orderOfCollectionImages[1]}.png`)"
            class="disc__img disc__img--bottom"
            :alt="collection.title"
          />
        </div>
      </div>
      <div
        class="disc--lg mb-20 md:mb-32 lg:mb-0 flex items-center relative"
      >
        <div class="disc disc--lg relative">
          <v-lazy-image
            :src="require(`@/assets/images/${collection.id}/${orderOfCollectionImages[2]}.png`)"
            class="disc__img disc__img--center"
            :alt="collection.title"
          />
        </div>
        <button
           class="arrow left-arrow"
           data-user-action="sliderNavigationLeft"
           @mouseover="iconLeftHovered = true"
           @mouseout="iconLeftHovered = false"
           @click.prevent="previousSlide"
           aria-label="Влево">
          <img :src="iconLeftHovered ? iconLeftActive : iconLeft" alt="Влево" />
        </button>
        <button
           class="arrow right-arrow"
           data-user-action="sliderNavigationRight"
           @mouseover="iconRightHovered = true"
           @mouseout="iconRightHovered = false"
           @click.prevent="nextSlide"
           aria-label="Влево">
          <img :src="iconRightHovered ? iconRightActive : iconRight" alt="Вправо" />
        </button>
      </div>
    </div>
    <div class="flex-1">
      <h3 class="text-bold text-xl md:text-4xl text-white mb-5">
        {{ collection.title }}
      </h3>
      <ul class="collection-list text-regular mb-5" :style="collection.description.length > 6 && 'column-count: 2'">
        <div v-if="collection.id === 'sbackpack'">
          <li>Увеличенное количество отделений:</li>
          <ul class="collections-list-inside">
            <li>– Вместительное основное отделение</li>
            <li>– Боковые сетчатые карманы</li>
            <li>– 2 маленьких кармана</li>
          </ul>
          <li>Широкие регулируемые лямки</li>
          <li>Усиленные молнии</li>
        </div>
        <div v-else-if="collection.id === 'bbackpack'">
          <li>Увеличенное количество отделений:</li>
          <ul class="collections-list-inside">
            <li>– Вместительное основное отделение</li>
            <li>– Отделение для ноутбука</li>
            <li>– Боковые сетчатые карманы</li>
            <li>– 2 маленьких кармана</li>
          </ul>
          <li>Широкие регулируемые лямки</li>
          <li>Усиленные молнии</li>
        </div>
        <li v-else v-for="paragraph in collection.description">
          {{ paragraph }}
        </li>
      </ul>
      <p v-if="collection.caption" class="text-regular text-white mb-5">{{ collection.caption }}</p>
      <div class="flex items-center text-white">
        <inline-svg
          :src="require(`@/assets/images/im-sticker-${collection.stickers}.svg`)"
          class="mr-5"
          alt=""
          style="box-shadow: 0px 10px 37px 4px rgba(0,0,0,0.27)"
        />
        <div class="flex items-baseline flex-1">
          <div class="flex">
            <span class="text-6xl sm:text-6xl text-karusel-regular mr-1">
              {{ collection.discountedPrice }}
            </span>
            <span class="text-6xl text-karusel-small self-start">00</span>
          </div>
          <span class="h-12 bg-white mx-5" style="width: .125rem"></span>
          <div class="flex flex-col relative flex-1">
            <span class="text-bold text-xs uppercase absolute top-0 -mt-2">
              Цена без наклеек
            </span>
            <div class="flex items-baseline">
              <span class="text-4xl text-karusel-regular">
                {{ collection.price }}
              </span>
              <span class="text-4xl text-karusel-small self-start mx-1">00</span>
              <small class="text-2xl text-karusel-small">Руб.</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import arrayMove from 'array-move'

export default {
  name: 'Collection',
  props: {
    collection: Object
  },
  data() {
    return {
      orderOfCollectionImages: [2,3,1],
      iconLeft: require('@/assets/images/icon-left.svg'),
      iconLeftActive: require('@/assets/images/icon-left-active.svg'),
      iconRight: require('@/assets/images/icon-right.svg'),
      iconRightActive: require('@/assets/images/icon-right-active.svg'),
      iconLeftHovered: false,
      iconRightHovered: false
    }
  },
  methods: {
    previousSlide() {
      this.orderOfCollectionImages = arrayMove(this.orderOfCollectionImages, -1, 0)
    },
    nextSlide() {
      this.orderOfCollectionImages = arrayMove(this.orderOfCollectionImages, 0, -1)
    }
  }
}
</script>

<style scoped lang="css">
.collections .collection:last-child {
  @apply mb-0;
}
.collection-list {
  @apply list-disc ml-5 p-0;
}

.collection-list li {
  @apply text-base text-white;
}

.disc {
  @apply bg-secondary-300;

  transform: rotate(45deg);
  border-radius: 1.5rem;
}

.disc__img {
  transform: rotate(-45deg) scale(1.35);
}

.disc--sm {
  @apply w-32 h-32 relative;
}

.disc--lg {
  @apply w-48 h-48;
}

.arrow {
  @apply absolute outline-none p-2;
}

.left-arrow {
  left: -1.5rem;
}

.right-arrow {
  right: -1.5rem;
}

@media (min-width: 640px) {
  .disc--lg {
    @apply w-64 h-64;
  }
}

@media (min-width: 1280px) {
  .disc--lg {
    width: 20rem;
    height: 20rem;
  }

  .disc--sm {
    @apply w-40 h-40;
  }
}
</style>

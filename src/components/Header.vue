<template>
  <header class="bg-cover lg:min-h-screen"
          :style="{ background: '#6c1c1b center / cover no-repeat url(\'' + require('@/assets/images/header-bg.jpg') + '\')' }">
    <div class="container">
      <div class="flex flex-col justify-between lg:min-h-screen pt-8 md:pt-10 pb-10">
        <div class="flex justify-between items-center mb-12 md:mb-20">
          <a href="/" class="h-6 md:h-12 mr-16">
            <img :src="require('@/assets/images/logo-karusel.svg')" class="h-full" alt="Гипермаркет Карусель"/>
          </a>
          <nav class="text-regular hidden md:block">
            <a v-for="link in navigationLinks"
               class="navigation-link"
               :href="link.url"
               v-smooth-scroll="{ duration: 300, offset: -50}">
               {{ link.name }}
            </a>
          </nav>
          <div class="md:hidden">
            <MobileMenu :navigationLinks="navigationLinks"/>
          </div>
        </div>

        <div class="flex flex-col-reverse items-center md:flex-row md:mb-12 xl:mb-20">
          <div class="flex-1 md:mr-20 ">
            <h1 class="mb-5 text-white font-bold text-2xl lg:text-4xl">
              <span class="mr-2 text-extra-bold">Продукция итальянского <br>бренда</span>
              <img :src="require('@/assets/images/logo-ducaticorse.svg')" class="inline align-baseline w-2/3 md:w-auto mr-2" alt="Дукати Корсе"/>
              <span class="align-top">*</span>
            </h1>
            <div class="text-white text-lg">
              <p class="mb-5 text-regular">Компания Ducati основана в 1926 году в Болонье (Италия). Изначально компания занималась выпуском электротехнической продукции, а сейчас производит известные во всем мире гоночные мотоциклы.</p>
              <p class="mb-5 text-regular">Бренд Ducati Corse – это синоним безупречного стиля, престижа и высоких достижений.</p>
              <p class="mb-5 text-regular">Бренд Ducati Corse предназначен не только для ценителей бренда, но и для уверенных в себе людей, воодушевленных своей мечтой, нацеленных на победу, стремящихся изменить жизнь к лучшему.</p>
              <p>* Дукати Корсе</p>
            </div>
          </div>
          <div class="flex-1">
            <v-lazy-image :src="require('@/assets/images/header-img.png')" class="mb-8 md:mb-0" alt="Промо"/>
          </div>
        </div>
        <a href="#how-to" v-smooth-scroll="{ duration: 300, offset: -50}">
          <img :src="require('@/assets/images/icon-down.svg')" class="hidden md:block mx-auto" alt="Вниз"/>
        </a>
      </div>
    </div>
  </header>
</template>

<script>
import MobileMenu from '@/components/MobileMenu.vue'

export default {
  name: 'Header',
  components: {
    MobileMenu
  },
  data() {
    return {
      navigationLinks: [
        {
          name: 'Как принять участие?',
          url: '#how-to'
        },
        {
          name: 'Коллекция',
          url: '#collections'
        },
        {
          name: 'Гипермаркеты',
          url: '#participants'
        }
      ],
      descriptionCompact: Boolean
    }
  }
}
</script>

<style scoped lang="css">
.navigation-link {
  @apply text-white text-sm px-4 py-2 transition-all duration-150 relative;
}

.navigation-link:hover {
  @apply text-grey;
}

.navigation-link:hover:after {
  content: '';
  bottom: -.7rem;
  left: calc(50% - 1.25rem);

  @apply w-10 h-1 bg-primary-300 absolute rounded flex;
}

.header-description {
  @apply text-white text-lg;
}

.truncate-3 {
  @apply overflow-hidden;

  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
}


@media (min-width: 1024px) {
  .navigation-link {
    @apply px-8
  }
}
</style>

<template>
  <header class="bg-cover"
          :style="{ background: 'center / cover no-repeat url(\'' + require('@/assets/images/header-bg.jpg') + '\')' }">
    <div class="container">
      <div class="flex flex-col justify-between min-h-screen pt-12 pb-2">
        <nav class="flex justify-between items-center mb-12 md:mb-24 lg:mb-32">
          <a href="/" class="h-6 md:h-12 mr-16">
            <img :src="require('@/assets/images/logo-karusel.svg')" class="h-full" alt="Гипермаркет Карусель"/>
          </a>
          <div class="text-regular hidden md:block">
            <a v-for="link in navigationLinks"
               class="navigation-link"
               :href="link.url"
               v-smooth-scroll="{ duration: 300, offset: -50}">
               {{ link.name }}
            </a>
          </div>
          <button class="md:hidden py-4">
            <img :src="require('@/assets/images/icon-menu.svg')" />
          </button>
        </nav>

        <div class="flex flex-col-reverse items-center md:flex-row mb-12 lg:mb-24">
          <div class="flex-1 md:mr-20">
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
            <img :src="require('@/assets/images/header-img.png')" class="mb-8 md:mb-0" alt="Промо"/>
          </div>
        </div>
        <img :src="require('@/assets/images/icon-down.svg')" class="hidden md:block mx-auto" alt="Вниз"/>
      </div>
    </div>
  </header>
</template>

<script>

export default {
  name: 'Header',
  data() {
    return {
      isMobileHeaderOpened: false,
      navigationLinks: [
        {
          name: 'Как принять участие?',
          url: '#how-to'
        },
        {
          name: 'Коллекции',
          url: '#collections'
        },
        {
          name: 'Гипермаркеты',
          url: '#participants'
        }
      ]
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

@media (min-width: 1024px) {
  .navigation-link {
    @apply px-8
  }
}
</style>

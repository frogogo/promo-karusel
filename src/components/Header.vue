<template>
  <header class="bg-cover pt-12"
          :style="{ background: 'center / cover no-repeat url(\'' + require('@/assets/images/header-bg.jpg') + '\')' }">
    <div class="container">
      <nav class="flex justify-between items-center mb-32">
        <a href="/" class="mr-16">
          <img :src="require('@/assets/images/logo-karusel.svg')" alt="Гипермаркет Карусель">
        </a>
        <div class="text-regular">
          <a href="#" class="navigation-link">Как принять участие?</a>
          <a href="#" class="navigation-link">Коллекция</a>
          <a href="#" class="navigation-link">Гипермаркеты</a>
        </div>
      </nav>

      <div class="flex flex-col md:flex-row mb-24">
        <div class="flex-1 md:mr-20">
          <h1 class="mb-5 whitespace-no-wrap text-white font-bold text-4xl">
            <span class="mr-2 text-extra-bold">Продукция итальянского <br>бренда</span>
            <img :src="require('@/assets/images/logo-ducaticorse.svg')" class="inline align-baseline mr-2" alt="Дукати Корсе">
            <span>*</span>
          </h1>
          <div class="text-white text-lg">
            <p class="mb-5 text-regular">Компания Ducati основана в 1926 году в Болонье (Италия). Изначально компания занималась выпуском электротехнической продукции, а сейчас производит известные во всем мире гоночные мотоциклы.</p>
            <p class="mb-5 text-regular">Бренд Ducati Corse – это синоним безупречного стиля, престижа и высоких достижений.</p>
            <p class="mb-5 text-regular">Бренд Ducati Corse предназначен не только для ценителей бренда, но и для уверенных в себе людей, воодушевленных своей мечтой, нацеленных на победу, стремящихся изменить жизнь к лучшему.</p>
            <p>* Дукати Корсе</p>
          </div>
        </div>
        <div class="flex-1">
          <img :src="require('@/assets/images/header-img.png')" alt="Промо">
        </div>
      </div>
      <img :src="require('@/assets/images/icon-down.svg')" class="mx-auto pb-20" alt="Вниз">
    </div>
  </header>
</template>

<script>

export default {
  name: 'Header',
  components: {},
  data() {
    return {

    }
  }
}
</script>

<style scoped lang="css">
.navigation-link {
  @apply text-white text-sm px-8 py-2 transition-all duration-150 relative;
}

.navigation-link:hover {
  @apply text-grey;
}

.navigation-link:hover:after {
  content: '';
  bottom: -.7rem;
  left: calc(50% - 1.25rem);

  @apply w-10 h-1 bg-primary absolute rounded flex;
}
</style>

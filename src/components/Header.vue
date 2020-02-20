<template>
  <header class="header">
    <div class="container">
      <div class="header-navigation">
        <a href="/" class="">
          <img class="" src="" alt="">
        </a>
        <div class="header-navigation-menu">
          <a class="header-navigation-menu__item mr-6" href="#">Как принять участие в акции?</a>
          <a class="header-navigation-menu__item mr-6" href="#">О коллекции</a>
          <a class="header-navigation-menu__item" href="#">Ассортимент акции</a>
        </div>
        <a href="/" class="">
          <img src="" alt="">
        </a>
      </div>
      <div class="max-w-xl">
        <h1 class="header__title">В дорогу за приключениями</h1>
        <h3 class="header__description">Приобретайте товары коллекции Ducati Corse со скидкой до -65%</h3>
        <a class="btn btn--primary" href="#">Подробнее</a>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  components: {}
}
</script>

<style scoped lang="css">
.header {
  @apply pt-12 pb-48 bg-secondary;
}

.header-navigation {
  @apply flex items-center justify-between mb-64;
}

.header-navigation-menu__item {
  @apply text-sm text-white;
}

.header__title {
  @apply text-6xl text-white font-bold leading-tight mb-8;
}

.header__description {
  @apply text-3xl text-white mb-10;
}
</style>

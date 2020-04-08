<template>
  <header class="min-h-screen bg-cover pt-12"
          :style="{ background: 'center / cover no-repeat url(\'' + require('@/assets/images/header-bg.jpg') + '\')' }">
    <div class="container">
      <nav class="flex justify-between items-center">
        <a href="/" class="mr-16">
          <img :src="require('@/assets/images/logo-karusel.svg')" alt="Гипермаркет Карусель">
        </a>
        <div>
          <a href="#" class="navigation-link">Как принять участие?</a>
          <a href="#" class="navigation-link">Коллекция</a>
          <a href="#" class="navigation-link">Гипермаркеты</a>
        </div>
      </nav>
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
  @apply text-white text-sm px-8 transition-all duration-150 relative;
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

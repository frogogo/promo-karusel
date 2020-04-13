<template>
  <div id="app" v-cloak>
    <Header/>
    <HowTo/>
    <Collections/>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import HowTo from './components/HowTo.vue'
import Collections from './components/Collections.vue'

export default {
  name: 'app',
  components: {
    Header, HowTo, Collections
  }
}
</script>

<style lang="css">

body {
  min-width: 320px;
}

button {
  outline: 0;
}

/* Fonts */
@font-face {
  font-family: 'CircleThin';
  src: url('~@/assets/fonts/Circe-Thin.woff2') format('woff2');
}

@font-face {
  font-family: 'CircleLight';
  src: url('~@/assets/fonts/Circe-Light.woff2') format('woff2');
}

@font-face {
  font-family: 'CircleRegular';
  src: url('~@/assets/fonts/Circe-Regular.woff2') format('woff2');
}

@font-face {
  font-family: 'CircleBold';
  src: url('~@/assets/fonts/Circe-Bold.woff2') format('woff2');
}

@font-face {
  font-family: 'CircleExtraBold';
  src: url('~@/assets/fonts/Circe-ExtraBold.woff2') format('woff2');
}

@font-face {
  font-family: 'CarouselRegular';
  src: url('~@/assets/fonts/Carousel-Regular.woff2') format('woff2');
}

@font-face {
  font-family: 'CarouselSmall';
  src: url('~@/assets/fonts/Carousel-Small.woff2') format('woff2');
}

.text-thin {
  font-family: 'CircleThin';
}

.text-light {
  font-family: 'CircleLight';
}

.text-regular {
  font-family: 'CircleRegular';
}

.text-bold {
  font-family: 'CircleBold';
}

.text-extra-bold {
  font-family: 'CircleExtraBold';
}

.text-carousel-regular {
  font-family: 'CarouselRegular';
}

.text-carousel-small {
  font-family: 'CarouselSmall';
}

[v-cloak] {
  @apply hidden;
}
</style>

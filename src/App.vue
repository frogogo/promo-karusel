<template>
  <div id="app" v-cloak>
    <Header />
    <HowTo />
    <Collections />
    <Participants />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import HowTo from './components/HowTo.vue'
import Collections from './components/Collections.vue'
import Participants from './components/Participants.vue'

export default {
  name: 'app',
  components: {
    Header,
    HowTo,
    Collections,
    Participants
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
  font-family: 'KaruselRegular';
  src: url('~@/assets/fonts/Karusel-Regular.woff2') format('woff2');
}

@font-face {
  font-family: 'KaruselSmall';
  src: url('~@/assets/fonts/Karusel-Small.woff2') format('woff2');
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

.text-karusel-regular {
  font-family: 'KaruselRegular';
}

.text-karusel-small {
  font-family: 'KaruselSmall';
}

[v-cloak] {
  @apply hidden;
}

#app {
  @apply overflow-x-hidden;
}
</style>

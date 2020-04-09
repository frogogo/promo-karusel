<template>
  <div id="app">
    <Header/>
  </div>
</template>

<script>
import Header from './components/Header.vue'

export default {
  name: 'app',
  components: {
    Header
  }
}
</script>

<style lang="css">
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
</style>

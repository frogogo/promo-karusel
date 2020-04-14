<template>
  <button v-if="!isModalOpened" class="py-4" @click="isModalOpened = true">
    <img :src="require('@/assets/images/icon-menu.svg')" />
  </button>
  <div v-else
       class="bg-cover absolute w-full h-full top-0 left-0"
       v-scroll-lock="isModalOpened"
       :style="{ background: 'left / cover no-repeat url(\'' + require('@/assets/images/header-bg-sm.jpg') + '\')', height: windowHeight }">
    <div class="container">
      <div class="flex flex-col min-h-screen items-center justify-between">
        <button class="py-4 self-end" @click="isModalOpened = false">
          <img :src="require('@/assets/images/icon-close.svg')" />
        </button>

        <nav class="text-regular flex flex-col items-center">
          <a v-for="link in navigationLinks"
             class="navigation-link mb-5"
             :href="link.url"
             @click="isModalOpened = false"
             v-smooth-scroll="{ duration: 300, offset: -50}">
             {{ link.name }}
          </a>
        </nav>

        <Contacts class="pb-32" />
      </div>
    </div>
  </div>
</template>

<script>
import Contacts from '@/components/Contacts.vue'

export default {
  name: 'MobileMenu',
  components: {
    Contacts
  },
  props: {
    navigationLinks: Array
  },
  data() {
    return {
      isModalOpened: Boolean
    }
  },
  mounted() {
    this.isModalOpened = false
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
</style>

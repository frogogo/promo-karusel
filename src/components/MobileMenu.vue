<template>
  <button class="w-5 h-5" v-if="!isModalOpened" @click="openModal">
    <img :src="require('@/assets/images/icon-menu.svg')" class="h-full" alt="Меню"/>
  </button>
  <div v-else
       class="bg-cover absolute w-full h-full z-50 top-0 pt-8 h-screen left-0"
       :style="{ background: '#6c1c1b left / cover no-repeat url(\'' + require('@/assets/images/header-bg-sm.jpg') + '\')' }">
    <div class="container">
      <div class="flex flex-col min-h-screen items-center justify-between">
        <button class="self-end w-5 h-5" @click="closeModal">
          <img :src="require('@/assets/images/icon-close.svg')" class="h-full" alt="Закрыть"/>
        </button>

        <nav class="text-regular flex flex-col items-center">
          <a v-for="link in navigationLinks"
             class="navigation-link mb-5"
             :href="link.url"
             @click="isModalOpened = false ; toggleBodyScrolling('')"
             v-smooth-scroll="{ duration: 300, offset: -50}">
             {{ link.name }}
          </a>
        </nav>

        <div class="mb-40">
          <Contacts />
        </div>
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
  methods: {
    toggleBodyScrolling(action) {
     const elements = [document.body, document.documentElement]
     const classes = ['overflow-hidden', 'relative', 'h-full']

     elements.map(element => {
       action === 'enable'
        ? element.classList.add(...classes)
        : element.classList.remove(...classes)
     })
   },
   openModal() {
    this.isModalOpened = true
    this.toggleBodyScrolling('enable')
   },
   closeModal() {
    this.isModalOpened = false
    this.toggleBodyScrolling('disable')
   }
  },
  mounted() {
    this.isModalOpened = false
  }
}
</script>

<style scoped lang="css">
.navigation-link {
  @apply text-white text-lg px-4 py-2 transition-all duration-150 relative;
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

<template>
  <div>
    <button
      class="w-5 h-5"
      @click="openModal"
      aria-label="Меню"
      :class="isModalOpened && 'hidden'"
    >
      <inline-svg
        :src="require('@/assets/images/icon-menu.svg')"
        class="w-full h-full"
        alt="Меню"
      />
    </button>
    <div
      class="mobile-bg bg-cover absolute w-full h-full z-50 top-0 pt-8 h-screen left-0"
      :class="!isModalOpened && 'hidden'"
    >
      <div class="container">
        <div class="flex flex-col min-h-screen items-center justify-between">
          <button
            class="mt-4 self-end w-5 h-5"
            @click="closeModal"
            aria-label="Закрыть"
          >
            <inline-svg
              :src="require('@/assets/images/icon-close.svg')"
              class="w-full h-full"
              alt="Закрыть"
            />
          </button>

          <nav class="text-regular flex flex-col items-center">
            <a
              v-for="link in navigationLinks"
              :key="link.url"
              class="navigation-link mb-5"
              :href="link.url"
              @click="
                isModalOpened = false;
                toggleBodyScrolling(false);
              "
              v-smooth-scroll="{ duration: 300, offset: -100 }"
            >
              {{ link.name }}
            </a>
          </nav>

          <div class="mb-40">
            <Contacts />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Contacts from "@/components/Contacts.vue";

export default {
  name: "MobileMenu",
  components: {
    Contacts,
  },
  props: {
    navigationLinks: Array,
  },
  data() {
    return {
      isModalOpened: Boolean,
    };
  },
  methods: {
    toggleBodyScrolling(enable) {
      const elements = [document.body, document.documentElement];
      const classes = ["overflow-hidden", "relative", "h-full"];

      elements.map((element) => {
        enable
          ? element.classList.add(...classes)
          : element.classList.remove(...classes);
      });
    },
    openModal() {
      this.isModalOpened = true;
      this.toggleBodyScrolling(true);
    },
    closeModal() {
      this.isModalOpened = false;
      this.toggleBodyScrolling(false);
    },
  },
  mounted() {
    this.isModalOpened = false;
  },
};
</script>

<style scoped lang="css">
.mobile-bg {
  background: #6c1c1b left / cover no-repeat
    url("~@/assets/images/header-bg-sm.jpg");
}

.navigation-link {
  @apply text-white text-lg px-4 py-2 transition-all duration-150 relative;
}

.navigation-link:hover {
  @apply text-grey-500;
}

.navigation-link:hover:after {
  content: "";
  bottom: -0.7rem;
  left: calc(50% - 1.25rem);

  @apply w-10 h-1 bg-primary absolute rounded flex;
}
</style>

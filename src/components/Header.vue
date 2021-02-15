<template>
  <header :class="headerClass">
    <div class="container h-full flex justify-between items-center">
      <a href="/" class="h-6 md:h-12 mr-16">
        <img
          :src="require('@/assets/images/logo-karusel.svg')"
          class="h-full"
          alt="Гипермаркет Карусель"
        />
      </a>
      <nav class="text-regular hidden md:block">
        <a
          v-for="link in navigationLinks"
          :key="link.url"
          :class="currentLinkClass(link.userAction)"
          :data-user-action="link.userAction"
          :href="link.url"
          @click="setCurrentLink(link.userAction)"
          v-smooth-scroll="{ duration: 300, offset: -100 }"
        >
          {{ link.name }}
        </a>
      </nav>
      <div class="md:hidden">
        <MobileMenu :navigationLinks="navigationLinks" />
      </div>
    </div>
  </header>
</template>

<script>
import MobileMenu from "@/components/MobileMenu.vue";

export default {
  name: "Header",
  components: {
    MobileMenu,
  },
  data() {
    return {
      headerClass: "header header--mobile",
      currentLink: null,
      navigationLinks: [
        {
          name: "Как принять участие?",
          url: "#how-to",
          userAction: "how-to",
        },
        {
          name: "Коллекция",
          url: "#collections",
          userAction: "collections",
        },
        {
          name: "Гипермаркеты",
          url: "#participants",
          userAction: "participants",
        },
      ],
      descriptionCompact: Boolean,
    };
  },
  mounted() {
    const anchors = this.navigationLinks.map((item) =>
      document.querySelector(item.url)
    );

    const updateCurrent = (link) => {
      this.currentLink = link;
    };

    // Handle callback
    const intersectCallback = (entries, observer) => {
      for (let entry of entries) {
        if (entry.isIntersecting) {
          updateCurrent(entry.target.id);
        }
      }
    };
    const anchorssObserver = new IntersectionObserver(intersectCallback, {
      threshold: 0,
    });

    for (const anchor of anchors) {
      anchorssObserver.observe(anchor);
    }
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.headerClass =
        window.scrollY > 100 ? "header header--mini" : "header";
    },
    setCurrentLink(link) {
      this.currentLink = link;
    },
    currentLinkClass(link) {
      return this.currentLink === link
        ? "navigation-link navigation-link--current"
        : "navigation-link";
    },
  },
};
</script>

<style scoped lang="css">
.header {
  @apply bg-white z-20;
  transition: all 0.2s ease-in;
  height: 100px;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.08);
}

.header--mini {
  height: 72px;
}

.header img {
  transition: all 0.2s ease-in;
}

.header--mini img {
  padding: 2px 0;
}

.navigation-link {
  @apply text-sm px-4 py-2 transition-all duration-150 relative;
}

.navigation-link:hover {
  @apply text-primary;
}

.navigation-link.navigation-link--current::after {
  opacity: 1;
}

.navigation-link::after {
  transition: opacity 0.2s;
  opacity: 0;
  content: "";
  bottom: -0.3rem;
  left: calc(50% - 1.25rem);

  @apply w-10 h-1 bg-primary absolute rounded flex;
}

.header-description {
  @apply text-white text-lg;
}

.truncate-3 {
  @apply overflow-hidden;

  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
}

@media (min-width: 1024px) {
  .navigation-link {
    @apply px-8;
  }
}
</style>

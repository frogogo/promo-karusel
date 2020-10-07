<template>
  <div id="app" v-cloak>
    <Header />
    <PromoSection />
    <HowTo />
    <Collections />
    <Participants />
  </div>
</template>

<script>
import Header from "./components/Header";
import PromoSection from "./components/PromoSection";
import HowTo from "./components/HowTo";
import Collections from "./components/Collections";
import Participants from "./components/Participants";
import AnalyticsEvents from "@/data/analyticsEvents";

export default {
  name: "app",
  components: {
    Header,
    HowTo,
    Collections,
    Participants,
    PromoSection,
  },
  mounted() {
    this.initializeAnalytics();
  },
  methods: {
    initializeAnalytics() {
      const events = AnalyticsEvents;

      window.addEventListener("click", (event) => {
        let target;

        event.target.hasAttribute("data-user-action")
          ? (target = event.target)
          : (target = event.target.closest("[data-user-action]"));

        if (!target) {
          return;
        }

        for (const [key, value] of Object.entries(events)) {
          if (key === target.dataset.userAction) {
            if (value.label === "PageUrl") {
              value.label = target.href;
            }

            window.dataLayer.push({
              event: value.event,
              eventAction: value.action,
              eventCategory: value.category,
              eventLabel: value.label,
            });
          }
        }
      });
    },
  },
};
</script>

<style lang="css">
body {
  background: fixed rgba(24, 25, 27, 0.76)
    url("assets/images/im-background.png");
  background-size: cover;
  background-position: center;
  min-width: 320px;
  font-family: "CircleRegular", system-ui, -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif;
}

button {
  outline: 0;
}

/* Fonts */
@font-face {
  font-family: "CircleThin";
  src: url("~@/assets/fonts/Circe-Thin.woff2") format("woff2");
}

@font-face {
  font-family: "CircleLight";
  src: url("~@/assets/fonts/Circe-Light.woff2") format("woff2");
}

@font-face {
  font-family: "CircleRegular";
  src: url("~@/assets/fonts/Circe-Regular.woff2") format("woff2");
}

@font-face {
  font-family: "CircleBold";
  src: url("~@/assets/fonts/Circe-Bold.woff2") format("woff2");
}

@font-face {
  font-family: "CircleExtraBold";
  src: url("~@/assets/fonts/Circe-ExtraBold.woff2") format("woff2");
}

@font-face {
  font-family: "KaruselRegular";
  src: url("~@/assets/fonts/Karusel-Regular.woff2") format("woff2");
}

@font-face {
  font-family: "KaruselSmall";
  src: url("~@/assets/fonts/Karusel-Small.woff2") format("woff2");
}

.text-thin {
  font-family: "CircleThin";
}

.text-light {
  font-family: "CircleLight";
}

.text-regular {
  font-family: "CircleRegular";
}

.text-bold {
  font-family: "CircleBold";
}

.text-extra-bold {
  font-family: "CircleExtraBold";
}

.text-karusel-regular {
  font-family: "KaruselRegular";
}

.text-karusel-small {
  font-family: "KaruselSmall";
}

[v-cloak] {
  @apply hidden;
}

#app {
  @apply overflow-x-hidden;
}

.v-lazy-image {
  filter: blur(0.5rem);
  transition: filter 0.5s;
}
.v-lazy-image-loaded {
  filter: blur(0);
}
</style>

<template>
  <section class="section">
    <div class="container flex flex-col-reverse items-center md:flex-row">
      <div class="flex-1 md:mr-20">
        <h1 class="mb-4 text-white font-bold text-2xl lg:text-4xl leading-none">
          <span class="title">готовьте как профи!</span>
        </h1>
        <span class="subtitle">
          <p>Собирайте наклейки, получайте скидку</p>
          <p>с 08.10.2020 г. по 13.01.2021 г.</p>
        </span>
        <img
          class="mt-16 mb-6"
          :src="require('@/assets/images/logo-bugatti.svg')"
        />
        <div class="text-white text-lg">
          <p class="mb-5 text-regular">
            Компания Bugatti*, учрежденная в 1923 году в Лумедзане (Италия),
            начинала свою деятельность как профессиональная мастерская,
            занимающаяся промышленным изготовлением ножей. В настоящее время,
            благодаря постоянному внедрению в производство инновационных
            технологий, современным разработкам в области дизайна и высокому
            качеству выпускаемой продукции (посуды, бытовых приборов, ножей и
            кухонных аксессуаров), популярный бренд Bugatti является синонимом
            надежности и доверия покупателей во всем мире.
          </p>
          <p>* Бугатти</p>
        </div>
      </div>
      <div class="flex-1">
        <v-lazy-image
          :src="require('@/assets/images/im-header@2x.png')"
          class="mb-8 md:mb-0"
          alt="Промо"
        />
      </div>
    </div>
    <a
      href="#how-to"
      v-smooth-scroll="{ duration: 300, offset: -100 }"
      class="flex flex-1 items-center"
    >
      <img
        :src="require('@/assets/images/icon-down.svg')"
        class="hidden md:block mx-auto"
        alt="Вниз"
      />
    </a>
  </section>
</template>

<style scoped>
.section {
  @apply flex flex-col pt-8;

  margin-top: 100px;
  min-height: calc(100vh - 100px);
}

.title {
  @apply text-white text-6xl font-normal;
  font-family: "KaruselRegular";
}

.subtitle {
  @apply text-white text-xl;
  font-family: "CircleBold";
}
</style>
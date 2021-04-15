<template>
  <section class="section">
    <div class="container flex flex-col-reverse sm:items-center md:flex-row">
      <div class="md:w-1/2 flex-1">
        <div class="description"> 
          <h1 class="mb-4 font-bold text-2xl lg:text-4xl leading-none">
            <span class="text-karusel-regular text-primary text-6xl font-normal leading-tight uppercase">Мода кроется <br class="md:hidden"> в деталях</span>
          </h1>
          <h2 class="text-4xl mb-5 text-karusel-regular uppercase">КОЛЛЕКЦИЯ СУМОК И АКСЕССУАРОВ</h2>
          <div class="text-base">
            <p class="mb-4">
              История бренда Guy Laroche* началась в 1957 году в Париже с создания коллекции женской одежды. Сегодня Guy Laroche является одним из самых узнаваемых брендов в мире. Продукция данной марки характеризуется непревзойдённым качеством, изысканным дизайном и продуманными цветовыми решениями.
            </p>
            <p class="mb-4">
              Модная коллекция сумок и аксессуаров Guy Laroche, где каждое изделие создано с особой тщательностью и большим вниманием к деталям, предназначена не только для любителей французского стиля, наполненного утончённой и сдержанной элегантностью, но и для людей, ценящих оригинальность и удобство.
            </p>
            <p class="mb-4">
              Выбирая продукцию данного бренда, вы отдаёте предпочтение высокому качеству, комфорту и надёжности.
            </p>
            <p class="text-light">* Ги Ларош</p>
          </div>
        </div>
      </div>
      <div class="flex md:w-1/2 items-start">
        <img class="w-full md:w-auto md:mr-auto md:max-w-md" :src="require('@/assets/images/image-headeer.jpeg')"/>
      </div>
    </div>
    <a
      href="#how-to"
      v-smooth-scroll="{ duration: 300, offset: -100 }"
      class="flex flex-1 items-center mb-6"
    >
      <img
        :src="require('@/assets/images/icon-down.svg')"
        class="hidden md:block mx-auto"
        alt="Вниз"
      />
    </a>
  </section>
</template>

<style lang='postcss' scoped>
.section {
  @apply flex flex-col pt-8;

  background-size: cover;
  margin-top: 100px;
  min-height: calc(100vh - 100px);
}

@media (min-width: 640px) {
  .description {
    max-width: 472px;
  }
}

</style>

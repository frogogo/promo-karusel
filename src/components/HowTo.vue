<template>
  <div class="container text-black">
    <h2
      class="text-karusel-regular text-3xl md:text-5xl leading-tight mb-10 md:mb-12"
      id="how-to"
    >
      Как принять участие в акции
    </h2>
    <div class="lg:flex lg:justify-between mb-12 px-12">
      <div
        :key="step.number"
        v-for="step in steps"
        class="step w-60 text-center mb-10 lg:mb-0"
      >
        <div class="step__content flex relative mx-auto">
          <div class="step__number text-karusel-regular" :data-step="step.number" />
          <inline-svg
            :src="step.iconUrl"
            class="w-32 h-32 md:w-48 md:h-48 mb-5 mx-auto"
          />
        </div>
        <p class="text-base text-lg text-light">
          {{ step.title }}
        </p>
        <span class="text-xl">
          {{ step.subtitle }}
        </span>
      </div>
    </div>
    <div class="flex flex-col sm:flex-row justify-center">
      <a
        href="/files/rules.pdf"
        class="btn btn-primary text-bold sm:mr-5 mb-6 sm:mb-0"
        target="_blank"
      >
        Правила акции
      </a>
      <a
        href="/files/booklet.pdf"
        class="btn btn-white text-bold"
        target="_blank"
      >
        Скачать буклет
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "HowTo",
  data() {
    return {
      steps: [
        {
          number: "1",
          iconUrl: require("@/assets/images/steps/step-1.svg"),
          title: "Совершайте покупки",
          subtitle: "В ГИПЕРМАРКЕТЕ",
        },
        {
          number: "2",
          iconUrl: require("@/assets/images/steps/step-2.svg"),
          title: "Собирайте наклейки",
          subtitle: "300 ₽ = 1 наклейка",
        },
        {
          number: "3",
          iconUrl: require("@/assets/images/steps/step-3.svg"),
          title: "Покупайте товары Guy Laroche",
          subtitle: 'СО СКИДКОЙ'
        },
      ],
    };
  },
};
</script>

<style scoped lang="css">
.btn {
  @apply py-3 px-5 border-2 uppercase rounded-full text-white text-sm text-center transition-all duration-150 leading-none;
}

.btn-primary {
  @apply bg-primary border-primary;
}

.btn-white {
  @apply bg-transparent border-2 border-grey-500 text-grey-700;
}

.btn-primary:hover {
  @apply bg-primary;
}

.btn-white:hover {
  @apply bg-white text-primary;
}

.step__number {
  @apply z-10 absolute top-0;

  height: 72px;
  width: 72px
}

.step__content {
  width:180px
}

.step:nth-child(2)  {
  padding-left: 40px;
}

.step:nth-child(2) .step__content {
  width: 320px;
}

.step__number::after {
  @apply rounded-lg;
  content: "";
  display: block;
  transform: rotate(45deg);
  width: 100%;
  height: 100%;
  background: rgba(233, 236, 238, 0.8);
}

.step__number::before {
  content: attr(data-step);

  @apply z-20 absolute w-full h-full flex items-center justify-center text-dark text-5xl;
}

@media (min-width: 768px) {
  .step {
    left: 5rem;
  }
}

@media (min-width: 1024px) {
  .step__number {
    left: -2rem;
  }
}
</style>

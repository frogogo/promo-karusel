<template>
  <div class="py-20 bg-secondary-500 -mt-1">
    <div class="container">
      <h2 class="text-extra-bold text-white text-3xl md:text-5xl leading-tight mb-10 md:mb-32">
        Как принять <br> участие в акции?
      </h2>
      <div class="lg:flex lg:justify-between mb-10 md:mb-32">
        <div v-for="step in steps"
             class="text-center mb-10 lg:mb-0 lg:mr-10 relative">
          <div class="step text-carousel-regular" :data-step="step.number">
            <inline-svg :src="require('@/assets/images/im-step.svg')"/>
          </div>
          <inline-svg :src="step.iconUrl" class="w-32 h-32 md:w-48 md:h-48 mb-5 mx-auto"/>
          <p class="text-bold text-white text-xl">{{ step.title }}</p>
          <p class="text-bold text-white text-4xl">{{ step.caption }}</p>
        </div>
      </div>
      <div class="flex flex-col sm:flex-row justify-center">
        <a href="#" class="btn btn-primary text-extra-bold sm:mr-5 mb-6 sm:mb-0">
          Правила акции
        </a>
        <a href="#" class="btn btn-white text-extra-bold">
          Скачать буклет
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HowTo',
  data() {
    return {
      steps: [
        {
          number: '1',
          iconUrl: require('@/assets/images/im-step-cart.svg'),
          title: 'Совершайте покупки',
          caption: 'в гипермаркете'
        },
        {
          number: '2',
          iconUrl: require('@/assets/images/im-step-sticker.svg'),
          title: 'Собирайте наклейки',
          caption: '350 ₽ = 1 наклейка'
        },
        {
          number: '3',
          iconUrl: require('@/assets/images/im-step-65.svg'),
          title: 'Покупайте товары Ducati Corse',
          caption: 'со скидкой'
        }
      ]
    }
  }
}
</script>

<style scoped lang="css">
.btn {
  @apply py-3 px-5 border uppercase rounded-full text-white text-sm text-center transition-all duration-150;
}

.btn-primary {
  @apply bg-primary-500 border-primary-500;
}

.btn-white {
  @apply bg-transparent border-white;
}

.btn-primary:hover {
  @apply bg-primary-300 border-primary-300;
}

.btn-white:hover {
  @apply bg-white text-primary-500;
}

.step {
  @apply absolute top-0;
}

.step:before {
  content: attr(data-step);

  @apply absolute w-full h-full flex items-center justify-center text-white text-5xl;
}

@media (min-width: 768px) {
  .step {
    left: 5rem;
  }
}

@media (min-width: 1024px) {
  .step {
    left: -2rem;
  }
}
</style>

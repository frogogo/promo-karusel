<template>
  <div class="py-16">
    <div class="container">
      <h2 class="section-title">Как принять участие в акции?</h2>
      <div class="how-to-section mb-16">
        <div class="how-to-block">
          <img class="how-to-block__image" src="" alt="">
          <p class="how-to-block__title">Покупайте</p>
          <p class="how-to-block__caption">Совершай покупки в магазинах «Карусель» в период с 16 апреля по 23 июля 2020 года</p>
        </div>
        <div class="how-to-block">
          <img class="how-to-block__image" src="" alt="">
          <p class="how-to-block__title">Собирайте</p>
          <p class="how-to-block__caption">Получайте фишку за каждые 300 рублей в чеке и собирайте их в буклет</p>
        </div>
        <div class="how-to-block">
          <img class="how-to-block__image" src="" alt="">
          <p class="how-to-block__title">Получайте</p>
          <p class="how-to-block__caption">Приобретайте товары коллекции Ducati Corse со скидкой до 65 %</p>
        </div>
      </div>
      <div class="flex justify-center">
        <a class="btn btn--primary mr-5" href="#">Правила акции</a>
        <a class="btn btn--white" href="#">Скачать буклет</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HowTo',
  components: {}
}
</script>

<style scoped lang="css">
.how-to-section {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 2rem;
  row-gap: 2rem;
}

.how-to-block {
  @apply text-center
}

.how-to-block__image {
  @apply mb-5 w-24 h-24 border mx-auto;
}

.how-to-block__title {
  @apply text-secondary text-2xl font-bold mb-4
}

.how-to-block__caption {
  @apply text-secondary-dark text-lg
}

@media (max-width: 1024px) {
  .how-to-section {
    grid-template-columns: 1fr;
  }
}
</style>

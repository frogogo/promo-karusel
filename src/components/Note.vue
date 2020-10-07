<template>
  <div class="note p-4">
    <span class="note__title">
      Предъявите купон на кассе, приобретите товар со скидкой *
    </span>
    <span class="note__content">
      <span
        >Внимание! Зарегистрированные на сайте коды можно использовать для
        получения скидки на покупку других товаров, участвующих в данной
        акции!</span
      >
      <span class="block mt-2 text-sm">
        * Скидка 90% предоставляется на разделочный нож. На остальные позиции
        скидка до 80%.</span
      >
    </span>
  </div>
</template>


<style scoped>
.note {
  @apply rounded-lg;

  border-radius: 16px;
  border: dashed 2px rgba(255, 255, 255, 0.2);
}

.note__title {
  @apply text-3xl uppercase;

  font-family: "KaruselRegular";
}

.note__content {
  font-family: "CircleRegular";
  color: #c1c1c1;
}
</style>
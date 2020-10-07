<template>
  <div class="flex items-center">
    <div class="codes mr-6">
      <span class="codes__count">{{ codes }}</span>
      <span class="codes__label">
        {{ frogogoDiscount ? "кодов" : "наклеек" }}</span
      >
    </div>
    <div class="price price--xl">
      <span class="price__amount">
        {{ discountedPrice.toLocaleString("ru-RU") }}
      </span>
      <span class="price__penny">00</span>
    </div>
    <span class="divider mx-4 md:mx-5" />
    <div class="flex flex-col pt-1" v-if="!frogogoDiscount">
      <span class="price__label">Цена без наклеек</span>
      <div class="price">
        <span class="price__amount">
          {{ price.toLocaleString("ru-RU") }}
        </span>
        <span class="price__penny">00</span>
        <small class="price__currency">Руб.</small>
      </div>
    </div>
    <div class="flex flex-col pt-1" v-else>
      <span class="frogogo__label">суперскидка 90%</span>
      <div class="flex">
        <inline-svg
          class="h-6 w-6 md:w-12 md:h-12 mr-2 md:mr-4"
          :src="require('@/assets/images/logo-marchio-frogogo.svg')"
        />
        <span class="frogogo">
          Зарегистрируйте 20 кодов с наклеек на сайте
          <a class="underline" href="http://frogogo.ru/" target="__blank">
            www.frogogo.ru
          </a>
          и получите купон</span
        >
        <inline-svg
          class="hidden md:inline w-12 h-12 ml-4"
          :src="require('@/assets/images/icon-arrow-right.svg')"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    price: Number,
    discountedPrice: Number,
    codes: Number,
    frogogoDiscount: Number,
  },
};
</script>

<style scoped>
.frogogo__label {
  @apply font-bold uppercase;

  font-size: 10px;
}

.divider {
  width: 2px;
  height: 36px;

  background-color: #ffffff;
}

.codes {
  @apply flex flex-col items-center;
  border-radius: 10px;
  width: 56px;
  height: 40px;
  flex-shrink: 0;
  background-color: #e30513;
}

.codes__count {
  font-family: "KaruselRegular";
  line-height: 26px;
  font-size: 26px;
}

.codes__label {
  @apply tracking-widest;
  font-family: "KaruselRegular";
  line-height: 12px;
  font-size: 10px;
}

.price {
  font-size: 28px;
  line-height: 28px;

  display: flex;
  align-items: baseline;
}

.price__amount {
  font-family: "KaruselRegular";
  font-size: 1em;
}

.price__penny {
  font-family: "KaruselSmall";
}

.price__currency {
  @apply ml-1;
  font-size: 0.5em;
  font-family: "KaruselSmall";
}

.price__label {
  @apply font-bold uppercase;
  font-size: 8px;
}

.price--xl {
  font-size: 45px;
  line-height: 45px;

  margin-top: -4px;
}

.price--xl .price__amount {
  font-size: 1em;
}

.price--xl .price__penny {
  font-size: 1em;
  line-height: 1em;
}

.discounted-price {
  font-family: "KaruselRegular";
  line-height: 1em;
  font-size: 1em;
}

.frogogo {
  font-family: "CircleRegular";
  font-size: 7px;
}

@media (min-width: 640px) {
  .frogogo {
    font-size: 14px;
  }

  .frogogo__label {
    @apply pb-1;
    font-size: 16px;
  }

  .price {
    font-size: 36px;
    line-height: 36px;
  }

  .price--xl {
    font-size: 80px;
    line-height: 80px;
  }

  .divider {
    width: 2px;
    height: 60px;
  }

  .price__label {
    @apply pb-2 text-xs;
  }

  .codes {
    height: 56px;
    width: 80px;
  }

  .codes__count {
    font-size: 42px;
    line-height: 36px;
  }

  .codes__label {
    line-height: 18px;
    font-size: 14px;
  }
}
</style>
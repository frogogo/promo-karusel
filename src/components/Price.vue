<template>
  <div class="flex items-center">
    <div class="codes mr-4 sm:mr-6">
      <span class="codes__count">{{ codes }}</span>
      <span class="codes__label">{{codesPlural(codes)}}</span>
    </div>
    <div class="price__wrapper">
      <span class="price__label text-primary">Цена по акции</span>
      <div class="price text-primary">
        <span class="price__amount">
          {{ discountedPrice.toLocaleString("ru-RU") }}
        </span>
        <small class="price__currency">₽</small>
      </div>
    </div>
    <span class="divider mx-4 md:mx-5" />
    <div class="price__wrapper">
      <span class="price__label text-grey-700">Розничная цена:</span>
      <div class="price text-grey-700 font-light">
        <span class="price__amount">
          {{ price.toLocaleString("ru-RU") }}
        </span>
        <small class="price__currency">₽</small>
      </div>
    </div>
  </div>
</template>

<script>
const pluralRules = new Intl.PluralRules('ru-RU');

export default {
  props: {
    price: Number,
    discountedPrice: Number,
    codes: Number,
    frogogoDiscount: Number,
  },
  methods: {
    codesPlural(code) {
      const translates = {
        one: 'наклейка',
        few: 'наклейки',
        many: 'наклеек'
      }

      return translates[pluralRules.select(code)]
    }
  }
};
</script>

<style scoped>
.frogogo__label {
  @apply font-bold uppercase;

  font-size: 10px;
}

.divider {
  @apply rounded;
  width: 2px;
  height: 36px;
  background: rgba(233, 236, 238, 0.8);
}

.codes {
  @apply flex flex-col items-center bg-primary p-1;

  border-radius: 10px;
  margin-top: -16px;
  width: 60px;
  height: 70px;
  flex-shrink: 0;
}

.codes__count {
  @apply text-white;

  font-family: "KaruselRegular";
  font-weight: 500;
  font-size: 50px;
  line-height: 46px;
}

.codes__label {
  @apply tracking-widest mb-1 text-white font-bold;

  line-height: 18px;
  font-size: 12px;
}

.price__wrapper {
  display: flex;
  flex-direction: column;
  align-content: space-between;
  height: 70px;
}

.price {
  font-size: 28px;
  line-height: 28px;

  display: flex;
  align-items: baseline;
}

.price__amount {
  font-family: "KaruselRegular";
  font-size: 60px;
  line-height: 42px;
}

.price__currency {
  @apply ml-1;
  font-size: 0.5em;
}

.price__label {
  @apply font-bold uppercase;
  font-size: 8px;
}

.price--xl {
  @apply text-primary;
  font-size: 45px;
  line-height: 45px;

  margin-top: -4px;
}

.price--xl .price__amount {
  font-size: 48px;
  font-weight: bold;
}

.price--xl .price__penny {
  font-size: 1em;
  line-height: 1em;
}

.discounted-price {
  line-height: 1em;
  font-size: 1em;
}

.frogogo {
  font-family: "Rubik";
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

  .price__amount {
    font-size: 72px;
    line-height: 36px;
  }

  .price--xl {
    font-size: 80px;
    line-height: 80px;
  }

  .divider {
    width: 1px;
    height: 70px;
  }

  .price__label {
    @apply pb-1 text-xs;
  }

  .codes {
    width: 80px;
    height: 70px;
    margin-top: 0;
  }

  .codes__label {
    line-height: 18px;
    font-size: 14px;
  }
}
</style>

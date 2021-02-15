<template>
  <div
    class="flex flex-col items-center mb-8 collection"
    :class="positionLeft ? ' lg:flex-row' : ' lg:flex-row-reverse'"
  >
    <div
      class="flex flex-1 px-4"
      :class="positionLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'"
    >
      <v-lazy-image
        :src="collection.image"
        class="collection__image"
        alt="Промо"
      />
    </div>
    <div
      class="flex-1 flex flex-col w-full"
      :class="positionLeft ? 'items-start' : 'lg:items-end'"
    >
      <div class="flex flex-col">
        <h3 class="text-karusel-regular text-bold text-xl md:text-4xl ">
          {{ collection.title }}
        </h3>
        <ul class="collection__list" v-if="collection.specifications">
          <li v-for="item in collection.specifications" :key="item">
            {{ item }}
          </li>
        </ul>
        <div class="mt-12">
          <Price
            v-if="collection.frogogoCodes"
            :price="collection.price"
            :discountedPrice="collection.frogogoDiscountedPrice"
            :frogogoDiscount="collection.frogogoDiscount"
            :codes="collection.frogogoCodes"
          />
        </div>
        <Note v-if="collection.frogogoCodes" class="my-6" />
        <Price
          :price="collection.price"
          :discountedPrice="collection.discountedPrice"
          :codes="collection.stickers"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Price from "./Price";
import Note from "./Note";

export default {
  name: "Collection",
  props: {
    collection: Object,
    positionLeft: Boolean,
  },
  components: {
    Price,
    Note,
  },
};
</script>

<style scoped lang="css">
.collection__description {
  @apply text-base mt-5 font-light;
}

.collection__image {
  width: 100%;
  height: 400px;
  object-fit: contain;
}

.collection__list {
  @apply my-6 list-disc ml-5 p-0 text-lg text-light;
}

/* .collection__list li {
  
} */

.collections .collection:last-child {
  @apply mb-0;
}

.disc {
  @apply bg-secondary-300;

  transform: rotate(45deg);
  border-radius: 1.5rem;
}

.disc__img {
  transform: rotate(-45deg) scale(1.35);
}

.disc--sm {
  @apply w-32 h-32 relative;
}

.disc--lg {
  @apply w-48 h-48;
}

.arrow {
  @apply absolute outline-none p-2;
}

.left-arrow {
  left: -1.5rem;
}

.right-arrow {
  right: -1.5rem;
}

@media (min-width: 640px) {
  .disc--lg {
    @apply w-64 h-64;
  }

  .collection__image {
    height: 500px;
  }

  .collection__image {
    @apply pt-2;
    width: 580px;
    height: 500px;
    object-fit: contain;
  }
}

@media (min-width: 1280px) {
  .disc--lg {
    width: 20rem;
    height: 20rem;
  }

  .disc--sm {
    @apply w-40 h-40;
  }
}
</style>

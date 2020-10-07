<template>
  <div class="relative">
    <span class="oven" v-if="type === 'oven250'">250 °С</span>
    <inline-svg :src="getImage(type)" class="w-6 h-6" />
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      validator: (val) =>
        [
          "oven",
          "dishwasher",
          "electric",
          "induction",
          "gas",
          "ceramic",
          "glassСeramics",
        ].includes(val),
    },
  },
  methods: {
    getImage(type) {
      try {
        return require(`@/assets/images/pictograms/${type}.svg`);
      } catch (err) {
        throw new Error("Не удается найти иконку для типа", type);
      }
    },
  },
};
</script>

<style scoped>
.oven {
  position: absolute;
  top: -10px;
  left: 1px;
  width: 24px;
  font-size: 8px;
}
</style>
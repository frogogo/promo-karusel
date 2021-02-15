<template>
  <div class="flex items-center">
    <img :src="require('@/assets/images/icon-phone.svg')" />
    <div class="flex flex-col items-start ml-3">
      <span class="uppercase text-grey-700 text-bold" style="font-size: 0.65rem">Бесплатная горячая линия</span>
      <a href="tel:+78005550788" class="text-grey-700 text-bold text-2xl">8 (800) 555-07-08</a>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Contacts'
}
</script>

<style scoped lang="css">
</style>

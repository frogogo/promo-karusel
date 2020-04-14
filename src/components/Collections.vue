<template>
  <div class="pt-10 pb-32 bg-secondary-500 -mt-1">
    <div class="container">
      <h2 class="text-bold text-white text-3xl md:text-5xl leading-tight mb-32"
          id="collections">
        Коллекция Ducati Corse
      </h2>
      <div class="collections">
        <Collection v-for="collection in collections" :collection="collection"/>
      </div>
    </div>
  </div>
</template>

<script>
import Collection from '@/components/Collection.vue'
import CollectionsData from '@/data/collectionsData.js'

export default {
  name: 'Collections',
  components: {
    Collection
  },
  data() {
    return {
      collections: CollectionsData
    }
  }
}
</script>

<style scoped lang="css">
</style>

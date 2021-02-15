<template>
  <div class="pt-10 pb-32">
    <div class="container" id="collections">
      <div class="collections">
        <Collection
          :key="collection.id"
          v-for="(collection, index) in collections"
          :positionLeft="index % 2 == 0"
          :collection="collection"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Collection from "@/components/Collection.vue";
import CollectionsData from "@/data/collectionsData.js";

export default {
  name: "Collections",
  components: {
    Collection,
  },
  data() {
    return {
      collections: CollectionsData,
    };
  },
};
</script>

<style scoped lang="css">
</style>

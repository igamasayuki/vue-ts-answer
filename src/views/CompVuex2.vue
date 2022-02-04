<template>
  <div class="sample">
    <p>商品は全部で{{ itemCount }}冊あり、15万円以下の商品は以下の通りです。</p>
    <div v-for="item of items" v-bind:key="item.id">
      {{ item.id }}:{{ item.name }}({{ item.price }}円)
    </div>
  </div>
</template>

<script lang="ts">
import { Item } from "@/types/item";
import { Component, Vue } from "vue-property-decorator";

@Component
export default class SampleComponent extends Vue {
  get itemCount(): number {
    return this.$store.getters.getItemCount;
  }

  get items(): Array<Item> {
    return this.$store.getters.getItemByPrice(150000);
  }
}
</script>

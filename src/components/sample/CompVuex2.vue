<template>
  <div class="sample">
    <p>商品は全部で{{ itemCount }}冊あり、15万円以下の商品は以下の通りです。</p>
    <div v-for="item of getItemByPrice(150000)" v-bind:key="item.id">
      {{ item.id }}:{{ item.name }}({{ item.price }}円)
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
// import { mapGetters } from "vuex";

@Component
export default class SampleComponent extends Vue {
  // エラーになる
  // get mapGetters(['itemCount','getItemByPrice'])

  get itemCount(): void {
    return this["$store"].getters.getItemCount;
  }

  getItemByPrice(price: number): void {
    return this["$store"].getters.getItemByPrice(price);
  }
}
</script>

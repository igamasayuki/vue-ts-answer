<template>
  <div class="sample">
    <button type="button" v-on:click="minus">-</button>
    {{ count }}
    <button type="button" v-on:click="plus">+</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class SampleComponent extends Vue {
  get count(): number {
    // $storeでVuterのエラーが出ても動く。。。
    // return this.$store.state.count;
    // エラーが出ない書き方
    return this["$store"].state.count;
  }

  minus(): void {
    // this.$store.commit("minus");
    this["$store"].commit("minus");
  }

  plus(): void {
    // this.$store.commit("plus");
    this["$store"].commit("plus");
  }
}
</script>

<style scoped>
.sample {
  border: solid;
}
</style>

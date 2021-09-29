<template>
  <div class="sample">
    <button type="button" v-on:click="countDown">-</button>
    {{ count }}
    <button type="button" v-on:click="countUp">+</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class SampleComponent extends Vue {
  get count(): number {
    return this["$store"].getters.getCount;
    // Stateを直接取得する方法↓(しかし可能な限り取得はGetters経由で統一する)
    // return this["$store"].state.count;

    // メモ
    // (非推奨の書き方)$storeでVuterのエラーが出ても動く。
    // return this.$store.state.count;
  }

  countUp(): void {
    // (非推奨の書き方→)this.$store.commit("plus");
    this["$store"].commit("countUp");
  }

  countDown(): void {
    // (非推奨の書き方→)this.$store.commit("minus");
    this["$store"].commit("countDown");
  }
}
</script>

<template>
  <div class="sample">
    <form>
      <button type="button" v-on:click="onclick">クリック</button>
    </form>
    <div>クリック回数：{{ count }}</div>
    <hr />
    <div>算出プロパティ(Getterメソッド):{{ randomGetter }}</div>
    <div>メソッド：{{ randomMethod() }}</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class SampleComponent extends Vue {
  private count = 0;

  // 算出プロパティ(Getterメソッド)
  get randomGetter(): number {
    return Math.random();
  }

  // メソッド
  randomMethod(): number {
    return Math.random();
  }

  // ボタンがクリックされたら呼ばれます
  onclick(): void {
    this.count++;
  }
}
</script>

<style scoped>
.sample {
  border: solid;
}
</style>

<template>
  <div class="sample">
    <form>
      <button type="button" v-on:click="onclick">クリック</button>
    </form>
    <div>算出プロパティ(getterメソッド):{{ randomGetter }}</div>
    <div>メソッド：{{ randomMethod() }}</div>
    <div>現在日時：{{ current }}</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class SampleComponent extends Vue {
  current = new Date().toLocaleString();

  // 算出プロパティ(TypeScriptではGetterで表現)
  get randomGetter(): number {
    return Math.random();
  }

  // メソッド
  onclick(): void {
    this.current = new Date().toLocaleString();
  }
  randomMethod(): number {
    return Math.random();
  }
}
</script>

<style scoped>
.sample {
  border: solid;
}
</style>

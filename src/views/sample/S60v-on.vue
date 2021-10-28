<template>
  <div class="sample">
    <button type="button" v-on:click="onclick">名前を表示する</button>
    <button type="button" @click="onclick">名前を表示する(省略構文)</button>
    <p>{{ myName }}</p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class SampleComponent extends Vue {
  private myName = "";

  // ボタンがクリックされた際に呼ばれるメソッド
  onclick(): void {
    this.myName = "山田太郎";
  }
}
</script>

<style scoped>
.sample {
  border: solid;
}
</style>

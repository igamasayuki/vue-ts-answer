<template>
  <div class="sample">
    <div>リンク：<a v-bind:href="url">Googleへ飛ぶ</a></div>
    <div>リンク(省略構文)：<a :href="url">Googleへ飛ぶ</a></div>
    <div>画像：<img v-bind:src="imageUrl" /></div>
    <div>画像(省略構文)：<img :src="imageUrl" /></div>
    <div>
      <button type="button" v-bind:disabled="canNotClick">
        押せないボタン
      </button>
    </div>
    <div>
      <button type="button" :disabled="canNotClick">
        押せないボタン(省略構文)
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class SampleComponent extends Vue {
  url = "http://google.co.jp";
  imageUrl = "/img/irobot.jpg"; // public/img/irobot.jpgの中を参照
  canNotClick = true;
}
</script>

<style scoped>
.sample {
  border: solid;
}
</style>

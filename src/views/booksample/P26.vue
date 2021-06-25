<template>
  <div class="sample">
    <div>通常リンク：<a v-bind:href="url">WINGSプロジェクト</a></div>
    <div>省略構文リンク：<a :href="url">WINGSプロジェクト</a></div>
    <div>通常画像：<img v-bind:src="imageUrl" /></div>
    <div>省略構文画像：<img v-bind:src="imageUrl" /></div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class SampleComponent extends Vue {
  url = "https://wings.msn.to";
  imageUrl = "img/irobot.jpg"; // publid/img/irobot.jpgの中を参照
}
</script>

<style scoped>
.sample {
  border: solid;
}
</style>

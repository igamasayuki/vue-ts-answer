<template>
  <div class="ex">
    <div class="info">商品名(Mustache)：{{ itemName }}</div>
    <div class="info">商品名(v-text)：<span v-text="itemName"></span></div>
    <div class="info">商品URL(v-bind)：<a v-bind:href="itemUrl">リンク</a></div>
    <div class="info">商品URL(省略構文)：<a :href="itemUrl">リンク</a></div>
    <div class="info">商品URL(v-bind)：<img v-bind:src="itemImg" /></div>
    <div class="info">商品URL(省略構文)：<img :src="itemImg" /></div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class SampleComponent extends Vue {
  itemName = "お掃除ロボット";
  itemUrl = "http://irobot-jp.com/";
  itemImg = "img/irobot.jpg";
}
</script>

<style scoped>
.ex {
  border: solid;
}
</style>

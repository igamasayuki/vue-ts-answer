<template>
  <div class="sample">
    <label for="memo">メモ:</label>
    <input type="text" id="memo" v-bind="attrs" />
    <hr />
    <div v-bind:text-content.prop="text"></div>
    <hr />
    <select v-model="attr">
      <option value="height">高さ</option>
      <option value="width">幅</option></select
    >： <input type="text" size="5" v-model="size" /><br />
    <img v-bind:src="logoImg" v-bind:[attr]="size" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class SampleComponent extends Vue {
  attrs = {
    size: 20,
    maxlength: 14,
    required: true,
  };
  text = "みなさん、こんにちは！";
  attr = "width";
  size = 100;
  logoImg = "img/header_logo.png";
  //logoImg = "img/irobot.jpg";
}
</script>

<style scoped>
.sample .table {
  border: solid;
}
</style>

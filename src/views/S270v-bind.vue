<template>
  <div class="sample">
    テキストフィールド1(size属性を個別にする):<br />
    <input type="text" v-bind:size="textSize" />
    <br />
    テキストフィールド2(type属性、size属性、maxlength属性、requied属性をまとめて設定する):<br />
    <input v-bind="attributes" />
    <br />
    <button type="button" v-on:click="chengeAttribute">
      input要素の属性値を変える
    </button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class SampleComponent extends Vue {
  // テキストフィールド1の最初のsize
  textSize = 10;
  // テキストフィールド2の最初の属性群
  attributes = {
    type: "text",
    size: 20,
    maxlength: 3,
    required: false,
  };

  chengeAttribute(): void {
    // テキストフィールド1のサイズ変更
    this.textSize = 50;
    // テキストフィールド2の属性群を変更
    this.attributes["type"] = "password";
    this.attributes["size"] = 50;
    this.attributes["maxlength"] = 10;
    this.attributes["required"] = true;
  }
}
</script>

<style scoped>
.sample .table {
  border: solid;
  padding: 10px;
}
</style>

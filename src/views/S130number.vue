<template>
  <div class="sample">
    <form>
      <div>.number修飾子</div>
      <input type="text" v-model.number="num1" /> +
      <input type="text" v-model.number="num2" /> = {{ answer }}<br />
      <button type="button" v-on:click="onclick">計算する</button>
    </form>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class SampleComponent extends Vue {
  num1 = 0;
  num2 = 0;
  answer = 0;

  onclick(): void {
    // 数値で渡されると正しい結果になる
    // .numberを省略して文字列で渡されると文字列連結になる
    this.answer = this.num1 + this.num2;
  }
}
</script>

<style scoped>
.sample {
  border: solid;
  padding: 10px;
}
</style>

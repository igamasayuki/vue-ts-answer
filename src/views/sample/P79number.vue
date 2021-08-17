<template>
  <div class="sample">
    <form>
      <div>.number修飾子</div>
      <label for="temperture"> 小数値を入力してください： </label>
      <br />
      <input
        type="text"
        id="temperture"
        v-model.number="temperture"
        v-on:change="onchange"
      />
      <p>{{ temperture }}</p>
    </form>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class SampleComponent extends Vue {
  temperture = 0;

  onchange(): void {
    // 小数第一位に切り捨て(.numberをつけずに文字列で渡されるとエラーになる)
    console.log(this.temperture.toFixed(1));
  }
}
</script>

<style scoped>
.sample {
  border: solid;
  padding: 10px;
}
</style>

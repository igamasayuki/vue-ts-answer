<template>
  <div class="sample">
    <form>
      <div>.number修飾子</div>
      <label for="temperture1">
        小数値を入力してください(.number無し：入力後コンソールにtoFixed()が存在しないとコンソールにエラーが出る)：
      </label>
      <br />
      <input
        type="text"
        id="temperture1"
        v-model="temperture1"
        v-on:change="onchange1"
      />
      <p>{{ temperture1 }}</p>
      <hr />
      <label for="temperture2">
        小数値を入力してください(.numberあり：正常に動く)：
      </label>
      <br />
      <input
        type="text"
        id="temperture2"
        v-model.number="temperture2"
        v-on:change="onchange2"
      />
      <p>{{ temperture2 }}</p>
    </form>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class SampleComponent extends Vue {
  temperture1 = 0;
  temperture2 = 0;

  onchange1(): void {
    // this.temperture1は文字列なのでエラーになる
    console.log(this.temperture1.toFixed(1));
  }

  onchange2(): void {
    // this.temperture2は数値に変換されるのでエラーになない
    console.log(this.temperture2.toFixed(1));
  }
}
</script>

<style scoped>
.sample {
  border: solid;
  padding: 10px;
}
</style>

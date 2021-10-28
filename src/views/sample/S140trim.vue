<template>
  <div class="sample">
    <form>
      <div>.trim修飾子</div>
      <input type="text" v-model.trim="str1" />と
      <input type="text" v-model.trim="str2" />を<br />
      連結した結果は「{{ result }}」です。
      <button type="button" v-on:click="onclick">連結する</button>
    </form>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class SampleComponent extends Vue {
  private str1 = "";
  private str2 = "";
  private result = "";

  onclick(): void {
    this.result = this.str1 + this.str2;
  }
}
</script>

<style scoped>
.sample {
  border: solid;
  padding: 10px;
}
</style>

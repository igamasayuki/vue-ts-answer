<template>
  <div class="sample">
    <form>
      <div>.trim修飾子</div>
      <label for="memo1">名前(.trim無し：空白が反映される)：</label><br />
      <input
        type="text"
        id="memo1"
        v-model="memo1"
        v-on:change="onchange"
      /><br />
      <p>{{ memo1 }}</p>
      <label for="memo2">名前(.trimあり：空白が除去して反映される)：</label
      ><br />
      <input
        type="text"
        id="memo2"
        v-model.trim="memo2"
        v-on:change="onchange"
      /><br />
      <p>{{ memo2 }}</p>
    </form>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class SampleComponent extends Vue {
  memo1 = "";
  memo2 = "";

  onchange(): void {
    console.log("メモ１「" + this.memo1 + "」");
    console.log("メモ２「" + this.memo2 + "」");
  }
}
</script>

<style scoped>
.sample {
  border: solid;
  padding: 10px;
}
</style>

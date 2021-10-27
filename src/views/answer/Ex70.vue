<template>
  <div class="ex">
    <div>{{ name }}</div>
    <button type="button" v-on:click="onclick">名前を表示</button>
    <button type="button" v-on:click="onclick2('山田花子')">名前を表示</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class SampleComponent extends Vue {
  private name = "";

  onclick(): void {
    this.name = "山田太郎";
  }
  onclick2(name: string): void {
    this.name = name;
  }
}
</script>

<style scoped>
.ex {
  border: solid;
}
</style>

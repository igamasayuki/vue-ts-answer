<template>
  <div class="sample">
    <button type="button" v-on:click="onclick">クリック</button>
    <p>{{ message }}</p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class SampleComponent extends Vue {
  message = "";

  onclick(): void {
    this.message = new Date().toLocaleTimeString();
  }
}
</script>

<style scoped>
.sample {
  border: solid;
}
</style>

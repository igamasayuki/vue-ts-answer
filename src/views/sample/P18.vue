<template>
  <div class="sample">
    <p>{{ message }}</p>
    <p>{{ greet }}</p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class SampleComponent extends Vue {
  message = "Hello Vue.js！";
  greet = "こんにちは！";
}
</script>

<style scoped>
p {
  font-weight: bold;
}
</style>

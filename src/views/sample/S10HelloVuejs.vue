<template>
  <div class="sample">
    <p v-text="message"></p>
    <p v-text="greet"></p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class SampleComponent extends Vue {
  private message = "Hello Vue.js！";
  private greet = "こんにちは！";
}
</script>

<style scoped>
p {
  font-weight: bold;
}
</style>

<template>
  <p>{{ message }}</p>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class SampleComponent extends Vue {
  message = "みなさん こんにちは！";
}
</script>

<style scoped>
p {
  font-weight: bold;
}
</style>

<template>
  <div class="sample">
    <div>こんにちは、{{ name }}！</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

//コンポーネント名「
@Component
export default class P143CompMyHello extends Vue {
  name = "Vue.js";
}
</script>

<style scoped>
.sample {
  border: solid;
}
</style>

<template>
  <div class="hello">
    <h1>{{ myName }}</h1>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

//コンポーネント名「
@Component
export default class CompSample extends Vue {
  private myName = "山田太郎";
}
</script>

<style scoped>
h1 {
  margin: 40px 0 0;
}
</style>

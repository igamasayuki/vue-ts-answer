<template>
  <div class="ex">
    <div class="my-name">{{ myName }}</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class SampleComponent extends Vue {
  myName = "山田太郎";
}
</script>

<style scoped>
.my-name {
  border: solid;
}
</style>

<template>
  <div class="sample">
    <div v-for="name of names" v-bind:key="name">{{ name }}</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class SampleComponent extends Vue {
  private names = ["武田", "織田", "豊臣", "上杉", "徳川"];
}
</script>

<style scoped>
.sample .table {
  border: solid;
  padding: 10px;
}
</style>

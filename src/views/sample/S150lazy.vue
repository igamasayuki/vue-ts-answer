<template>
  <div class="sample">
    <form>
      <div>.lazy修飾子</div>
      <input type="text" v-model.lazy="myName" />
      <p>{{ myName }}</p>
    </form>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class SampleComponent extends Vue {
  private myName = "名無し";
}
</script>

<style scoped>
.sample {
  border: solid;
  padding: 10px;
}
</style>

<template>
  <div class="sample">
    <form>
      <label for="canShow">表示/非表示(v-if)</label><br />
      <input type="checkbox" id="canShow" v-model="canShow" />
      <div v-if="canShow">チェックされた</div>
    </form>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class SampleComponent extends Vue {
  private canShow = true;
}
</script>

<style scoped>
.sample {
  border: solid;
  padding: 10px;
}
</style>

<template>
  <div class="sample">
    <form>
      <label for="temperture1">表示/非表示(v-show)</label><br />
      <input type="checkbox" id="show" v-model="show" />
      <div v-show="show">チェックされた</div>
      <div v-show="!show">チェックがはずれた</div>
    </form>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class SampleComponent extends Vue {
  show = true;
}
</script>

<style scoped>
.sample {
  border: solid;
  padding: 10px;
}
</style>

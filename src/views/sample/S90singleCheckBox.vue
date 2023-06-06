<template>
  <div class="sample">
    <form>
      <div>チェックボックス(単一)</div>
      <label for="agree">同意する：</label>
      <input type="checkbox" id="agree" v-model="isAgree" />
      <p>回答:{{ isAgree }}</p>
    </form>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class SampleComponent extends Vue {
  isAgree = false;
}
</script>

<style scoped>
.sample {
  border: solid;
  padding: 10px;
}
</style>

<template>
  <div class="ex">
    <textarea v-bind:rows.prop="rows" v-bind:cols.prop="cols"></textarea>
    <button type="button" v-on:click="chengeSize">サイズを変える</button>
    <br />
    rows:{{ rows }} / cols:{{ cols }}
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class SampleComponent extends Vue {
  rows = 5;
  cols = 5;

  chengeSize(): void {
    if (this.rows === 5) {
      this.rows = 10;
    } else {
      this.rows = 5;
    }
    if (this.cols === 5) {
      this.cols = 10;
    } else {
      this.cols = 5;
    }
  }
}
</script>

<style scoped>
.ex {
  border: solid;
}
</style>

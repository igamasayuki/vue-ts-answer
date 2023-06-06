<template>
  <div class="ex">
    <textarea v-bind="attributes"></textarea>
    <button type="button" v-on:click="chengeSize">サイズを変える</button>
    <br />
    rows:{{ attributes.rows }} / cols:{{ attributes.cols }}
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class SampleComponent extends Vue {
  attributes = {
    rows: 5,
    cols: 5,
  };

  chengeSize(): void {
    if (this.attributes["rows"] === 5) {
      this.attributes["rows"] = 10;
    } else {
      this.attributes["rows"] = 5;
    }
    if (this.attributes["cols"] === 5) {
      this.attributes["cols"] = 10;
    } else {
      this.attributes["cols"] = 5;
    }
  }
}
</script>

<style scoped>
.ex {
  border: solid;
}
</style>

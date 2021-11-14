<template>
  <div class="sample">
    <label>名前：<input type="text" v-model="name" /></label>
    <p>入力された値：{{ upperName }}</p>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
// npm install --save lodash
// npm install --save @types/lodash
// を実施してから
import _ from "lodash";

@Component
export default class SampleComponent extends Vue {
  private name = "";
  private upperName = "";

  // eslint-disable-next-line @typescript-eslint/ban-types
  private delayFunc!: Function;

  created(): void {
    // eslint-disable-next-line no-undef
    this.delayFunc = _.debounce(this.getUpper, 2000);
  }
  @Watch("name")
  onTextChanged(newText: string, oldText: string) {
    console.log("newText:" + newText);
    console.log("oldText:" + oldText);

    this.delayFunc();
  }
  getUpper(): void {
    this.upperName = this.name.toUpperCase();
  }
}
</script>

<style scoped>
.sample {
  border: solid;
}
</style>

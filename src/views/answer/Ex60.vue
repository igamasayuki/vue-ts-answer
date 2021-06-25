<template>
  <div class="ex">
    <button type="button" v-bind:disabled="falseFlag">押せるボタン</button>
    <button type="button" v-bind:disabled="trueFlag">押せないボタン</button>
    <hr />
    <input
      type="radio"
      v-bind:checked="trueFlag"
    />チェックされているラジオボタン
    <input
      type="radio"
      v-bind:checked="falseFlag"
    />チェックされていないラジオボタン
    <hr />
    <input
      type="checkbox"
      v-bind:checked="trueFlag"
    />チェックされているチェックボックス
    <input
      type="checkbox"
      v-bind:checked="falseFlag"
    />チェックされていないチェックボックス
    <hr />
    <button type="button" v-on:click="onclick">振る舞いを反転させる</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class SampleComponent extends Vue {
  trueFlag = true;
  falseFlag = false;

  onclick(): void {
    if (this.trueFlag) {
      this.trueFlag = false;
    } else {
      this.trueFlag = true;
    }

    if (this.falseFlag) {
      this.falseFlag = false;
    } else {
      this.falseFlag = true;
    }
  }
}
</script>

<style scoped>
.ex {
  border: solid;
}
</style>

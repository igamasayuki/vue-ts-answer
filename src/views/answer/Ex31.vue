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
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class SampleComponent extends Vue {
  trueFlag = true;
  falseFlag = false;
}
</script>

<style scoped>
.ex {
  border: solid;
}
</style>

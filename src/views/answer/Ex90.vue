<template>
  <div class="ex">
    <div>
      私はロボットではありません。<input
        type="checkbox"
        v-model="isNotRobots"
      />
      / {{ isNotRobots }}
    </div>
    <tamplate v-if="isNotRobots">
      <hr />
      <div>ロボットではない(v-if)</div>
      <button type="button">人間用ボタン</button>
    </tamplate>
    <tamplate v-show="isNotRobots">
      <hr />
      <div>ロボットではない(v-show)</div>
      <button type="button">人間用ボタン</button>
    </tamplate>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class SampleComponent extends Vue {
  private isNotRobots = false;
}
</script>

<style scoped>
.ex {
  border: solid;
}
</style>

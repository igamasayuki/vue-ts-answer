<template>
  <div class="ex">
    <button type="button" v-on:click="up">Count Up</button>
  </div>
</template>

<script lang="ts">
import { Emit, Component, Vue } from "vue-property-decorator";
@Component
export default class Ex215CompCuntUp extends Vue {
  @Emit()
  up(): void {
    console.log("upイベント発生");
  }
}
</script>

<style scoped>
.ex {
  border: solid;
}
</style>

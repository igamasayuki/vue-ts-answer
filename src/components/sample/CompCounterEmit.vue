<template>
  <div class="ex">
    <button type="button" v-on:click="countUp">カウントを増やす</button>
  </div>
</template>

<script lang="ts">
import { Emit, Component, Vue } from "vue-property-decorator";
@Component
export default class CompCounterEmit extends Vue {
  @Emit()
  public countUp(): void {
    console.log("count-upイベント発生");
  }
}
</script>

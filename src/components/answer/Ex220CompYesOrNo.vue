<template>
  <div class="ex">
    <button type="button" v-on:click="preparePush">{{ yesOrNo }}</button>
  </div>
</template>

<script lang="ts">
import { Prop, Emit, Component, Vue } from "vue-property-decorator";
@Component
export default class Ex220CompYesOrNo extends Vue {
  @Prop()
  private yesOrNo!: string;
  @Emit()
  public push(value: string): void {
    console.log("pushイベント発生 value =" + value);
  }
  public preparePush(): void {
    this.push(this.yesOrNo);
  }
}
</script>

<style scoped>
.ex {
  border: solid;
}
</style>

<template>
  <div class="ex">
    <button type="button" v-on:click="preparePlus">{{ step }}</button>
  </div>
</template>

<script lang="ts">
import { Emit, Prop, Component, Vue } from "vue-property-decorator";
@Component
export default class P159CompMyCounter extends Vue {
  @Prop() private step!: number;

  @Emit()
  public plus(value: number): void {
    console.log("plus value =" + value);
  }
  public preparePlus(): void {
    // this.stepだけだとstringで送られるため数字が文字列として連結されてしまう
    this.plus(Number(this.step));
  }
}
</script>

<style scoped>
.ex {
  border: solid;
}
</style>

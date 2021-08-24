<template>
  <span class="ex">
    <button type="button" v-on:click="prePlus">{{ step }}</button>
  </span>
</template>

<script lang="ts">
import { Emit, Prop, Component, Vue } from "vue-property-decorator";
@Component
export default class CompCounterEmit extends Vue {
  @Prop() private step!: number;

  @Emit()
  public plus(value: number): void {
    console.log("plus value =" + value);
  }
  public prePlus(): void {
    // this.stepだけだとstringで送られるため数字が文字列として連結されてしまう
    this.plus(Number(this.step));
  }
}
</script>

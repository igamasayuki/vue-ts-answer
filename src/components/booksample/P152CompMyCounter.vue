<template>
  <div class="ex">
    現在値は{{ current }}です！
    <button type="button" v-on:click="onclick">増やす</button>
  </div>
</template>

<script lang="ts">
import { Prop, Component, Vue } from "vue-property-decorator";
@Component
export default class P152CompMyCounter extends Vue {
  @Prop() private init!: number;
  // P155 プロパティ値の型を制限する
  // @Prop({
  //   type: Number,
  //   required: true,
  //   default: 10,
  //   validator: (value) => value >= 0, // 0以上であればOK
  // })
  // private init!: number;
  current: number = this.init;

  public onclick(): void {
    this.current++;
  }
}
</script>

<style scoped>
.ex {
  border: solid;
}
</style>

<template>
  <div class="ex">
    <div>ボタンを押した回数「{{ currentCount }}」</div>
    <button type="button" v-on:click="countUp">カウントアップ</button>
  </div>
</template>

<script lang="ts">
import { Prop, Component, Vue } from "vue-property-decorator";
@Component
export default class Ex200CompButtonCounter extends Vue {
  @Prop({ default: 0 })
  private firstCount!: number;
  // 追加演習回答例
  // @Prop({
  //   type: Number,
  //   required: true,
  //   default: 10,
  //   validator: (value) => value >= 0,
  // })
  // private firstCount!: number;
  private currentCount = this.firstCount;

  countUp(): void {
    this.currentCount++;
    // this.currentCount = this.currentCount + 1;
  }
}
</script>

<style scoped>
.ex {
  border: solid;
}
</style>

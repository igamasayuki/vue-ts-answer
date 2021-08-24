<template>
  <div class="ex">
    現在値：{{ nowCount }}<br />
    <button type="button" v-on:click="countUp">カウントを１増やす</button>
  </div>
</template>

<script lang="ts">
import { Prop, Component, Vue } from "vue-property-decorator";
@Component
export default class CompCounterProp extends Vue {
  @Prop({ default: 0 })
  private initialCount!: number;

  // プロパティ値の型を制限する(応用のため研修ではやりません)
  // @Prop({
  //   type: Number,
  //   required: true,
  //   default: 10,
  //   validator: (value) => value >= 0, // 0以上であればOK
  // })
  // private initialCount!: number;

  // 親コンポーネントから渡ってきた値を子コンポーネントの変数に退避
  nowCount: number = this.initialCount;

  public countUp(): void {
    // ボタンが押されたら子コンポーネントの変数を更新する
    this.nowCount++;
  }
}
</script>

<style scoped>
.ex {
  border: solid;
}
</style>

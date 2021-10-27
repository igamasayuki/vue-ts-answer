<template>
  <div class="ex">
    <button type="button" v-on:click="preCountUp">カウントを増やす</button>
  </div>
</template>

<script lang="ts">
import { Emit, Component, Vue } from "vue-property-decorator";
@Component
export default class CompCounterEmit extends Vue {
  @Emit()
  countUp(count: number): void {
    console.log("count-upイベント発生!" + count + "を親に渡します");
  }

  //ボタンクリックで呼ばれるメソッド
  preCountUp(): void {
    this.countUp(1); // ←イベント発生メソッドを呼ぶ。この時の引数が親に渡る
  }
}
</script>

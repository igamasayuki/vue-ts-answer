<template>
  <div class="sample">
    <p>現在時刻：{{ current.toLocaleString() }}</p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class SampleComponent extends Vue {
  private current = new Date();
  private timer = 0;

  created(): void {
    // 下のsetIntervalメソッド配下では、thisはVueインスタンスではなく、グローバルオブジェクト(Window)に変化してしまうため、thisをthatに退避している。
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    let that = this;
    this.timer = setInterval(function () {
      that.current = new Date();
    }, 1000);
  }
  beforeDestroy(): void {
    clearInterval(this.timer);
  }
}
</script>

<style scoped>
.sample {
  border: solid;
}
</style>

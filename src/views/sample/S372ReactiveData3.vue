<template>
  <div class="sample">
    <p>著者情報：{{ author.name }}({{ author.company }})</p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Author } from "@/types/author";
@Component
export default class SampleComponent extends Vue {
  private author = new Author("山田", "株式会社ヤマ");

  created(): void {
    // 下のsetIntervalメソッド配下では、thisはVueインスタンスではなく、グローバルオブジェクト(Window)に変化してしまうため、thisをthatに退避している。
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    let that = this;
    setInterval(function () {
      that.author.name = "佐藤";
      that.author.company = "株式会社サト";
    }, 1000);
  }
}
</script>

<style scoped>
.sample {
  border: solid;
}
</style>

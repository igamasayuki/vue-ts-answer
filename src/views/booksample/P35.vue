<template>
  <div class="sample">ライフサイクルフック</div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class SampleComponent extends Vue {
  beforeCreate(): void {
    console.log(
      "beforeCreateイベント発生！(Vueインスタンスが生成された&データの初期化前)"
    );
  }
  create(): void {
    console.log(
      "createイベント発生！(Vueインスタンスが生成された&データの初期化後)"
    );
  }
  beforeMount(): void {
    console.log("beforeMountイベント発生！(Vueインスタンスがページに紐付く前)");
  }
  mounted(): void {
    console.log("mountedイベント発生！(Vueインスタンスがページに紐付いた後)");
  }
  beforeUpdate(): void {
    console.log("beforeUpdateイベント発生！(データが更新された&再描画前)");
  }
  updated(): void {
    console.log("beforeUpdateイベント発生！(データが更新された&再描画後)");
  }
  beforeDestroy(): void {
    console.log("beforeDestroyイベント発生！(Vueインスタンスが廃棄される前)");
  }
  destroyed(): void {
    console.log("destroyedイベント発生！(Vueインスタンスが廃棄された後)");
  }
}
</script>

<style scoped>
.sample {
  border: solid;
}
</style>

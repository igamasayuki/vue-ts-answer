<template>
  <div class="sample">
    <div>
      私の名前は{{ myName }}です。
      <button type="button" v-on:click="changeName">名前変更</button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

//コンポーネント
@Component
export default class CompMyName extends Vue {
  myName = "山田太郎";

  changeName(): void {
    this.myName = "鈴木一郎";
  }
}
</script>

<style scoped>
.sample {
  border: none;
}
</style>

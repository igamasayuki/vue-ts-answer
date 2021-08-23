<template>
  <div class="sample">
    <div>
      私の趣味は{{ myHobby }}です。
      <button type="button" v-on:click="changeHobby">趣味変更</button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

//コンポーネント
@Component
export default class CompmyMyHobby extends Vue {
  myHobby = "トライアスロン";

  changeHobby(): void {
    this.myHobby = "マラソン";
  }
}
</script>

<style scoped>
.sample {
  border: none;
}
</style>

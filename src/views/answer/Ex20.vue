<template>
  <div class="ex">
    <div class="self-info">名前：{{ myName }}</div>
    <div class="self-info">年齢：{{ myAge }}</div>
    <div class="self-info">誕生日：{{ myBirthDay }}</div>
    <div class="self-info">趣味：{{ myHobbies }}</div>
    <div class="self-info">10年後の年齢：{{ myAge + 10 }}</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class SampleComponent extends Vue {
  // 月の調整 (月は0から数えるため+1用のマジックナンバーを定数に入れておく constは使えないのでreadonlyにする)
  readonly MOON_ADJUSTMENT = 1;
  myName = "山田太郎";
  myAge = 21;
  // 月は0から数えます 0=1月,1=2月・・・
  myBirthDay = new Date(1999, 7 - this.MOON_ADJUSTMENT, 27);
  myHobbies = ["スイム", "バイク", "ラン"];
}
</script>

<style scoped>
.ex {
  border: solid;
}
</style>

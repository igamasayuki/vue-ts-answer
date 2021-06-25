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
  myName = "山田太郎";
  myAge = 21;
  myBirthDay = new Date(1999, 8, 27);
  myHobbies = ["スイム", "バイク", "ラン"];
}
</script>

<style scoped>
.ex {
  border: solid;
}
</style>

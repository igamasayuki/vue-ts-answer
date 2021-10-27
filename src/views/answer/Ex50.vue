<template>
  <div class="ex">
    <div class="self-info">私のフルネーム：{{ showFullName() }}</div>
    <div class="self-info">現在の年齢：{{ age }}</div>
    <div class="self-info">10年後の年齢：{{ showPlus10Years() }}</div>
    <div class="self-info">20年後の年齢：{{ showPlus20Years(age) }}</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class SampleComponent extends Vue {
  private lastName = "山田";
  private firstName = "太郎";
  private age = 21;

  showFullName(): string {
    return this.lastName + this.firstName;
  }

  showPlus10Years(): number {
    return this.age + 10;
  }

  showPlus20Years(age: number): number {
    return age + 20;
  }
}
</script>

<style scoped>
.ex {
  border: solid;
}
</style>

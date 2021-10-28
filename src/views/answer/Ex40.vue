<template>
  <div class="ex">
    <div class="self-info">私のフルネーム：{{ fullName }}</div>
    <div class="self-info">現在の年齢：{{ age }}</div>
    <div class="self-info">10年後の年齢：{{ plus10Years }}</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class SampleComponent extends Vue {
  private lastName = "山田";
  private firstName = "太郎";
  private age = 21;

  get fullName() {
    return this.lastName + this.firstName;
  }

  get plus10Years() {
    return this.age + 10;
  }
}
</script>

<style scoped>
.ex {
  border: solid;
}
</style>

<template>
  <div class="sample">
    <form>
      <fieldset>
        <legend>支払い方法</legend>
        <input type="radio" name="pay" value="credit" v-model="pay" />
        クレジットカード
        <input type="radio" name="pay" value="bank" v-model="pay" />
        銀行振り込み
        <div v-if="pay === 'credit'">カード番号：<input type="text" /></div>
        <div v-if="pay === 'bank'">口座番号：<input type="text" /></div>
      </fieldset>
    </form>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class SampleComponent extends Vue {
  pay = "credit";
}
</script>

<style scoped>
.sample {
  border: solid;
  padding: 10px;
}
</style>

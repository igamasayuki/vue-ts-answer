<template>
  <div class="sample">
    <form>
      <label for="temperture1">表示/非表示(v-if)</label><br />
      <input type="checkbox" id="show" v-model="show" />
      <div v-if="show">チェックされた</div>
      <div v-else>チェックがはずれた</div>
      <hr />
      <div>
        好きな車はなんですか？:
        <select v-model="likeCar">
          <option value="">選択してください</option>
          <option value="estima">エスティマ</option>
          <option value="prius">プリウス</option>
          <option value="tesla">テスラ</option>
        </select>
        <div>
          <span v-if="likeCar === 'estima'">ガソリン車</span>
          <span v-else-if="likeCar === 'prius'">ハイブリット車</span>
          <span v-else-if="likeCar === 'tesla'">電気自動車</span>
          <span v-else>選択してください</span>
        </div>
      </div>
      <hr />
      <fieldset>
        <legend>支払い方法</legend>
        クレジットカード：
        <input type="radio" name="pay" value="credit" v-model="pay" />
        銀行振り込み：
        <input type="radio" name="pay" value="bank" v-model="pay" />
        <div v-if="pay === 'credit'">カード番号：<input type="text" /></div>
        <div v-if="pay === 'bank'">口座番号：<input type="text" /></div>
      </fieldset>
      <fieldset>
        <legend>支払い方法(key属性あり)</legend>
        クレジットカード：
        <input type="radio" name="pay2" value="credit" v-model="pay2" />
        銀行振り込み：
        <input type="radio" name="pay2" value="bank" v-model="pay2" />
        <div v-if="pay2 === 'credit'">
          カード番号：<input type="text" key="credit" />
        </div>
        <div v-if="pay2 === 'bank'">
          口座番号：<input type="text" key="bank" />
        </div>
      </fieldset>
      <hr />
      <label for="temperture1">表示/非表示(v-show)</label><br />
      <input type="checkbox" id="show" v-model="show" />
      <div v-show="show">チェックされた</div>
      <div v-show="!show">チェックがはずれた</div>
    </form>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class SampleComponent extends Vue {
  show = true;
  likeCar = "";
  pay = "credit";
  pay2 = "credit";
}
</script>

<style scoped>
.sample {
  border: solid;
}
</style>

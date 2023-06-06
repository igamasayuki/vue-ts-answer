<template>
  <div class="sample">
    <form>
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
    </form>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class SampleComponent extends Vue {
  likeCar = "";
}
</script>

<style scoped>
.sample {
  border: solid;
  padding: 10px;
}
</style>

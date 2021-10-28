<template>
  <div class="sample">
    <form>
      <div>セレクトボックス(複数)</div>
      <label for="hobby">趣味は何ですか？</label><br />
      <select v-model="hobby" multiple>
        <option value="">hobbyを選択してください</option>
        <option>水泳</option>
        <option>自転車</option>
        <option>ランニング</option>
      </select>
      <br />
      選択した値：{{ hobby }}
    </form>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class SampleComponent extends Vue {
  private hobby = ["水泳", "ランニング"];
}
</script>

<style scoped>
.sample {
  border: solid;
  padding: 10px;
}
</style>

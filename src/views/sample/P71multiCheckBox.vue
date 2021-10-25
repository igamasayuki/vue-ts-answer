<template>
  <div class="sample">
    <form>
      <div>チェックボックス(複数)</div>
      <div>趣味は何ですか？</div>
      <label for="swim">水泳</label>
      <input type="checkbox" id="swim" value="水泳" v-model="hobby" />
      <label for="bike">自転車</label>
      <input type="checkbox" id="bike" value="自転車" v-model="hobby" />
      <label for="run">ランニング</label>
      <input type="checkbox" id="run" value="ランニング" v-model="hobby" />
      <br />
      回答：{{ hobby }}
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

<template>
  <div class="sample">
    <form>
      <div>ラジオボタン</div>
      <div>
        <input type="radio" id="swim" value="水泳" v-model="hobby" />
        <label for="swim">水泳</label>
      </div>
      <div>
        <input type="radio" id="bike" value="自転車" v-model="hobby" />
        <label for="bike">自転車</label>
      </div>
      <div>
        <input type="radio" id="run" value="ランニング" v-model="hobby" />
        <label for="run">ランニング</label>
      </div>
      <p>趣味:{{ hobby }}</p>
    </form>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class SampleComponent extends Vue {
  private hobby = "自転車";
}
</script>

<style scoped>
.sample {
  border: solid;
  padding: 10px;
}
</style>

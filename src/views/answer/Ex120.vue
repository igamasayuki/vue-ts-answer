<template>
  <div class="ex">
    好きな種目:
    <select v-model="sport">
      <option value="swim">スイム</option>
      <option value="bike">バイク</option>
      <option value="run">ラン</option>
    </select>
    <div v-if="sport === 'swim'">
      水泳の目標タイム？
      <input type="text" key="swim" />
    </div>
    <div v-else-if="sport === 'bike'">
      自転車の目標タイム？
      <input type="text" key="bike" />
    </div>
    <div v-else-if="sport === 'run'">
      ランニングの目標タイム？
      <input type="text" key="run" />
    </div>
    <hr />
    好きな種目:
    <input type="radio" name="sport" v-model="sport" value="swim" />スイム
    <input type="radio" name="sport" v-model="sport" value="bike" />バイク
    <input type="radio" name="sport" v-model="sport" value="run" />ラン
    <div v-if="sport === 'swim'">
      水泳の目標タイム？
      <input type="text" key="swim" />
    </div>
    <div v-else-if="sport === 'bike'">
      自転車の目標タイム？
      <input type="text" key="bike" />
    </div>
    <div v-else-if="sport === 'run'">
      ランニングの目標タイム？
      <input type="text" key="run" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class SampleComponent extends Vue {
  sport = "";
}
</script>

<style scoped>
.ex {
  border: solid;
}
</style>

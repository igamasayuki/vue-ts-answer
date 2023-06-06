<template>
  <div class="ex">
    <div>
      趣味はなんですか？:
      <select v-model="hobby">
        <option>未選択</option>
        <option value="triathlon">トライアスロン</option>
        <option value="other">その他</option>
      </select>
    </div>
    <div v-if="hobby === 'triathlon'">
      <div>
        好きな種目は？
        <input type="radio" v-model="sport" value="swim" />スイム
        <input type="radio" v-model="sport" value="bike" />バイク
        <input type="radio" v-model="sport" value="run" />ラン 選択した種目：
        <span v-if="sport === 'swim'">スイム</span>
        <span v-if="sport === 'bike'">バイク</span>
        <span v-if="sport === 'run'">ラン</span>
      </div>
    </div>
    <div v-else-if="hobby === 'other'">
      <div>
        それでは何が好きですか？<input type="text" v-model="otherHobby" />
        記述した趣味：{{ otherHobby }}
      </div>
    </div>
    <div v-else>趣味がありません</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class SampleComponent extends Vue {
  hobby = "未選択";
  sport = "";
  otherHobby = "";
}
</script>

<style scoped>
.ex {
  border: solid;
}
</style>

<template>
  <div class="sample">
    <form>
      <fieldset>
        <legend>種目別距離</legend>
        <input type="radio" name="type" value="swim" v-model="type" />
        水泳
        <input type="radio" name="type" value="bike" v-model="type" />
        自転車
        <input type="radio" name="type" value="run" v-model="type" />
        ランニング
        <div v-if="type === 'swim'">水泳の距離：<input type="text" />km</div>
        <div v-if="type === 'bike'">自転車の距離：<input type="text" />km</div>
        <div v-if="type === 'run'">
          ランニングの距離：<input type="text" />km
        </div>
      </fieldset>
    </form>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class SampleComponent extends Vue {
  private type = "swim";
}
</script>

<style scoped>
.sample {
  border: solid;
  padding: 10px;
}
</style>

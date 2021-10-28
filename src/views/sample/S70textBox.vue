<template>
  <div class="sample">
    <form>
      <div>テキストボックス</div>
      <label for="name">名前：</label>
      <input type="text" id="name" v-model="myName" />
      <p>{{ myName }}</p>
    </form>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class SampleComponent extends Vue {
  private myName = "";
}
</script>

<style scoped>
.sample {
  border: solid;
  padding: 10px;
}
</style>

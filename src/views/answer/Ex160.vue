<template>
  <div class="ex">
    <textarea v-model="text" cols="50"></textarea>
    <hr />
    {{}}構文での表示：
    <p>{{ text }}</p>
    v-htmlでの表示：
    <p v-html="text"></p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class SampleComponent extends Vue {
  private text = "";
}
</script>

<style scoped>
.ex {
  border: solid;
}
</style>

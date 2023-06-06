<template>
  <div class="ex">
    <div>私の名前は{{ myName }}です。</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class Ex170CompMyName extends Vue {
  myName = "山田太郎";
}
</script>

<style scoped>
.ex {
  border: solid;
  color: red;
}
</style>

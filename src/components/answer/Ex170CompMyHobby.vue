<template>
  <div class="ex">
    <div>私の趣味は{{ myHobby }}です。</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class Ex170CompMyHobby extends Vue {
  myHobby = "トライアスロン";
}
</script>

<style scoped>
.ex {
  border: solid;
  color: blue;
}
</style>

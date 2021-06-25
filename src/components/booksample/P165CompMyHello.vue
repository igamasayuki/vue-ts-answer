<template>
  <div class="ex">こんにちは<slot>ゲスト</slot>さん！</div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class P165CompMyHello extends Vue {}
</script>

<style scoped>
.ex {
  border: solid;
}
</style>

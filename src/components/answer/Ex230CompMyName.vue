<template>
  <div class="ex">
    <div>私の名前は<slot>ゲスト</slot>です。</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class Ex230CompMyName extends Vue {}
</script>

<style scoped>
.ex {
  border: solid;
}
</style>

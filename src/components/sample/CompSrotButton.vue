<template>
  <div class="ex">
    ボタン：
    <button><slot>ボタンの名前がここに入ります</slot></button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class CompSrotMyName extends Vue {}
</script>

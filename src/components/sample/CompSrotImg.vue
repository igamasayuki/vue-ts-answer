<template>
  <div class="ex">
    画像：
    <slot>画像がここに入ります</slot>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class CompSrotMyName extends Vue {}
</script>

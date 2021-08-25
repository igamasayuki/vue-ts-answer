<template>
  <div class="ex">
    <header>
      <slot name="header">子：ヘッダロゴが入ります</slot>
    </header>
    <hr />
    <div>
      <slot>子：header、footer以外の内容がここに入ります</slot>
    </div>
    <hr />
    <footer>
      <slot name="footer">子：©️表記が入ります</slot>
    </footer>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class CompSrotMulti extends Vue {}
</script>

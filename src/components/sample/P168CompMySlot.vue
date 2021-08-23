<template>
  <div class="ex">
    <header>
      <slot name="header">DEFAULT HEADER</slot>
    </header>
    <div>
      <slot>DEFAULT MAIN</slot>
    </div>
    <footer>
      <slot name="footer">DEFAULT Footer</slot>
    </footer>
  </div>
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

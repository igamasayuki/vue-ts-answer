<template>
  <div class="ex">
    <header>
      <slot name="header"
        >ここに親コンポーネントからのheaderコンテンツが入ります</slot
      >
    </header>
    <slot
      >ここに親コンポーネントからのheader,footerコンテンツ【以外】のコンテンツが入ります</slot
    >
    <footer>
      <slot name="footer"
        >ここに親コンポーネントからのfooterコンテンツが入ります</slot
      >
    </footer>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class Ex240CompSlotMulti extends Vue {}
</script>

<style scoped>
.header .footer {
  border: solid;
  font-size: 20px;
}
</style>

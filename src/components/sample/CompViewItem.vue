<template>
  <div class="ex">
    <slot v-bind:item="item"> ここに親コンポーネントの内容が反映される </slot>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Item } from "@/types/item";
@Component
export default class CompViewItem extends Vue {
  private item = new Item(30, "TypeScriptの書籍", 4500);
}
</script>

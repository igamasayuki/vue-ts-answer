<template>
  <div class="compSample">
    <!-- Vue.js2.6以降の書き方-->
    <CompViewItem>
      <template v-slot="{ item }">
        {{ item.name }}({{ item.price }}円)
      </template>
    </CompViewItem>
    <!-- Vue.js2.5以前の書き方-->
    <CompViewItem>
      <template v-slot:default="slotProp">
        {{ slotProp.item.name }}({{ slotProp.item.price }}円)
      </template>
    </CompViewItem>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import CompViewItem from "../../components/sample/CompViewItem.vue";
@Component({
  components: {
    CompViewItem,
  },
})
export default class Parent extends Vue {}
</script>

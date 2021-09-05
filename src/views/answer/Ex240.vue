<template>
  <div class="compSample">
    <Ex240CompSlotMulti>
      <div>headerの上に記載したdiv要素</div>
      <template v-slot:header> <h2>ここはヘッダーです</h2> </template>
      <div>headerとfooterの間に記載したdiv要素</div>
      <template v-slot:footer> <h2>ここはフッターです</h2> </template>
      <div>footerの下に記載したdiv要素</div>
    </Ex240CompSlotMulti>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Ex240CompSlotMulti from "@/components/answer/Ex240CompSlotMulti.vue";
@Component({
  components: {
    Ex240CompSlotMulti,
  },
})
export default class Parent extends Vue {}
</script>

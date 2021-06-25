<template>
  <div class="compSample">
    <Ex210CompCheer fight="ファイト！"></Ex210CompCheer>
    <!-- 追加演習回答例 -->
    <!-- <Ex210CompCheer></Ex210CompCheer> -->
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Ex210CompCheer from "../../components/answer/Ex210CompCheer.vue";
@Component({
  components: {
    Ex210CompCheer,
  },
})
export default class Parent extends Vue {}
</script>

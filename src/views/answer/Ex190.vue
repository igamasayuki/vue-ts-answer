<template>
  <div class="compSample">
    <Ex190CompSelfIntroduction
      my-name="山田太郎"
      my-age="18"
      my-hobby="ゲーム"
    ></Ex190CompSelfIntroduction>
    <hr />
    <Ex190CompSelfIntroduction
      my-name="山田花子"
      my-age="23"
      my-hobby="ウォーキング"
    ></Ex190CompSelfIntroduction>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Ex190CompSelfIntroduction from "../../components/answer/Ex190CompSelfIntroduction.vue";
@Component({
  components: {
    Ex190CompSelfIntroduction,
  },
})
export default class Parent extends Vue {}
</script>

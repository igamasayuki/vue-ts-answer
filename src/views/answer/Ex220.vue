<template>
  <div class="compSample">
    <div>押したボタン：「{{ pushButtonName }}」</div>
    <Ex220CompYesOrNo yes-or-no="yes" v-on:push="onpush"></Ex220CompYesOrNo>
    <Ex220CompYesOrNo yes-or-no="no" v-on:push="onpush"></Ex220CompYesOrNo>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Ex220CompYesOrNo from "@/components/answer/Ex220CompYesOrNo.vue";
@Component({
  components: {
    Ex220CompYesOrNo,
  },
})
export default class Parent extends Vue {
  private pushButtonName = "ボタンを押してください";
  onpush(value: string): void {
    this.pushButtonName = value;
  }
}
</script>

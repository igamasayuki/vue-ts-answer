<template>
  <div class="ex">
    <div>応援します「{{ cheer }}」</div>
    <button type="button" v-on:click="cheering">応援する</button>
  </div>
</template>

<script lang="ts">
import { Prop, Component, Vue } from "vue-property-decorator";
@Component
export default class Ex210CompCheer extends Vue {
  @Prop() private fight!: string;
  // 追加演習回答例
  // @Prop({
  //   type: String,
  //   required: false,
  //   default: "がんばれ！",
  // })
  // private fight!: string;

  private cheer = "";
  cheering(): void {
    this.cheer += this.fight;
  }
}
</script>

<style scoped>
.ex {
  border: solid;
}
</style>

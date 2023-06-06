<template>
  <div class="ex">
    <div>私の名前は{{ myName }}です。</div>
    <div>私の年齢は{{ myAge }}です。</div>
    <div>私の趣味は{{ myHobby }}です。</div>
  </div>
</template>

<script lang="ts">
import { Prop, Component, Vue } from "vue-property-decorator";
@Component
export default class Ex190CompSelfIntroduction extends Vue {
  @Prop() myName!: string;
  @Prop() myAge!: string;
  @Prop() myHobby!: string;
}
</script>

<style scoped>
.ex {
  border: solid;
}
</style>

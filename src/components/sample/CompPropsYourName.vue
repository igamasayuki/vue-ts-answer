<template>
  <div class="ex">
    <div>こんにちは、{{ yourName }}さん！</div>
  </div>
</template>

<script lang="ts">
import { Prop, Component, Vue } from "vue-property-decorator";
@Component
export default class CompPropsYourName extends Vue {
  @Prop({ default: "名無し" })
  yourName!: string;
}
</script>

<style scoped>
.ex {
  border: solid;
}
</style>

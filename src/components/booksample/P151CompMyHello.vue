<template>
  <div class="ex">
    <div>こんにちは、{{ yourName }}さん！</div>
  </div>
</template>

<script lang="ts">
import { Prop, Component, Vue } from "vue-property-decorator";
@Component
export default class P150CompMyHello extends Vue {
  @Prop() private yourName!: string;
}
</script>

<style scoped>
.ex {
  border: solid;
}
</style>

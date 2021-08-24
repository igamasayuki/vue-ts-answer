<template>
  <div class="compSample">
    <p>現在値：{{ count }}</p>
    <CompCounterEmit v-on:count-up="onCountUp"></CompCounterEmit>
    <CompCounterEmit v-on:count-up="onCountUp"></CompCounterEmit>
    <CompCounterEmit v-on:count-up="onCountUp"></CompCounterEmit>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import CompCounterEmit from "../../components/sample/CompCounterEmit2.vue";
@Component({
  components: {
    CompCounterEmit,
  },
})
export default class EmitParent extends Vue {
  count = 0;
  onCountUp(count: number): void {
    this.count += count;
  }
}
</script>

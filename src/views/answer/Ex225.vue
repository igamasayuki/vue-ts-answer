<template>
  <div class="compSample">
    <p>現在値：{{ current }}</p>
    <CompCounterEmit step="1" v-on:plus="onplus"></CompCounterEmit>&nbsp;&nbsp;
    <CompCounterEmit step="2" v-on:plus="onplus"></CompCounterEmit>&nbsp;&nbsp;
    <CompCounterEmit step="-1" v-on:plus="onplus"></CompCounterEmit>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import CompCounterEmit from "@/components/answer/Ex225CompCounterEmit.vue";
@Component({
  components: {
    CompCounterEmit,
  },
})
export default class Parent extends Vue {
  current = 0;

  onplus(value: number): void {
    this.current += value;
  }
}
</script>

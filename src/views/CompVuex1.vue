<template>
  <div class="sample">
    <button type="button" v-on:click="down">-</button>
    {{ count }}
    <button type="button" v-on:click="up">+</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class SampleComponent extends Vue {
  get count(): number {
    return this.$store.getters.getCount;
    // Stateを直接取得する方法↓(しかし可能な限り取得はGetters経由で統一する)
    // return this.$store.state.count;
  }

  up(): void {
    this.$store.commit("countUp");
  }

  down(): void {
    this.$store.commit("countDown");
  }
}
</script>

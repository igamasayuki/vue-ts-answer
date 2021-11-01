<template>
  <div class="compSample">
    <CompCounterProp></CompCounterProp>
    <hr />
    <CompCounterProp initial-count="10"></CompCounterProp>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import CompCounterProp from "@/components/sample/CompCounterProp.vue";
@Component({
  components: {
    CompCounterProp,
  },
})
export default class CountUpParent extends Vue {}
</script>

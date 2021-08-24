<template>
  <div class="compSample">
    <CompCounter></CompCounter>
    <hr />
    <CompCounter initial-count="10"></CompCounter>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import CompCounter from "../../components/sample/CompCounterProp.vue";
@Component({
  components: {
    CompCounter,
  },
})
export default class CountUpParent extends Vue {}
</script>

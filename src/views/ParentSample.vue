<template>
  <div class="compSample">
    <CompSample></CompSample>
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import CompSample from "@/components/answer/CompSample.vue";

export default {
  name: "ParentSample",
  components: {
    CompSample,
  },
};
</script>

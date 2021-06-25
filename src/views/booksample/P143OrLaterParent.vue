<template>
  <div class="sample">
    <P143CompMyHello></P143CompMyHello>
    <P143CompMyHello></P143CompMyHello>
    <P143CompMyHello></P143CompMyHello>
  </div>
</template>

<script lang="ts">
import P143CompMyHello from "../../components/booksample/P143CompMyHello.vue";

export default {
  components: {
    P143CompMyHello,
  },
};
</script>

<style scoped>
.sample {
  margin-left: 10px;
  /* border: solid; */
}
</style>

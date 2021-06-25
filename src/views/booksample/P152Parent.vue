<template>
  <div class="compSample">
    <P152CompMyCounter init="0"></P152CompMyCounter>
    <hr />
    <P152CompMyCounter init="10"></P152CompMyCounter>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import P152CompMyCounter from "../../components/booksample/P152CompMyCounter.vue";
@Component({
  components: {
    P152CompMyCounter,
  },
})
export default class Parent extends Vue {}
</script>

<template>
  <div class="compSample">
    <Ex170CompMyName></Ex170CompMyName>
    <Ex170CompMyHobby></Ex170CompMyHobby>
    <Ex170CompMyHobby></Ex170CompMyHobby>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Ex170CompMyName from "@/components/answer/Ex170CompMyName.vue";
import Ex170CompMyHobby from "@/components/answer/Ex170CompMyHobby.vue";

@Component({
  components: {
    Ex170CompMyName,
    Ex170CompMyHobby,
  },
})
export default class Parent extends Vue {}
</script>

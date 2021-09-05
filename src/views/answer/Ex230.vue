<template>
  <div class="compSample">
    <Ex230CompMyName>山田太郎</Ex230CompMyName>
    <Ex230CompMyName>山田花子</Ex230CompMyName>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Ex230CompMyName from "@/components/answer/Ex230CompMyName.vue";
@Component({
  components: {
    Ex230CompMyName,
  },
})
export default class Parent extends Vue {}
</script>

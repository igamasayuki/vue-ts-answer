<template>
  <div class="compSample">
    <CompSrotImg><img src="img/header_logo.png" /></CompSrotImg>
    <CompSrotImg><img src="img/irobot.jpg" /></CompSrotImg>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import CompSrotImg from "@/components/sample/CompSrotImg.vue";
@Component({
  components: {
    CompSrotImg,
  },
})
export default class Parent extends Vue {}
</script>

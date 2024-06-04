<template>
  <div class="compSample">
    <CompSrotButton>送信</CompSrotButton>
    <CompSrotButton>登録</CompSrotButton>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import CompSrotButton from "@/components/sample/CompSrotButton.vue";
@Component({
  components: {
    CompSrotButton,
  },
})
export default class Parent extends Vue {}
</script>

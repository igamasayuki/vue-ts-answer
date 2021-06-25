<template>
  <div class="compSample">
    <div>現在のカウント値：「{{ currentCount }}」</div>
    <Ex215CompCuntUp v-on:up="onup"></Ex215CompCuntUp>
    <Ex215CompCuntUp v-on:up="onup"></Ex215CompCuntUp>
    <Ex215CompCuntUp v-on:up="onup"></Ex215CompCuntUp>
    <Ex215CompCuntUp v-on:up="onup"></Ex215CompCuntUp>
    <Ex215CompCuntUp v-on:up="onup"></Ex215CompCuntUp>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Ex215CompCuntUp from "../../components/answer/Ex215CompCuntUp.vue";
@Component({
  components: {
    Ex215CompCuntUp,
  },
})
export default class Parent extends Vue {
  currentCount = 0;
  onup(): void {
    this.currentCount++;
  }
}
</script>

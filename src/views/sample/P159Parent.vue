<template>
  <div class="compSample">
    <p>現在値：{{ current }}</p>
    <P159CompMyCounter step="1" v-on:plus="onplus"></P159CompMyCounter>
    <P159CompMyCounter step="2" v-on:plus="onplus"></P159CompMyCounter>
    <P159CompMyCounter step="-1" v-on:plus="onplus"></P159CompMyCounter>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import P159CompMyCounter from "../../components/booksample/P159CompMyCounter.vue";
@Component({
  components: {
    P159CompMyCounter,
  },
})
export default class Parent extends Vue {
  current = 0;

  onplus(value: number): void {
    this.current += value;
  }
}
</script>

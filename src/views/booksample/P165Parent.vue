<template>
  <div class="compSample">
    <P165CompMyHello>鈴木</P165CompMyHello>
    <P165CompMyHello>山田</P165CompMyHello>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import P165CompMyHello from "../../components/booksample/P165CompMyHello.vue";
@Component({
  components: {
    P165CompMyHello,
  },
})
export default class Parent extends Vue {}
</script>

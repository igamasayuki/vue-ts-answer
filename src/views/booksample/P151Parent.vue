<template>
  <div class="compSample">
    <P150CompMyHello your-name="鈴木"></P150CompMyHello>
    <hr />
    <P150CompMyHello your-name="山田"></P150CompMyHello>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import P150CompMyHello from "../../components/booksample/P151CompMyHello.vue";
@Component({
  components: {
    P150CompMyHello,
  },
})
export default class Parent extends Vue {}
</script>

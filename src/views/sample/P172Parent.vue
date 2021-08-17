<template>
  <div class="compSample">
    <P172CompMyBook>
      <template v-slot:default="slotProp">
        {{ slotProp.book.title }}({{ slotProp.book.price }}円)
      </template>
    </P172CompMyBook>
    <P172CompMyBook>
      <template v-slot="{ book }">
        {{ book.title }}({{ book.price }}円)
      </template>
    </P172CompMyBook>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import P172CompMyBook from "../../components/booksample/P172CompMyBook.vue";
@Component({
  components: {
    P172CompMyBook,
  },
})
export default class Parent extends Vue {}
</script>

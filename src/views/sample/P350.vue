<template>
  <div class="sample">
    <p>書籍は全部で{{ booksCount }}冊あります。</p>
    <ul v-for="book of getBooksByPrice(2500)" v-bind:key="book.isbn">
      <li>{{ book.title }}({{ book.price }}円)<br />ISBN:{{ book.isbn }}</li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
// import { mapGetters } from "vuex";

@Component
export default class SampleComponent extends Vue {
  // エラーになる
  // get mapGetters(['booksCount','getBooksByPrice'])

  get booksCount(): void {
    return this["$store"].getters.booksCount;
  }

  get getBooksByPrice(): void {
    return this["$store"].getters.getBooksByPrice;
  }
}
</script>

<style scoped>
.sample {
  border: solid;
}
</style>

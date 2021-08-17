<template>
  <div class="sample">
    <form v-on:submit.prevent="onclick">
      <label for="isbn">ISBN:</label>
      <input type="text" id="isbn" v-model="isbn" /><br />
      <label for="title">書名:</label>
      <input type="text" id="title" v-model="title" /><br />
      <label for="price">価格:</label>
      <input type="text" id="price" v-model="price" /><br />
      <button type="submit">登録</button>
    </form>
    <hr />
    <p>書籍は全部で{{ booksCount }}冊あります。</p>
    <ul v-for="book of getBooksByPrice(2500)" v-bind:key="book.isbn">
      <li>{{ book.title }}({{ book.price }}円)<br />ISBN:{{ book.isbn }}</li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class SampleComponent extends Vue {
  isbn = "";
  title = "";
  price = 0;

  onclick(): void {
    // アクションを使って非同期処理
    this["$store"].dispatch("addAsync", {
      book: {
        isbn: this.isbn,
        title: this.title,
        price: this.price,
      },
    });
    // ミューテーションを使った同期処理
    // this["$store"].commit("addBook", {
    //   book: {
    //     isbn: this.isbn,
    //     title: this.title,
    //     price: this.price,
    //   },
    // });
  }

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

<template>
  <div class="sample">
    <table class="table">
      <tr>
        <th>ISBN</th>
        <th>書名</th>
        <th>価格</th>
      </tr>
      <tr v-for="book of books" v-bind:key="book.isbn">
        <td>{{ book.isbn }}</td>
        <td>{{ book.title }}</td>
        <td>{{ book.price }}円</td>
      </tr>
    </table>
    <hr />
    <table class="table">
      <tr>
        <th>ID</th>
        <th>ISBN</th>
        <th>書名</th>
        <th>価格</th>
      </tr>
      <tr v-for="(book2, i) of books" v-bind:key="book2.isbn">
        <td>{{ i + 1 }}</td>
        <td>{{ book2.isbn }}</td>
        <td>{{ book2.title }}</td>
        <td>{{ book2.price }}円</td>
      </tr>
    </table>
    <hr />
    <ul v-for="(value, key) of firstBook" v-bind:key="value">
      <li>{{ key }} : {{ value }}</li>
    </ul>
    <hr />
    <div>2500を超える書籍一覧</div>
    <table class="table">
      <tr>
        <th>ID</th>
        <th>ISBN</th>
        <th>書名</th>
        <th>価格</th>
      </tr>
      <tr v-for="(book3, i) of expensiveBooks" v-bind:key="book3.isbn">
        <td>{{ i + 1 }}</td>
        <td>{{ book3.isbn }}</td>
        <td>{{ book3.title }}</td>
        <td>{{ book3.price }}円</td>
      </tr>
    </table>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class SampleComponent extends Vue {
  books = [
    new Book("999-9-9999-9999-9", "Javaの書籍", 3000),
    new Book("888-8-8888-8888-8", "Pythonの書籍", 2000),
    new Book("777-7-7777-7777-7", "TypeScriptの書籍", 4500),
  ];

  get firstBook(): Book {
    return this.books[0];
  }

  get expensiveBooks(): Array<Book> {
    return this.books.filter((book) => book.price > 2500);
  }
}

class Book {
  private _isbn!: string;
  private _title!: string;
  private _price!: number;

  constructor(isbn: string, title: string, price: number) {
    this._isbn = isbn;
    this._title = title;
    this._price = price;
  }
  public get isbn(): string {
    return this._isbn;
  }

  public set isbn(isbn: string) {
    this._isbn = isbn;
  }

  public get title(): string {
    return this._title;
  }

  public set title(title: string) {
    this._title = title;
  }

  public get price(): number {
    return this._price;
  }

  public set price(price: number) {
    this._price = price;
  }
}
</script>

<style scoped>
.sample .table {
  border: solid;
}
</style>

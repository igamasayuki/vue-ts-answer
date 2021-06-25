<template>
  <div class="ex">
    <slot v-bind:book="book"> ここに親コンポーネントの内容が反映される </slot>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class P165CompMyHello extends Vue {
  private book: Book = new Book(
    "978-48222-5389-9",
    "作って楽しむプログラミング",
    2000,
    "日経BP"
  );
}

class Book {
  private _isbn: string;
  private _title: string;
  private _price: number;
  private _publish: string;
  constructor(isbn: string, title: string, price: number, publish: string) {
    this._isbn = isbn;
    this._title = title;
    this._price = price;
    this._publish = publish;
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

  public get publish(): string {
    return this._publish;
  }

  public set publish(publish: string) {
    this._publish = publish;
  }
}
</script>

<style scoped>
.ex {
  border: solid;
}
</style>

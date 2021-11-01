<template>
  <div class="sample">
    <form>
      <label for="id">ID:</label>
      <input type="text" id="id" v-model="id" /><br />
      <label for="name">商品名:</label>
      <input type="text" id="name" v-model="name" /><br />
      <label for="price">価格:</label>
      <input type="text" id="price" v-model="price" /><br />
      <button type="button" v-on:click="onclick">登録</button>
    </form>
    <hr />
    <p>商品は全部で{{ itemCount }}冊あり、15万円以下の商品は以下の通りです。</p>
    <div v-for="item of getItemByPrice(150000)" v-bind:key="item.id">
      {{ item.id }}:{{ item.name }}({{ item.price }}円)
    </div>
  </div>
</template>

<script lang="ts">
import { Item } from "@/types/item";
import { Component, Vue } from "vue-property-decorator";

@Component
export default class SampleComponent extends Vue {
  // フォーム内に入力された情報が入る変数
  private id = "";
  private name = "";
  private price = 0;

  onclick(): void {
    // アクションを使って非同期処理
    // 第２引数には「名前：値,・・・」のオブジェクト形式で渡す
    // アクションに渡す引数のことを「ペイロード」という
    this["$store"].dispatch("addItemAsync", {
      item: {
        id: this.id,
        name: this.name,
        price: this.price,
      },
    });
  }

  get itemCount(): number {
    return this["$store"].getters.getItemCount;
  }

  getItemByPrice(price: number): Array<Item> {
    return this["$store"].getters.getItemByPrice(price);
  }
}
</script>

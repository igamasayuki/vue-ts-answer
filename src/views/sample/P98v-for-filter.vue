<template>
  <div class="sample">
    <div>3,000円以上の商品一覧</div>
    <table class="table">
      <tr>
        <th>繰返し回数</th>
        <th>ID</th>
        <th>商品名</th>
        <th>価格</th>
      </tr>
      <tr v-for="(item, i) of expensiveItems" v-bind:key="item.id">
        <td>{{ i + 1 }}</td>
        <td>{{ item.id }}</td>
        <td>{{ item.name }}</td>
        <td>{{ item.price }}円</td>
      </tr>
    </table>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Item } from "@/types/item";

@Component
export default class SampleComponent extends Vue {
  items = [
    new Item(10, "Javaの書籍", 3000),
    new Item(20, "Pythonの書籍", 2000),
    new Item(30, "TypeScriptの書籍", 4500),
  ];

  get expensiveItems(): Array<Item> {
    return this.items.filter((item) => item.price >= 3000);
  }
}
</script>

<style scoped>
.sample .table {
  border: solid;
  padding: 10px;
}

tr,
th,
td {
  border: 1px solid;
}
</style>

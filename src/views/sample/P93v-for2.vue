<template>
  <div class="sample">
    <table class="table">
      <tr>
        <th>ID</th>
        <th>商品名</th>
        <th>価格</th>
      </tr>
      <tr v-for="item of items" v-bind:key="item.id">
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
  private items = [
    new Item(10, "Javaの書籍", 3000),
    new Item(20, "Pythonの書籍", 2000),
    new Item(30, "TypeScriptの書籍", 4500),
  ];
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

<template>
  <div class="ex">
    全件表示：
    <table border="1">
      <tr>
        <th>ID</th>
        <th>名前</th>
        <th>入社日</th>
        <th>給料</th>
        <th>扶養人数</th>
      </tr>
      <tr v-for="employee in employees" v-bind:key="employee.id">
        <td>{{ employee.id }}</td>
        <td>{{ employee.name }}</td>
        <td>{{ employee.hireDate }}</td>
        <td>{{ employee.salary }}円</td>
        <td>{{ employee.dependentsCount }}人</td>
      </tr>
    </table>
    <hr />
    <button type="button" v-on:click="deleteFirstEmployee">先頭を削除</button>
    <button type="button" v-on:click="deleteLastEmployee">最後を削除</button>
    <hr />
    <div>ID：<input type="text" v-model="id" /></div>
    <div>名前：<input type="text" v-model="name" /></div>
    <div>入社年月日：<input type="text" v-model="hireDate" /></div>
    <div>給料：<input type="text" v-model="salary" /></div>
    <div>扶養人数：<input type="text" v-model.number="dependentsCount" /></div>
    <button type="button" v-on:click="addEmployee">上記を追加</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Employee } from "@/types/employee";

@Component
export default class SampleComponent extends Vue {
  employees = [
    new Employee(10, "渡辺三郎", "2018-10-29", 130000, 3),
    new Employee(20, "佐藤次郎", "2017-08-22", 450000, 3),
    new Employee(30, "山本八郎", "2017-6-18", 300000, 12),
  ];

  id = 0;
  name = "サンプル太郎";
  hireDate = "2021-8-20";
  salary = 180000;
  dependentsCount = 5;

  // 先頭の要素を削除
  deleteFirstEmployee(): void {
    this.employees.shift();
  }
  // 末尾の要素を削除
  deleteLastEmployee(): void {
    this.employees.pop();
  }
  // 末尾に要素を挿入
  addEmployee(): void {
    this.employees.push(
      new Employee(
        this.id,
        this.name,
        this.hireDate,
        this.salary,
        this.dependentsCount
      )
    );
  }
}
</script>

<style scoped>
.ex {
  border: solid;
}
</style>

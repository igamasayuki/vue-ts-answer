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
    全件表示(index番号あり)：
    <table border="1">
      <tr>
        <th>index</th>
        <th>ID</th>
        <th>名前</th>
        <th>入社日</th>
        <th>給料</th>
        <th>扶養人数</th>
      </tr>
      <tr v-for="(employee, i) in employees" v-bind:key="employee.id">
        <td>{{ i + 1 }}</td>
        <td>{{ employee.id }}</td>
        <td>{{ employee.name }}</td>
        <td>{{ employee.hireDate }}</td>
        <td>{{ employee.salary }}円</td>
        <td>{{ employee.dependentsCount }}人</td>
      </tr>
    </table>
    <hr />
    給料30万以上の人のみ表示：
    <table border="1">
      <tr>
        <th>ID</th>
        <th>名前</th>
        <th>入社日</th>
        <th>給料</th>
        <th>扶養人数</th>
      </tr>
      <tr v-for="employee in moreThan30Employees" v-bind:key="employee.id">
        <td>{{ employee.id }}</td>
        <td>{{ employee.name }}</td>
        <td>{{ employee.hireDate }}</td>
        <td>{{ employee.salary }}円</td>
        <td>{{ employee.dependentsCount }}人</td>
      </tr>
    </table>
    <hr />
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

  // アロー関数版ゲッター
  get moreThan30Employees(): Array<Employee> {
    return this.employees.filter((employee) => employee.salary >= 300000);
  }

  // 通常のゲッター
  // get moreThan30Employees() {
  //   return this.employees.filter(function (employee) {
  //     return employee.salary >= 300000;
  //   });
  // }
}
</script>

<style scoped>
.ex {
  border: solid;
}
</style>

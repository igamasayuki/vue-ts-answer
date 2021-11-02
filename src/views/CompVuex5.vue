<template>
  <div class="sample">
    <button type="button" v-on:click="onclick">従業員情報取得</button>
    <hr />
    <div>従業員数:{{ employeeCount }}人</div>
    <div class="row">
      <table>
        <thead>
          <tr>
            <th>名前</th>
            <th>入社日</th>
            <th>扶養人数</th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="employee of employees" v-bind:key="employee.id">
            <td>
              {{ employee.name }}
            </td>
            <td>{{ employee.hireDate }}</td>
            <td>{{ employee.dependentsCount }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Employee } from "@/types/employee";

@Component
export default class SampleComponent extends Vue {
  onclick(): void {
    // アクションを使って非同期処理
    // 非同期でWebAPIから従業員一覧を取得しに行く
    this["$store"].dispatch("getEmployeeList");
  }

  // 非同期で取得した従業員数を取得し返す
  get employeeCount(): number {
    // return this["$store"].state.totalEmployeeCount;
    return this["$store"].getters.getEmployeeCount;
  }

  // 非同期で取得した従業員一覧を取得し返す
  get employees(): Array<Employee> {
    return this["$store"].getters.getEmployees;
  }
}
</script>

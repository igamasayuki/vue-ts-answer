<template>
  <div class="sample">
    <form>
      <button type="button" v-on:click="onclick">従業員情報取得</button>
    </form>
    <hr />
    <div>従業員数:{{ getEmployeeCount }}人</div>
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
          <tr v-for="employee of getEmployees" v-bind:key="employee.id">
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
// import { mapGetters } from "vuex";

@Component
export default class SampleComponent extends Vue {
  onclick(): void {
    // アクションを使って非同期処理
    // 非同期でWebAPIから従業員一覧を取得しに行く
    this["$store"].dispatch("getEmployeeList");
  }

  // 非同期で取得した従業員一覧を取得し返す
  get getEmployees(): void {
    return this["$store"].getters.getEmployees;
  }
  // 非同期で取得した従業員数を取得し返す
  get getEmployeeCount(): void {
    // return this["$store"].state.totalEmployeeCount;
    return this["$store"].getters.getEmployeeCount;
  }
}
</script>

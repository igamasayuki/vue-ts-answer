<template>
  <div class="ex">
    <slot v-bind:employee="employee">
      <!-- ここが置き換わるので省略しても動く -->
      <!-- <div>ID:{{ employee.id }}</div>
      <div>名前:{{ employee.name }}</div>
      <div>入社日:{{ employee.hireDate }}</div>
      <div>給料:{{ employee.salary }}</div>
      <div>扶養人数:{{ employee.dependentsCount }}</div> -->
    </slot>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Employee } from "../../types/employee";
@Component
export default class Ex250CompEmployeeInfo extends Vue {
  private employee: Employee = new Employee(
    10,
    "渡辺三郎",
    "2018-10-29",
    130000,
    3
  );
}
</script>

<style scoped>
.ex {
  border: solid;
}
</style>

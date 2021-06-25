<template>
  <div class="compSample">
    <Ex250CompEmployeeInfo>
      <template v-slot:default="slotProp">
        <div>ID:{{ slotProp.employee.id }}</div>
        <div>名前:{{ slotProp.employee.name }}</div>
        <div>入社日:{{ slotProp.employee.hireDate }}</div>
        <div>給料:{{ slotProp.employee.salary }}</div>
        <div>扶養人数:{{ slotProp.employee.dependentsCount }}</div>
      </template>
    </Ex250CompEmployeeInfo>
    <hr />
    <!-- 追加演習 -->
    <Ex250CompEmployeeInfo>
      <template v-slot="{ employee }">
        <div>ID:{{ employee.id }}</div>
        <div>名前:{{ employee.name }}</div>
        <div>入社日:{{ employee.hireDate }}</div>
        <div>給料:{{ employee.salary }}</div>
        <div>扶養人数:{{ employee.dependentsCount }}</div>
      </template>
    </Ex250CompEmployeeInfo>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Ex250CompEmployeeInfo from "../../components/answer/Ex250CompEmployeeInfo.vue";
@Component({
  components: {
    Ex250CompEmployeeInfo,
  },
})
export default class Parent extends Vue {}
</script>

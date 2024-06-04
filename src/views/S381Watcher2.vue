<template>
  <div class="sample">
    <label>名前：<input type="text" v-model="inputName" /></label>
    <p>{{ updateEmployee.id }}</p>
    <p>{{ updateEmployee.name }}</p>
    <p>{{ updateEmployee.hireDate }}</p>
    <p>{{ updateEmployee.salary }}</p>
    <p>{{ updateEmployee.dependentsCount }}</p>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
// npm install --save lodash
// npm install --save @types/lodash
// を実施してから
import _ from "lodash";
import { Employee } from "@/types/employee";

@Component
export default class SampleComponent extends Vue {
  inputName = "";
  // 初期値で初期化しなければtemplateでidなどが存在しないということでエラーとなる
  updateEmployee = new Employee(0, "初期値", "初期値", 0, 0);
  // private updateEmployee.salary = "";

  // eslint-disable-next-line @typescript-eslint/ban-types
  private delayFunc!: Function;

  created(): void {
    // eslint-disable-next-line no-undef
    this.delayFunc = _.debounce(this.getUpper, 2000);
  }
  @Watch("inputName")
  onTextChanged(newText: string, oldText: string) {
    console.log("newText:" + newText);
    console.log("oldText:" + oldText);

    this.delayFunc();
  }
  getUpper(): void {
    console.log("getUpper呼ばれた");

    // thisをthatに退避しないと後から変更されない
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    let that = this;

    // that.updateEmployee.name = "佐藤";
    that.updateEmployee = new Employee(50, "yamada", "2021-4-4", 400000, 4);
  }
}
</script>

<style scoped>
.sample {
  border: solid;
}
</style>

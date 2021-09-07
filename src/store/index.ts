import Vue from "vue";
import Vuex from "vuex";
import { Item } from "@/types/item";
// CompVuex5.vueで使用
import { Employee } from "@/types/employee";
// 使うためには「npm install axios --save」を実行
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  state: {
    // CompVuex1.vueで使用
    // カウントデータ(0で初期化)
    count: 0,
    // CompVuex2.vueで使用
    items: [
      new Item(10, "iPhone", 100000),
      new Item(20, "iMac", 150000),
      new Item(30, "Mac Book Pro", 200000),
    ],
    // CompVuex5.vueで使用
    totalEmployeeCount: 0,
    employees: new Array<Employee>(),
  },
  actions: {
    // CompVuex4.vueで使用
    addItemAsync(context, payload) {
      // 5000ミリ秒後にミューテーション(addItem)をコミット
      setTimeout(function () {
        context.commit("addItem", payload);
      }, 5000);
    },
    // CompVuex5.vueで使用
    async getEmployeeList(context, payload) {
      const response = await axios.get(
        "http://localhost:8080/ex-emp/employee/employees"
      );
      console.dir("response:" + JSON.stringify(response));
      payload = response.data; // responseデータの中のdataをペイロードに渡す
      context.commit("addEmployeeList", payload); // ミューテーションの呼び出し
    },
  },
  mutations: {
    // CompVuex1.vueで使用
    // カウントアップメソッド
    countUp(state) {
      state.count++;
    },
    // カウントダウンメソッド
    countDown(state) {
      state.count--;
    },
    // CompVuex3.vueで使用
    // 第２引数で情報を受け取れる(この引数のことをペイロードという)
    addItem(state, payload) {
      state.items.push(payload.item);
    },
    // CompVuex5.vueで使用
    addEmployeeList(state, payload) {
      // console.dir("payload:" + JSON.stringify(payload));
      console.log("totalEmployeeCount:" + payload.totalEmployees);
      state.totalEmployeeCount = payload.totalEmployees;
      state.employees = new Array<Employee>();
      for (const employee of payload.employees) {
        state.employees.push(
          new Employee(
            employee.id,
            employee.name,
            employee.hireDate,
            employee.salary,
            employee.dependentsCount
          )
        );
      }
      console.log("employees:" + state.employees);
    },
  },
  getters: {
    // CompVuex1.vueで使用
    // state内のcountを返す
    getCount(state) {
      return state.count;
    },
    // CompVuex2.vueで使用
    // 商品数(state内のitems配列のサイズ)を返す
    getItemCount(state) {
      return state.items.length;
    },
    // 渡された値段以下の情報のみ返す
    getItemByPrice(state) {
      return (price: number) => {
        return state.items.filter((item) => item.price <= price);
      };
    },
    // 慣れない人用の簡単な書き方
    // getItemByPrice(state) {
    //   return (price: number) => {
    //     const newArray = [];
    //     for (const item of state.items) {
    //       if (item.price <= price) {
    //         newArray.push(item);
    //       }
    //     }
    //     return newArray;
    //   };
    // },
    // 慣れた人用の更に省略した書き方
    // getItemByPrice(state) {
    //   return (price: number) =>
    //     state.items.filter((item) => item.price <= price);
    // },
    // CompVuex5.vueで使用
    getEmployeeCount(state) {
      return state.employees.length;
    },
    getEmployees(state) {
      return state.employees;
    },
  },
  modules: {},
});

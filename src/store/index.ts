import Vue from "vue";
import Vuex from "vuex";
import { Item } from "@/types/item";
// CompVuex5.vueで使用
import { Employee } from "@/types/employee";
// 使うためには「npm install axios --save」を実行
import axios from "axios";

Vue.use(Vuex);

const store = new Vuex.Store({
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
    // 従業員の人数が入る変数
    //(WebAPIから返ってくるJSON内のキーに名前を合わせる)
    totalEmployeeCount: 0,
    // 従業員一覧が入る変数
    // (WebAPIから返ってくるJSON内のキーに名前を合わせる)
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
    async getEmployeeList(context) {
      // 外部WebAPIの呼び出し(上書きしないためconstにする=しないとESLintでエラー)
      const response = await axios.get(
        "http://153.127.48.168:8080/ex-emp-api/employee/employees"
      );
      console.dir("response:" + JSON.stringify(response));
      // responseデータの中のdataをpayload変数に格納(上書きしないためconstにする=しないとESLintでエラー)
      const payload = response.data;
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
      // payload内の従業員数をstateの従業員数に格納
      state.totalEmployeeCount = payload.totalEmployeeCount;

      // payload内の従業員一覧をstateの従業員一覧に格納
      // state.employees = payload.employees;

      // 上記の1行は以下のコードとほぼ同じ意味です(Employeeオブジェクト独自のメソッド(日付フォーマットメソッドなど)を使用したい場合は以下のように書く必要あり)
      // 呼ばれる度に追加されないよう一度空の配列で初期化する
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
      // 以下の関数のpriceに引数の値が格納される
      return (price: number) => {
        return state.items.filter((item) => item.price <= price);
      };
    },
    // 慣れない人用の簡単な書き方
    // getItemByPrice(state) {
    //   // 以下の関数のpriceに引数の値が格納される
    //   const functionName = (price: number) => {
    //     const newArray = [];
    //     for (const item of state.items) {
    //       if (item.price <= price) {
    //         newArray.push(item);
    //       }
    //     }
    //     return newArray;
    //   };
    //   return functionName;
    // },
    // 慣れた人用の更に省略した書き方
    // getItemByPrice(state) {
    //   return (price: number) =>
    //     state.items.filter((item) => item.price <= price);
    // },
    // CompVuex5.vueで使用
    getEmployeeCount(state) {
      return state.totalEmployeeCount;
      //↓stateのtotalEmployeeCoutを使用しなくても以下で同様のことも可能
      // return state.employees.length;
    },
    getEmployees(state) {
      return state.employees;
    },
  },
  modules: {},
});

export default store;

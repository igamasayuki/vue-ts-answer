import { Book } from "@/types/book";
import Vue from "vue";
import Vuex from "vuex";
import { Item } from "@/types/item";

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
    books: [
      new Book("111-111-111", "初めてのTypeScript", 2300),
      new Book("222-222-222", "初めてのJavaScript", 2400),
      new Book("333-333-333", "初めてのCoffeeScript", 2500),
    ],
  },
  actions: {
    addAsync(context, payload) {
      // 5000ミリ秒後にミューテーション(ADD_BOOK)をコミット
      setTimeout(function () {
        context.commit("addBook", payload);
      }, 5000);
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
    addBook(state, payload) {
      state.books.push(payload.book);
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
    booksCount(state) {
      return state.books.length;
    },
    getBooksByPrice(state) {
      return (price: number) => {
        return state.books.filter((book) => book.price < price);
      };
    },
  },
  modules: {},
});

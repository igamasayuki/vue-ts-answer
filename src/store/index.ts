import { Book } from "@/types/book";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  state: {
    // CompVuex1.vueで使用
    // カウントデータ(0で初期化)
    count: 0,
    books: [
      new Book("111-111-111", "初めてのTypeScript", 2300),
      new Book("222-222-222", "初めてのJavaScript", 2400),
      new Book("333-333-333", "初めてのCoffeeScript", 2500),
    ],
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
    booksCount(state) {
      return state.books.length;
    },
    getBooksByPrice(state) {
      return (price: number) => {
        return state.books.filter((book) => book.price < price);
      };
    },
  },
  actions: {
    addAsync(context, payload) {
      // 5000ミリ秒後にミューテーション(ADD_BOOK)をコミット
      setTimeout(function () {
        context.commit("addBook", payload);
      }, 5000);
    },
  },

  modules: {},
});

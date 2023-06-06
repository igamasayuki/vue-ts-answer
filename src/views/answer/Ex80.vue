<template>
  <div class="ex">
    <h1>アンケートフォーム</h1>
    <div>
      姓：<input type="text" v-model.trim="lastName" /> / 入力した姓：{{
        lastName
      }}
    </div>
    <hr />
    <div>
      名：<input type="text" v-model.trim="firstName" /> / 入力した名：{{
        firstName
      }}
    </div>
    <hr />
    <div>入力したフルネーム：{{ lastName + firstName }}</div>
    <hr />
    <div>
      年齢(数値のみ入力可)：<input type="text" v-model.number="age" /> /
      入力した年齢：{{ age }}
    </div>
    <hr />
    <div>10年後の年齢：{{ age + 10 }}</div>
    <hr />
    <div>
      性別： <input type="radio" value="男性" v-model="gender" />男性
      <input type="radio" value="女性" v-model="gender" />女性 /
      チェックした値：{{ gender }}
    </div>
    <hr />
    <div>
      趣味： <input type="checkbox" value="スイム" v-model="hobbies" />スイム
      <input type="checkbox" value="バイク" v-model="hobbies" />バイク
      <input type="checkbox" value="ラン" v-model="hobbies" />ラン /
      チェックした値：{{ hobbies }}
    </div>
    <hr />
    <div>
      好きな言語：
      <select v-model="language">
        <option>JavaScript</option>
        <option>TypeScript</option>
        <option>CoffeeScript</option>
        <option>Dart</option>
      </select>
      / 選択した値：{{ language }}
    </div>
    <hr />
    <div>
      その他：
      <textarea v-model.lazy="other" rows="5" cols="30"></textarea>
      <div>
        入力したその他：
        <pre>{{ other }}</pre>
      </div>
    </div>
    <hr />
    <div>
      私はロボットではありません。<input
        type="checkbox"
        v-model="isNotRobots"
      />
      / {{ isNotRobots }}
    </div>
    <hr />
    <button type="button" v-bind:disabled="!isNotRobots">クリック</button
    >←ロボットじゃなければ押せるようにする
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class SampleComponent extends Vue {
  lastName = "";
  firstName = "";
  age = 0;
  gender = "男性";
  hobbies = new Array<string>();
  language = "JavaScript";
  other = "";
  isNotRobots = false;
}
</script>

<style scoped>
.ex {
  border: solid;
}
</style>

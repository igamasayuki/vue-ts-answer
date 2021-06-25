<template>
  <div class="sample">
    <form>
      <div>テキストボックス</div>
      <label for="name">名前：</label>
      <input type="text" id="name" v-model="myName" />
      <p>{{ myName }}</p>
      <hr />
      <div>ラジオボタン</div>
      <label for="dog">いぬ</label>
      <input type="radio" id="dog" value="いぬ" v-model="pet" />
      <label for="cat">ねこ</label>
      <input type="radio" id="cat" value="ねこ" v-model="pet" />
      <label for="other">その他</label>
      <input type="radio" id="other" value="その他" v-model="pet" />
      <p>ペット:{{ pet }}</p>
      <hr />
      <div>チェックボックス(単一)</div>
      <label for="agree">同意する：</label>
      <input type="checkbox" id="agree" v-model="agree" />
      <p>回答:{{ agree }}</p>
      <hr />
      <div>チェックボックス(複数)</div>
      <div>お使いのOSは？</div>
      <label for="windows">Windows</label>
      <input type="checkbox" id="windows" value="Windows" v-model="os" />
      <label for="linux">Linux</label>
      <input type="checkbox" id="linux" value="Linux" v-model="os" />
      <label for="mac">MacOS</label>
      <input type="checkbox" id="mac" value="MacOS" v-model="os" />
      回答：{{ os }}
      <hr />
      <div>選択ボックス(単一)</div>
      <label for="os2">お使いのOSは？</label><br />
      <select v-model="os2">
        <option value="">OSを選択してください</option>
        <option>Windows</option>
        <option>Linux</option>
        <option>MacOS</option>
      </select>
      / 選択した値：{{ os2 }}
      <hr />
      <div>選択ボックス(複数)</div>
      <label for="os3">お使いのOSは？</label><br />
      <select v-model="os3" multiple>
        <option value="">OSを選択してください</option>
        <option>Windows</option>
        <option>Linux</option>
        <option>MacOS</option>
      </select>
      / 選択した値：{{ os3 }}
    </form>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class SampleComponent extends Vue {
  myName = "";
  pet = "ねこ";
  agree = false;
  os = ["Windows", "MacOS"];
  os2 = "Linux";
  os3 = ["Windows", "MacOS"];
}
</script>

<style scoped>
.sample {
  border: solid;
}
</style>

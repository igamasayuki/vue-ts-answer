<template>
  <div class="sample">
    <form>
      <div>.number修飾子</div>
      <label for="temperture1"
        >サウナの温度(.number無し：入力後コンソールにtoFixed()が存在しないとエラーが出る)：</label
      ><br />
      <input
        type="text"
        id="temperture1"
        v-model="temperture"
        v-on:change="onchange"
      />
      <p>{{ temperture }}</p>
      <label for="temperture2">サウナの温度(.numberあり：正常に動く)：</label
      ><br />
      <input
        type="text"
        id="temperture2"
        v-model.number="temperture"
        v-on:change="onchange"
      />
      <p>{{ temperture }}</p>
      <hr />
      <div>.trim修飾子</div>
      <label for="memo1">名前(.trim無し：空白が反映される)：</label><br />
      <input
        type="text"
        id="memo1"
        v-model="memo1"
        v-on:change="onchange2"
      /><br />
      <p>{{ memo1 }}</p>
      <label for="memo2">名前(.trimあり：空白が除去して反映される)：</label
      ><br />
      <input
        type="text"
        id="memo2"
        v-model.trim="memo2"
        v-on:change="onchange2"
      /><br />
      <p>{{ memo2 }}</p>
      <hr />

      <div>.lazy修飾子</div>
      <label for="name1">名前(.lazy無し：すぐに反映される)：</label><br />
      <input type="text" id="name1" v-model="myName" /><br />
      <p>{{ myName }}</p>
      <label for="name2"
        >名前(.lazyあり：フォーカスが外れてから反映される)：</label
      ><br />
      <input type="text" id="name2" v-model.lazy="myName2" /><br />
      <p>{{ myName2 }}</p>
      <hr />
    </form>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class SampleComponent extends Vue {
  temperture = 0;
  myName = "";
  myName2 = "";
  memo1 = "";
  memo2 = "";

  onchange(): void {
    console.log(this.temperture.toFixed(1));
  }

  onchange2(): void {
    console.log("メモ１「" + this.memo1 + "」");
    console.log("メモ２「" + this.memo2 + "」");
  }
}
</script>

<style scoped>
.sample {
  border: solid;
}
</style>

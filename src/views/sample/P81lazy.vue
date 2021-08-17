<template>
  <div class="sample">
    <form>
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
  myName = "";
  myName2 = "";
}
</script>

<style scoped>
.sample {
  border: solid;
  padding: 10px;
}
</style>

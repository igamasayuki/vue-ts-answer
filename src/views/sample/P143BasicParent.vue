<template>
  <div class="sample">
    名前：<CompMyName></CompMyName> <br />
    趣味：<CompMyHobby></CompMyHobby> <br />
    名前：<CompMyName></CompMyName> <br />
    <hr />
    <CompMyHobby></CompMyHobby>
    <comp-my-name></comp-my-name>
  </div>
</template>

<script lang="ts">
// 参考：https://qiita.com/nrslib/items/be90cc19fa3122266fd7
import { Component, Vue } from "vue-property-decorator";
import CompMyName from "../../components/sample/CompMyName.vue";
import CompMyHobby from "../../components/sample/CompMyHobby.vue";

@Component({
  components: {
    CompMyName,
    CompMyHobby,
  },
})
export default class BasicParent extends Vue {}
</script>

<style scoped>
.sample {
  padding: 10px;
}
</style>

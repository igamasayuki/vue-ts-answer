<template>
  <div class="sample">
    <div>基のメールアドレス：{{ email }}</div>
    <div>メールアドレスの@の前：{{ firstHalfOfEmail }}</div>
    <div>メールアドレスの＠の後：{{ secondHalfOfEmail }}</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class SampleComponent extends Vue {
  email = "yamada@test.com";

  // 算出プロパティ(TypeScriptではGetterで表現)
  get firstHalfOfEmail(): string {
    // @の前半部分を切り出してreturnする
    return this.email.split("@")[0];
  }

  // 算出プロパティ(TypeScriptではGetterで表現)
  get secondHalfOfEmail(): string {
    // @の後半部分を切り出してreturnする
    return this.email.split("@")[1];
  }
}
</script>

<style scoped>
.sample {
  border: solid;
}
</style>

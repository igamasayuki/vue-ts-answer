<template>
  <div class="compSample">
    <P168CompMySlot>
      <template v-slot:header>
        <h3>ようこそVue.jsへ</h3>
      </template>
      <p>一緒に勉強しましょう</p>
      <template v-slot:footer>
        <span>Written by WINGSプロジェクト</span>
      </template>
      <p>質問は掲示板へどうぞ。</p>
    </P168CompMySlot>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import P168CompMySlot from "../../components/booksample/P168CompMySlot.vue";
@Component({
  components: {
    P168CompMySlot,
  },
})
export default class Parent extends Vue {}
</script>

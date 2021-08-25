<template>
  <div class="compSample">
    <CompSrotMulti>
      <p>親：ヘッダの上に記述</p>
      <template v-slot:header> 親：<img src="img/header_logo.png" /> </template>
      <p>親：真ん中に記述</p>
      <template v-slot:footer>
        <span>親：©️ラクラクアロハ</span>
      </template>
      <p>親：フッタの下に記述</p>
    </CompSrotMulti>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import CompSrotMulti from "../../components/sample/CompSrotMulti.vue";
@Component({
  components: {
    CompSrotMulti,
  },
})
export default class Parent extends Vue {}
</script>

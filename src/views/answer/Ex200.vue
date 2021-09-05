<template>
  <div class="compSample">
    <Ex200CompButtonCounter first-count="0"></Ex200CompButtonCounter>
    <!-- 追加演習回答例 属性を省略 -->
    <!-- <Ex200CompButtonCounter></Ex200CompButtonCounter> -->
    <!-- 追加演習回答例 属性に0以下を指定 -->
    <!-- <Ex200CompButtonCounter first-count="-1"></Ex200CompButtonCounter> -->
    <!-- 追加演習回答例 属性に数値として1を指定 -->
    <!-- <Ex200CompButtonCounter v-bind:first-count="1"></Ex200CompButtonCounter> -->
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Ex200CompButtonCounter from "@/components/answer/Ex200CompButtonCounter.vue";
@Component({
  components: {
    Ex200CompButtonCounter,
  },
})
export default class Parent extends Vue {}
</script>

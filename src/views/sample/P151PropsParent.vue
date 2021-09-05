<template>
  <div class="compSample">
    <CompPropsYourName your-name="鈴木"></CompPropsYourName>
    <hr />
    <CompPropsYourName your-name="山田"></CompPropsYourName>
    <CompPropsYourName></CompPropsYourName>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import CompPropsYourName from "@/components/sample/CompPropsYourName.vue";
@Component({
  components: {
    CompPropsYourName,
  },
})
export default class PropsParent extends Vue {}
</script>

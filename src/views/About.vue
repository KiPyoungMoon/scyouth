<template>
  <div class="about">
    <Greeting msg="Hello World + Greeting" />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Greeting from "@/components/Greeting.vue"; // @ is an alias to /src

@Options({
  components: {
    Greeting,
  },
})
export default class About extends Vue {}
</script>

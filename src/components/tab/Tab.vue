<template>
  <div id="tabBar">
    <ul class="tabs">
      <AboutForTab />
    </ul>
  </div>
</template>

<script>
import AboutForTab from "@/components/router/AboutForTab.vue";
export default {
  components: {
    AboutForTab,
  },
};
</script>

<style>
#tabBar {
  text-align: left;
}

.tabs {
  display: inline-block;
  width: 100%;
}
</style>

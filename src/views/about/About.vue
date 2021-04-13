<template>
  <div class="about">
     <h3>시설 소개</h3>
     <div class="tabs">
       <Tab />
     </div>
      <router-view></router-view> <!-- 중첩 라우팅 영역 -->
   </div>
</template>

<script>

import Tab from "@/components/tab/Tab.vue";
export default {
  components: {
    Tab,
  }
}
</script>

<style>

</style>


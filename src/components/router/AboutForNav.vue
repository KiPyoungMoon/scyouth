<template>
  <li><router-link to="/about/greeting">인사말</router-link></li>
  <li><router-link to="/about/history">연혁</router-link></li>
  <li><router-link to="/about/introduce">조직 및 임직원 소개</router-link></li>
</template>

<script>
export default {};
</script>

<style scoped>
li {
  list-style: none;
  background: #2c3e50;
  transition: background 0.2s;
}

a {
  display: block;
  padding: 7px;
  color: #fff;
  text-decoration: none;
}
</style>

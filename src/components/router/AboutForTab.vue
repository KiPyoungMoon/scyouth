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
  border: 2px solid bisque;
  background: beige;
  display: block;
  float: left;
  position: relative;
  color: #fff;
  min-width: 145px;
  margin-right: 2px;
}

a {
  display: block;
  padding: 7px;
  color: black;
  text-decoration: none;
}
</style>

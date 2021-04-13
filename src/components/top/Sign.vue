<template>
  <div v-if="!signIn">
    <BeforeSignIn />
  </div>
  <div v-if="signIn">
    <SignIn />
  </div>
</template>

<script>
import BeforeSignIn from "@/components/top/BeforeSignIn.vue";
import SignIn from "@/components/top/SignIn.vue";

export default {
  components: {
    BeforeSignIn,
    SignIn,
  },

  data() {
    return {
      signIn: false,
    };
  },
};
</script>

<style>
#nav {
  height: 30px;
}

.signMenu {
  list-style: none;
}

.signMenu li {
  float: left;
  padding: 5px 5px 5px 5px;
}

.signMenu li a {
  font: 12px/1.5 "Open Sans", sans-serif;
  text-decoration: none;
  color: grey;
}
</style>

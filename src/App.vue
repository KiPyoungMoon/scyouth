<template>
  <Top />
  <Menubar />
  <img alt="scyouth backgroundImage" v-bind:src="imageUrl" />
  <router-view />
</template>

<script>
import Menubar from "@/components/menubar/Menubar.vue";
import Top from "@/views/Top.vue";
import {} from "vue-router";
// import { store } from "vuex";

export default {
  components: {
    Menubar,
    Top,
  },
  data() {
    return {
      imageUrl: "mainBackgroundImage.jpg",
    };
  },
  created() {
    this.setBackgroundImage();
  },
  watch: {
    $route: "setBackgroundImage",
  },
  methods: {
    setBackgroundImage() {
      const path = this.getCurrentRoutePath();
      const urlString = path === "/" ? "mainBackgroundImage.jpg" : "contentBackgroundImage.jpg";
      this.setImageUrl(urlString);
      // this.$store.dispatch('setImg', {imgPath: urlString});
      // this.setImageUrl();
    },
    getCurrentRoutePath() {
      return this.$route.path;
    },
    setImageUrl(urlString) {
      this.imageUrl = require("./assets/" + urlString);
    },
    // setImageUrl() {
    //   this.imageUrl = require("./assets/" + this.$store.getters.getImgUrl);
    // },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
}
</style>

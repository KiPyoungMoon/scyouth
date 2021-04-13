<template>
  <Top />
  <Menubar />
  <img alt="scyouth logo" v-bind:src="imageUrl" />
  <router-view />
</template>

<script>
import Menubar from "@/components/menubar/Menubar.vue";
import Top from "@/views/Top.vue";
import { } from "vue-router";
export default {
  components: {
    Menubar,
    Top,
  },
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      imageUrl: "mainBackgroundImage.jpg",
    }
  },
  created() {
    this.setBackgroundImage();
  },
  watch: {
    '$route': 'setBackgroundImage',
  },
  methods: {
    setBackgroundImage() {
      const path = this.getCurrentRoutePath();
      const urlString = path === "/" ? "mainBackgroundImage.jpg" : "contentBackgroundImage.jpg";
      this.setImageUrl( urlString );
    },
    getCurrentRoutePath() {
      return this.$route.path;
    },
    setImageUrl( urlString ) {
      this.imageUrl = require('./assets/' + urlString);
    }
  }
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

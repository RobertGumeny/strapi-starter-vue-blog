<template>
  <div id="app">
    <Nav />
    <router-view :key="$route.fullPath"></router-view>
  </div>
</template>

<script>
import Nav from "./components/Nav.vue";

export default {
  name: "App",
  components: { Nav }
};
</script>

<style lang="css">
@import url("https://fonts.googleapis.com/css2?family=Open+Sans&display=swap");
body {
  font-family: "Open Sans", sans-serif;
  width: 100vw;
  overflow-x: hidden;
}
a {
  text-decoration: none;
}

h1 {
  font-size: 64px;
}
</style>

<!-- <template>
  <router-view />
</template> -->
<template>
  <div id="app">
    <Menu />
    <div style="border-top: 6px solid purple"></div>
    <router-view />
  </div>
</template>

<script>
import { defineComponent } from "vue";
import Menu from "./views/Menu.vue";

export default defineComponent({
  name: "App",
  components: {
    Menu,
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

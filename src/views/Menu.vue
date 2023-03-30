<template>
  <ul class="menu">
    <li>
      <RouterLink to="/" class="test">Home<IconHome /></RouterLink>
    </li>
    <li>
      <router-link to="/todos">Tasks<IconTodo /></router-link>
    </li>
  </ul>
</template>

<script>
import IconHome from '/vue.js/quasar-project/src/components/IconHome.vue'
import IconTodo from '/vue.js/quasar-project/src/components/IconTodo.vue'

export default {
  components: {
    IconHome,
    IconTodo
  }
}
</script>

<style>
ul {
  padding-inline-start: 0px;
}
.menu li {
  list-style-type: none;
  display: inline-table;
  width: 68px;
  height: 68px;
  /* background: url('@/images/main_inactive.png') no-repeat 100% 100%; */
}

.active-link .current_location {
  fill: rgb(16, 98, 250);
}
.active-link {
  color: rgb(16, 98, 250);
  font-weight: bold;
}
</style>

<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
};
</script>

<style lang="scss">
html,
body,
#app {
  background: #f7f9fc;
  padding: 0;
  margin: 0;
  font-family: 'Helvetica Neue', 'Segoe UI', Helvetica, Verdana, sans-serif;
  font-size: 12px;
}
</style>

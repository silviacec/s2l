<template lang="html">
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/ProjectsPage">Projets</router-link>  |
    <router-link to="/about">About</router-link>  |
    <router-link to="/ContactPage">Contact</router-link>
  </div>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style lang="css" scoped>

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

*{
      box-sizing: border-box;
}
</style>

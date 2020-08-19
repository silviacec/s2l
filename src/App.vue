<template>
  <div id="app">
    <!-- router vue qui prend en name le surnom du header et un autre du footer -->

    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/ProjectsPage">Projets</router-link>  |
      <router-link to="/about">About</router-link>  |
      <router-link to="/ContactPage">Contact</router-link>  |
    </div>

    <router-view />
  </div>
</template>


<style lang="scss">

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

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

html{
      margin: 0;
      padding: 0;
      width: 100%;
      height: 100vh;
      overflow: scroll;
}

</style>

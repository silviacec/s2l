<template>
  <div id="app">
    <!-- router vue qui prend en name le surnom du header et un autre du footer -->
    <router-view name="navbar" />
      <div><router-view></router-view></div>
    <router-view name="footer" />

  </div>
</template>


<style lang="css">

#app {
  font-family: 'Rubik', sans-serif;

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100vw !important;

}

/* html{
      margin: 0;
      padding: 0;
      width: 100%;
      height: 100vh;
      overflow: scroll;
} */

</style>

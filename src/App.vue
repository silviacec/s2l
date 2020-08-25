<template>
  <div id="app">
    <!-- router vue qui prend en name le surnom du header et un autre du footer -->
    <router-view name="navbar" />
    <router-view></router-view>
    <router-view name="footer" />

  </div>
</template>


<style lang="css">

#app {
  font-family: 'Rubik', sans-serif;
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}



html{
      margin: 0;
      padding: 0;
      width: 100%;
      height: 100vh;
      overflow: scroll;
}

</style>

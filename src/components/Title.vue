<template lang="html">

  <header>
    <h1> UpInvest </h1>
    <p> Cible plus haut, regarde plus loin </p>
  </header>

</template>

<script>

export default {
  name: "Title",
};

</script>

<style lang="css" >

  header {
    box-sizing: border-box;
    min-height: 100vh;
    padding: 25vw 0 5vw;
    position: relative;
    transform-style: inherit;
    width: 100vw;
    margin-top: 5vh;
  }

  header h1 {
    margin-top: -100px;
  }

  header, header:before {
    background: 50% 50% / cover;
  }

  header::before {
    bottom: 0;
    content: "";
    /* left: 0; */
    position: absolute;
    /* right: 0; */
    top: 0;
    display: block;
    background-image: (1.jpg);
    background-size: cover;
    transform-origin: center center 0;
    transform: translateZ(-1px) scale(2);
    z-index: -1;
    min-height: 100vh;
  }

  header * {
    font-weight: normal;
    letter-spacing: 0.2em;
    text-align: center;
    margin: 0;
    padding: 1em 0;
  }

</style>

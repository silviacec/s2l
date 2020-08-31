<template>
  <div class="contact">
    <span class="navbar__menu-item"><span>#Contact</span>
  </span>
    <Buttons></Buttons>
  </div>
</template>

<script>
// @ is an alias to /src

import Buttons from "@/components/Buttons.vue";

export default {
  name: "ContactPage",
  components: {
    Buttons
  }
};
</script>

<style media="screen">
  .contact {
    background-color: lightgrey !important;
    padding: 100px;
  }

  .navbar__menu-item {
    font-family: "Oswald", sans-serif;
    text-transform: uppercase;
    font-size: 4.4em;
    padding: 60px 20px;
    font-weight: 700;
    width: 300px;
    height: 100px;
    /* position: relative; */
    cursor: pointer;
    margin: auto;
    margin-bottom: 20vh;
  }

  .navbar__menu-item:hover {
    -webkit-text-stroke: none;
    color: white;
  }

</style>

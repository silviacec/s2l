<template>
  <div class="contact">
    <div>
  <span class="navbar__menu-item"><span data-menu-item-text="#découverte" class="navbar__menu-item-title">#Contact</span>
    <span class="menu-item-hover-image" data-image-url="chat.jpg" style="
                      background-image: url(chat.jpg);
                    "></span>
  </span>
</div>
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
    position: relative;
    cursor: pointer;
  }
  .navbar__menu-item-title {
    position: relative;
    color: transparent;
    -webkit-text-stroke: 0.01em white;
    transition: -webkit-text-stroke 0.5s ease, color 0.5s ease;
  }
  .navbar__menu-item:hover .navbar__menu-item-title {
    -webkit-text-stroke: none;
    color: white;
  }
  .navbar__menu-item-title::after {
    content: attr(data-menu-item-text);
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    font-weight: 900;
    -webkit-text-stroke: 0.012em white;
    color: transparent;
    opacity: 0;
    transition: opacity 0.5s ease;
  }
  .menu-item-hover-image {
    width: 198px;
    height: 230px;
    position: absolute;
    top: 0;
    left: 0;
    background-size: cover;
    background-repeat: no-repeat;
    background-position-x: 75%;
    opacity: 0;
    transition: opacity 0.3s, transform 0.7s cubic-bezier(0.23, 1, 0.32, 1);
    /* This places the cursor in the center of the image. Divide the width and height by 2 to get the top and left offsets :) */
    margin: -115px 0 0 -99px;
    overflow: hidden;
    pointer-events: none;
    z-index: 2;
  }
  .navbar__menu-item:hover .menu-item-hover-image {
    opacity: 1;
  }
  .navbar__menu-item:hover .navbar__menu-item-title::after {
    opacity: 1;
    z-index: 3;
  }
</style>

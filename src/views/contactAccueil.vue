<template>
  <div class="contact">
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
    background-color: #f1f2f2;
    padding: 100px;
  }
</style>

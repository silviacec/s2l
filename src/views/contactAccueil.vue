<template>
  <div class="contact">
    <Rounds></Rounds>
  </div>
</template>

<script>
// @ is an alias to /src

import Rounds from "@/components/Rounds.vue";

export default {
  name: "ContactPage",
  components: {
    Rounds
  }
};
</script>

<style media="screen">
  .contact {
    background-color: #f1f2f2;
  }
</style>

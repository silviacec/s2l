<template>
  <div class="contact">
    <Rounds></Rounds>
    <Contact></Contact>
  </div>
</template>

<script>
// @ is an alias to /src
import Contact from "@/components/Contact.vue";
import Rounds from "@/components/Rounds.vue";

export default {
  name: "ContactPage",
  components: {
    Contact, Rounds
  }
};
</script>

<style media="screen">
  .contact {
    background-color: #f1f2f2;
  }
</style>

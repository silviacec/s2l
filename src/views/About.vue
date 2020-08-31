<template>

  <div class="about">
    <Pitch></Pitch>
    <Accordion />
    <Collapse />
  </div>

</template>

<script>

  import Pitch from "@/components/Pitch.vue";
  import Accordion from "@/components/Accordion.vue";
  import Collapse from "@/components/Collapse.vue";

  export default {
    name: "About",
    components: {
      Pitch, Accordion, Collapse
    }
  };

</script>

<style >

  .about {
    margin-top: 20vh;
  }

</style>

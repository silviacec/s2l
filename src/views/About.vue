<template>
  <div class="about">
    <Pitch></Pitch>
    <h2>cette page contient des explications plus détaillées destinées aux investisseurs</h2>
  </div>
</template>

<script>
// @ is an alias to /src
import Pitch from "@/components/Pitch.vue";

export default {
  name: "About",
  components: {
    Pitch
  }
};
</script>

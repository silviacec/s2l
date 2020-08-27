<template>
  <div class="about">
    <Pitch></Pitch>
    <Caroussel />
  </div>
</template>

<script>
// @ is an alias to /src
import Pitch from "@/components/Pitch.vue";
import Caroussel from "@/components/Caroussel.vue";

export default {
  name: "About",
  components: {
    Pitch, Caroussel
  }
};
</script>

<template>
  <div class="about">
    <Pitch></Pitch>
    <Caroussel />
    <Collapse />
  </div>
</template>

<script>
// @ is an alias to /src
import Pitch from "@/components/Pitch.vue";
import Caroussel from "@/components/Caroussel.vue";
import Collapse from "@/components/Collapse.vue";

export default {
  name: "About",
  components: {
    Pitch, Caroussel, Collapse
  }
};
</script>

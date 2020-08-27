<template>
  <div class="about">
    <Pitch></Pitch>
    <h2>cette page contient des explications plus détaillées destinées aux investisseurs</h2>
    <Types />
  </div>

</template>

<script>
// @ is an alias to /src
import Pitch from "@/components/Pitch.vue";
import Types from "@/components/Types.vue";

export default {
  name: "About",
  components: {
    Pitch, Types
  }
};
</script>

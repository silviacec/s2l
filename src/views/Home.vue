<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <Pitch />
    <Project />
    <Project />
    <Project />
  </div>
</template>

<script>
// @ is an alias to /src
import Pitch from "@/components/Pitch.vue";
import Project from "@/components/Project.vue";

export default {
  name: "Home",
  components: {
    Pitch, Project
  }
};
</script>

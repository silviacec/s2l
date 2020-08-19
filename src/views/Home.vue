<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <div><Steps /></div>
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
import Steps from "@/components/Steps.vue";

export default {
  name: "Home",
  components: {
    Pitch, Project, Steps
  }
};
</script>

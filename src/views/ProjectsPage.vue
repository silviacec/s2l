<template>
  <div class="projets">
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <Project />
  </div>
</template>

<script>
// @ is an alias to /src
import Project from "@/components/Project.vue";

export default {
  name: "ProjectsPage",
  components: {
    Project
  }
};
</script>

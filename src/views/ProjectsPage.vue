<template>

  <div class="main">
    <h2 class="titre-projets">Tous les projets qu'on pu se réaliser grâce à vous !</h2>
    <div class="projets" v-for="entreprise in entreprises" :key="entreprise.id">
      <Project :entreprise="entreprise"></Project>
    </div>
  </div>

</template>

<script>

  import Project from "@/components/Project.vue";
  import {entreprises} from "../data.js";

  export default {
    name: "ProjectsPage",

    components: {
      Project
    },

  data() {
    return {
      entreprises : entreprises,
    };
  },
};

</script>

<style>

  .main {
    margin-top: 20vh;
    width: 100%;
  }

  .titre-projets {
    margin: 2em 7em;
  }

</style>

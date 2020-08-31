<template>
<div class="main">
  <h2>Tous les projets qu'on pu se réaliser grâce à vous !</h2>
  <div class="projets" v-for="entreprise in entreprises" :key="entreprise.id">
    <Project :entreprise="entreprise"></Project>
    <!-- <router-link to="/SinglePage">
      <button>Voir ce projet en détail</button>
    </router-link> -->
  </div>
  </div>

</template>

<script>
// @ is an alias to /src
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
<style media="screen">
  .main {
    margin-top: 20vh;
  }
  .main h2 {
    margin: 2em 7em;
  }
</style>

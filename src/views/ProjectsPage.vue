<template>
<div class="">

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

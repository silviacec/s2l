<template>
<div class="">


  <div class="projets" v-for="(entreprise) in entreprises" :key="entreprise.id">
    <h1>{{entreprise.title}}</h1>
    <h3>Crée par {{entreprise.etpName}}</h3>
    <!-- <img src="" alt="Une photo du porteur du projet et le logo de l'entreprise"> -->
    <h4>{{entreprise.type}}</h4>
    <p>{{entreprise.shortPrez}}</p>
    <p>{{entreprise.needs}} €</p>
    <router-link to="/SinglePage">
      <button>Voir ce projet en détail</button>
    </router-link>
  </div>
  </div>
<!-- </div> -->
</template>

<script>
// @ is an alias to /src
// import Project from "@/components/Project.vue";
import {entreprises} from "../data.js";

export default {
  name: "ProjectsPage",

  data() {
    return {
      entreprises : entreprises,
    };
  },

  // components: {
  //   Project
  // },

};
</script>

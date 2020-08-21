<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <div><Steps /></div>
    <!-- <Pitch /> -->
    <div class="projets" v-for="entreprise in entreprises" :key="entreprise.id">
      <div v-if="entreprise.firstPage" >
        <Project :entreprise="entreprise"></Project>
    </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import Pitch from "@/components/Pitch.vue";
import Project from "@/components/Project.vue";
import Steps from "@/components/Steps.vue";
import {entreprises} from "../data.js";

export default {
  name: "Home",
  components: {
    Steps, Project
  },

  data() {
    return {
      entreprises : entreprises,
    };
  },

  // methods: {
  //   voirProjet(identifiant) {
  //     this.$router.push({ path: `/SingleProject/${identifiant}` });
  //   }
  // },
};
</script>

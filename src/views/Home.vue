<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <Steps />
    <Title />
    <Pitch />
    <!-- <Types /> -->
    <Quote />
    <br>
    <div class="">

    <!-- <div class="projets" v-for="entreprise in entreprises" :key="entreprise.id"> -->
      <!-- <div v-if="entreprise.firstPage" > -->
        <!-- <Project :entreprise="entreprise"></Project> -->
      <!-- </div> -->
    <!-- </div> -->

  </div>
      <!-- <Rounds /> -->
  </div>
</template>

<script>
// @ is an alias to /src
import Pitch from "@/components/Pitch.vue";
// import Project from "@/components/Project.vue";
import Steps from "@/components/Steps.vue";
import Title from "@/components/Title.vue";
// import Types from "@/components/Types.vue";
import Quote from "@/components/Quote.vue";

import {entreprises} from "../data.js";
// import Rounds from "@/components/Rounds.vue";

export default {
  name: "Home",
  components: {
    Pitch, Steps, Title, Quote
  },

  data() {
    return {
      entreprises : entreprises.filter(function(entreprise) {
        return entreprise.firstPage
      }),
    };
  },

  // methods: {
  //   voirProjet(identifiant) {
  //     this.$router.push({ path: `/SingleProject/${identifiant}` });
  //   }
  // },
};
</script>

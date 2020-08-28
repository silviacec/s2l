<template>
  <div class="home">
    <div class="haut">
    <Title />

      <Steps />
      <div class="vide">

      </div>

    </div>
    <Pitch />
    <div class="accueil">
    <a href="#"><router-link class="myButton" to="/about">Plus de détails</router-link> </a>
  </div>
    <div class="projets" v-for="entreprise in entreprises" :key="entreprise.id">
      <div v-if="entreprise.firstPage" >
        <Project :entreprise="entreprise"></Project>
      </div>
    </div>

    <Quote />

    <Types />

  </div>
</template>

<script>
// @ is an alias to /src
import Pitch from "@/components/Pitch.vue";
import Project from "@/components/Project.vue";
import Steps from "@/components/Steps.vue";
import Title from "@/components/Title.vue";
import Types from "@/components/Types.vue";
import Quote from "@/components/Quote.vue";

import {entreprises} from "../data.js";
// import Rounds from "@/components/Rounds.vue";

export default {
  name: "Home",
  components: {
    Project, Pitch, Steps, Title, Quote, Types
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

<style media="screen">
  .haut {
    background-image: url("../assets/bg3.jpg");
    background-size: cover;
    background-repeat: no-repeat;
  }
  .vide {
    height: 30vh;
  }

  .accueil a {
    color: #248a6d;
    text-shadow: 0 1px 0 #e7f9f4;
    text-decoration: none;
    border-bottom: 1px dashed #33c79d;
    display: inline-block;
    /* position: relative; */
    padding: 0 0.2em;
    transition: all 250ms;
    z-index: 1000;
  }
  .accueil a:before {
    content: "";
    z-index: -1;
    width: 100%;
    height: 0%;
    background: rgba(68, 207, 168, 0.16);
    bottom: 0;
    left: 0;
    position: absolute;
    transition: height 250ms;
  }
  .accueil a:hover {
    border-color: transparent;
  }
  .accueil a:hover:before {
    height: 100%;
  }

</style>

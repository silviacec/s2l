<template lang="html">
  <div>
  <div v-bind:class="{ vert: projetSelectionne.type === 'environnemental', bleu: projetSelectionne.type === 'éducatif', rose: projetSelectionne.type === 'social' }">

    <h2>{{projetSelectionne.title}}</h2>

    <h3>Crée par {{projetSelectionne.etpName}}</h3>
    <img :src="projetSelectionne.photo" alt="Photo de notre projet">
    <h4>{{projetSelectionne.type}}</h4>
    <p>{{projetSelectionne.shortPrez}}</p>
    <p>{{projetSelectionne.needs}} €</p>
    <p>{{projetSelectionne.participation}}</p>
    <p>{{projetSelectionne.rentability}}</p>
    <p>{{projetSelectionne.etpCurriculum}}</p>
    <p>{{projetSelectionne.longPrez}}</p>
  </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import Project from "@/components/Project.vue";
import {entreprises} from "../data.js";

export default {
  name: "SingleProject",

  // components: {
  //   Project
  // },

  data() {
    return {
      entreprises: entreprises,
      idProjetSelectionne: 0,
      projetSelectionne: {},
    };
  },

  mounted() {
    // On récupère le params id (qui est dans l'url) grâce à l'objet $route
    this.idProjetSelectionne = this.$route.params.id;

    // On sélectionne l'utilisateur qui a le même id que le params récupéré dans $route
    this.projetSelectionne = this.entreprises.find(
      (entreprise) => entreprise.id == this.idProjetSelectionne
    );
  },
};

</script>


<style lang="css" scoped>

.rose {
  background-color: pink;
}
.bleu {
  background-color: blue;
}
.vert {
  background-color: green;
}
</style>

<template lang="html">


  <div class="fiche-projet" v-bind:class="{ vert: entreprise.type === 'environnemental', bleu: entreprise.type === 'éducatif', rose: entreprise.type === 'social' }" >
    <h1>{{entreprise.title}}</h1>
    <h3>Un projet créé par {{entreprise.etpName}}</h3>
    <img :src="entreprise.photo" alt="Photo de notre projet" />
    <h4>{{entreprise.type}}</h4>
    <p>{{entreprise.shortPrez}}</p>
    <p>{{entreprise.title}} a besoin de {{entreprise.needs}} € !</p>

    <button @click="voirProjet(entreprise.id)">Voir ce projet en détail</button>

  </div>

</template>

<script>

  export default {
    name: "Project",
    props: ['entreprise'],
    // props: {
    //   title: String,
    //   etpName: String,
    //   type: String,
    //   shortPrez: String,
    //   needs: Number,
    // }
    methods: {
      voirProjet(identifiant) {
        this.$router.push({ path: `/SingleProject/${identifiant}` });
      }
    },
};


</script>

<style lang="css" scoped>
  .fiche-projet {
    border: 1px solid grey;
    border-radius: 5px;
    margin: 10px;
    padding: 10px;
  }
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

<template lang="html">


  <div class="fiche-projet">
    <h1>{{entreprise.title}}</h1>
    <h3>Un projet créé par {{entreprise.etpName}}</h3>
    <img :src="entreprise.photo" alt="Photo de notre projet">
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
</style>

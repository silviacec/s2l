<template lang="html">


  <!-- <div class="fiche-projet" v-bind:class="{ vert: entreprise.type === 'environnemental', bleu: entreprise.type === 'éducatif', rose: entreprise.type === 'social' }" >
    <h1>{{entreprise.title}}</h1>
    <h3>Un projet créé par {{entreprise.etpName}}</h3>
    <img :src="entreprise.photo" alt="Photo de notre projet" />
    <h4>{{entreprise.type}}</h4>
    <p>{{entreprise.shortPrez}}</p>
    <p>{{entreprise.title}} a besoin de {{entreprise.needs}} € !</p>

    <button @click="voirProjet(entreprise.id)">Voir ce projet en détail</button>

  </div> -->
  <section v-bind:class="{ vert: entreprise.type === 'environnemental', bleu: entreprise.type === 'éducatif', rose: entreprise.type === 'social', gris: entreprise.type === 'tech' }" id="project_ca-commence-par-moi_content" class="content_part content_project" data-color="#C6E3D7" style="height: 44.5em;">

    <div class="content_inner">

      <article id="project_ca-commence-par-moi_description" class="project_description">

        <div class="project_description_cont">
          <h1 class="project_title" style="border-color:#C6E3D7;">
            {{entreprise.title}}
          </h1>
          <div class="project_text">
            <p>{{entreprise.shortPrez}}
              <button @click="voirProjet(entreprise.id)">Voir ce projet en détail</button>
          community launched by {{entreprise.etpName}} {{entreprise.littlePrez}} </p>
          </div>
          </div>

      </article>

      <div id="project_ca-commence-par-moi_number" class="project_number">{{entreprise.id}}</div>
      <div class="table">
        <div class="project_images">
          <div class="1">
            <figure class="project_image odd first">
                <img alt="img-01.jpg" :src="showPhoto1">
    </figure>
          <figure class="project_image even first">
            <img alt="img-03.jpg" :src="showPhoto3" />
          </figure>
        </div>
        <div class="2">
          <figure class="project_image odd">
            <img alt="img-02.jpg" :src="showPhoto2" />
          </figure>
          <figure class="project_image even">
            <img alt="img-04.jpg" :src="showPhoto4" />
          </figure>
          </div>
        </div>
      </div>

    </div>
    </section>
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
    computed: {
    showPhoto1 () {
      return require('../assets/' + this.entreprise.photo1)
    },
    showPhoto2() {
      return require('../assets/' + this.entreprise.photo2)
    },
    showPhoto3() {
      return require('../assets/' + this.entreprise.photo3)
    },
    showPhoto4() {
      return require('../assets/' + this.entreprise.photo4)
    }
  },
    methods: {
      voirProjet(identifiant) {
        this.$router.push({ path: `/SingleProject/${identifiant}` });
      }
    },
  };


  </script>

  <style lang="css" scoped>
  /* .fiche-projet {
    border: 1px solid grey;
    border-radius: 5px;
    margin: 10px;
    padding: 10px;
  } */
  /* ------PAGE DEV-SPACE --- présentation des entreprises/ ONG / associations --- */
  /* -------------------------------------------------------------------------------*/
  #main{
  background-color: white;
  }

  .paragraphs {
  padding-bottom: 2em;
    /* background-image: url('Images/background4.jpg') center no-repeat !important; */
    /*background-color: transparent;*/
  }

  /* article par dessus le tableau */
  article{
  display: block;
  margin-right: 6em;
  }

  .project_description {
  position: relative;
  top: 50%;
  right: -160px;
  margin-top: -100px;
  width: 210px;
  background: #fff;
  z-index: 4;
  }

  .project_description_cont{ /* le cadre par dessus les 4 images*/
  position: relative;
  padding: 25px;
  opacity: 1;
  z-index: 5;
  }

  .project_title {
  display: inline;
  font: normal 17px/30px 'f24e4d5d';
  border-bottom: 4px solid #fff;
  }

  .brief-recruiter{ /* besoin de changer la police qui est introuvable */
  font-family: 'f24e4d5d',"Helvetica Neue","Helvetica","Arial";
  font-size: 14px;
  line-height: 17px;
  color: #000;
  }


  /*  le tableau */

  .project_number{
  padding: 0em 0em;
  margin: 2em 0em;
  }

  #project_annonay_content img,
  #project_ca-commence-par-moi_content img,
  #project_cacao-forest_content img,
  #project_please-come-inside_content img,
  #project_away-hostel-and-coffee-shop_content img,
  #main img{

  padding: 0 0;
  }
  .table { /* le tableau de projets*/
  position: relative;
  display: table;
  width: 100%;
  height: 100%;
  margin-left: 12em;
  padding-top: 0em;
  }

  @media screen and (max-width:864px) {
  .table {
    position: relative;
    display: table;
    width: 100%;
    height: 100%;
    margin-left: 2em;
    padding-top: 0em;
  }
  }

  .project_images {
  position: relative;
  display: table-cell;
  vertical-align: middle;
  z-index: 3;
  margin-left: 5em;
  }


  .project_image img{
  width:28em;
  padding: 0;
  }

  .project_image.first { /*pour avoir de lespace entre les 4 images*/
  margin-bottom: 20px;
  }

  .project_image.even {
  margin-left: 20px;
  }

  .project_image {
  position: relative;
  display: inline-block;
  vertical-align: top;
  width: 26em;
  height: 18em;
  border: 10px solid #fff;
  overflow: hidden;
  }

  figure {
  margin: 0;
  }

  /* article par dessus le tableau */
  #project_ca-commence-par-moi_description{
  display: block;
  /* margin-top: -75em; */
  margin-right: 20em;
  }
  #project_annonay_description{
  display: block;
  margin-top: 51em;
  margin-right: 20em;
  }

  #project_cacao-forest_description{
  display: block;
  margin-top: 110em;
  margin-right: 20em;
  }

  #project_please-come-inside_description{
  display: block;
  margin-top: 166em;
  margin-right: 20em;
  }
  /*
  #project_away-hostel-and-coffee-shop_description{
  display: block;
  margin-top: 59em;
  margin-right: 6em;
  }*/

  @media screen and (max-width:864px){
  #project_ca-commence-par-moi_description{
    display: block;
    margin-top: -75em;
    margin-right: 5em;
  }
  #project_annonay_description{
    display: block;
    margin-top: -20em;
    margin-right: 6em;
  }

  #project_cacao-forest_description{
    display: block;
    margin-top: 38em;
    margin-right: 6em;
  }

  #project_please-come-inside_description{
    display: block;
    margin-top: 96em;
    margin-right: 6em;
  }
  }

  .project_description {
  position: absolute;
  top: 60%;
  right: -160px;
  margin-top: -100px;
  width: 210px;
  background: #fff;
  z-index: 4;
  font-size: small;
  }

  .project_description_cont{ /* le cadre par dessus les 4 images*/
  position: relative;
  padding: 25px;
  opacity: 1;
  z-index: 5;
  }

  .project_text{
  padding-top: 2em;
  }

  .project_title {
  display: inline;
  font: normal 17px/30px 'f24e4d5d';
  border-bottom: 4px solid #fff;
  }

  .brief-recruiter{ /* besoin de changer la police qui est introuvable */
  font-family: 'f24e4d5d',"Helvetica Neue","Helvetica","Arial";
  font-size: 14px;
  line-height: 17px;
  color: #000;
  }

  .vert {
    background-color: rgb(198, 227, 215);
  }
  .rose {
    background-color: rgb(247, 228, 228);
  }
  .bleu {
    background-color: #bbd4f9;
  }
  .gris {
    background-color: rgb(224, 224, 224);
  }
  </style>

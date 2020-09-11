<template lang="html">
  <div class="wrapper">
    <h2>{{projetSelectionne.title}}</h2>
    <div class='ui'>
      <div class='ui_box white'>
        <div class='ui_box__inner'>
          <h2>
            Où en est la recolte de fonds pour ce projet ?
          </h2><br><br>
          <div class='stat'>
            <span>58%</span>
          </div>
          <div class='progress'>
            <div class='progress_bar'>
            </div>
          </div>
        </div>
      </div>
      <div class='ui_box white' v-bind:class="{ vert: projetSelectionne.type === 'environnemental', bleu: projetSelectionne.type === 'éducatif', rose: projetSelectionne.type === 'social' }">
        <div class='ui_box__inner' v-bind:class="{ vert: projetSelectionne.type === 'environnemental', bleu: projetSelectionne.type === 'éducatif', rose: projetSelectionne.type === 'social' }">
          <h2>Entreprise qui opère dans <br> le domaine <span class="domain">{{projetSelectionne.type}}</span>
          </h2>
          <div class='stat_left'>
            <ul>
              <li>{{projetSelectionne.tag1}}
              </li>
              <li>{{projetSelectionne.tag2}}
              </li>
              <li>{{projetSelectionne.tag3}}
              </li>
            </ul>
          </div>
          <div class='progress_graph'>
            <div class='progress_graph__bar--2'></div>
            <div class='progress_graph__bar--3'></div>
            <div class='progress_graph__bar--4'></div>
          </div>
        </div>
      </div>
      <div class='ui_box white'>
        <div class='ui_box__inner'>
          <div class='stat'>
            <h5>Fonds nécessaires : <br> €{{projetSelectionne.needs}}</h5>
          </div><br><br>
          <p>Investissement possible : <br>{{projetSelectionne.participation}}</p>
          <p>Rentabilité attendue : <br>{{projetSelectionne.rentability}}</p>
          <div class='progress'>
            <div class='progress_bar--two'></div>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="post">
        <div class="header_post">
          <img :src="showPhotoProfile" alt="" style="width: 70vw; height: auto; margin: auto; border-radius: 5px;">
        </div>
        <div class="body_post">
          <div class="post_content">
            <h1> {{projetSelectionne.etpName}} </h1>
            <p>{{projetSelectionne.etpCurriculum}}</p>
            <p>{{projetSelectionne.longPrez}}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="carousel">
      <b-carousel
        id="carousel-1"
        v-model="slide"
        :interval="4000"
        controls
        indicators
        background="#ababab"
        img-width="1024"
        img-height="480"
        style="text-shadow: 1px 1px 2px #333;"
        @sliding-start="onSlideStart"
        @sliding-end="onSlideEnd">
        <b-carousel-slide align-items-center :img-src="showPhoto1" >
          <h1>{{projetSelectionne.shortPrez}}</h1>
          <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
        </b-carousel-slide>
        <b-carousel-slide  :img-src="showPhoto2">
          <h1>{{projetSelectionne.tag1}}</h1>
          <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        </b-carousel-slide>
        <b-carousel-slide  :img-src="showPhoto3">
          <h1>{{projetSelectionne.tag2}}</h1>
          <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        </b-carousel-slide>
        <b-carousel-slide  :img-src="showPhoto4">
          <h1>{{projetSelectionne.tag3}}</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </b-carousel-slide>
      </b-carousel>
    </div>
  </div>

</template>

<script>

  import {entreprises} from "../data.js";

  export default {
    name: "SingleProject",

    computed: {
    showPhoto1 () {
      return require('../assets/' + this.projetSelectionne.photo1)
    },

    showPhoto2 () {
      return require('../assets/' + this.projetSelectionne.photo2)
    },

    showPhoto3 () {
      return require('../assets/' + this.projetSelectionne.photo3)
    },

    showPhoto4 () {
      return require('../assets/' + this.projetSelectionne.photo4)
    },

    showPhotoProfile () {
      return require('../assets/' + this.projetSelectionne.photo_profile)
    }
  },

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

  .wrapper {
    min-height: 200vh;
    /* c'est bourrin mais ça marche !!! garde ça bien en tête */
  }

  h2 {
    margin-top: 20vh;
  }

  .domain {
    font-size: 1em !important;
  }

  @import url(https://fonts.googleapis.com/css?family=Raleway);
  body {
    background: radial-gradient(#fff, #C1C1C1);
    height: 120vh;
  }

  body .title {
    position: absolute;
    top: 75px;
  }

  body .title h1 {
    margin: 40px 0px 0px 0px;
    font-family: "poppins", sans-serif;
    color: #3D3D3D;
    font-size: 10em;
    background: none;
    font-weight: black;
    border: none;
    text-shadow: -25px 0px 2px #C1C1C1;
  }

  body .title h2 {
    margin: 10px 0px 0px 0px;
    font-size: 18px;
    color: #8B8B8B;
    font-weight: 400;
    font-family: "Raleway", sans-serif;
  }

  body .ui {
    width: 900px;
    margin: 0 auto;
    margin-top: 20vh;
    font-family: "Raleway", sans-serif;
    color: white;
    box-shadow: none;
    box-shadow: 0px 0px 5px 0px 200e2e;
  }

  body .ui ul {
    margin: 0px 30px 10px 0px;
    padding: 0;
    list-style-type: none;
    font-size: 11px;
    font-weight: 400;
    line-height: 20px;
  }

  body .ui .drop {
    z-index: -999;
    opacity: 0;
    width: 240px;
    height: 25px;
    background: #3E8368;
    position: absolute;
    color: white;
    bottom: 0;
    padding: 12px 30px 21px 30px;
    transition: all ease-in-out 0.3s;
    transition-property: bottom, opacity;
    transition-duration: 0.3s;
  }

  body .ui .drop p {
    color: #F8FBFA;
  }

  body .ui_box.white {
    background: #fff;
    color: #2E2E2E;
    box-shadow: -1px 0px rgba(0, 0, 0, 0.07);
  }

  body .ui_box {
    width: 300px;
    height: 250px;
    position: relative;
    background: #3D3D3D;
    margin-bottom: 50px;
    float: left;
    box-shadow: -1px 0px rgba(255, 255, 255, 0.07);
    cursor: pointer;
    transform: scale(1);
    transition-duration: 0.3s;
  }

  body .ui_box__inner {
    padding: 30px;
  }

  body .ui_box__inner span {
    font-size: 36px;
    font-weight: 700;
  }

  body .ui_box__inner .progress {
    width: 100%;
    margin-top: 10px;
    height: 6px;
    background: rgba(0, 0, 0, 0.3);
    margin-bottom: 15px;
  }

  body .ui_box__inner .progress_graph {
    float: right;
    border-bottom: 1px solid rgba(255, 255, 255, 0.09);
    width: 85px;
    text-align: center;
    position: relative;
    padding-left: 20px;
    top: 4em;
  }

  body .ui_box__inner .progress_graph__bar--1 {
    width: 10px;
    height: 20px;
    background: #4FA584;
    float: left;
    margin-right: 10px;
    position: relative;
    bottom: -10px;
    -webkit-animation: graph 1s;
  }

  body .ui_box__inner .progress_graph__bar--2 {
    width: 10px;
    -webkit-animation: graph2 1s;
    height: 30px;
    float: left;
    margin-right: 10px;
    background: #4FA584;
  }

  body .ui_box__inner .progress_graph__bar--3 {
    width: 10px;
    height: 24px;
    margin-right: 10px;
    -webkit-animation: graph3 1s;
    background: #4FA584;
    float: left;
    position: relative;
    bottom: -6px;
  }

  body .ui_box__inner .progress_graph__bar--4 {
    width: 10px;
    height: 14px;
    -webkit-animation: graph4 1s;
    bottom: -16px;
    position: relative;
    background: #4FA584;
    float: left;
  }

  body .ui_box__inner .progress_bar {
    height: 6px;
    float: left;
    width: 58%;
    background: #4FA584;
    -webkit-animation: bar 2s;
  }

  body .ui_box__inner .progress_bar--two {
    height: 6px;
    float: left;
    width: 78%;
    background: #4FA584;
    -webkit-animation: bar2 2s;
  }

  body .ui_box h2 {
    font-weight: normal;
    font-size: 16px;
    margin: -4px 0px 3px 0px;
  }

  body .ui_box p {
    font-size: 11px;
    color: #B6B6B6;
    clear: left;
    font-weight: 300;
    width: 160px;
    margin: 2px 0px 15px 0px;
  }

  body .ui_box:hover {
    background: #3D3D3D;
    color: #fff;
    /* transition-property: transform, background; */
    transition-duration: 0.3s;
    position: relative;
    z-index: 1;
  }

  .ui_box:hover > .ui_box__inner p {
    color: #B3DACB;
  }

  .ui_box:hover > .drop {
    transition-property: bottom, opacity;
    transition-duration: 0.3s;
    bottom: -42px;
    z-index: -99999999;
    opacity: 1;
  }

  .ui_box:hover > .drop .arrow {
    transition-property: transform;
    transition-duration: 1s;
    transform: rotate(765deg);
  }

  .ui_box:hover > .ui_box__inner .progress_graph > div {
    background: white;
  }

  .ui_box:hover > .ui_box__inner .progress .progress_bar, .ui_box:hover > .ui_box__inner .progress .progress_bar--two {
    background: white;
  }

  .stat_left {
    float: left;
    margin-top: 4em;
  }

  .arrow {
    width: 4px;
    height: 4px;
    transition-property: transform;
    transition-duration: 1s;
    transform: rotate(45deg);
    -webkit-transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);
    border-top: 1px solid #CDEAD3;
    border-right: 1px solid #CDEAD3;
    float: right;
    position: relative;
    top: -24px;
    right: 0px;
  }

  @keyframes bar {
    from {
      width: 0px;
    }
    to {
      width: 58%;
    }
  }

  @keyframes bar2 {
    from {
      width: 0px;
    }
    to {
      width: 78%;
    }
  }

  @keyframes graph {
    from {
      height: 0px;
    }
    to {
      height: 20px;
    }
  }

  @keyframes graph2 {
    from {
      height: 0px;
    }
    to {
      height: 30px;
    }
  }

  @keyframes graph3 {
    from {
      height: 0px;
    }
    to {
      height: 24px;
    }
  }

  @keyframes graph4 {
    from {
      height: 0px;
    }
    to {
      height: 13px;
    }
  }

  /* pour la partie description de l'entrepreneur */
  .container {
    /* width: 70em;
    height: 100vh; */
    /* background-color: pink; */
    /* display: flex; */
    justify-content: center;
    align-items: center;
  }

  .container .post {
    width: 70em;
    height: 50vw;
    display: flex;
    overflow: hidden;
    flex-direction: column;
    position: relative;
  }

  .container .post:hover .header_post {
    margin-top: -20px;
  }

  .container .post:hover .body_post {
    height: 50%;
  }

  .container .post:hover img {
    transform: translatey(-10px) translatex(-5px) scale(1.05);
  }

  .container .post .header_post {
    width: 100%;
    height: 40%;
    /* background: #ddd; */
    position: absolute;
    top: 0;
    -webkit-transition: cubic-bezier(0.68, -0.55, 0.27, 1.55) 320ms;
    -moz-transition: cubic-bezier(0.68, -0.55, 0.27, 1.55) 320ms;
    -ms-transition: cubic-bezier(0.68, -0.55, 0.27, 1.55) 320ms;
    -o-transition: cubic-bezier(0.68, -0.55, 0.27, 1.55) 320ms;
    transition: cubic-bezier(0.68, -0.55, 0.27, 1.55) 320ms;
  }

  .container .post .header_post img {
    max-width: 100%;
    height: auto;
    transition: ease-in-out 600ms;
  }

  .container .post .body_post {
    width: 100%;
    height: auto;
    background: #fff;
    position: absolute;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    -webkit-transition: cubic-bezier(0.68, -0.55, 0.27, 1.55) 320ms;
    -moz-transition: cubic-bezier(0.68, -0.55, 0.27, 1.55) 320ms;
    -ms-transition: cubic-bezier(0.68, -0.55, 0.27, 1.55) 320ms;
    -o-transition: cubic-bezier(0.68, -0.55, 0.27, 1.55) 320ms;
    transition: cubic-bezier(0.68, -0.55, 0.27, 1.55) 320ms;
    cursor: pointer;
  }

  .container .post .body_post .post_content {
    width: 80%;
    height: 80%;
    background: #fff;
    position: relative;
  }

  .container .post .body_post .post_content h1 {
    font-size: 20px;
    font-weight: bold;
  }

  .post_content h1 {
    margin-top: 2em;
  }

  .container .post .body_post .post_content p {
    font-size: 14px;
    font-weight: normal;
    text-align: justify;
  }

  .container .post .body_post .post_content .container_infos {
    width: 100%;
    display: flex;
    justify-content: space-between;
    /* position: absolute; */
    bottom: 0;
    /* border-top: 1px solid rgba(0, 0, 0, 0.2); */
    padding-top: 25px;
  }

  .container .post .body_post .post_content .container_infos .postedBy {
    display: flex;
    flex-direction: column;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-size: 12px;
  }

  .container .post .body_post .post_content .container_infos .postedBy span {
    font-size: 12px;
    text-transform: uppercase;
    opacity: 0.5;
    letter-spacing: 1px;
    font-weight: bold;
  }

  .container .post .body_post .post_content .container_infos .container_tags {
    display: flex;
    flex-direction: column;
  }

  .container .post .body_post .post_content .container_infos .container_tags span {
    font-size: 12px;
    text-transform: uppercase;
    opacity: 0.5;
    letter-spacing: 1px;
    font-weight: bold;
  }

  .container .post .body_post .post_content .container_infos .container_tags .tags ul {
    display: flex;
  }

  .container .post .body_post .post_content .container_infos .container_tags .tags ul li {
    font-size: 12px;
    letter-spacing: 2px;
    list-style: none;
    margin-left: 8px;
    text-transform: uppercase;
    position: relative;
    z-index: 1;
    display: flex;
    justify-content: center;
    cursor: pointer;
  }

  .container .post .body_post .post_content .container_infos .container_tags .tags ul li:first-child {
    margin-left: 0px;
  }

  .container .post .body_post .post_content .container_infos .container_tags .tags ul li:before {
    content: "";
    text-align: center;
    width: 100%;
    height: 5px;
    background: #FC6042;
    opacity: 0.5;
    position: absolute;
    bottom: 0;
    z-index: -1;
    padding: 0px 1px;
    -webkit-transition: cubic-bezier(0.68, -0.55, 0.27, 1.55) 320ms;
    -moz-transition: cubic-bezier(0.68, -0.55, 0.27, 1.55) 320ms;
    -ms-transition: cubic-bezier(0.68, -0.55, 0.27, 1.55) 320ms;
    -o-transition: cubic-bezier(0.68, -0.55, 0.27, 1.55) 320ms;
    transition: cubic-bezier(0.68, -0.55, 0.27, 1.55) 320ms;
  }

  .container .post .body_post .post_content .container_infos .container_tags .tags ul li:hover:before {
    height: 18px;
  }

  footer {
    width: 350px;
    height: 80px;
    background: #17A16F;
    position: absolute;
    right: 0;
    bottom: -80px;
    display: flex;
    justify-content: center;
    align-items: center;
    animation: top 0.8s forwards;
  }

  footer span {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    color: #fff;
    font-family: "Poppins";
  }

  footer span i {
    margin-right: 25px;
    font-size: 22px;
    color: #fff;
    animation: icon 2s forwards;
    opacity: 0;
  }

  @keyframes top {
    0% {
      opacity: 0;
      bottom: -80px;
    }
    100% {
      opacity: 1;
      bottom: 0px;
    }
  }

  @keyframes icon {
    0% {
      opacity: 0;
      transform: scale(0);
    }

    50% {
      opacity: 1;
      transform: scale(1.3) rotate(-2deg);
    }

    100% {
      opacity: 1;
      bottom: 0px;
    }
  }

  #carousel-1 {

    display: inline-flex;
    align-items: center;
    margin: 30vh 0 20vh 0;
  }

  h1 {
    font-weight: bold;
    /* font-style: italic; */
    font-size: 2em;
    font-family: Raleway;
  }

  p {
    font-size: 1rem;
    font-family: Raleway;
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

  @media only screen and (max-width: 576px) {

    .carousel {
      display: none;
    }
  }

  @media only screen and (max-width: 576px) {

    body .ui {
      display: block;
      width: auto;
    }
  }

  @media only  screen and (max-width: 768px) {
    .container {
      width: 100vw;
      margin: 10vw 0;
    }
  }
</style>

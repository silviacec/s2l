<template lang="html">
  <div class="wrapper">

  <!--ESSAI -->
  <div class='ui'>
  <div class='ui_box white'>
    <div class='ui_box__inner'>
      <h2>
        Où en est le projet ?
      </h2><br><br>
      <!-- <p> On en est a 58% de cleaner tout les océans </p> -->
      <div class='stat'>
        <span>58%</span>
      </div>
      <div class='progress'>
        <div class='progress_bar'></div>
      </div>
        <!-- <p>Aidez-nous à dépolluer la mer au lieu de la polluer.</p> -->
    </div>
    <div class='drop'>
      <p> Clic ici si t'es intéressé.</p>
      <div class='arrow'></div>
    </div>
  </div>
  <div class='ui_box white' v-bind:class="{ vert: projetSelectionne.type === 'environnemental', bleu: projetSelectionne.type === 'éducatif', rose: projetSelectionne.type === 'social' }">
    <div class='ui_box__inner' v-bind:class="{ vert: projetSelectionne.type === 'environnemental', bleu: projetSelectionne.type === 'éducatif', rose: projetSelectionne.type === 'social' }">
      <h2>
        Type de projet
      </h2><br><br>
      <!-- <p>Lorem ipsum dolor sit amet</p> -->
      <div class='stat_left'>
        <ul>
          <li>
            Environnemental
          </li>
          <li>
            {{projetSelectionne.tag1}}
          </li>
          <li>
            {{projetSelectionne.tag2}}
          </li>
          <li>
            {{projetSelectionne.tag3}}
          </li>
        </ul>
      </div>
      <div class='progress_graph'>
        <div class='progress_graph__bar--2'></div>
        <div class='progress_graph__bar--3'></div>
        <div class='progress_graph__bar--4'></div>
      </div>
      <!-- <p>Lorem ipsum dolor sit amet. Some more super groovy information.</p> -->
    </div>
    <div class='drop'>
      <p>Take a closer look</p>
      <div class='arrow'></div>
    </div>
  </div>
  <div class='ui_box white'>
    <div class='ui_box__inner'>
      <h2>
        Total Récolté
      </h2><br><br>
      <!-- <p>Lorem ipsum dolor sit amet</p> -->
      <div class='stat'>
        <span>€{{projetSelectionne.needs}}</span>
      </div>
      <div class='progress'>
        <div class='progress_bar--two'></div>
      </div>
      <!-- <p>Lorem ipsum dolor sit amet. Some more super groovy information about this stat.</p> -->
    </div>
    <div class='drop'>
      <p>Take a closer look</p>
      <div class='arrow'></div>
    </div>
  </div>
</div>
<!-- partie description de l'entrepreneur -->
<div class="container">
    <div class="post">
        <div class="header_post">
          <img :src="showPhotoProfile" alt="" style="width: 700px; height: auto; margin: 25px; border-radius: 5px;">
        </div>
        <div class="body_post">
            <div class="post_content">
                <h1> Titre </h1>
                <p>{{projetSelectionne.shortPrez}}</p>
               <p>{{projetSelectionne.longPrez}}</p>
                <div class="container_infos">
                    <div class="postedBy">
                        <span>author</span>
                        {{projetSelectionne.etpName}}
                    </div>
                    <div class="container_tags">
                        <span>tags</span>
                        <div class="tags">
                            <ul>
                                <li> cheese naan </li>
                                <li> samossa recyclé </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
<!-- <div>
    <div class="wrapper">
      <div class="profile">
        <div class="profile_img_info"
              v-bind:class="{ vert: projetSelectionne.type === 'environnemental', bleu: projetSelectionne.type === 'éducatif', rose: projetSelectionne.type === 'social' }">
          <div class="img">
              <img :src="showPhoto1" alt="Photo de notre projet">
          </div>
          <div class="info">
            <p class="name"> {{projetSelectionne.etpName}} </p>
            <p class="place">{{projetSelectionne.shortPrez}} -->
              <!-- <span>
              <i class=""></i>
            </span> -->
            <!-- Paris </p>
          </div>
        </div>
        <div class="profile_skills"
              v-bind:class="{ vert: projetSelectionne.type === 'environnemental', bleu: projetSelectionne.type === 'éducatif', rose: projetSelectionne.type === 'social' }">
          <div class="skills">
            <p> {{projetSelectionne.title}} </p>
            <ul> -->
              <!-- <li>
                <span class="icon">
                  <i class=""></i>
                </span>
                <span class="title"> {{projetSelectionne.etpCurriculum}}  </span>
              </li> -->
              <!-- <li> -->
                <!-- <span class="icon"></span> -->
                <!-- <span class="title">{{projetSelectionne.longPrez}}</span>
              </li>
              <li>
                <span class="icon"></span> -->
                <!-- <span class="title"> Cliquez ici, pour plus de détails </span> -->
              <!-- </li>
            </ul>
          </div>
          <div class="tags_wrap">
            <span class="tag">{{projetSelectionne.type}}</span>
            <span class="tag">{{projetSelectionne.tag1}}</span>
            <span class="tag">{{projetSelectionne.tag2}}</span>
            <span class="tag">{{projetSelectionne.tag3}}</span>
          </div>
        </div>
      </div>
      <div class="profile_counts" v-bind:class="{ vert: projetSelectionne.type === 'environnemental', bleu: projetSelectionne.type === 'éducatif', rose: projetSelectionne.type === 'social' }">
        <div class="profile_counts_wrap">
          <div class="item"> -->
                <!-- <div class="icon">
                  <i class="fas fa-thumbs-up" aria-hidden="true"></i>
                </div> -->
                <!-- <div class="title"> Les besoins de ce projet : {{projetSelectionne.needs}} € </div>
          </div>
        </div>
        <div class="profile_counts_wrap">
          <div class="item"> -->
                <!-- <div class="icon"><i class="fas fa-thumbs-up" aria-hidden="true"></div> -->
                <!-- <div class="title"> Le montant que vous pouvez investir : {{projetSelectionne.participation}} € </div>
          </div>
        </div>
        <div class="profile_counts_wrap">
          <div class="item">
                <div class="icon"> -->
                  <!-- <i class="fas fa-thumbs-up" aria-hidden="true"></i> -->
                <!-- </div>
                <div class="title"> Le montant que cet investissement va vous rapporter annuellement à terme : {{projetSelectionne.rentability}} € </div>

          </div>
        </div>
      </div>
      <div class="photo_profile ">
        <img :src="showPhotoProfile" alt="" style="width: 700px; height: auto; margin: 25px; border-radius: 5px;">
        <p class="cv">
          {{projetSelectionne.etpCurriculum}}
        </p>
      </div>
    </div> -->
    <!-- <div class="video-projet">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/yXEMJSL5rKs" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </div> -->
<!-- </div> -->
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
  computed: {
  showPhoto1 () {
    return require('../assets/' + this.projetSelectionne.photo1)
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
  margin-top: 300px;
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
  transition-property: transform, background;
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
  top: 24px;
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
  transition-property: transform, background;
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
  width: 70em;
  height: 100vh;
  /* background-color: pink; */
  /* display: flex; */
  justify-content: center;
  align-items: center;
}
.container .post {
  width: 70em;
  height: 500px;
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
  height: 60%;
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
.container .post .body_post .post_content p {
  font-size: 14px;
  font-weight: normal;
}
.container .post .body_post .post_content .container_infos {
  width: 100%;
  display: flex;
  justify-content: space-between;
  position: absolute;
  bottom: 0;
  border-top: 1px solid rgba(0, 0, 0, 0.2);
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
/* .wrapper{
      width: 650px;
      height: auto;
      position: absolute;
      top: 100%;
      left: 30%;
      transform: translate(-50%, -50%);
      display: flex;
}

.wrapper ul li{
      list-style: none;
}

.wrapper .profile{
      width:400px;
      margin-right: 25px;
}

.wrapper .profile .profile_img_info {
      display: flex;
      border-radius: 10px;
      margin-bottom: 25px;
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.125);
}

.wrapper .profile .profile_img_info .img {
      width: 125px;
}

.wrapper .profile .profile_img_info .img img{
      display: block;
      width: 100%;
      border-top-left-radius: 10px;
      border-bottom-left-radius: 10px;
}

.wrapper .profile .profile_img_info .info{
      width: calc(100% - 125px);
      padding: 40px;
}

.wrapper .profile .profile_img_info .info p.name{
      font-size: 24px;
      font-weight: 700;
      margin-bottom: 5px;
}

.wrapper .profile .profile_img_info .info p.place{
      font-weight: 300;
}

.wrapper .profile .profile_img_info .info p.place span{
      margin-right: 5px;
}

.wrapper .profile .profile_skills{
      margin-right: 5px;
}

.wrapper .profile .profile_skills{
      border-radius: 10px;
      padding: 25px;
      box-shadow: 0 1px 2px ;
      border-bottom: 1px solid #cccccc;
}

.wrapper .profile .profile_skills .skills p{
      text-transform: uppercase;
      font-weight: 700;
      font-size: 14px;
      margin-bottom: 10px;
}

.wrapper .profile .profile_skills .skills ul li {
      font-size: 11px;
      margin-bottom: 5px;
}

.wrapper .profile .profile_skills .skills ul li .fab{
      width: 40px;
}

.wrapper .profile .tags_wrap{
      padding-top: 20px;
}

.wrapper .profile .tags_wrap span.tag{
      padding: 10px 15px;
      display: inline-block;
      border-radius: 10px;
      margin: 5px;
      font-size: 14px;
}

.wrapper .profile_counts{
      padding: 25px;
      width: 175px;
      border-radius: 10px;
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.125);
}

.wrapper .profile_counts .profile_counts_wrap{
      padding: 30px 0;
      border-bottom: 1px solid #cccccc;
}

.wrapper .profile_counts .profile_counts_wrap:first-child{
      padding-top: 0;
}

.wrapper .profile_counts .profile_counts_wrap:last-child{
      padding-bottom: 0;
      border-bottom: 0;
}

.wrapper .profile_counts .profile_counts_wrap .item{
      padding: 20px 10px;
      text-align: center;
      border-radius: 10px;
      cursor: pointer;
      transition: all 0.2s ease;
}

.wrapper .profile_counts .profile_counts_wrap .item:hover{
      background: #e4e9ef;
}

.wrapper .profile_counts .profile_counts_wrap .item .fas{
      font-size: 30px;
      margin-bottom: 20px;
}

.wrapper .profile_counts .profile_counts_wrap .item .title{
      font-size: 11px;
}

.video-projet iframe{
  margin-left: 37em;
  margin-top: 20em;
}

@media screen and (max-width:864px){
  .video-projet iframe{
        margin-left: 30em;
        margin-top: 50em;
  }
}

.cv {
  width: 700px;
  margin-left: 25px;
  margin-right: 25px;
  padding: 5px;
  background-color: #f9f634;
  border-radius: 10px;
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
} */

</style>

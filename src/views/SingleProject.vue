<template lang="html">
  <!-- <div>
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
  </div> -->

  <div>
  <div class="wrapper">
    <div class="profile">
      <div class="profile_img_info" v-bind:class="{ vert: projetSelectionne.type === 'environnemental', bleu: projetSelectionne.type === 'éducatif', rose: projetSelectionne.type === 'social' }">
        <div class="img">
            <img :src="showPhoto1" alt="Photo de notre projet">
        </div>
        <div class="info">
          <p class="name"> {{projetSelectionne.etpName}} </p>
          <p class="place">{{projetSelectionne.shortPrez}}<span>
            <!-- <i class=""></i> -->
          </span> Paris </p>
        </div>
      </div>
      <div class="profile_skills" v-bind:class="{ vert: projetSelectionne.type === 'environnemental', bleu: projetSelectionne.type === 'éducatif', rose: projetSelectionne.type === 'social' }">
        <div class="skills">
          <p> {{projetSelectionne.title}} </p>
          <ul>
            <li><span class="icon">
              <!-- <i class=""></i> -->
            </span>
                <span class="title"> {{projetSelectionne.etpCurriculum}}  </span>
            </li>
            <li><span class="icon"></span>
                <span class="title"> {{projetSelectionne.longPrez}}</span>
            </li>
            <li><span class="icon"></span>
                <span class="title"> Cliquez ici, pour plus de détails </span>
            </li>
          </ul>
        </div>
        <div class="tags_wrap">
          <span class="tag"> {{projetSelectionne.type}} </span>
          <span class="tag"> océans </span>
          <span class="tag"> manta </span>
          <span class="tag"> voilier </span>
        </div>
      </div>
    </div>
    <div class="profile_counts" v-bind:class="{ vert: projetSelectionne.type === 'environnemental', bleu: projetSelectionne.type === 'éducatif', rose: projetSelectionne.type === 'social' }">
      <div class="profile_counts_wrap">
        <div class="item">
              <div class="icon">
                <!-- <i class="fas fa-thumbs-up" aria-hidden="true"></i> -->
              </div>
              <div class="title"> {{projetSelectionne.needs}} € </div>
        </div>
      </div>
      <div class="profile_counts_wrap">
        <div class="item">
              <!-- <div class="icon"><i class="fas fa-thumbs-up" aria-hidden="true"></div> -->
              <div class="title"> {{projetSelectionne.participation}} € </div>
        </div>
      </div>
      <div class="profile_counts_wrap">
        <div class="item">
              <div class="icon">
                <!-- <i class="fas fa-thumbs-up" aria-hidden="true"></i> -->
              </div>
              <div class="title"> {{projetSelectionne.rentability}} € </div>

        </div>
      </div>
    </div>
  </div>
  <div class="video-projet">
  <iframe width="560" height="315" src="https://www.youtube.com/embed/yXEMJSL5rKs" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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
  computed: {
  showPhoto1 () {
    return require('../assets/' + this.projetSelectionne.photo1)
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

.wrapper{
      width: 650px;
      height: auto;
      position: absolute;
      top: 150%;
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

.wrapper .profile .profile_img_info{
      display: flex;
      /* background: #fff; */
      border-radius: 10px;
      margin-bottom: 25px;
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.125);
}

.wrapper .profile .profile_img_info .img{
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
      /* background: #fff; */
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
      /* background: #e4e9ef; */
      padding: 10px 15px;
      display: inline-block;
      border-radius: 10px;
      margin: 5px;
      font-size: 14px;
}

.wrapper .profile_counts{
      /* background: #fff; */
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

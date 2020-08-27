<template lang="html">
  <div class="wrap"
        v-bind:class="{ vert: entreprise.type === 'environnemental', bleu: entreprise.type === 'éducatif', rose: entreprise.type === 'social', gris: entreprise.type === 'tech' }">
     <div class="item" v-bind:class="{ 'alignRight': entreprise.alignRight }">
       <div class="pic">
        <img alt="img-01.jpg" :src="showPhoto1" />
       </div>
       <div class="txt">
         <h2>{{entreprise.title}}</h2>
         <p>{{entreprise.shortPrez}}</p>
         <p>né d'une idée de {{entreprise.etpName}}</p>
         <button @click="voirProjet(entreprise.id)">Clique ici</button>
         <p>{{entreprise.littlePrez}}</p>
       </div>

     </div>
   </div>
  <!-- <section
        v-bind:class="{ vert: entreprise.type === 'environnemental', bleu: entreprise.type === 'éducatif', rose: entreprise.type === 'social', gris: entreprise.type === 'tech' }"
        class="content content_part content_project"
        data-color="#C6E3D7" style="height: 44.5em;">

    <div class="content_inner">
      <article class="description project_description">
      <div class="project_description_cont">
        <h1 class="project_title" style="border-color:#C6E3D7;">
          {{entreprise.title}}
        </h1>
        <div class="project_text">
          <p>
            {{entreprise.shortPrez}} <br>
            Un projet né d'une idée de {{entreprise.etpName}}
            <button @click="voirProjet(entreprise.id)">Clique ici</button>
            {{entreprise.littlePrez}}
          </p>
        </div>
      </div>
      </article>

      <div class="project_number">{{entreprise.id}}
      </div>

      <div class="table">
        <div class="project_images">
          <div class="1">
            <figure class="project_image odd first">
              <img alt="img-01.jpg" :src="showPhoto1" />
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
  </section> -->
</template>

<script>

  export default {
    name: "Project",
    props: ['entreprise'],

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

.alignRight {
  flex-direction: row-reverse;

}


  .wrap {
      border: 0;
      padding: 0;
      list-style: none;
      padding: 50px 0px;
      width: 1200px;
      margin: 2em;
  }

  .item {
    display: flex;
    margin-bottom: 50px;
    align-items: center;
  }

  .item .txt {
    width: 55%;
    flex-direction: column;
    justify-content: center;
    flex-shrink: 0;
    padding: 50px 30px;
    box-sizing: border-box;
    z-index: 1;
  }

  .item .pic {
    width: 55%;
  }

  .item .pic img {
    width: 100%;
  }

  .item> :first-child {
    margin-right: -10%;
  }

  .item:nth-child(1) .txt {
    background-color: pink;
  }

  .item:nth-child(2) .txt {
    background-color: #2e938f;
  }

  .item:nth-child(3) .txt {
    background-color: #fec979;
  }

  .item:nth-child(4) .txt {
    background-color: #8abac3;
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

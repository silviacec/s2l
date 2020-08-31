<template lang="html">

  <div class="wrap"
    v-bind:class="{ vert: entreprise.type === 'environnemental', bleu: entreprise.type === 'éducatif', rose: entreprise.type === 'social', gris: entreprise.type === 'tech' }">
    <div class="item" v-bind:class="{ 'alignRight': entreprise.alignRight, 'alignLeft': !entreprise.alignRight }">
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

  .alignLeft .pic {
    margin-right: -8%;
  }

  .alignRight .txt {
    z-index: 3;
  }

  .alignRight .pic {
    margin-left: -8%;
  }

  .txt button {
    margin: 1em;
    color: #f5d951ed;
    padding: 1em 1em;
    border: 2px solid transparent;
  }


  .wrap {
    border: 0;
    padding: 0;
    list-style: none;
    padding: 50px 0px;
    width: 1200px;
    margin: 2em 7em;
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

  .item:nth-child(1) .txt {
    background-color:#f5d951ed;
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

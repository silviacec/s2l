<template lang="html">
  <div class="crcl_container">
    <button class="crcl_bleu_1" @click="voirContactEnt()">
      <h5>Je suis<br><span class="ent">ENTREPRENEUR</span></h5>
      <p>J'ai besoin d'un financement pour développer mon entreprise</p>
    </button>
    <button class="crcl_bleu_2" @click="voirContactInv()">
      <h5>Je suis<br><span class="inv">INVESTISSEUR</span></h5>
      <p>Je veux financer un projet et bénéficier d'un retour sur investissement</p>
    </button>
  </div>
</template>

<script>

export default {
  name: 'Buttons',

  methods: {
    voirContactEnt() {
      this.$router.push({ path: '/ContactEntrepreneur' });
    },
    voirContactInv() {
      this.$router.push({ path: '/ContactInvestisseur' });
    }
  },
}

</script>

<style lang="css" scoped>

  .crcl_container {
    display: flex;
    justify-content: space-evenly;
    margin-top: 7em;
  }

  @media screen and (max-width: 768px) {
    .crcl_container {
      display: block;
      margin-right: 0;
    }
  }

  .crcl_bleu_1, .crcl_bleu_2 {
      vertical-align: middle;
      background: #dee1c4;
      border-radius: 10%;
      width: 15em;
      line-height: 1em;
      border: 2px solid #dee1c4;
      color: #3b3d69;
      text-align: center;
      font-size: 1.2em;
      margin: 1.25em 5em;
      box-shadow: 3px -3px 12px 3px #b3b29f;
    }

    @media screen and (max-width: 768px) {
      .crcl_bleu_1, .crcl_bleu_2 {
        font-size: 0.7em;
        width:13em;
      }
    }

    .crcl_bleu_1 h5 {
      margin-top: 50px;
      /* font-size: 0.8em; */
    }

    .crcl_bleu_2 h5 {
      margin-top: 50px;
    }

    .ent {
      font-weight: bold;
      color: #23566d;
      font-size: 1.5em;
    }

    .inv {
      font-weight: bold;
      color: #bb381b;
      font-size: 1.5em;
    }

    @media screen and (max-width: 768px) {
      .inv, .ent {
        font-size: 0.7em;
      }
    }

    .ent:hover, .inv:hover {
      -webkit-text-stroke: none;
      color: white;
    }

</style>

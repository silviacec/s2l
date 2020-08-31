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
}
.crcl_bleu_1, .crcl_bleu_2 {
    /* display: table-cell; */
    vertical-align: middle;
    background: #dee1c4;
    border-radius: 10%;
    width: 300px;
    height: 200px;
    line-height: 1em;
    border: 2px solid #c1c4c4;
    color: #3b3d69;
    text-align: center;
    font-size: 1.2em;
    /* padding: 30px; */
    margin: 20px 80px;
    box-shadow: inset 5px 5px 12px 3px #fcfcfc;
}
  .crcl_bleu_1 h5 {
    margin-top: 50px;
  }
  .crcl_bleu_2 h5 {
    margin-top: 50px;
  }
  .ent {
    font-weight: bold;
    color: #696d23;
    font-size: 1.5em;
  }
  .inv {
    font-weight: bold;
    color: #bb381b;
    font-size: 1.5em;
  }

  .ent:hover, .inv:hover {
    -webkit-text-stroke: none;
    color: white;
  }
</style>

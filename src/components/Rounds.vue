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
  name: 'Rounds',

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
.crcl_bleu_1, .crcl_bleu_2{
  /* display:table-cell; */
  vertical-align:middle;
  background: #46b7c1;
  border-radius: 50%;
  width: 300px;
  height: 300px;
  line-height:1em;
  border: 10px solid rgba(255,255,255,0.7);
  color: white;
  text-align: center;
  font-size: 1.2em;
  padding: 10px;
  }
  .crcl_bleu_1 h5 {
    margin-top: 50px;
  }
  .crcl_bleu_2 h5 {
    margin-top: 50px;
  }
  .ent {
    font-weight: bold;
    color: #e7f315;
    font-size: 1.5em;
  }
  .inv {
    font-weight: bold;
    color: red;
    font-size: 1.5em;
  }
</style>

<template lang="html">
  <div>
    <div class="crcl_jaune">
      <h5>Je suis<br><mark>ENTREPRENEUR</mark></h5>
      <p>Je cherche des financements</p>
    </div>
    <div class="crcl_jaune">
      <h5>Je suis<br><mark>INVESTISSEUR</mark></h5>
      <p>Je veux financer un projet</p>
    </div>
  </div>
</template>
<!-- VOIR LES COLLAPSE POUR L'ANIMATION https://getbootstrap.com/docs/4.5/components/collapse/ -->
<script>
export default {
  name: 'Rounds'
}
</script>

<style lang="css" scoped>
.crcl_jaune{
  display:table-cell;
  vertical-align:middle;
  background: rgb(250,190,60);
  border-radius: 50%;
  width: 100px;
  height: 150px;
  line-height:1em;
  border: 10px solid rgba(255,255,255,0.7);
  color: white;
  text-align: center;
  font-size: 1em;
  }
</style>

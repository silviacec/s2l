<template lang="html">

  <div class="pitch">
    <h2>Le concept</h2>
    <div>
      <p>Vous êtes particulier, vous avez des économies que vous souhaitez investir en soutenant l'entrepreneuriat ?
      Nous vous proposons un panel d'entrepreneurs qui ont besoin de levée de petit montant pour se développer.
      Ils ont déjà validé leurs marché, ont des clients et sont prêt à décoller !
      Vous apportez votre capital à celui des entrepreneurs, votre expertise si vous en avez, et vous participez au développement local en recevant une rémunération annuelle.
    </p>
  </div>
</div>

</template>

<script>

export default {
  name: "Pitch",
};

</script>

<style lang="css">

  @import url(https://fonts.googleapis.com/css?family=Raleway:400,300);

  .pitch p {
    font: 300 1.15em/1.5 "Raleway", sans-serif;
    color: #333333;
    text-shadow: 0 1px 0 #ebebeb;
    border: 1px solid #dedede;
    border-left: none;
    border-right: none;
    padding: 1em;
    width:80%;
    margin: 0 auto 8vh auto;
    text-align: justify;
  }

  .pitch h2 {
    margin-top: 10vh;
    margin-bottom: 10vh;
  }

</style>

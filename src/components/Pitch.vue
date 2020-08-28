<template lang="html">
  <div class="accueil">
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
.accueil p {
  width: 60%;
  margin-left: 20%;
  margin-right: 20%;
  font: 300 1.15em/1.5 "Raleway", sans-serif;
  color: #333333;
  text-shadow: 0 1px 0 #ebebeb;
  border: 1px solid #dedede;
  border-left: none;
  border-right: none;
  padding: 1em;
}

.accueil a {
  color: #248a6d;
  text-shadow: 0 1px 0 #e7f9f4;
  text-decoration: none;
  border-bottom: 1px dashed #33c79d;
  display: inline-block;
  /* position: relative; */
  padding: 0 0.2em;
  transition: all 250ms;
  z-index: 1000;
}
.accueil a:before {
  content: "";
  z-index: -1;
  width: 100%;
  height: 0%;
  background: rgba(68, 207, 168, 0.16);
  bottom: 0;
  left: 0;
  position: absolute;
  transition: height 250ms;
}
.accueil a:hover {
  border-color: transparent;
}
.accueil a:hover:before {
  height: 100%;
}
</style>

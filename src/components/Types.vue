<template lang="html">

  <div class="lestypes">
    <div class="type-1">
      <img src="@/assets/logos/technologie.svg" alt="techno" class="img"/>
      <h4>Technologie</h4>
      <p>Lancer un projet innovant nécessite de réunir des moyens matériels et humains qui doivent être financés aux différents stades de son évolution.</p>
    </div>
    <div class="type-2">
      <img src="@/assets/logos/social.svg"  alt="social"  class="img"/>
      <h4>Social</h4>
      <p>Les projets sociaux permettent d'encourager l’esprit collaboratif, en redistribuant les richesses, en travaillant et agissant pour le bien commun.</p>
    </div>
    <div class="type-3">
      <img src="@/assets/logos/ecologie.svg" alt="Ecologie" class="img" />
      <h4>Ecologie</h4>
      <p>Développer des biens et services dont la vocation est de contribuer à la protection et à la valorisation de l'environnement.</p>
    </div>
    <div class="type-4">
      <img src="@/assets/logos/education.svg" alt="Educatif"  class="img"/>
      <h4>Education</h4>
      <p>Les projets educatifs sont indispensables au developpement de la recherche et de la création.
      </p>
    </div>
  </div>

</template>

<script>

export default {
  name: "Types"
}

</script>

<style>

  .lestypes {
    display: flex;
    width:80%;
    margin: auto;
  }

  .lestypes div {
    margin: 50px 20px;
    float: left;
    text-align: center;
  }

  .img {
    width: 60px;
    height: 100px;
  }

  .lestypes h4 {
    text-transform: uppercase;
    margin-bottom: 20px;
  }

  .lestypes p {
    margin-bottom: 20px;
    text-align: justify;
    font-size: 0.9em;
  }

@media only  screen and (max-width: 768px) {
  .lestypes {
    flex-direction: column;
    margin: 0;
  }
}

</style>

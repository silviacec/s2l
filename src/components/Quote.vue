<template lang="html">

  <div class="essai-accueil">
    <p class="petit-essai">
    "Attractive things make people feel good, which in turn makes them think more creatively. How does that make something easier to use? Simple, by making it easier for people to find solutions to the problems they encounter." <strong>- Don Norman</strong>
    </p>
  </div>

</template>

<script>

export default {
  name: "Quote"
}

</script>

<style lang="css">

  @import url(https://fonts.googleapis.com/css?family=Raleway:400,300);

  .essai-accueil {
    display: flex;
    font-family: 'Raleway', sans-serif;
    align-items: center;
    justify-content: center;
    border: 8px solid #00B388;
    margin-bottom: 25px;
    width: 80%;
    text-align: justify;
    margin: auto;
  }

  .essai-accueil strong {
    margin-top: 16px;
    display: block;
    font-weight: 700;
  }

  .petit-essai {
    padding: 24px;
    max-width: 760px;
    font-size: 22px;
    font-weight: 500;
    line-height: 1.7;
  }

</style>

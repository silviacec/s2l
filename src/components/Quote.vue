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
.essai-accueil {
  display: flex;
  font-family: 'Lora', serif;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  border: 8px solid  #00B388;
  margin-left: 25px;
  margin-right: 25px;
  margin-bottom: 25px;
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
  font-weight: 300;
  line-height: 1.9;
}

</style>

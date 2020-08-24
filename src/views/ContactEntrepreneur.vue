<template lang="html">
  <div>
    <div class="page-contact">

      <form >
        <input type="text" name="nom" value="" id="name" placeholder="Votre nom">
        <input type="text" name="entreprise" value="" id="company" placeholder="Le nom de votre entreprise">
        <input type="text" name="email" value="" id="email" placeholder="Votre e-mail">
        <input type="number" name="" id="amount" value="La somme dont vous avez besoin"> €
        <textarea id="message" class="input" name="message" rows="6" placeholder="Expliquez-nous synthétiquement votre projet"></textarea>
        <input type="submit" name="Envoyer" value="Envoyer" class="btn">

      </form>

        <img src="@/assets/puzzle_blanc.jpg" />

  </div>

  </div>
</template>


<script>

  export default {
    name: "ContactEntrepreneur",
  };

</script>

<style lang="css" scoped>

.page-contact {
  display: flex;
  justify-content: space-around;
  width: 100%;
}

  img {
    width: 50%;
  }


  input, textarea {
  display: block;
  padding: 20px;
  font-size: 20px;
  margin-top: 10px;
  border-top: 1px solid #F5F5F5;
  border-right: 1px solid #F5F5F5;
  border-left: 1px solid #F5F5F5;
  border-bottom:  1px solid #A6905F;
  width: auto;
  background-color: #ECEDED;
  }

  .btn {
  display:block;
  width: 100px;
  height: 50px;
  margin-top: 20px;
  font-family: Arial,sans-serif;
  font-size: medium;
  font-weight: bold;
  text-align: center;
  background-color: white;
  color: #A6905F;
  border: 1px solid #A6905F;
  }

  .btn:hover {
  background: grey;
  }

  </style>

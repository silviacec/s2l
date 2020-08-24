<template lang="html">
  <div class="accueil">

        <h2> About us </h2>

        <div class="content-accueil">
              <p>Vous êtes particulier, vous avez des économies que vous souhaitez investir en soutenant l'entrepreneuriat ?
              Nous vous proposons un panel d'entrepreneurs qui ont besoin de levée de petit montant pour se développer.
              Ils ont déjà validé leurs marché, ont des clients et sont prêt à décoller ! <br>
              Vous apportez votre capital à celui des entrepreneurs, votre expertise si vous en avez, et vous participez au développement local en recevant une rémunération annuelle.</p>
              <router-link class="myButton" to="/about">Plus de détails</router-link>


        </div>

  </div>
</template>

<script>
export default {
  name: "Pitch",
};
</script>

<style lang="css" scoped>

.accueil{
      margin-top: 5em;
      margin-bottom: 5em;
      margin-left: 15em;
      display: grid;
      grid-gap: 2rem;
      grid-template-columns: repeat(5, 150px);
      grid-template-rows: repeat(5, 100px);
      position: sticky;
      color: #888888;
    }

.accueil h2{
    grid-row:2 / 2;
    grid-column: 1 /2;
    font-weight: normal;
    letter-spacing: 0.2em;
}

.content-accueil{
      color: black;
      font-weight: normal;
      letter-spacing: 0.1em;
      grid-row: 2 / -1;
      grid-column: 2 / 6;
      font-size: 30px;
      line-height: 30px;
}

.button-accueil{
      grid-column: 2/3;
      grid-row: 4/ 5;
}

.myButton {
      margin-top: 2em;
	    box-shadow: 3px 4px 0px 0px #899599;
	/* background:linear-gradient(to bottom, #ededed 5%, #bab1ba 100%); */
	/* background-color:#ededed; */
    	border-radius:15px;
    	border:1px solid #888888;
    	display:inline-block;
    	cursor:pointer;
      color: #888888;
    	/* font-family:Arial; */
    	font-size:17px;
    	padding:7px 25px;
    	text-decoration:none;
    	text-shadow:0px 1px 0px #e1e2ed;
}
.myButton:hover {
    	background:linear-gradient(to bottom, #bab1ba 5%, #ededed 100%);
    	background-color:#bab1ba;
}
.myButton:active {
    	position:relative;
    	top:1px;
}

@media screen and (max-width:864px){
  .accueil{

      display: grid;
      grid-gap: 2rem;
      grid-template-columns: repeat(5, 150px);
      grid-template-rows: repeat(5, 100px);
      position: sticky;
      color: #888888;
  }
  .accueil h2{
      grid-row:2 / 2;
      grid-column: 1 /2;
      font-size: 1em;
      letter-spacing: 0.1em;
  }
  .content-accueil{
        color: black;
        font-weight: normal;
        letter-spacing: 0.1em;
        grid-row: 2 / -1;
        grid-column: 2 / 6;
        font-size: 15px;
        line-height: 15px;
  }
}

</style>

<template>
 <div role="tablist">
  <div class="tablist">
   <h3>Quelques questions que vous vous posez....</h3>
   <div>
    <b-button v-b-toggle.collapse-1 class="m-1">Qu'est-ce que UpInvest ? </b-button>
   <b-collapse id="collapse-1">
     <b-card> UpInvest permet à des particuliers, des institutions ou des personnes morales d'investir au capital d'une entreprise, Les investisseurs possèdent des parts dans les sociétés dans lesquelles ils investissent. Ainsi ils font travailler leur épargne ou leur trésorerie en choisissant eux-mêmes les projets qu'ils souhaitent soutenir, en ciblant le risque et le rendement qui leur conviennent, en toute liberté. </b-card>
    </b-collapse>
   </div>
   <div>
    <b-button v-b-toggle.collapse-2 class="m-1">Comment rejoindre UpInvest ? </b-button>
    <b-collapse  id="collapse-2">
     <b-card> Pour rejoindre UpInvest, veuillez nous contacter à l'adresse e-mail : youcef@upinvest.com ou utilisez notre formulaire de contact. </b-card>
    </b-collapse>
  </div>
   <div>
    <b-button v-b-toggle.collapse-3 class="m-1">Est-ce que le succès des projets est garanti ?</b-button>
    <b-collapse id="collapse-3">
     <b-card>Non l'ange ne peut pas vous garantir le succès des projets présentés ni que les investissements seront rentables, mais notre intérêt est de faire le possible, en termes d'analyse de crédit, pour que les projets puissent aboutir et pour que les entreprises financées remboursent leurs crédits.</b-card>
    </b-collapse>
  </div>
  <div>
    <b-button v-b-toggle.collapse-4 class="m-1">Quelle est la rémunération des investisseurs ? </b-button>
    <b-collapse  id="collapse-4">
     <b-card>Concernant la rémunération, il est possible selon les cas d'avoir une commission fixe ou variable, indexée sur le montant investi.</b-card>
    </b-collapse>
  </div>
  <div>
    <b-button v-b-toggle.collapse-5 class="m-1">Quelle est la règlementation applicable ? </b-button>
    <b-collapse  id="collapse-5">
     <b-card>UpInvest a le statut de Conseil en Investissement Participatif et est en cours d'immatriculation auprès de l'Organisme pour le registre unique des intermédiaires en assurance et banque.</b-card>
    </b-collapse>
  </div>
  <h3>..pour les autres questions, contactez nous !</h3>

 </div>
 </div>
</template>

<script>

 export default {
  name: "Collapse",
 };

</script>



<style>
 .m-1{
  width: 50em !important;
  background-color:#ced0d2 !important;
 }

 .tablist {
  margin-top:10vh;
  margin-bottom:20vh;
 }

 #collapse-1, #collapse-2, #collapse-3, #collapse-4, #collapse-5 {
   width: 60%;
   margin: auto;
 }
</style>

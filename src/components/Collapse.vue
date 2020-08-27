<template >
  <div  role = "tablist" >
      <div >
       <b-button  v-b-toggle.collapse-1  class = "m-1" >Qu'est-ce que Ange de gain en France ? </b-button >
       <b-collapse  id = "collapse-1" >
         <b-card > permet à des particuliers, des institutions ou des personnes morales d'investir au capital d'une entreprise, Les investisseurs possèdent des parts dans les sociétés dans lesquelles ils investissent. Ainsi ils font travailler leur épargne ou leur trésorerie en choisissant eux-mêmes les projets qu'ils souhaitent soutenir, en ciblant le risque et le rendement qui leur conviennent, en toute liberté. </b-card >
       </b-collapse >
     </div >
     <div >
        <b-button  v-b-toggle.collapse-2  class = "m-1" >Comment rejoindre l'Ange de gain ? </b-button >
        <b-collapse    id = "collapse-2" >
          <b-card > Pour rejoindre l'Ange de gain, veuillez nous contacter à l'adresse e-mail : youcefgain@.com avec l'objet "rejoindre l'Ange de gain". </b-card >
        </b-collapse >
    </div >
     <div >
        <b-button  v-b-toggle.collapse-3  class = "m-1" >Est ce qu'on garantit le succès des projets présentés ?</b-button >
        <b-collapse  id = "collapse-3" >
          <b-card >Non l'ange ne peut pas vous garantir le succès des projets présentés et que les investissements seront rentables mais Notre intérêt et de faire tout ce qu'on peut, en terme d'analyse crédit, pour que les projets puissent aboutir et pour que les entreprises financées remboursent leurs crédits obligataires.</b-card >
        </b-collapse >
    </div >
    <div >
        <b-button  v-b-toggle.collapse-4  class = "m-1" >C'est combien La rénumération des apporteurs d'affaire? </b-button >
        <b-collapse   id = "collapse-4" >
         <b-card >Concernant la rémunération des apporteurs d'affaires,selon les cas une commission fixe ou variable, indexée sur le montant investi.</b-card >
        </b-collapse >
    </div >
    <div >
        <b-button  v-b-toggle.collapse-5  class = "m-1" >Quelle est la règlementation applicable ? </b-button >
        <b-collapse    id = "collapse-5" >
         <b-card >L'ange de gain  a le statut de Conseil en Investissement Participatif et est en cours, d'immatriculation auprès de l'Organisme pour le registre unique des intermédiaires en assurance et banque.  </b-card >
        </b-collapse >
    </div >
  </div >
</template >
<script >
export default {
  name: "Collapse",
};
</script >
<style media="screen">
.m-1{
  width: 50em!important;
}
</style>

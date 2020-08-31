<template lang="html">

  <div class='progress'>
    <div class='progress_inner'>
      <div class='progress_inner__step'>
        <label for='step-1'>Choisis un projet</label>
      </div>
      <div class='progress_inner__step'>
        <label for='step-3'>Rencontre ton projet</label>
      </div>
      <div class='progress_inner__step'>
        <label for='step-5'>Nourris ton projet</label>
      </div>
      <input checked='checked' id='step-1' name='step' type='radio'>
      <input id='step-3' name='step' type='radio'>
      <input id='step-5' name='step' type='radio'>
      <div class='progress_inner__bar'></div>
      <div class='progress_inner__bar--set'></div>
    </div>
  </div>

</template>

<script>

  export default {
    name: "Steps",
  };

</script>

<style lang="css" scoped>

  @import url("https://fonts.googleapis.com/css?family=Nunito:400,900");

  .progress .progress_inner #step-1:checked + input + input + input + input + div + div + div + div > .box_base, body .progress_inner #step-5:checked + div + div + div + div > .box_base, body .progress_inner #step-4:checked + input + div + div + div + div > .box_base, body .progress_inner #step-3:checked + input + input + div + div + div + div > .box_base, body .progress_inner #step-2:checked + input + input + input + div + div + div + div > .box_base {
    top: 50%;
    left: 0px;
    opacity: 1;
  }

  .progress .progress_inner #step-1:checked + input + input + input + input + div + div + div + div > .box_item, body .progress_inner #step-5:checked + div + div + div + div > .box_item, body .progress_inner #step-4:checked + input + div + div + div + div > .box_item, body .progress_inner #step-3:checked + input + input + div + div + div + div > .box_item, body .progress_inner #step-2:checked + input + input + input + div + div + div + div > .box_item {
    top: -30px;
    left: 0px;
    opacity: 0;
  }

  .progress .progress_inner #step-2:checked + input + input + input + div + div + div + div > .box_lid, body .progress_inner #step-5:checked + div + div + div + div > .box_lid, body .progress_inner #step-4:checked + input + div + div + div + div > .box_lid {
    top: -20px;
    left: 0px;
    opacity: 0;
  }

  .progress .progress_inner #step-2:checked + input + input + input + div + div + div + div > .box_item, body .progress_inner #step-5:checked + div + div + div + div > .box_item, body .progress_inner #step-4:checked + input + div + div + div + div > .box_item {
    top: -10px;
    left: 0px;
    opacity: 1;
  }

  .progress .progress_inner #step-3:checked + input + input + div + div + div + div > .box_item, body .progress_inner #step-5:checked + div + div + div + div > .box_item, body .progress_inner #step-4:checked + input + div + div + div + div > .box_item {
    top: 10px;
    left: 0px;
    opacity: 1;
  }

  .progress .progress_inner #step-3:checked + input + input + div + div + div + div > .box_lid, body .progress_inner #step-5:checked + div + div + div + div > .box_lid, body .progress_inner #step-4:checked + input + div + div + div + div > .box_lid {
    top: -1px;
    left: 0px;
    opacity: 1;
  }

  .progress .progress_inner #step-3:checked + input + input + div + div + div + div > .box_ribbon, body .progress_inner #step-5:checked + div + div + div + div > .box_ribbon, body .progress_inner #step-4:checked + input + div + div + div + div > .box_ribbon {
    top: 70%;
    left: 0px;
    opacity: 0;
  }

  .progress .progress_inner #step-3:checked + input + input + div + div + div + div > .box_bow, body .progress_inner #step-5:checked + div + div + div + div > .box_bow, body .progress_inner #step-4:checked + input + div + div + div + div > .box_bow {
    top: 0px;
    left: 0px;
    opacity: 0;
  }

  .progress .progress_inner #step-4:checked + input + div + div + div + div > .box_ribbon, body .progress_inner #step-5:checked + div + div + div + div > .box_ribbon {
    top: 50%;
    left: 0px;
    opacity: 1;
  }

  .progress .progress_inner,.progress .progress_inner__step:before {
    position: absolute;
    left: 0;
    right: 0;
    top: 100%;
    transform: translateY(-50%);
    margin: auto;
  }

  .progress .progress_inner__bar--set, .progress .progress_inner__bar {
    height: 6px;
    left: 15%; /* pour décaler la barre bleu */
    background: repeating-linear-gradient(45deg, #1EA4EC, #1EA4EC 4px, #1F8BC5 4px, #1F8BC5 10px);
    transition: width 800ms cubic-bezier(0.915, 0.015, 0.3, 1.005);
    border-radius: 6px;
    width: 0;
    position: relative;
    z-index: -1;
  }

  .progress .progress_inner__step:before {
    width: 30px;
    height: 30px;
    color: #70AFD0;
    background: white;
    line-height: 30px;
    border: 3px solid #A6CDE2;
    font-size: 12px;
    top: 3px;
    border-radius: 100%;
    transition: all 0.4s;
    cursor: pointer;
    pointer-events: none;
  }

  .progress .progress_inner__step {
    width: 33%;
    font-size: 14px;
    padding: 0 0px;
    transition: all 0.4s;
    float: left;
    text-align: center;
    position: relative;
  }

  .progress .progress_inner__step label {
    padding-top: 50px;
    top: -20px;
    display: block;
    position: relative;
    cursor: pointer;
  }

  .progress .progress_inner__step:hover {
    color: white;
  }

  .progress .progress_inner__step:hover:before {
    color: white;
    background: #1EA4EC;
  }

  .progress {
    font-family: "Nunito", sans-serif;
    /* background: #A6CDE2; */
    /* color: #2E6C8E; */
    text-align: center;
    font-weight: 900;
    background-color: inherit;
  }

  .progress .progress_inner {
    height: 200px;
    width: 700px;
  }

  .progress .progress_inner #step-5:checked + div {
    width: 80%;
  }

  .progress .progress_inner #step-4:checked + input + div + div + div + div {
    right: 30%;
  }

  .progress  .progress_inner #step-3:checked + input + input + div {
    width: 40%;
  }

  .progress  .progress_inner #step-3:checked + input + input + div + div + div > .tab:nth-of-type(3) {
    opacity: 1;
    top: 0;
  }

  .progress  .progress_inner #step-3:checked + input + input + div + div + div + div {
    right: 50%;
  }

  .progress  .progress_inner #step-2:checked + input + input + input + div {
    width: 20%;
  }

  .progress  .progress_inner #step-2:checked + input + input + input + div + div + div > .tab:nth-of-type(2) {
    opacity: 1;
    top: 0;
  }

  .progress  .progress_inner #step-2:checked + input + input + input + div + div + div + div {
    right: 70%;
  }

  .progress  .progress_inner #step-1:checked + input + input + input + input + div {
    width: 0%;
  }

  .progress  .progress_inner #step-1:checked + input + input + input + input + div + div + div > .tab:nth-of-type(1) {
    opacity: 1;
    top: 0;
  }

  .progress  .progress_inner #step-1:checked + input + input + input + input + div + div + div + div {
    right: 90%;
  }

  .progress  .progress_inner__step:nth-of-type(1):before {
    content: "1";
  }

  .progress  .progress_inner__step:nth-of-type(2):before {
    content: "2";
  }

  .progress  .progress_inner__step:nth-of-type(3):before {
    content: "3";
  }

  .progress  .progress_inner__bar--set {
    width: 68%; /* pour channger la longueur de la barre bleu */
    top: -6px;
    background: #70AFD0;
    position: relative;
    z-index: -2;
  }

  .progress .progress_inner input[type=radio] {
    display: none;
  }

</style>

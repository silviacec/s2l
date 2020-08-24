<template lang="html">
  <!-- <div class="footer">
    <p class="">Je suis un magnifique FOOTER !!!</p>
  </div> -->
  <div class="">
    <footer>
      <div id="div3">
        <div class="container-studio">
          <div class="about">
            <a href="index.php"> About </a>
          </div>
          <div class="project">
            <a href="project.php"> Projects</a>
          </div>
          <div class="section">
            Section
          </div>
          <div class="project">
            <a href="contact.php"> Contact </a>
          </div>
          <div class="bas">
            <ul class="emoticones">
              <li><a href="https://codepen.io/bradfordbradford/"><i class="fab fa-codepen"></i></a></li>
              <li><a href="https://dribbble.com/wearetelegraph"><i class="fab fa-dribbble"></i></a></li>
              <li><a href="https://github.com/laurathay?tab=repositories"><i class="fab fa-github"></i></a></li>
              <li><a href="https://www.instagram.com/wearetelegraph/"><i class="fab fa-instagram"></i></a></li>
              <li><a href="#"><i class="far fa-envelope"></i></a></li>
            </ul>
          </div>
        </div>
      </div>

      <div class="align">
        <p> Copyrights © 2020 BRAND </p>
        <a href="mailto: "> hello@yusuf.com </a>
        <p> website by 2LS</p>
      </div>

      <ul>
        <li><a href="#"> Home </a></li>
        <li><a href="#"> Overview </a></li>
        <li><a href="#"> Projet </a></li>
        <li><a href="#"> Contact </a></li>
      </ul>

  </footer>
</div>

</template>

<script>
export default {
  name: 'Footer'
}

</script>

<style lang="css" scoped>
  /* .footer {
    background-color: olive;
    color: white;
    margin-top: 30vh;
  } */
  .emoticones li {
  list-style: none;
  display:inline-grid;
  justify-content: space-around;
  text-decoration: none;
  font-size: 0.5em;
  margin-left: 3em;
}

footer a{
  font-family: 'Quicksand', sans-serif;
}

</style>

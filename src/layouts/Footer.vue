<template>

  <div class="">
    <footer>
      <div class="copyright">
        <p> © Copyrights by 2020 - Organisation <router-link to="/"> Brand </router-link></p>
      </div>
      <div class="social">
        <a href="#" class="support"> <router-link to="/ContactAccueil">Contact Us</router-link> </a>
        <a href="#" class="face">f</a>
        <a href="#" class="tweet">t</a>
        <a href="#" class="linked">in</a>
      </div>
    </footer>
  </div>

</template>

<script>

export default {
  name: 'Footer',
};

</script>

<style lang="css" scoped>

  router-link {
    text-align: center;
  }

  footer {
    width: 100% !important;
    display: inline-block;
    height: 70px;
    background-color: #999;
  }

  footer .copyright {
    width: 50%;
    float: left;
  }

  @media (max-width: 600px) {
    footer .copyright {
      width: 100%;
    }
  }

  footer .copyright p {
    padding-left: 10%;
    color: white;
    font-size: 0.7em;
    line-height: 70px;
    text-transform: capitalize;
    letter-spacing: 1px;
  }

  @media (max-width: 600px) {
    footer .copyright p {
      text-align: center;
      padding: 0;
    }
  }

  footer .social {
    width: 50%;
    float: right;
  }

  @media (max-width: 600px) {
    footer .social {
      width: 100%;
    }
  }

  footer .social a {
    float: left;
    line-height: 70px;
    text-decoration: none;
    color: white;
    text-align: center;
    justify-content: center;
    font-weight: bold;
  }

  footer .social a:hover {
    background-color: #222;
  }

  .linked {
    background-color: #1E83AE;
    font-size: 1.2em;
    width: 20%;
  }

  .face {
    background-color: #3D5B94;
    font-size: 1.2em;
    width: 20%;
  }

  .tweet {
    background-color: #3DACDD;
    font-size: 1.2em;
    width: 20%;
  }

  .support {
    background-color: pink;
    text-align: center;
    justify-content: center;
    padding-left: 15%;
    font-size: 0.8em;
    width: 40%;
  }

</style>

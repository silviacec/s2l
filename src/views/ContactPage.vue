<template lang="html">
  <div class="crcl_container">

    <form>

      <span class="navbar__menu-item"><span>#Contact</span>
        <!-- <span class="menu-item-hover-image" data-image-url="chat.jpg" style="
                          background-image: url(chat.jpg);">
        </span> -->
      </span>

      <label>
        <button class="crcl_bleu_1" @click="voirContactEnt()">
          <p>Je suis un INVESTISSEUR</p>
          <!-- <input type="text" placeholder="entrepreneur"/> -->
        </button>

      </label>
      <label>
        <button class="crcl_bleu_2" @click="voirContactInv()">
        <input type="password" placeholder="investisseur"/>
        </button>

      </label>
      <!-- <button class="red" type="button"><i class="icon ion-md-lock"></i> Fais tourner le contact </button> -->


    </form>





</div>

</template>

<script>
export default {
  name: 'Rounds',

  methods: {
    voirContactEnt() {
      this.$router.push({ path: '/ContactEntrepreneur' });
    },
    voirContactInv() {
      this.$router.push({ path: '/ContactInvestisseur' });
    }
  },
}

console.clear();

const elApp = document.querySelector('#app');
const elStateNav = document.querySelectorAll('[data-to]');

Array.from(elStateNav).forEach(el => {
  el.addEventListener('click', () => {
    elApp.dataset.state = el.dataset.to;
  });
});
</script>

<style lang="css" scoped>

.crcl_container {
  background-color: grey;
}

.navbar__menu-item {
  font-family: "Oswald", sans-serif;
  text-transform: uppercase;
  font-size: 4.4em;
  padding: 60px 20px;
  font-weight: 700;
  width: 300px;
  height: 100px;
  position: relative;
  cursor: pointer;
}
.navbar__menu-item-title {
  position: relative;
  color: transparent;
  -webkit-text-stroke: 0.01em white;
  transition: -webkit-text-stroke 0.5s ease, color 0.5s ease;
}
.navbar__menu-item:hover .navbar__menu-item-title {
  -webkit-text-stroke: none;
  color: white;
}
.navbar__menu-item-title::after {
  content: attr(data-menu-item-text);
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  font-weight: 900;
  -webkit-text-stroke: 0.012em white;
  color: transparent;
  opacity: 0;
  transition: opacity 0.5s ease;
}
  .crcl_container , p, input, select, textarea, button {
    font-family: "Montserrat", sans-serif;
    letter-spacing: -0.2px;
    font-size: 16px;
  }

  div, p {
    color: #BABECC;
    text-shadow: 1px 1px 1px #FFF;
  }

  form {
    padding: 16px;
    width: 320px;
    margin: 15em auto;
  }

  .segment {
    padding: 32px 0;
    text-align: center;
  }

  button, input {
    border: 0;
    outline: 0;
    font-size: 16px;
    border-radius: 320px;
    padding: 16px;
    background-color: #EBECF0;
    text-shadow: 1px 1px 0 #FFF;
  }

  label {
    display: block;
    margin-bottom: 24px;
    width: 100%;
  }

  input {
    margin-right: 8px;
    box-shadow: inset 2px 2px 5px #BABECC, inset -5px -5px 10px #FFF;
    width: 100%;
    box-sizing: border-box;
    transition: all 0.2s ease-in-out;
    appearance: none;
    -webkit-appearance: none;
  }
  input:focus {
    box-shadow: inset 1px 1px 2px #BABECC, inset -1px -1px 2px #FFF;
  }

  button {
    color: #61677C;
    font-weight: bold;
    box-shadow: -5px -5px 20px #FFF, 5px 5px 20px #BABECC;
    transition: all 0.2s ease-in-out;
    cursor: pointer;
    font-weight: 600;
  }
  button:hover {
    box-shadow: -2px -2px 5px #FFF, 2px 2px 5px #BABECC;
  }
  button:active {
    box-shadow: inset 1px 1px 2px #BABECC, inset -1px -1px 2px #FFF;
  }
  button .icon {
    margin-right: 8px;
  }
  button.unit {
    border-radius: 8px;
    line-height: 0;
    width: 48px;
    height: 48px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    margin: 0 8px;
    font-size: 19.2px;
  }
  button.unit .icon {
    margin-right: 0;
  }
  button.red {
    display: block;
    width: 100%;
    color: #AE1100;
  }

  .input-group {
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
  .input-group label {
    margin: 0;
    flex: 1;
  }



</style>

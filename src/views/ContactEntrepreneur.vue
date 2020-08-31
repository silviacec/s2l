<template>
<div class="contact">
  <span class="navbar__menu-item"><span data-menu-item-text="#entrepreneur" class="navbar__menu-item-title">#Contact</span>
    <span class="menu-item-hover-image" data-image-url="chat.jpg" style="
                      background-image: url(chat.jpg);
                    "></span>
  </span>
  <form>
    <input name="name" type="text" class="feedback-input" placeholder="Nom" />
    <input name="company" type="text" class="feedback-input" placeholder="Nom de l'entreprise" />
    <input name="email" type="text" class="feedback-input" placeholder="Email" />
    <textarea name="text" class="feedback-input" placeholder="Votre projet en quelques lignes"></textarea>
    <input type="submit" value="ENVOYER"/>
  </form>
</div>
</template>
<script>
export default {
  name: "Essai"
}
</script>
<style>
/* #FFB3B3 */
.contact {
  width: 100%;
  height: 100%;
  background-color: #FFB3B3 ;
  display: grid;
  place-content: center;
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
.menu-item-hover-image {
  width: 198px;
  height: 230px;
  position: absolute;
  top: 0;
  left: 0;
  background-size: cover;
  background-repeat: no-repeat;
  background-position-x: 75%;
  opacity: 0;
  transition: opacity 0.3s, transform 0.7s cubic-bezier(0.23, 1, 0.32, 1);
  /* This places the cursor in the center of the image. Divide the width and height by 2 to get the top and left offsets :) */
  margin: -115px 0 0 -99px;
  overflow: hidden;
  pointer-events: none;
  z-index: 2;
}
.navbar__menu-item:hover .menu-item-hover-image {
  opacity: 1;
}
.navbar__menu-item:hover .navbar__menu-item-title::after {
  opacity: 1;
  z-index: 3;
}
/* ------------ contact form ----------- */
form { max-width:420px; margin:50px auto; }
.feedback-input {
  color:white;
  font-family: Helvetica, Arial, sans-serif;
  font-weight:500;
  font-size: 18px;
  border-radius: 5px;
  line-height: 22px;
  background-color: transparent;
  border:1px solid white;
  border-top: transparent;
  border-right: transparent;
  border-left: transparent;
  transition: all 0.3s;
  padding: 13px;
  margin-bottom: 15px;
  width:100%;
  box-sizing: border-box;
  outline:0;
}
.feedback-input:focus { border:2px solid #CC4949; }
textarea {
  height: 150px;
  line-height: 150%;
  resize:vertical;
}
[type="submit"] {
  font-family: 'Montserrat', Arial, Helvetica, sans-serif;
  width: 100%;
  background:white;
  border-radius:5px;
  border:0;
  cursor:pointer;
  color:#ffb3b3 ;
  font-size:24px;
  padding-top:10px;
  padding-bottom:10px;
  transition: all 0.3s;
  margin-top:-4px;
  font-weight:700;
}
[type="submit"]:hover { background:#CC4949; }
</style>

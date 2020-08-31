<template lang="html">

  <div class="accordion">
    <ul>
      <li><a href="#">
        <div>
          <h1> Choisis ton projet </h1>
          <p> Parmi nos catégories social, éducative et environnemental. consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut consequat.</p>
        </div>
        </a> </li>
      <li><a href="#">
        <div>
          <h1> Adopte ton projet </h1>
          <p> Envoie nous un message sur la page contact et on reviendra vers toi pour vous mettre en relation, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        </a> </li>
      <li><a href="#">
        <div>
          <h1> Nourris ton projet </h1>
          <p> It's now time to expand and conquer the world. consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
        </a> </li>
    </ul>
  </div>

</template>

<script>

export default {
  name: "Accordion",
};
</script>

<style lang="css">

@import url(https://fonts.googleapis.com/css?family=Raleway:400,300);


.accueil p {
  width: 50%;
  margin-left: 35%;
  margin-right: 20%;
  margin-top: 15em;
  margin-bottom: 15em;
  font: 300 1.15em/1.5 "Raleway", sans-serif;
  color: #333333;
  text-shadow: 0 1px 0 #ebebeb;
  border: 1px solid #dedede;
  border-left: none;
  border-right: none;
  padding: 1em;
}

.accueil a {
  color: #248a6d;
  text-shadow: 0 1px 0 #e7f9f4;
  text-decoration: none;
  border-bottom: 1px dashed #33c79d;
  display: inline-block;
  /* position: relative; */
  padding: 0 0.2em;
  transition: all 250ms;
  z-index: 1000;
}
.accueil a:before {
  content: "";
  z-index: -1;
  width: 100%;
  height: 0%;
  background: rgba(68, 207, 168, 0.16);
  bottom: 0;
  left: 0;
  position: absolute;
  transition: height 250ms;
}
.accueil a:hover {
  border-color: transparent;
}
.accueil a:hover:before {
  height: 100%;
}

/* ---------- essaie -----------*/
.accordion ul {
	display: table;
	table-layout: fixed;
  width: 100%;
	height: 100vh;
	margin: 0;
	padding: 0;
}
.accordion ul li {
  display: inline-block;
	position: relative;
	width: 100%;
	min-height: 300px;
	background-repeat: no-repeat;
	background-position: center center;
	text-align: center;
	color: #fff;
}
.accordion ul li:nth-child(1) {
	background-image: url("http://maksim.be/codepen/img-1.jpg");
}
.accordion ul li:nth-child(2) {
	background-image: url("http://maksim.be/codepen/img-2.jpg");
}
.accordion ul li:nth-child(3) {
	background-image: url("http://maksim.be/codepen/img-3.jpg");
}
.accordion ul li::before {
	position: absolute;
	width: 100%;
	height: 100%;
  left: 0;
  top: 0;
	background: rgba(0,0,0,0.3);
	content: '';
}
.accordion ul li div {
	transform: translateY(0px);
	transition: transform 500ms;
}
.accordion ul li a {
	text-decoration: none;
	color: #fff;
}
.accordion ul li h1 {
	font-family: 'Roboto Condensed', sans-serif;
	text-overflow: clip;
	font-size: 2.5em;
	line-height: 3rem;
}
.accordion ul li p {
	font-family: 'Open Sans', sans-serif;
	font-size: 16px;
	line-height: 24px;
	font-weight: 300;
	opacity: 1;
	transition: opacity 200ms;
	margin-left: 10vw;
	margin-right: 10vw;
}

@media screen and (min-width: 769px) {
.accordion {
	height: 100vh;
	min-height: 600px;
	overflow: hidden;
}
.accordion ul {
	height: 600px;
}
.accordion ul li {
	display: table-cell;
	vertical-align: bottom;
	width: 33%;
	height: 100vh;
	min-height: 600px;
	transition: all 500ms ease;
}
.accordion ul:hover li {
	width: 30%;
}
.accordion ul:hover li:hover {
	width: 40%;
}
.accordion ul li::before {
	background: linear-gradient(to bottom, rgba(0,0,0,0) 40%, rgba(0,0,0,0.6) 95%);
	opacity: 0;
	transition: opacity 1s, transform 1s;
}
.accordion ul li:hover::before {
	opacity: 1;
}
.accordion ul:hover li:hover * {
	opacity: 1;
	transition: opacity 500ms, transform 500ms;
	transform: translateX(0);
}
.accordion ul li div {
	transform: translateY(120px);
	transition: transform 500ms;
}
.accordion ul li p {
	width: 30vw;
	height: 200px;
	opacity: 0;
  margin-left: auto;
	margin-right: auto;
}
}
</style>

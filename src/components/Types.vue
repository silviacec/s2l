<template lang="html">
  <div class="lestypes">
    <h3>Nos 4 domaines</h3>
    <ul>
      <li class="type-1">
        <img src="@/assets/logos/technologie.svg" alt="techno" class="img"/>
        <h4>Technologie</h4>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
      </li>
      <li class="type-2">
        <img src="@/assets/logos/social.svg"  alt="social"  class="img"/>
        <h4>Social</h4>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
      </li>
      <li class="type-3">
        <img src="@/assets/logos/ecologie.svg" alt="Ecologie" class="img" />
        <h4>Ecologie</h4>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
      </li>
      <li class="type-4">
        <img src="@/assets/logos/education.svg" alt="Educatif"  class="img"/>
        <h4>Education</h4>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Types"
}
</script>

<style media="screen">
.lestypes ul{
  margin: 80px 0;
}
.lestypes ul li{
  /* width: 360px; */
  float: left;
  padding-top : 140px;
  text-align: center;
  margin-right: 10px;
}
ul{
  list-style: none;
}
.img{
  width: 100px;
  height: 150px;
}
.lestypes h4{
  text-transform: uppercase;
  margin-bottom: 20px;
}
.lestypes p{
  margin-bottom: 20px;
}
</style>

<template lang="html">
  <section id="lessteps">
    <h3>Les domaines qui vous tiennent à coeur</h3>
    <ul>
      <li id="step-1">
        <img src=""  alt="techno"  class="img"/>
        <h4>Technologie</h4>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
      </li>
      <li id="step-2">
        <img src=""  alt="social"  class="img"/>
        <h4>Social</h4>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
      </li>
      <li id="step-3">
        <img src="" alt="Echologie" class="img" />
        <h4>Ecologie</h4>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
      </li>
      <li id="step-4">
        <img src="" alt="Educatif"  class="img"/>
        <h4>Education</h4>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </p>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: "Types"
}
</script>

<style media="screen">
#lessteps ul{
  margin: 80px 0;
}
#lessteps ul li{
  width: 360px;
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
#lessteps h4{
  text-transform: uppercase;
  margin-bottom: 20px;
}
#lessteps p{
  margin-bottom: 20px;
}
</style>

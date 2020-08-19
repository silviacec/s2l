<template>

  <div class="projets">
    <!-- <div class="fiche-projet" v-for="etp in etps" :key="etp.id"> -->

  <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <div class="">
      <Project />
        <router-link to="/SinglePage">
          <button>Voir ce projet en détail</button>
        </router-link>
    </div>
    <div class="">
      <Project />
        <router-link to="/SinglePage">
          <button>Voir ce projet en détail</button>
        </router-link>
    </div>
    <div class="">
      <Project />
        <router-link to="/SinglePage">
          <button>Voir ce projet en détail</button>
        </router-link>
    </div>
    <div class="">
      <Project />
        <router-link to="/SinglePage">
          <button>Voir ce projet en détail</button>
        </router-link>
    </div>
    <div class="">
      <Project />
        <router-link to="/SinglePage">
          <button>Voir ce projet en détail</button>
        </router-link>
    </div>
    <div class="">
      <Project />
        <router-link to="/SinglePage">
          <button>Voir ce projet en détail</button>
        </router-link>
    </div>
    <div class="">
      <Project />
        <router-link to="/SinglePage">
          <button>Voir ce projet en détail</button>
        </router-link>
    </div>
  </div>
<!-- </div> -->
</template>

<script>
// @ is an alias to /src
import Project from "@/components/Project.vue";
// import {etps} from "../data.js";

export default {
  name: "ProjectsPage",

  // data() {
  //   return {
  //     etps : etps,
  //   };
  // },

  components: {
    Project
  },

};
</script>

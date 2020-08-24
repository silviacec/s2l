import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import ProjectsPage from "../views/ProjectsPage.vue";
import ContactPage from "../views/ContactPage.vue";
import SingleProject from "../views/SingleProject.vue";
import Navbar from "../layouts/Navbar.vue";
import About from "../views/About.vue";
import Footer from "../layouts/Footer.vue";
import ContactAccueil from "../views/contactAccueil.vue";
import ContactEntrepreneur from "../views/ContactEntrepreneur.vue";
import ContactInvestisseur from "../views/ContactInvestisseur.vue";


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    components: {default: Home, navbar: Navbar, footer: Footer},
    // ajouter les surnoms de header et footer comme ça:
    // components:{default:Landing, header: surnom/Mainnavbar; footer: surnom/Mainfootbar}
  },
  {
    path: "/ProjectsPage",
    name: "ProjectsPage",
    components: {default: ProjectsPage, navbar: Navbar, footer: Footer},
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () =>
    //   import(/* webpackChunkName: "about" */ "../views/About.vue")
    components: {default: About, navbar: Navbar, footer: Footer},
  },
  {
    path: "/ContactPage",
    name: "ContactPage",
    components: {default: ContactPage, navbar: Navbar, footer: Footer},
  },
  {
    path: "/ContactAccueil",
    name: "ContactAccueil",
    components: {default: ContactAccueil, navbar: Navbar, footer: Footer},
  },
  {
    path: "/ContactEntrepreneur",
    name: "ContactEntrepreneur",
    components: {default: ContactEntrepreneur, navbar: Navbar, footer: Footer},
  },
  {
    path: "/ContactInvestisseur",
    name: "ContactInvestisseur",
    components: {default: ContactInvestisseur, navbar: Navbar, footer: Footer},
  },
  {
    path: "/SingleProject/:id",
    name: "SingleProject",
    component: SingleProject,
    components: {default: SingleProject, navbar: Navbar, footer: Footer},
  },
  // {
  //   path: "/users/:id",
  //   name: "UserDetails",
  //   component: UserDetails,
  //   },

];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;

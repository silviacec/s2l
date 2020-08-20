import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import ProjectsPage from "../views/ProjectsPage.vue";
import ContactPage from "../views/ContactPage.vue";
import SingleProject from "../views/SingleProject.vue";
// import Navbar from "../components/Navbar.vue"
// j'importe header et footer qui sont dans layout Header.vue


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home // ajouter les surnoms de header et footer comme ça:
    // components:{default:Landing, header: surnom/Mainnavbar; footer: surnom/Mainfootbar}
  },
  {
    path: "/ProjectsPage",
    name: "ProjectsPage",
    component: ProjectsPage
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/ContactPage",
    name: "ContactPage",
    component: ContactPage
  },
  {
    path: "/SingleProject/:id",
    name: "SingleProject",
    component: SingleProject
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

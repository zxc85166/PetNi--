import Home from "./views/Home.vue";
import Match from "./views/Match.vue";
import Favorites from "./views/Favorites.vue";
import Theme_Pavilion from "./views/Theme_Pavilion.vue";
import Emergency from "./views/Emergency.vue";
import Adoption from "./views/Adoption.vue";
import NotFound from "./views/NotFound.vue";

/** @type {import('vue-router').RouterOptions['routes']} */
export const routes = [
  { path: "/", component: Home, meta: { title: "Home" } },
  {
    path: "/match",
    meta: { title: "Match" },
    component: Match,
    // component: () => import('./views/About.vue')
  },
  {
    path: "/favorites",
    meta: { title: "Favorites" },
    component: Favorites,
  },
  {
    path: "/theme_Pavilion",
    meta: { title: "Theme_Pavilion" },
    component: Theme_Pavilion,
  },
  {
    path: "/emergency",
    meta: { title: "Emergency" },
    component: Emergency,
  },
  {
    path: "/adoption",
    meta: { title: "Adoption" },
    component: Adoption,
  },
  { path: "/:path(.*)", component: NotFound },
];

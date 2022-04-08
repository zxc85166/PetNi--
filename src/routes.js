import NotFound from "@/views/NotFound.vue";
import Theme_Pavilion from "@/views/Theme_Pavilion.vue";
import Emergency from "@/views/Emergency.vue";
import Adoption from "@/views/Adoption.vue";
import Adoption_List from "@/views/Adoption_List.vue";
import Adoption_Edit from "@/views/Adoption_Edit.vue";

/** @type {import('vue-router').RouterOptions['routes']} */
export const routes = [
  {
    path: "/",
    meta: { title: "Home" },
    component: () => import("@/views/Home.vue"),
  },
  {
    path: "/match",
    meta: { title: "Match" },
    component: () => import("@/views/Match.vue"),
  },
  {
    path: "/favorites",
    meta: { title: "Favorites" },
    component: () => import("@/views/Favorites.vue"),
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
    redirect: "/adoption/list",
    children: [
      {
        path: "list",
        name: "List",
        component: Adoption_List,
      },
      {
        path: "edit",
        name: "Edit",
        component: Adoption_Edit,
      },
    ],
  },
  { path: "/:path(.*)", component: NotFound },
];

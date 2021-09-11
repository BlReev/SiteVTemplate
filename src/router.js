import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./views/Home";
import Templates from "./views/Templates";
import Flights, {
  id as temp1_id,
  name as temp1_name,
  routes as temp1_routes,
} from "./apps/app1/Flights";

Vue.use(VueRouter);
export const templateRoutes = [
  {
    name: temp1_name,
    path: "/templates/" + temp1_id,
    component: Flights,
    children: temp1_routes,
  },
];
export const routes = [
  { path: "/", component: Home },
  { path: "/templates", component: Templates },
  ...templateRoutes,
];

export default new VueRouter({
  linkExactActiveClass: "is-link-active",
  routes,
});

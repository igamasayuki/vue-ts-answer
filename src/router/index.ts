import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";
import ParentSample from "../views/sample/ParentSample.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/ex250",
    component: () => import("../views/answer/Ex250.vue"),
  },
  {
    path: "/ex240",
    component: () => import("../views/answer/Ex240.vue"),
  },
  {
    path: "/ex230",
    component: () => import("../views/answer/Ex230.vue"),
  },
  {
    path: "/ex225",
    component: () => import("../views/answer/Ex225.vue"),
  },
  {
    path: "/ex220",
    component: () => import("../views/answer/Ex220.vue"),
  },
  {
    path: "/ex215",
    component: () => import("../views/answer/Ex215.vue"),
  },
  {
    path: "/ex210",
    component: () => import("../views/answer/Ex210.vue"),
  },
  {
    path: "/ex200",
    component: () => import("../views/answer/Ex200.vue"),
  },
  {
    path: "/ex190",
    component: () => import("../views/answer/Ex190.vue"),
  },
  {
    path: "/ex170",
    component: () => import("../views/answer/Ex170.vue"),
  },
  {
    path: "/ex160",
    component: () => import("../views/answer/Ex160.vue"),
  },
  {
    path: "/ex151",
    component: () => import("../views/answer/Ex151.vue"),
  },
  {
    path: "/ex150",
    component: () => import("../views/answer/Ex150.vue"),
  },
  {
    path: "/ex140",
    component: () => import("../views/answer/Ex140.vue"),
  },
  {
    path: "/ex130",
    component: () => import("../views/answer/Ex130.vue"),
  },
  {
    path: "/ex120",
    component: () => import("../views/answer/Ex120.vue"),
  },
  {
    path: "/ex110",
    component: () => import("../views/answer/Ex110.vue"),
  },
  {
    path: "/ex100",
    component: () => import("../views/answer/Ex100.vue"),
  },
  {
    path: "/ex90",
    component: () => import("../views/answer/Ex90.vue"),
  },
  {
    path: "/ex80",
    component: () => import("../views/answer/Ex80.vue"),
  },
  {
    path: "/ex70",
    component: () => import("../views/answer/Ex70.vue"),
  },
  {
    path: "/ex60",
    component: () => import("../views/answer/Ex60.vue"),
  },
  {
    path: "/ex50",
    component: () => import("../views/answer/Ex50.vue"),
  },
  {
    path: "/ex40",
    component: () => import("../views/answer/Ex40.vue"),
  },
  {
    path: "/ex31",
    component: () => import("../views/answer/Ex31.vue"),
  },
  {
    path: "/ex30",
    component: () => import("../views/answer/Ex30.vue"),
  },
  {
    path: "/ex20",
    component: () => import("../views/answer/Ex20.vue"),
  },
  {
    path: "/ex10",
    component: () => import("../views/answer/Ex10.vue"),
  },
  {
    path: "/ex01",
    component: () => import("../views/Ex01.vue"),
  },
  {
    path: "/compVuex5",
    component: () => import("../components/sample/CompVuex5.vue"),
  },
  {
    path: "/compVuex4",
    component: () => import("../components/sample/CompVuex4.vue"),
  },
  {
    path: "/compVuex3",
    component: () => import("../components/sample/CompVuex3.vue"),
  },
  {
    path: "/compVuex2",
    component: () => import("../components/sample/CompVuex2.vue"),
  },
  {
    path: "/compVuex1",
    component: () => import("../components/sample/CompVuex1.vue"),
  },
  {
    path: "/p172",
    component: () => import("../views/sample/P172ParentScopeSlot.vue"),
  },
  {
    path: "/p168",
    component: () => import("../views/sample/P168ParentMultiSlot.vue"),
  },
  {
    path: "/p165_2",
    component: () => import("../views/sample/P165ParentSlot2.vue"),
  },
  {
    path: "/p165",
    component: () => import("../views/sample/P165ParentSlot.vue"),
  },
  {
    path: "/p159_2",
    component: () => import("../views/sample/P159EmitParent2.vue"),
  },
  {
    path: "/p159",
    component: () => import("../views/sample/P159EmitParent.vue"),
  },
  {
    path: "/p152",
    component: () => import("../views/sample/P152CountUpParent.vue"),
  },
  {
    path: "/p151",
    component: () => import("../views/sample/P151PropsParent.vue"),
  },
  {
    path: "/s280",
    component: () => import("../views/sample/S280BasicParent.vue"),
  },
  {
    path: "/parentSample",
    name: "ParentSample",
    component: ParentSample,
  },
  {
    path: "/s270",
    component: () => import("../views/sample/S270v-bind.vue"),
  },
  {
    path: "/s260",
    component: () => import("../views/sample/S260v-for-filter.vue"),
  },
  {
    path: "/s250",
    component: () => import("../views/sample/S250v-for-get.vue"),
  },
  {
    path: "/s240",
    component: () => import("../views/sample/S240v-for-index.vue"),
  },
  {
    path: "/s230",
    component: () => import("../views/sample/S230v-for2.vue"),
  },
  {
    path: "/s220",
    component: () => import("../views/sample/S220v-for.vue"),
  },
  {
    path: "/s210",
    component: () => import("../views/sample/S210v-show.vue"),
  },
  {
    path: "/s200",
    component: () => import("../views/sample/S200useKey.vue"),
  },
  {
    path: "/s190",
    component: () => import("../views/sample/S190notUseKey.vue"),
  },
  {
    path: "/s180",
    component: () => import("../views/sample/S180v-else-if.vue"),
  },
  {
    path: "/s170",
    component: () => import("../views/sample/S170v-else.vue"),
  },
  {
    path: "/s160",
    component: () => import("../views/sample/S160v-if.vue"),
  },
  {
    path: "/s150",
    component: () => import("../views/sample/S150lazy.vue"),
  },
  {
    path: "/s140",
    component: () => import("../views/sample/S140trim.vue"),
  },
  {
    path: "/s130",
    component: () => import("../views/sample/S130number.vue"),
  },
  {
    path: "/s120",
    component: () => import("../views/sample/S120multiSelectBox.vue"),
  },
  {
    path: "/s110",
    component: () => import("../views/sample/S110singleSelectBox.vue"),
  },
  {
    path: "/s100",
    component: () => import("../views/sample/S100multiCheckBox.vue"),
  },
  {
    path: "/s90",
    component: () => import("../views/sample/S90singleCheckBox.vue"),
  },
  {
    path: "/s80",
    component: () => import("../views/sample/S80radioButton.vue"),
  },
  {
    path: "/s70",
    component: () => import("../views/sample/S70textBox.vue"),
  },
  {
    path: "/s60",
    component: () => import("../views/sample/S60v-on.vue"),
  },
  {
    path: "/s50",
    component: () => import("../views/sample/S50LifeCycleHook.vue"),
  },
  {
    path: "/s40",
    component: () => import("../views/sample/S40ConputedAndMethod.vue"),
  },
  {
    path: "/s30",
    component: () => import("../views/sample/S30ConputedProperty.vue"),
  },
  {
    path: "/s20",
    component: () => import("../views/sample/S20v-bind.vue"),
  },
  {
    path: "/S10",
    component: () => import("../views/sample/S10HelloVuejs.vue"),
  },
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

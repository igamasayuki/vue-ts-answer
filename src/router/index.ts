import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";
import ParentSample from "../views/sample/ParentSample.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/compVuex1",
    component: () => import("../components/sample/CompVuex1.vue"),
  },
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
    // name: "Ex20",
    component: () => import("../views/answer/Ex20.vue"),
  },
  {
    path: "/ex10",
    // name: "Ex10",
    component: () => import("../views/answer/Ex10.vue"),
  },
  {
    path: "/p359",
    component: () => import("../views/sample/P359.vue"),
  },
  {
    path: "/p353",
    component: () => import("../views/sample/P353.vue"),
  },
  {
    path: "/p350",
    component: () => import("../views/sample/P350.vue"),
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
    path: "/p143",
    component: () => import("../views/sample/P143BasicParent.vue"),
  },
  {
    path: "/parentSample",
    name: "ParentSample",
    component: ParentSample,
  },
  {
    path: "/p108",
    component: () => import("../views/sample/P108v-bind.vue"),
  },
  {
    path: "/p98",
    component: () => import("../views/sample/P98v-for-filter.vue"),
  },
  {
    path: "/p96",
    component: () => import("../views/sample/P96v-for-get.vue"),
  },
  {
    path: "/p95",
    component: () => import("../views/sample/P95v-for-index.vue"),
  },
  {
    path: "/p93_2",
    component: () => import("../views/sample/P93v-for2.vue"),
  },
  {
    path: "/p93",
    component: () => import("../views/sample/P93v-for.vue"),
  },
  {
    path: "/p91",
    component: () => import("../views/sample/P91v-show.vue"),
  },
  {
    path: "/p90",
    component: () => import("../views/sample/P90useKey.vue"),
  },
  {
    path: "/p87",
    component: () => import("../views/sample/P87notUseKey.vue"),
  },
  {
    path: "/p86",
    component: () => import("../views/sample/P86v-else-if.vue"),
  },
  {
    path: "/p85",
    component: () => import("../views/sample/P85v-else.vue"),
  },
  {
    path: "/p84",
    component: () => import("../views/sample/P84v-if.vue"),
  },
  {
    path: "/p81",
    component: () => import("../views/sample/P81lazy.vue"),
  },
  {
    path: "/p80",
    component: () => import("../views/sample/P80trim.vue"),
  },
  {
    path: "/p79",
    component: () => import("../views/sample/P79number.vue"),
  },
  {
    path: "/p74",
    component: () => import("../views/sample/P74multiSelectBox.vue"),
  },
  {
    path: "/p73",
    component: () => import("../views/sample/P73singleSelectBox.vue"),
  },
  {
    path: "/p71",
    component: () => import("../views/sample/P71multiCheckBox.vue"),
  },
  {
    path: "/p70",
    component: () => import("../views/sample/P70singleCheckBox.vue"),
  },
  {
    path: "/p69",
    component: () => import("../views/sample/P69radioButton.vue"),
  },
  {
    path: "/p67",
    component: () => import("../views/sample/P67textBox.vue"),
  },
  {
    path: "/p53",
    component: () => import("../views/sample/P53.vue"),
  },
  {
    path: "/p35",
    component: () => import("../views/sample/P35.vue"),
  },
  {
    path: "/p31",
    component: () => import("../views/sample/P31.vue"),
  },
  {
    path: "/p29",
    component: () => import("../views/sample/P29.vue"),
  },
  {
    path: "/p26",
    component: () => import("../views/sample/P26.vue"),
  },
  {
    path: "/p24",
    component: () => import("../views/sample/P24.vue"),
  },
  {
    path: "/p18",
    // name: "P18",
    component: () => import("../views/sample/P18.vue"),
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

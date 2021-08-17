import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import ParentSample from "../views/booksample/ParentSample.vue";
Vue.use(VueRouter);
const routes = [
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
        component: () => import("../views/booksample/P359.vue"),
    },
    {
        path: "/p353",
        component: () => import("../views/booksample/P353.vue"),
    },
    {
        path: "/p350",
        component: () => import("../views/booksample/P350.vue"),
    },
    {
        path: "/p345_2",
        component: () => import("../views/booksample/P345_2.vue"),
    },
    {
        path: "/p345",
        component: () => import("../views/booksample/P345.vue"),
    },
    {
        path: "/p172",
        component: () => import("../views/booksample/P172Parent.vue"),
    },
    {
        path: "/p168",
        component: () => import("../views/booksample/P168Parent.vue"),
    },
    {
        path: "/p165",
        component: () => import("../views/booksample/P165Parent.vue"),
    },
    {
        path: "/p159",
        component: () => import("../views/booksample/P159Parent.vue"),
    },
    {
        path: "/p152",
        component: () => import("../views/booksample/P152Parent.vue"),
    },
    {
        path: "/p151",
        component: () => import("../views/booksample/P151Parent.vue"),
    },
    {
        path: "/p143",
        component: () => import("../views/booksample/P143OrLaterParent.vue"),
    },
    {
        path: "/parentSample",
        name: "ParentSample",
        component: ParentSample,
    },
    {
        path: "/p108",
        component: () => import("../views/booksample/P108OrLater.vue"),
    },
    {
        path: "/p93",
        component: () => import("../views/booksample/P93OrLater.vue"),
    },
    {
        path: "/p84",
        component: () => import("../views/booksample/P84OrLater.vue"),
    },
    {
        path: "/p79",
        component: () => import("../views/booksample/P79OrLater.vue"),
    },
    {
        path: "/p67",
        component: () => import("../views/booksample/P67OrLater.vue"),
    },
    {
        path: "/p53",
        component: () => import("../views/booksample/P53.vue"),
    },
    {
        path: "/p35",
        component: () => import("../views/booksample/P35.vue"),
    },
    {
        path: "/p31",
        component: () => import("../views/booksample/P31.vue"),
    },
    {
        path: "/p29",
        component: () => import("../views/booksample/P29.vue"),
    },
    {
        path: "/p26",
        component: () => import("../views/booksample/P26.vue"),
    },
    {
        path: "/p18",
        // name: "P18",
        component: () => import("../views/booksample/P18.vue"),
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
        component: () => import(/* webpackChunkName: "about" */ "../views/About.vue"),
    },
];
const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});
export default router;
//# sourceMappingURL=index.js.map
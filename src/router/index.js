import Vue from "vue";
import VueRouter from "vue-router";
import Layout from "../components/Layout"
import Home from "@/views/home"
import Iframe from "@/views/iframe"



Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: 'layout',
    component: Layout,
    redirect: '/home',
    children: [
      {
        path: '/home',
        component: Home,
        meta: { title: '首页' }
      },
    ]
  },
  {
    path: "/car3g",
    component: Layout,
    redirect: '/home',
    children: [
      {
        path: '/car3g/zhongtie_car3g_qd',
        component: Iframe,
        meta: { title: '中铁车险签单保费' }
      },
      {
        path: '/car3g/taizhang_car3g_qd',
        name: "taizhang_car3g_qd",
        component: Iframe,
        meta: { title: '车险承保台账' }
      },
      {
        path: '/car3g/dianzibaodan_car3g_qd',
        component: Iframe,
        meta: { title: '车险电子保单' }
      },
      // {
      //   path: '/car3g/cheshang_car3g_qd',
      //   component: Iframe,
      //   meta: { title: '车商承保台账' }
      // },
      {
        path: '/car3g/bijia_car3g_qd',
        component: Iframe,
        meta: { title: '车险承保比价表' }
      },
    ]
  },
  {
    path: "/sff",
    component: Layout,
    redirect: '/home',
    children: [
      {
        path: '/sff/sffcbccheque',
        name: "sffcbccheque",
        component: Iframe,
        meta: { title: '收付费见费支票清单' }
      },
      {
        path: '/sff/sffyssxf',
        name: "sffyssxf",
        component: Iframe,
        meta: { title: '收付费应收手续费' }
      },
      {
        path: '/sff/sffrecpremlist',
        name: "sffrecpremlist",
        component: Iframe,
        meta: { title: '应收保费清单' }
      },
      {
        path: '/sff/sffrecpremBBRlist',
        name: "sffrecpremBBRlist",
        component: Iframe,
        meta: { title: '收付费未逾期未实收(BBR)' }
      },
      {
        path: '/sff/sffrefundlist',
        name: "sffrefundlist",
        component: Iframe,
        meta: { title: '收付费退票信息' }
      }
    ]
  },
  {
    path: "/prpall",
    component: Layout,
    redirect: '/home',
    children: [
      {
        path: '/prpall/prpcbqd_ZDGlist',
        name: "prpcbqd_ZDGlist",
        component: Iframe,
        meta: { title: '教职员工校责险清单' }
      },
      {
        path: '/prpall/prpcbqd_ZCJlist',
        name: "prpcbqd_ZCJlist",
        component: Iframe,
        meta: { title: '校(园)方责任保险' }
      },
    ]
  },
  

];


const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;

import Vue from 'vue'
import VueRouter from "vue-router";
import AskView from "@/views/AskView";
import JobsView from "@/views/JobsView";
import NewsView from "@/views/NewsView";
import UserView from "@/views/UserView";
import ItemView from "@/views/ItemView";

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: 'news'
    },
    {
      path: '/news',
      component: NewsView,
    },
    {
      path: '/ask',
      component: AskView,
    },
    {
      path: '/jobs',
      component: JobsView,
    },
    {
      path: '/user',
      component: UserView,
    },
    {
      path: '/item',
      component: ItemView,
    },
  ]
});

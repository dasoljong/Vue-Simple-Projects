import Vue from "vue";
import VueRouter from "vue-router";
import CountdownTimer from "@/components/CountdownTimer";
import BookInfo from "@/components/BookInfo";
import RandomUser from "@/components/RandomUser";
import Weather from "@/components/Weather";
import UserProfile from "@/components/UserProfile";

// 뷰 어플리케이션에 라우터 플러그인을 추가한다.
Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes: [
    { path: "/", component: CountdownTimer },
    { path: "/bookinfo", component: BookInfo },
    { path: "/randomuser", component: RandomUser },
    { path: "/weather", component: Weather },
    { path: "/userprofile", component: UserProfile },

  ],
});

export default router;

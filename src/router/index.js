import Vue from "vue";
import VueRouter from "vue-router";
import CountdownTimer from "@/components/CountdownTimer";
import BookInfo from "@/components/BookInfo";
import RandomUser from "@/components/RandomUser";
import Weather from "@/components/Weather";
import UserProfile from "@/components/UserProfile";
import CurrentTime from "@/components/CurrentTime";
import QuizApp from "@/components/QuizApp";
import RecipeApp from "@/components/RecipeApp";
import NoteApp from "@/components/NoteApp";
import todoList from "@/components/todoList";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes: [
    { path: "/", component: CountdownTimer },
    { path: "/book-info", component: BookInfo },
    { path: "/random-user", component: RandomUser },
    { path: "/weather", component: Weather },
    { path: "/user-profile", component: UserProfile },
    { path: "/current-time", component: CurrentTime },
    { path: "/quiz", component: QuizApp },
    { path: "/recipe", component: RecipeApp },
    { path: "/note", component: NoteApp },
    { path: "/todo-list", component: todoList }
  ]
});

export default router;

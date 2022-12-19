import Vue from "vue";
import Router from "vue-router";
import List from "./views/StudentList.vue";
import Edit from "./views/StudentEdit.vue";
import Delete from "./views/StudentDelete.vue";
import Add from "./views/StudentAdd.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base:
    process.env.NODE_ENV === "development"
      ? "/"
      : "/studentapp/student-frontend-vue2/dist/",
  routes: [
    {
      path: "/",
      name: "list",
      component: List,
    },
    {
      path: "/edit/:id",
      name: "edit",
      component: Edit,
      props: true,
    },
    {
      path: "/add",
      name: "add",
      component: Add,
    },
    {
      path: "/delete/:id",
      name: "delete",
      component: Delete,
      props: true,
    },
    /*
    {
      path: '*',
      component: NotFondComponent
    }
    */
  ],
});

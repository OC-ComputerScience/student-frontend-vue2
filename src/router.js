import Vue from 'vue'
import Router from 'vue-router'
import List from './views/student-list.vue'
import Edit from './views/student-edit.vue'
import Delete from './views/student-delete.vue'
import Add from './views/student-add.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base:
    process.env.NODE_ENV === 'development'
      ? '/'
      : '/webpages/studentapp_vue/dist/',
  routes: [
    {
      path: '/',
      name: 'list',
      component: List
    },
    {
      path: '/edit/:id',
      name: 'edit',
      component: Edit,
      props: true
    },
    {
      path: '/add',
      name: 'add',
      component: Add
    },
    {
      path: '/delete/:id',
      name: 'delete',
      component: Delete,
      props: true
    }
    /*
    {
      path: '*',
      component: NotFondComponent
    }
    */
  ]
})

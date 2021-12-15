import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/subject',
    name: 'Subject',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/student/Subject.vue')
  },
  {
    path: '/signin-t',
    name: 'Signint',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/login/Signin_t.vue')
  },
  
  {
    path: '/signup',
    name: 'Signup',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/login/Signup.vue')
  },
  {
    path: '/homelogin',
    name: 'Homelogin',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/login/Homelogin.vue')
  },
  {
    path: '/c',
    name: 'Classroom',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/login/classroom.vue')
  },
  {
    path: '/subj',
    name: 'subject',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/login/subject.vue')
  },
  {
    path: '/stream',
    name: 'Stream',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/student/Streamstudent.vue')
  },

  {
    path: '/CheckPoint',
    name: 'CheckPoint',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/detail/CheckPoint.vue')
  },
  {
    path: '/Lesson',
    name: 'Lesson',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/detail/Lesson.vue')
  },
  {
    path: '/CheckList',
    name: 'CheckList',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/detail/CheckList.vue')
  },
  {
    path: '/Detail',
    name: 'Detail',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/detail/Detail.vue')
  },
  {
    path: '/page3',
    name: 'Page3',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/T_work/page3.vue')
  },
  {
    path: '/page3-1',
    name: 'Page3-1',

    component: () => import('../views/T_work/page3-1.vue')
  },
  {
    path: '/page4',
    name: 'Page4',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/T_work/page4.vue')
  },
  {
    path: '/edit2/:id',
    name: 'edit2',
    component: () => import('../views/T_work/edit')
  },
  {
    path: '/add2/',
    name: 'add2',
    component: () => import('../views/T_work/add')
  },
  {
    path: '/submitwork',
    name: 'Submitwork',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/student/Submitwork.vue')
  },
  {
    path: '/unsubmitwork',
    name: 'Unsubmitwork',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/student/Unsubmitwork.vue')
  }, 
  {
    path: '/attendclass',
    name: 'Attendclass',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/student/Attendclass.vue')
  },
  {
    path: '/student',
    name: 'Student',
    component: () => import('../views/Student.vue')
  },
  {
    path: '/teacher',
    name: 'Teacher',
    component: () => import('../views/Teacher.vue')
  },
  {
    path: '/admin',
    name: 'Admin',
    component: () => import('../views/Admin.vue')
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

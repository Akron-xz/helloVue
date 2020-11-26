import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'


Vue.use(VueRouter)

const routes = [{
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
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
        path: '/admin',
        name: 'Admin',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/Administrator.vue')
    },
    {
        path: "/userLogin",
        name: "UserLogin",
        component: () =>
            import ('../views/UserLogin.vue')
    },
    {
        path: "/user",
        name: "User",
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/User.vue')
    },
    {
        path: "/signup",
        name: "SignUp",
        component: () =>
            import ('../views/SignUp.vue')
    },
    {
        path: "/adminmain",
        name: "AdminMain",
        component: () =>
            import ('../views/AdminMain.vue')
    },
    {

        path: "/MyInformation",
        name: "MyInformation",
        component: () =>
            import ('../views/MyInformation.vue')
    },
    {
        path: "/library",
        name: "Library",
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/Library.vue')

    },
    {
        path: "/modifymsg",
        name: "ModifyMsg",
        component: () =>
            import ('../views/ModifyMsg.vue')
    },
    {
        path: "/borrowhistory",
        name: "BorrowHistory",
        component: () =>
            import ('../views/BorrowHistory.vue')
    },
    {
        path: "/newissue",
        name: "NewIssue",
        component: () =>
            import ('../views/NewIssue.vue')
    },
    {
        path: "/booksearch",
        name: "BookSearch",
        component: () =>
            import ('../views/BookSearch.vue')
    },
    {
        path: "/MyBookshelves",
        name: "MyBookshelves",
        component: () =>
            import ('../views/MyBookshelves.vue')
    },
    {
        path: "/modifyAnnounce",
        name: "ModifyAnnounce",
        component: () =>
            import ('../views/ModifyAnnounce.vue')
    },
    {
        path: "/statistics",
        name: "Statistics",
        component: () =>
            import ('../views/Statistics.vue')
    },


]

const router = new VueRouter({
    routes
})

export default router
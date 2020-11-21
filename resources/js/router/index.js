import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store/index";

Vue.use(VueRouter);

// Pages
import Home from "../pages/home/Home";
import NotFoundPage from "../pages/notFound/NotFoundPage";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import Profile from "../pages/profile/Profile";

const routes = [
    {
        path: "/",
        component: Home,
        name: "home",
        meta: { title: "Home - MyApp" }
    },
    {
        path: "*",
        component: NotFoundPage,
        name: "notFoundPage",
        meta: { title: "Page not found - MyApp" }
    },
    {
        path: "/login",
        component: Login,
        name: "login",
        meta: {
            guest: true,
            title: "Login"
        }
    },
    {
        path: "/register",
        component: Register,
        name: "register",
        meta: {
            guest: true,
            title: "Register"
        }
    },
    {
        path: "/profile",
        component: Profile,
        name: "profile",
        meta: {
            auth: true,
            title: "Profile"
        }
    }
];

const router = new VueRouter({
    mode: "history",
    linkActiveClass: "active",
    routes
});

router.beforeEach((to, from, next) => {
    document.title = to.meta.title;
    if (to.matched.some(record => record.meta.guest)) {
        if (store.getters.getToken) {
            next({
                name: "profile"
            });
        } else {
            next();
        }
    } else if (to.matched.some(record => record.meta.auth)) {
        if (store.getters.getToken) {
            next();
        } else {
            next({
                name: "login"
            });
        }
    } else {
        next();
    }
});

export default router;

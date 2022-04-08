import { createRouter, createWebHistory } from 'vue-router'


const routes = [{
        path: '/',
        name: 'HomeContent',
        component: () =>
            import ( /*webpackChunkName: "homecontent"*/ "../view/HomeContent")
    },
    {
        path: '/About',
        name: 'AboutContent',
        component: () =>
            import ( /*webpackChunkName: "homecontent"*/ "../view/AboutContent")
    },
    {
        path: '/Foods',
        name: 'FoodsContent',
        component: () =>
            import ( /*webpackChunkName: "homecontent"*/ "../view/FoodsContent")
    }

]

const router = createRouter({
    history: createWebHistory(),
    routes

});
export default router
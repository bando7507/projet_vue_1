import { createRouter, createWebHistory } from 'vue-router'
import FoodsDetails from '../view/FoodsDetails'


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
        path: '/PesaNans',
        name: 'PesaNans',
        component: () =>
            import ( /*webpackChunkName: "homecontent"*/ "../view/PesaNans")
    },
    {
        path: '/Foods',
        name: 'FoodsContent',
        component: () =>
            import ( /*webpackChunkName: "homecontent"*/ "../view/FoodsContent")
    },

    {
        path: '/KeranJang',
        name: 'KeranJang',
        component: () =>
            import ( /*webpackChunkName: "homecontent"*/ "../view/KeranJang")
    },

    {
        path: '/FoodsDetailds/:id',
        name: 'FoodsDetailds',
        component: FoodsDetails
            // component: () =>
            //     import ( /*webpackChunkName: "homecontent"*/ "../view/FoodsDetails")
    }

]

const router = createRouter({
    history: createWebHistory(),
    routes

});
export default router
import Vue from "vue"
import Router from "vue-router"

// 导入组件，并在路由器中注册
import index from '@/components/index'
import toCheckin from '@/components/toCheckin'
import freshIdCard from '@/components/freshIdCard'
import headFace from '@/components/headFace'
import tower from '@/components/tower'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'index',
            component: index
        },
        {
            path: '/toCheckin',
            name: 'toCheckin',
            component: toCheckin
        },
        {
            path: '/freshIdCard',
            name: 'freshIdCard',
            component: freshIdCard
        },
        {
            path: '/headFace',
            name: 'headFace',
            component: headFace
        },
        {
            path: '/tower',
            name: 'tower',
            component: tower
        },
        // {
        //     path: '/freshIdCard',
        //     name: 'freshIdCard',
        //     component: require('@/components/freshIdCard')
        // },
    ]
})
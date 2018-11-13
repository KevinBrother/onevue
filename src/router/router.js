import Vue from "vue"
import Router from "vue-router"

// 导入组件，并在路由器中注册
import index from '@/components/index'
import toCheckin from '@/components/toCheckin'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/index',
            name: 'index',
            component: index
        },
        {
            path: '/toCheckin',
            name: 'toCheckin',
            component: toCheckin
        },
    ]
})
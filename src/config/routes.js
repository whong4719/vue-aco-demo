/**
 * Created by aco on 2017/2/28.
 * 定义 routes
 * vue 支持不断的套用 children 来匹配路径结构
 */

export default [
    {
        path: '/',
        component: resolve => require(['../structure/all'], resolve),
        children: [
            {
                path: '/page1',
                component: resolve => require(['../pages/page1'], resolve)
            },
            {
                path: '/page2',
                component: resolve => require(['../pages/page2'], resolve)
            },
            {
                path: '/page3',
                component: resolve => require(['../pages/page3'], resolve)
            },
            {
                path: '/page4',
                component: resolve => require(['../pages/page4'], resolve)
            },
            {
                path:'/',
                redirect:'/page1'
            }
        ]
    },
]
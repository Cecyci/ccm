import loadable from '@loadable/component'

const routes=[
    // {
    //     path: '/',
    //     component: loadable(() => import( '../pages/home')),
    //     title: '首页',
    // },
    // {
    //     path: '/home',
    //     component: loadable(() => import( '../pages/home')),
    //     title: '首页',
    // },
    // {
    //     path: '/login',
    //     component: loadable(() => import( '../pages/login')), // code split: defer load
    //     title: '登陆页面',
    // },
    {
        path: '/datainput',
        component: loadable(() => import( '../pages/datainput')),
        title: '数据输入',
    },
    {
        path: '/train',
        component: loadable(() => import( '../pages/train')),
        title: '训练',
    },
    {
        path: '/infoadd',
        component: loadable(() => import( '../pages/infoadd')), // code split: defer load
        title: '信息添加',
    }
]
export { routes };

import loadable from '@loadable/component'

const routes=[
    {
        path: '/',
        component: loadable(() => import( '../pages/home')),
        title: '首页',
    },
    {
        path: '/home',
        component: loadable(() => import( '../pages/home')),
        title: '首页',
    },
    {
        path: '/login',
        component: loadable(() => import( '../pages/login')), // code split: defer load
        title: '登陆页面',
    }
]
export { routes };

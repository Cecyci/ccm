import Login from '../pages/login'
import Home from '../pages/home'

const routes = [
    {
        path: "/",
        name: 'home-page',
        component: <Home />,
        // onEnter: onRouteEnter,
        meta: {
            icon: 'desktop',
            title: '主页',
            hideInMenu: true,
        }
    }, ,
    {
        path: "/home",
        name: 'home-page',
        component: <Home />,
        // onEnter: onRouteEnter,
        meta: {
            icon: 'desktop',
            title: '主页',
            hideInMenu: true,
        }
    },
    {
        path: "/login",
        name: 'login-page',
        component: <Login />,
        // onEnter: onRouteEnter,
        meta: {
            icon: 'desktop',
            title: '登陆',
            hideInMenu: true,
        }
    },
    {
        path: "*",
        name: 'error-page',
        component: <Error />,
        meta: {
            icon: 'file',
            title: '错误',
            hideInMenu: true,
        }
    }
]
function Error() {

    return (<p>error</p>)

}
// function onRouteEnter(nextState, replace, callback) {
//     const route = nextState.routes[nextState.routes.length - 1].path ? nextState.routes[nextState.routes.length - 1] : nextState.routes[0]
//     const storeData = store.getState().userData
//     const { access, hasGetInfo } = storeData
//     let token = getToken()
//     if (!token && route.path === '/login') {
//     } else if (!token && route.path !== '/login') {
//         replace({
//             pathname: "/login"
//         })
//     } else if (token && route.path === '/login') {
//         replace({
//             pathname: "/"
//         })
//     } else {
//         if (hasGetInfo) {
//             canChangeRouter(route, access, callback, replace)
//         }
//     }
//     addRouterHistory(route)
//     callback()
// }

export default routes;
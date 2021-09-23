const Vue = require('vue');
const Router = require('vue-router');

Vue.use(Router)

export default new Router({
    routes:[
        {
            path:'/login',
            name: 'Login',
            component: () => import('../views/Login')

        }
    ]
})
// export default new Router = [
//         {
//             path:'/login',
//             component: () => import('../views/Login')

//         }
//     ]

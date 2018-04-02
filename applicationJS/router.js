import Home from './components/home/home';
import Login from './components/login/login';
import Register from './components/register/register';

var routes = [
    { path: '', component: Home },
    { path: '/login', component: Login },
    { path: '/register', component: Register },
];

export default new VueRouter({
    // mode: 'history',
    routes,
    linkActiveClass: 'active'
});
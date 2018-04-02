import Navbar from './components/navbar/navbar';
import router from './router';

new Vue({
    el: '#app',
    router: router,
    components: { Navbar },
    template: `
        <div>
            <Navbar class="form-group"></Navbar>
            <router-view></router-view>
        </div>
    `
});
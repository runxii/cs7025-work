import { createApp } from 'vue';
import {createRouter, createWebHashHistory} from 'vue-router';

import "@/style.css";

import App from '@/App.vue';
import {routes} from '@/router.js';

// Create an instance of router
const router = createRouter({
    history: createWebHashHistory(), // 使用 HTML5 历史模式
    routes: routes,
});

createApp(App)
    .use(router)
    .mount('#app');




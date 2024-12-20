// Introduce different vue components
import HomePage from '@/pages/homepage.vue';
import Resume from '@/pages/resume.vue';
import Projects from '@/pages/projects.vue';
import NotFound from '@/pages/notfound.vue';

// Routes rules, leading to different pages
export const routes = [
    {
        path: '/homepage',
        name: 'HomePage',
        component: HomePage,
    },
    {
        path: '/resume',
        name: 'resume',
        component: Resume,
    },
    {
        path: '/projects',
        name: 'Projects',
        component: Projects,
    },
    {
        path: '/notfound',
        name: 'NotFoundPage',
        component: NotFound,
    }
];
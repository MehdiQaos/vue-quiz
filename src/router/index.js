import { createRouter, createWebHistory } from "vue-router";

import Quiz from '../views/Quiz.vue';
import Home from '../views/Ready.vue';
import Save from '../views/Save.vue';
import Leaderboard from '../views/Scores.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        alias: ['/home'],
    },
    {
        path: '/quiz',
        name: 'Quiz',
        component: Quiz
    },
    {
        path: '/save',
        name: 'Save',
        component: Save
    },
    {
        path: '/leaderboard',
        name: 'Leaderboard',
        component: Leaderboard
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
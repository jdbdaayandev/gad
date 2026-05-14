import { createWebHistory, createRouter } from 'vue-router'
import Home from '../pages/public/Home.vue';
import Actvities from '../pages/public/Actvities.vue';
import Directory from '../pages/public/Directory.vue';
import Resources from '../pages/public/Resources.vue';


const routes = [
  { path: '/', component: Home },
  { path: '/activities', component: Actvities },
  { path: '/directory', component: Directory },
  { path: '/resources', component: Resources },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;
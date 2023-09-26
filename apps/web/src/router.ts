import * as VueRouter from 'vue-router';
import Home from './pages/Home.vue';
import SignIn from './pages/SignIn.vue';
import Post from './pages/Post.vue';
import NotFound from './pages/NotFound.vue';
import PostCreate from './pages/post/PostCreate.vue';
import PostUpdate from './pages/post/PostUpdate.vue';

export const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: Home },
    { path: '/sign-in', component: SignIn },
    {
      path: '/post',
      component: Post,
      children: [
        {
          path: '/create',
          component: PostCreate,
        },
        {
          path: '/update/:id',
          component: PostUpdate,
        },
      ],
    },
    { path: '/:pathMatch(.*)*', component: NotFound },
  ],
});

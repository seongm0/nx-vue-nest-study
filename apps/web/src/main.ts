import { createApp, h, provide } from 'vue';
import { DefaultApolloClient } from '@vue/apollo-composable';
import App from './App.vue';
import { router } from './router';
import { createPinia } from 'pinia';
import { apolloClient } from './apollo-client';
import { abilitiesPlugin } from '@casl/vue';
import appAbility from './app-ability';

const app = createApp({
  setup() {
    provide(DefaultApolloClient, apolloClient);
  },

  render: () => h(App),
});

app.use(createPinia());
app.use(router);
app.use(abilitiesPlugin, appAbility, {
  useGlobalProperties: true,
});

app.mount('#app');

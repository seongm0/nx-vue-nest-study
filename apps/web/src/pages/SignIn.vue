<template>
  <div>
    <div v-if="authStore.loading"><h1>Loading ...</h1></div>
    <div v-else>
      <h1><span v-if="authStore.error">다시 </span>로그인하세요</h1>
      <div>
        <div>
          <label for="name">Name: </label>
          <input type="text" v-model="name" />
        </div>
        <div>
          <label for="password">Password: </label>
          <input type="password" v-model="password" />
        </div>
        <button type="button" @click="signIn">Sign In</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAuthStore } from '../stores/auth';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const authStore = useAuthStore();
const router = useRouter();

if (authStore.isSignedIn) {
  router.back();
}

const name = ref('');
const password = ref('');

const signIn = async () => {
  const isSignedIn = await authStore.signIn(name.value, password.value);

  await authStore.fetchMe();

  if (isSignedIn) {
    router.back();
  }
};
</script>

<style scoped lang="scss">
div {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>

<template>
  <div>
    <h1>NotFound</h1>
    <button @click="goToSignIn">signIn</button>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();

const goToSignIn = () => {
  console.log('to sign-in');
  router.push('/sign-in');
};
</script>

<style scoped lang="scss">
div {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}
</style>

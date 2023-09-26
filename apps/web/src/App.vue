<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/sign-in">SignIn</RouterLink>
        <RouterLink to="/post">Post</RouterLink>
        <button v-if="authStore.me" @click="authStore.signOut()">logout</button>
      </nav>
    </div>
  </header>

  <router-view />
</template>

<script setup lang="ts">
import { useAuthStore } from './stores/auth';

const authStore = useAuthStore();
</script>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
  background: hotpink;
}

header .wrapper nav {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}

header .wrapper a {
  color: black;
  background: lightgreen;
}
</style>

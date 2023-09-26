<template>
  <div>
    <h1>Posts</h1>
    <button v-if="canPostCreate" @click="create">create</button>
    <div v-if="postsLoading">Loading!!!!</div>
    <div v-else-if="postsError">{{ postsError }}</div>
    <div v-else>
      <div v-for="post in posts" :key="post.id">
        <h2>title: {{ post.title }}</h2>
        <span>authorId: {{ post.authorId }}</span>
        <p>content: {{ post.content }}</p>
        <button
          v-if="canPostUpdate && authStore.me.id === post.authorId"
          @click="update(post.id)"
        >
          update
        </button>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import { usePostsQuery } from '../hooks/query/usePostsQuery';
import { useAuthStore } from '../stores/auth';
import { computed } from 'vue';

const router = useRouter();
const authStore = useAuthStore();

const { posts, loading: postsLoading, error: postsError } = usePostsQuery();
const canPostUpdate = computed(
  () => authStore.isSignedIn && authStore.me?.role !== 'GUEST',
);
const canPostCreate = computed(
  () => authStore.isSignedIn && authStore.me?.role !== 'GUEST',
);

const update = (id: number) => {
  console.log('to post update');
  router.push(`/update/${id}`);
};

const create = () => {
  console.log('to post create');
  router.push('/create');
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

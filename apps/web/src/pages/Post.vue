<template>
  <div v-if="can('read', 'Post')">
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
import { useAbility } from '@casl/vue';
import { watch } from 'vue';

const router = useRouter();
const authStore = useAuthStore();
const { can } = useAbility();

watch(can, () => {
  console.log('can changed');
});

console.log('read: ', can('read', 'Post'));
console.log('update: ', can('update', 'Post'));
console.log('delete: ', can('delete', 'Post'));

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

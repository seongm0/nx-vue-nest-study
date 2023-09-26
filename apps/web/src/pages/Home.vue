<template>
  <div>
    <h1>Home</h1>
    <div v-if="loading">Loading!!!!</div>
    <div v-else-if="result">{{ result.hello }}</div>
    <button @click="login">login</button>
  </div>
  <div>
    <h1>Posts</h1>
    <div v-if="postsLoading">Loading!!!!</div>
    <div v-else-if="postsError">{{ postsError }}</div>
    <div v-else>
      <div v-for="post in posts" :key="post.id">
        <h2>title: {{ post.title }}</h2>
        <span>authorId: {{ post.authorId }}</span>
        <p>content: {{ post.content }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useQuery } from '@vue/apollo-composable';
import gql from 'graphql-tag';
import { useRouter } from 'vue-router';
import { usePostsQuery } from '../hooks/query/usePostsQuery';

const { result, loading } = useQuery<{ hello: string }>(gql`
  query {
    hello
  }
`);

const router = useRouter();
const { posts, loading: postsLoading, error: postsError } = usePostsQuery();

const login = () => {
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
}
</style>

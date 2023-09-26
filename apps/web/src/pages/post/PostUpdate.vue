<template>
  <div>
    <h1>PostUpdate</h1>
    <div v-if="loading">Loading!!!!</div>
    <div v-else-if="post">
      <div>
        <div>
          <label>title:</label>
          <input v-model="post.title" />
        </div>
        <div>
          <label>authorId:</label>
          <input v-model="post.authorId" />
        </div>
        <div>
          <label>content:</label>
          <input v-model="post.content" />
        </div>
      </div>
      <button v-if="canPostUpdate" @click="update()">update</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { usePostQuery } from '../../hooks/query/usePostQuery';
import { useRoute } from 'vue-router';
import { computed, ref, watch } from 'vue';
import { useUpdatePostMutation } from '../../hooks/mutation/useUpdatePostMutation';
import { useAuthStore } from '../../stores/auth';

const route = useRoute();
const authStore = useAuthStore();

const post = ref<any | undefined>(undefined);
const { loading, refetch } = usePostQuery();
const { mutate } = useUpdatePostMutation();
const canPostUpdate = computed(() => authStore.me?.role !== 'GUEST');

watch(
  () => route.params.id,
  (newId) => {
    console.log(newId);
    fetchPost(Number(newId));
  },
);

const fetchPost = async (id?: number) => {
  if (id) {
    const result = await refetch({ id });
    post.value = result?.data.post;
  }
};

fetchPost(Number(route.params.id));

const update = () => {
  console.log('Post 수정하기');

  if (post.value) {
    console.log(post.value);
    mutate({
      input: {
        title: post.value.title,
        authorId: post.value.authorId,
        content: post.value.content,
      },
      id: Number(post.value.id),
    });
  } else {
    alert('post가 없습니다.');
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

button {
  background: deeppink;
}
</style>

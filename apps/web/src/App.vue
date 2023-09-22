<template>
  <div>count is {{ count }}</div>
  <button @click="increment">Increment</button>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useQuery } from '@vue/apollo-composable';
import gql from 'graphql-tag';

const count = ref(0);

const { result } = useQuery(gql`
  query {
    hello
  }
`);

console.log(result);

function increment() {
  count.value++;
}
</script>

import { useQuery } from '@vue/apollo-composable';
import gql from 'graphql-tag';
import { computed } from 'vue';

const GET_POSTS = gql`
  query GetPosts {
    posts {
      id
      authorId
      content
      isRocked
      title
    }
  }
`;

export const usePostsQuery = () => {
  const { result, loading, error } = useQuery<{ posts: any[] }>(GET_POSTS);

  const posts = computed(() => result?.value?.posts ?? []);

  return { posts, loading, error };
};

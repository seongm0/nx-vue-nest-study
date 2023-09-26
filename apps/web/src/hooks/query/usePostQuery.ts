import { useQuery } from '@vue/apollo-composable';
import gql from 'graphql-tag';

const GET_POST = gql`
  query GetPost($id: Float!) {
    post(id: $id) {
      id
      authorId
      content
      isRocked
      title
    }
  }
`;

export const usePostQuery = () => {
  const { loading, error, refetch } = useQuery<{ post: any }, { id: number }>(
    GET_POST,
  );

  return { loading, error, refetch };
};

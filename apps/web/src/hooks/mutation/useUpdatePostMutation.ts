import gql from 'graphql-tag';
import { useMutation } from '@vue/apollo-composable';

const UPDATE_POST = gql`
  mutation UpdatePost($id: Float!, $input: UpdatePostInput!) {
    updatePost(id: $id, input: $input) {
      id
      title
      content
      isRocked
      authorId
    }
  }
`;

export const useUpdatePostMutation = () => {
  const { mutate } = useMutation<any, { id: number; input: any }>(UPDATE_POST);

  return { mutate };
};

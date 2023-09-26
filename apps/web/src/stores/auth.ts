import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
import { useMutation, useQuery } from '@vue/apollo-composable';
import gql from 'graphql-tag';

const SIGN_IN_MUTATION = gql`
  mutation SignIn($input: SignInInput!) {
    signIn(input: $input)
  }
`;

type SignInMutationInput = {
  input: {
    name: string;
    password: string;
  };
};

export const useAuthStore = defineStore('auth', () => {
  const accessToken = ref<string>();
  const isSignedIn = computed(() => !!accessToken.value);
  const me = ref<any | undefined>(undefined);
  const { mutate, loading, error } = useMutation<
    { signIn: string },
    SignInMutationInput
  >(SIGN_IN_MUTATION, {
    fetchPolicy: 'network-only',
  });

  const { refetch } = useQuery<{ me: any }>(
    gql`
      query GetMe {
        me {
          id
          name
          role
        }
      }
    `,
    undefined,
    { fetchPolicy: 'network-only', enabled: isSignedIn },
  );

  const signIn = async (name: string, password: string): Promise<boolean> => {
    const result = await mutate({
      input: {
        name,
        password,
      },
    });

    if (!result?.data) {
      return false;
    }

    accessToken.value = result.data.signIn;
    localStorage.setItem('accessToken', result.data.signIn);

    await fetchMe();

    return true;
  };

  const fetchMe = async () => {
    const meResult = await refetch();
    me.value = meResult?.data?.me;
  };

  const signOut = () => {
    accessToken.value = undefined;
    localStorage.setItem('accessToken', '');
    accessToken.value = undefined;
    me.value = undefined;
  };

  return {
    isSignedIn,
    accessToken,
    signIn,
    signOut,
    loading,
    error,
    me,
    fetchMe,
  };
});

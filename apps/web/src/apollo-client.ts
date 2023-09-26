import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
} from '@apollo/client/core';

const getHeaders = () => {
  const headers: Record<string, string> = {};

  const token = localStorage.getItem('accessToken');
  if (token) {
    headers.authorization = `Bearer ${token}`;
  }

  return headers;
};

const httpLink = createHttpLink({
  // You should use an absolute URL here
  uri: import.meta.env.VITE_GRAPHQL_ENDPOINT,
  fetch(input, init) {
    return fetch(input, {
      ...init,
      headers: {
        ...getHeaders(),
        ...init?.headers,
      },
    });
  },
});

// Cache implementation
const cache = new InMemoryCache();

// Create the apollo client
export const apolloClient = new ApolloClient({
  link: httpLink,
  cache,
});

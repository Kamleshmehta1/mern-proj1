import { api } from '../apiInterceptor';

export const chatApi = api.injectEndpoints({
  endpoints: (build) => ({
    userSearch: build.query({
      query: (filter) => ({
        url: '/search',
        method: 'GET',
        params: filter,
      }),
    }),
    findUserChats: build.query({
      query: (params) => ({
        url: '/',
        method: 'GET',
        params,
      }),
    }),
    findChat: build.query({
      query: (params) => ({
        url: '/find',
        method: 'GET',
        params,
      }),
    }),
    createChat: build.mutation({
      query: (body) => ({
        url: '/chats',
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const {
  useUserSearchQuery,
  useCreateChatMutation,
  useFindUserChatsQuery,
  useFindChatQuery,
} = chatApi;

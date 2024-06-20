import { api } from "../api/apiSlice";

const taskApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getTasks: builder.query({
      query: () => "/tasks",
      providesTags: ["task"],
    }),
  }),
});

export const { useGetTasksQuery } = taskApi;

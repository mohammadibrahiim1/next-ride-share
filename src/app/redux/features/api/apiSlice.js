import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api/v1",
  }),
  endpoints: (builder) => ({
    getProduct: builder.query({
      query: () => "/allMenu",
    }),
  }),
});

export const { useGetProductQuery } = productApi;

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IGetBooksResult, IQueryParams, ISearchResult } from "./interface";
const openLibraryApi = "https://openlibrary.org/";

const libraryApi = createApi({
  reducerPath: "libraryApi",
  baseQuery: fetchBaseQuery({ baseUrl: openLibraryApi }),
  endpoints: (builder) => ({
    search: builder.query<ISearchResult, IQueryParams>({
      query: (queryParams) =>
        `search.json?q=${queryParams.query}&limit=${queryParams.limit}`,
    }),
    getBooksInfo: builder.query<IGetBooksResult, string[]>({
      query: (bookIds) => `api/books?bibkeys=${bookIds.join(",")}&format=json`,
    }),
  }),
});

export default libraryApi;

export interface ISearchResult {
  docs: IWork[];
}

export interface IGetBooksResult {
  [key: string]: {
    thumbnail_url: string;
  };
}

export interface IWork {
  title: string;
  ratings_average: number;
  first_publish_year: number;
  number_of_pages_median: number;
  author_name: string[];
  cover_edition_key: string;
}

export interface IQueryParams {
  query: string;
  limit: number;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ILibraryProps {}

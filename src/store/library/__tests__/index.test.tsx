import { rest } from "msw";
import { setupServer } from "msw/node";
import { screen } from "@testing-library/react";

import { renderWithProviders } from "../../../utils/test-utils";
import ResultsList from "../../../components/ResultsList";

describe("Quick Search --- Header", () => {
  const handlers = [
    rest.get("https://openlibrary.org/search.json", (req, res, ctx) => {
      const mockWorks = [
        {
          title: "Harry Potter and the Philosopher's Stone",
          first_publish_year: 1997,
          number_of_pages_median: 303,
          ratings_average: 4.312,
          cover_edition_key: "OL22856696M",
          author_name: ["J. K. Rowling"],
        },
        {
          title: "Harry Potter and the Deathly Hallows",
          first_publish_year: 2007,
          number_of_pages_median: 673,
          ratings_average: 4.390558,
          cover_edition_key: "OL28172760M",
          author_name: ["J. K. Rowling"],
        },
        {
          title: "Harry Potter and the Order of the Phoenix",
          first_publish_year: 2000,
          number_of_pages_median: 870,
          ratings_average: 4.363184,
          cover_edition_key: "OL25662116M",
          author_name: ["J. K. Rowling"],
        },
        {
          title: "Memoirs of Sherlock Holmes [11 stories]",
          first_publish_year: 1894,
          number_of_pages_median: 259,
          ratings_average: 4.75,
          author_name: ["Arthur Conan Doyle OL161167A"],
        },
      ];
      const searchQuery = req.url.searchParams.get("q");
      const results = {
        docs: mockWorks.filter((work) =>
          work.title.includes(searchQuery ? searchQuery : "")
        ),
      };
      return res(ctx.json(results), ctx.delay(150));
    }),

    rest.get("https://openlibrary.org/api/books", (req, res, ctx) => {
      const mockBookInfo = {
        OL22856696M: {
          bib_key: "OL22856696M",
          info_url:
            "https://openlibrary.org/books/OL22856696M/Harry_Potter_and_the_Philosopher's_Stone",
          preview: "borrow",
          preview_url:
            "https://archive.org/details/harrypotterphilo0000rowl_j1k7",
          thumbnail_url: "https://covers.openlibrary.org/b/id/13257896-S.jpg",
        },
        OL28172760M: {
          bib_key: "OL28172760M",
          info_url:
            "https://openlibrary.org/books/OL28172760M/Harry_Potter_and_the_Deathly_Hallows_Book_7",
          preview: "noview",
          preview_url:
            "https://openlibrary.org/books/OL28172760M/Harry_Potter_and_the_Deathly_Hallows_Book_7",
          thumbnail_url: "https://covers.openlibrary.org/b/id/10110415-S.jpg",
        },
        OL25662116M: {
          bib_key: "OL25662116M",
          info_url:
            "https://openlibrary.org/books/OL25662116M/Harry_Potter_and_the_Order_of_the_Phoenix",
          preview: "full",
          preview_url:
            "https://archive.org/details/harrypotterorder0000rowl_c0z8",
          thumbnail_url: "https://covers.openlibrary.org/b/id/10523466-S.jpg",
        },
      };
      return res(ctx.json(mockBookInfo), ctx.delay(150));
    }),
  ];

  const server = setupServer(...handlers);

  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  it('queries for "Harry Potter" and receives 3 works from the Search API', async () => {
    renderWithProviders(<ResultsList query="Harry Potter" />);
    const findHarryPotterWorks = await screen.findAllByText(/Harry Potter/);
    expect(findHarryPotterWorks).toHaveLength(3);
  });

  it('queries for "Harry Potter" and receives 3 covers from the Book API', async () => {
    renderWithProviders(<ResultsList query="Harry Potter" />);
    const findHarryPotterCoverBooks = await screen.findAllByTestId("bookCover");
    expect(findHarryPotterCoverBooks).toHaveLength(3);
  });

  it('queries for "Lord of the Rings" and receives 0 results from the Search API.', async () => {
    renderWithProviders(<ResultsList query="Lord of the Rings" />);
    const noResultsMessage = await screen.findByText(
      /There's no result to this search./
    );
    expect(noResultsMessage).toBeInTheDocument();
  });

  it('queries for "Sherlock" and receives 0 covers from the Book API', async () => {
    renderWithProviders(<ResultsList query="Sherlock" />);
    const findHarryPotterCoverBooks = await screen.findAllByTestId(
      "bookWithoutCover"
    );
    expect(findHarryPotterCoverBooks).toHaveLength(1);
  });
});

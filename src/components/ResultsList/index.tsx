import Skeleton from "react-loading-skeleton";

import Book from "../../assets/icons/book";
import libraryApi from "../../store/library/apiSlice";
import { IWork } from "../../store/library/interface";

import "react-loading-skeleton/dist/skeleton.css";

import {
  List,
  Triangle,
  BookCover,
  Title,
  BookDetails,
  Content,
  Item,
  Authors,
  Rating,
  EditInfo,
  Link,
  EmptySearch,
} from "./index.style";
import Star from "../../assets/icons/star";

interface IResultsListProps {
  query: string;
}

const SEARCH_RESULTS_LIMIT = 5;

const ResultsList = (props: IResultsListProps) => {
  const { query } = props;

  const { data: searchResultsData } = libraryApi.useSearchQuery({
    query: encodeURIComponent(query),
    limit: SEARCH_RESULTS_LIMIT,
  });

  const { data: getBooksInfoData } = libraryApi.useGetBooksInfoQuery(
    searchResultsData?.docs.map((result) => result.cover_edition_key) || []
  );

  const renderItem = (index: number, resultItem?: IWork) => {
    const isBookDataLoaded = resultItem && getBooksInfoData;

    const hasBookInfoToLoad =
      isBookDataLoaded &&
      ((resultItem.cover_edition_key &&
        getBooksInfoData[resultItem.cover_edition_key]) ||
        !resultItem.cover_edition_key);

    const isCoverLoaded =
      hasBookInfoToLoad &&
      resultItem.cover_edition_key &&
      getBooksInfoData[resultItem.cover_edition_key];

    const hasAuthor =
      resultItem && resultItem.author_name
        ? resultItem.author_name.join(", ")
        : "";

    const hasPublicationYear =
      resultItem && resultItem.first_publish_year
        ? resultItem?.first_publish_year
        : "";
    const thumbnailRegex = /-S.(?:.(?!-S))+$/;

    return (
      <Item key={index}>
        <Link
          href={
            resultItem
              ? `https://www.amazon.co.uk/s?k=${encodeURIComponent(
                  resultItem.title
                )}`
              : "#"
          }
          target="_blank"
        >
          <BookCover>
            {hasBookInfoToLoad ? (
              isCoverLoaded ? (
                <img
                  src={getBooksInfoData[
                    resultItem.cover_edition_key
                  ].thumbnail_url.replace(thumbnailRegex, "-M.jpg")}
                  alt={resultItem.title}
                  width={52}
                  height={72}
                  data-testid="bookCover"
                />
              ) : (
                <div
                  data-testid="bookWithoutCover"
                >
                  <Book />
                </div>
              )
            ) : (
              <Skeleton height={72} containerTestId="SkeletonBookCover" />
            )}
          </BookCover>

          <BookDetails>
            {resultItem ? (
              <>
                <Title>{resultItem.title}</Title>
                {resultItem.author_name || resultItem.first_publish_year ? (
                  <Authors>{`${hasAuthor} ${hasPublicationYear}`}</Authors>
                ) : null}
                {resultItem.number_of_pages_median ? (
                  <EditInfo>
                    {`Pages: ${resultItem.number_of_pages_median}`}
                  </EditInfo>
                ) : null}

                {resultItem.ratings_average ? (
                  <Rating>
                    <Star />
                    {`${resultItem.ratings_average.toFixed(1)}`}
                  </Rating>
                ) : null}
              </>
            ) : (
              <>
                <Skeleton
                  count={1}
                  height={18}
                  containerTestId="SkeletonTitle"
                />
                <Skeleton
                  count={2}
                  height={9}
                  width={163}
                  containerTestId="SkeletonAuthorYear"
                />
                <Skeleton
                  count={1}
                  height={9}
                  width={100}
                  containerTestId="SkeletonPages"
                />
                <Skeleton
                  count={1}
                  height={9}
                  width={100}
                  containerTestId="SkeletonRatings"
                />
              </>
            )}
          </BookDetails>
        </Link>
      </Item>
    );
  };

  const renderItemEmpty = () => {
    return (
      <Item>
        <EmptySearch>
          <p>There's no result to this search.</p>
        </EmptySearch>
      </Item>
    );
  };

  return (
    <List>
      <Triangle />
      <Content>
        {searchResultsData
          ? searchResultsData.docs.length > 0
            ? searchResultsData.docs.map((result, index) =>
                renderItem(index, result)
              )
            : renderItemEmpty()
          : renderItem(0)}
      </Content>
    </List>
  );
};

export default ResultsList;

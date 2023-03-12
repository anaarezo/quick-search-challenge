import Skeleton from "react-loading-skeleton";

import Book from "../../assets/icons/book";
import libraryApi from "../../store/library/apiSlice";
import { IWork } from "../../store/library/interface";

import {
  List,
  Triangle,
  BookCover,
  Title,
  BookDetails,
  Content,
  Item,
  Authors,
  ReleaseYear,
  EditInfo,
} from "./index.style";

interface IResultsListProps {
  query: string;
}

const ResultsList = ({ query }: IResultsListProps) => {
  const { data: searchResultsData } = libraryApi.useSearchQuery({
    query: encodeURIComponent(query),
    limit: 3,
  });
  const { data: getBooksInfoData } = libraryApi.useGetBooksInfoQuery(
    searchResultsData?.docs.map((result) => result.cover_edition_key) || []
  );
  const renderItem = (index: number, resultItem?: IWork) => {
    return (
      <Item key={index}>
        <a
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
            {resultItem && getBooksInfoData ? (
              getBooksInfoData[resultItem.cover_edition_key] ? (
                <img
                  src={
                    getBooksInfoData[resultItem.cover_edition_key].thumbnail_url
                  }
                  alt={resultItem.title}
                  width={72}
                  height={72}
                />
              ) : (
                <Book />
              )
            ) : (
              <Skeleton height={30} />
            )}
          </BookCover>
          <BookDetails>
            <Title className="">
              {resultItem ? resultItem.title : <Skeleton />}
            </Title>
            {resultItem ? (
              resultItem.author_name ? (
                <Authors> {resultItem.author_name.join(", ")} </Authors>
              ) : null
            ) : (
              <Authors>
                <Skeleton />
              </Authors>
            )}

            <ReleaseYear>
              {resultItem ? resultItem.first_publish_year : <Skeleton />}
            </ReleaseYear>
            <EditInfo>{"Editora" || <Skeleton />}</EditInfo>
          </BookDetails>
        </a>
      </Item>
    );
  };

  const renderItemEmpty = () => {
    return (
      <Item>
        <p>There's no result to this search.</p>
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

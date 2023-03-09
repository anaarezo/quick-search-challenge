import Skeleton from "react-loading-skeleton";

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

const ResultsList = () => {
  return (
    <List>
      <Triangle />
      <Content>
        <Item>
          <BookCover>
            <img
              src={""}
              className="thumb-nail"
              alt="Book Cover"
              width={72}
              height={72}
            />
            <Skeleton height={30} />
          </BookCover>
          <BookDetails>
            <Title className="">{"Title" || <Skeleton />}</Title>
            <Authors>{"Authors" || <Skeleton />}</Authors>
            <ReleaseYear>{"Release Year" || <Skeleton />}</ReleaseYear>
            <EditInfo>{"Editora" || <Skeleton />}</EditInfo>
          </BookDetails>
        </Item>
      </Content>
    </List>
  );
};

export default ResultsList;

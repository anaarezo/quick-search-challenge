import styled from "styled-components";

export const List = styled.div`
  position: absolute;
  background: #e3e3e3;
  margin-top: 10px;
  width: 432px;
  right: 12px;
  flex-direction: column;
`;

export const Triangle = styled.div`
  margin-top: -10px;
  position: relative;
  left: 290px;
  width: 0px;
  height: 0px;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-bottom: 10px solid #e3e3e3;
`;

export const Content = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

export const Item = styled.li``;

export const Link = styled.a`
  display: flex;
  text-decoration: none;
  color: #000000;
`;

export const BookCover = styled.div`
  margin: 10px;
  width: 72px;
  height: 72px;
`;

export const BookDetails = styled.div`
  flex-direction: row;
  text-align: left;
  padding: 10px;
  width: 100%;
`;

export const Title = styled.span`
  font-size: 14px;
  font-weight: bold;
  white-space: nowrap;
  overflow: hidden;
  max-width: 300px;
  text-overflow: ellipsis;
  display: block;
`;

export const Authors = styled.div`
  margin-top: 5px;
  font-size: 12px;
`;

export const Rating = styled.div`
  font-size: 12px;
`;

export const EditInfo = styled.div`
  font-size: 12px;
`;

export const EmptySearch = styled.div`
  padding: 1.5em;
`;

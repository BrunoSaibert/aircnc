import styled from "styled-components";

export const List = styled.ul`
  width: 100%;
  list-style: none;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  margin-bottom: 30px;
`;

export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
`;

export const Img = styled.header`
  background-image: url(${props => props.bgImg});
  width: 100%;
  height: 120px;
  background-size: cover;
  border-radius: 4px;
`;

export const Company = styled.strong`
  margin-top: 10px;
  font-size: 24px;
  color: #444;
`;

export const Price = styled.span`
  font-size: 15px;
  color: #999;
`;

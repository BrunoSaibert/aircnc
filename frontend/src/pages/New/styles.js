import styled from "styled-components";

export const Title = styled.p`
  font-size: 22px;
  line-height: 30px;
  margin-bottom: 30px;
`;

export const Thumbnail = styled.label`
  background-image: url(${props => props.bgImg});
  border: 1px dashed #ddd;

  cursor: pointer;
  margin-bottom: 20px !important;
  background-size: cover;
  height: 160px;

  display: flex;
  align-items: center;
  justify-content: center;

  &.has-thumbnail {
    border: 0;
  }

  input {
    display: none;
  }
`;

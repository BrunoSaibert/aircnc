import styled from "styled-components";

export const Container = styled.div`
  margin: 80px auto 0;
  max-width: 450px;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  button.btn {
    border: 0;
    border-radius: 2px;
    width: 100%;
    height: 42px;
    padding: 0 20px;
    font-size: 16px;
    font-weight: bold;
    background: #f05a5b;
    color: #fff;
    cursor: pointer;

    &:hover {
      background: #f14f50;
    }
  }
`;

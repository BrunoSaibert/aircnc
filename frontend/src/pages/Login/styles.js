import styled from "styled-components";

export const Title = styled.p`
  font-size: 22px;
  line-height: 30px;
  margin-bottom: 30px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  label {
    font-size: 14px;
    color: #444;
    font-weight: bold;
    margin-bottom: 8px;
  }

  input {
    margin-bottom: 20px;
    border: 1px solid #ddd;
    border-radius: 2px;
    height: 45px;
    padding: 0 15px;
    font-size: 16px;
  }
`;

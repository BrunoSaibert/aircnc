import React from "react";

import * as S from "./styles";

export default function Form({ children, onSubmit }) {
  return <S.Form onSubmit={onSubmit}>{children}</S.Form>;
}

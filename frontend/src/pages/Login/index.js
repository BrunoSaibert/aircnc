import React, { useState } from "react";

import api from "../../services/api";

import Form from "../../components/Form";

import * as S from "./styles";

export default function Login({ history }) {
  const [email, setEmail] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    const response = await api.post("/sessions", { email });

    const { _id } = response.data;

    localStorage.setItem("user", _id);

    history.push("/dashboard");
  }

  return (
    <>
      <S.Title>
        Ofereça <strong>spots</strong> para programadores e encontre{" "}
        <strong>talentos</strong> para sua empresa
      </S.Title>

      <Form onSubmit={handleSubmit}>
        <label htmlFor="email">E-MAIL *</label>
        <input
          type="email"
          id="email"
          placeholder="Seu melhor e-mail"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />

        <button className="btn" type="submit">
          Entrar
        </button>
      </Form>
    </>
  );
}

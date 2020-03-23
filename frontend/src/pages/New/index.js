import React, { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";

import api from "../../services/api";

import Form from "../../components/Form";

import camera from "../../assets/camera.svg";

import * as S from "./styles";

export default function New({ history }) {
  const [thumbnail, setThumbnail] = useState(null);
  const [company, setCompany] = useState("");
  const [techs, setTechs] = useState("");
  const [price, setPrice] = useState("");

  const preview = useMemo(() => {
    return thumbnail ? URL.createObjectURL(thumbnail) : null;
  }, [thumbnail]);

  async function handleSubmit(e) {
    e.preventDefault();

    const data = new FormData();
    const user_id = localStorage.getItem("user");

    data.append("thumbnail", thumbnail);
    data.append("company", company);
    data.append("techs", techs);
    data.append("price", price);

    await api.post("/spots", data, {
      headers: { user_id }
    });

    history.push("/dashboard");
  }

  return (
    <Form onSubmit={handleSubmit}>
      <S.Thumbnail bgImg={preview} className={thumbnail ? "has-thumbnail" : ""}>
        <input type="file" onChange={e => setThumbnail(e.target.files[0])} />
        {!thumbnail && <img src={camera} alt="Select img" />}
      </S.Thumbnail>

      <label htmlFor="company">EMPRESA *</label>
      <input
        type="text"
        id="company"
        placeholder="Sua emprea incrível"
        value={company}
        onChange={e => setCompany(e.target.value)}
      />

      <label htmlFor="techs">
        TECNOLOGIA * <span>(separadas por vírgula)</span>
      </label>
      <input
        type="text"
        id="techs"
        placeholder="Quais tecnologias usam?"
        value={techs}
        onChange={e => setTechs(e.target.value)}
      />

      <label htmlFor="price">
        VALOR DA DIÁRIA * <span>(em branco para GRATUITO)</span>
      </label>
      <input
        type="text"
        id="price"
        placeholder="Valor cobrado por dia"
        value={price}
        onChange={e => setPrice(e.target.value)}
      />

      <button className="btn" type="submit">
        Cadastrar
      </button>

      <Link to="/dashboard">
        <>Voltar para dashboard</>
      </Link>
    </Form>
  );
}

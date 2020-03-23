import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import api from "../../services/api";

import * as S from "./styles";

export default function Dashboard() {
  const [spots, setSpots] = useState([]);

  useEffect(() => {
    async function loadSpots() {
      const user_id = localStorage.getItem("user");

      const response = await api.get("/dashboard", {
        headers: { user_id }
      });

      setSpots(response.data);
    }
    loadSpots();
  }, []);

  return (
    <>
      <S.List>
        {spots.map(spot => (
          <S.ListItem key={spot._id}>
            <S.Img bgImg={spot.thumbnail_url} />
            <S.Company>{spot.company}</S.Company>
            <S.Price>{spot.price ? `R$${spot.price}/dia` : "GRATUITO"}</S.Price>
          </S.ListItem>
        ))}
      </S.List>

      <Link to="/new">
        <button className="btn">Cadastrar novo spot</button>
      </Link>
    </>
  );
}

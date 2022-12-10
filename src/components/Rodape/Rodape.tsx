import React from "react";
import { useNavigate } from "react-router-dom";
import { useListaDeParticipante } from "../../state/hooks";

export const Rodape = () => {
  const participantes = useListaDeParticipante();
  const navigate = useNavigate();
  
  const inciarSorteio = () => {
    navigate('/sorteio')
  }
  return (
    <footer>
      <button disabled={participantes.length < 3} onClick={inciarSorteio}>
        Inciar brincadeira
      </button>
    </footer>
  );
};

import React from "react";
import { useListaDeParticipante } from "../../state/hooks";

export const ListaParticipantes = () => {
  const listaParticipantes: string[] = useListaDeParticipante();

  return (
    <ul>
      {listaParticipantes.map((participante) => (
        <li key={participante}>{participante}</li>
      ))}
    </ul>
  );
};

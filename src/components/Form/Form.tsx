import React, { useRef, useState } from "react";
import {
  useAdicionarParticipante,
  useMessagemDeError,
} from "../../state/hooks";

const Form = () => {
  const [nome, setNome] = useState("");
  const inputRefName = useRef<HTMLInputElement>(null);

  const adicionarParticipante = (evento: React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault();
    adicionarParticipanteNaLista(nome);
    setNome("");
    inputRefName.current?.focus();
  };
  const adicionarParticipanteNaLista = useAdicionarParticipante();
  const messagemError = useMessagemDeError();
  return (
    <form onSubmit={adicionarParticipante}>
      <input
        ref={inputRefName}
        type="text"
        placeholder="Insira os nomes dos participantes"
        value={nome}
        onChange={(evento) => setNome(evento?.target.value)}
      />
      <button title="adicionar" disabled={!nome}>
        Adicionar
      </button>
      {messagemError && <p role="alert">{messagemError}</p>}
    </form>
  );
};

export default Form;

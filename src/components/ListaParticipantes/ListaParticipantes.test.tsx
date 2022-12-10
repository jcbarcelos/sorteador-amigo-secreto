import React from "react";
import { render, screen } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import { ListaParticipantes } from "./ListaParticipantes";
import { useListaDeParticipante } from "../../state/hooks";

jest.mock("../../state/hooks", () => {
  return {
    useListaDeParticipante: jest.fn(),
  };
});
describe("Lista do participantes lista vazia", () => {
  beforeEach(() => {
    (useListaDeParticipante as jest.Mock).mockReturnValue([]);
   
  });
  test("deve ser renderizado sem elementos", () => {
    render(
      <RecoilRoot>
        <ListaParticipantes />
      </RecoilRoot>
    );
    const itens = screen.queryAllByRole("listitem");
    expect(itens).toHaveLength(0);
  });
});
describe("Lista do participantes preenchida", () => {
  const listaDosparticipantes = ["Ana", "Catarina"];
  beforeEach(() => {
    (useListaDeParticipante as jest.Mock).mockReturnValue(
      listaDosparticipantes
    );
    
  });

  test("deve ser renderizado com elementos", () => {
    render(
      <RecoilRoot>
        <ListaParticipantes />
      </RecoilRoot>
    );
    const itens = screen.queryAllByRole("listitem");
    expect(itens).toHaveLength(listaDosparticipantes.length);
  });
});

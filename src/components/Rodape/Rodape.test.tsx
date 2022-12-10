import React from "react";
import { act, fireEvent, render, screen } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import { Rodape } from "./Rodape";
import { useListaDeParticipante } from "../../state/hooks/";

jest.mock("../../state/hooks", () => {
  return {
    useListaDeParticipante: jest.fn(),
  };
});
const mockNavegacao = jest.fn();

jest.mock("react-router-dom", () => {
  return {
    useNavegate: () => mockNavegacao(),
  };
});

describe("Rodape sem participantes", () => {
  beforeEach(() => {
    (useListaDeParticipante as jest.Mock).mockReturnValue([]);
    render(
      <RecoilRoot>
        <Rodape />
      </RecoilRoot>
    );
  });
  test("a brincadeira não pode ser iniciada ", () => {
    const botao = screen.getByRole("button");
    expect(botao).toBeDisabled();
  });
});
describe("Rodape com participantes", () => {
  beforeEach(() => {
    (useListaDeParticipante as jest.Mock).mockReturnValue([
      "Ana",
      "Catarina",
      "Josefina",
      "Jose",
    ]);
    render(
      <RecoilRoot>
        <Rodape />
      </RecoilRoot>
    );
  });
  test("a brincadeira pode ser iniciada ", () => {
    const botao = screen.getByRole("button");
    expect(botao).not.toBeDisabled();
  });
  test("a brincadeira foi iniciada ", () => {
    const botao = screen.getByRole("button");
    fireEvent.click(botao);
    try {
      expect(mockNavegacao).toHaveBeenCalledTimes(1);
      expect(mockNavegacao).toHaveBeenCalledWith("/sorteio");
    } catch (error) {
      console.error(error);
    }
  });
});

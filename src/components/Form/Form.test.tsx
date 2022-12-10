import React from "react";
import { act, fireEvent, render, screen } from "@testing-library/react";
import Form from "./Form";
import { RecoilRoot } from "recoil";

describe("Formulário do participantes", () => {
  beforeEach(() => {
    render(
      <RecoilRoot>
        <Form />
      </RecoilRoot>
    );
  });
  test("quando o input esta vazio, novos participantes não podem ser adicionados ", () => {
    const input = screen.getByPlaceholderText(
      "Insira os nomes dos participantes"
    );
    const botao = screen.getByRole("button");
    expect(input).toBeInTheDocument();
    expect(botao).toBeDisabled();
  });

  test("adicionar um participante caso exista um nome preechido", () => {
    const input = screen.getByPlaceholderText(
      "Insira os nomes dos participantes"
    );
    const botao = screen.getByRole("button");

    //passando parametros
    fireEvent.change(input, {
      target: {
        value: "Ana Catarina",
      },
    });
    fireEvent.click(botao);
    expect(input).toHaveFocus();
    expect(input).toHaveValue("");
  });
  test("nomes duplicados não pode ser adicionado na lista de participante", () => {
    const input = screen.getByPlaceholderText(
      "Insira os nomes dos participantes"
    );
    const botao = screen.getByRole("button");

    //passando parametros
    fireEvent.change(input, {
      target: {
        value: "Ana Catarina",
      },
    });
    fireEvent.click(botao);
    fireEvent.change(input, {
      target: {
        value: "Ana Catarina",
      },
    });
    fireEvent.click(botao);
    const messageDeError = screen.getByRole("alert");
    expect(messageDeError.textContent).toBe(
      "Nomes duplicados não são permitidos!"
    );
  });
  test("messagem error sumir após os timers", () => {
    jest.useFakeTimers();
   
    const input = screen.getByPlaceholderText(
      "Insira os nomes dos participantes"
    );
    const botao = screen.getByRole("button");

    //passando parametros
    fireEvent.change(input, {
      target: {
        value: "Ana Catarina",
      },
    });
    fireEvent.click(botao);
    fireEvent.change(input, {
      target: {
        value: "Ana Catarina",
      },
    });
    fireEvent.click(botao);
    let messageDeError = screen.queryByRole("alert");
    expect(messageDeError).toBeInTheDocument();
    act(() => {
      jest.runAllTimers();
    });

    messageDeError = screen.queryByRole("alert");
    expect(messageDeError).toBeNull();
  });
});

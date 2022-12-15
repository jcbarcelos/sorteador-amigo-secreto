import { fireEvent, render, screen } from '@testing-library/react'
import { RecoilRoot } from 'recoil'
import { useListaDeParticipante, useResultadoDoSorteio } from '../../state/hooks'
import { Sorteio } from './Sorteio'

jest.mock('../../state/hooks/useListaDeParticipante', () => {
  return {
    useListaDeParticipante: jest.fn(),
  }
})
jest.mock('../../state/hooks/useResultadoDoSorteio', () => {
  return {
    useResultadoDoSorteio: jest.fn(),
  }
})

describe('na pagina de sorteio', () => {
  const participantes = ['Ana', 'Catarina', 'Jorel']
  const resultadoSorteio = new Map([
    ['Ana', 'Jorel'],
    ['Jorel', 'Catarina'],
    ['Catarina', 'Ana'],
  ])
  beforeEach(() => {
    ;(useListaDeParticipante as jest.Mock).mockReturnValue(participantes)
    ;(useResultadoDoSorteio as jest.Mock).mockReturnValue(resultadoSorteio)
    render(
      <RecoilRoot>
        <Sorteio />
      </RecoilRoot>,
    )
  })

  test('todos os participantes podem exibir o seu amigo secreto', () => {
    const opcoes = screen.queryAllByRole('option')
    expect(opcoes).toHaveLength(participantes.length)
  })

  test('o amigo secreto é exibido quando soliciatado', () => {
    const selecionePlaceholder = screen.getByPlaceholderText(
      'Selecione o seu nome',
    )
    fireEvent.change(selecionePlaceholder, {
      target: {
        value: participantes[0],
      },
    })
    const botao = screen.getByRole('button')
    fireEvent.click(botao)
    const amigoSecreto = screen.getByRole('alert')
    expect(amigoSecreto).toBeInTheDocument()
  })
})

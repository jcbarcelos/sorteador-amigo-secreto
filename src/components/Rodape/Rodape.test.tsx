/* eslint-disable testing-library/no-render-in-setup */
/* eslint-disable-next-line testing-library/no-render-in-setup */
import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import { RecoilRoot } from 'recoil'
import { Rodape } from './Rodape'
import { useListaDeParticipante, useSorteador } from '../../state/hooks'

const mockSorteio = jest.fn()
const mockNavegacao = jest.fn()

jest.mock('../../state/hooks/useListaDeParticipante', () => {
  return {
    useListaDeParticipante: jest.fn(),
  }
})

jest.mock('../../state/hooks/useSorteador', () => {
  return {
    useSorteador: () => mockSorteio,
  }
})

jest.mock('react-router-dom', () => {
  return {
    useNavigate: () => mockNavegacao,
  }
})

describe('Rodape sem participantes', () => {
  beforeEach(() => {
    ;(useListaDeParticipante as jest.Mock).mockReturnValue([])
    render(
      <RecoilRoot>
        <Rodape />
      </RecoilRoot>,
    )
  })
  test('a brincadeira não pode ser iniciada ', () => {
    const botao = screen.getByRole('button')
    expect(botao).toBeDisabled()
  })
})
describe('Rodape com participantes', () => {
  beforeEach(() => {
    ;(useListaDeParticipante as jest.Mock).mockReturnValue([
      'Ana',
      'Catarina',
      'Josefina',
      'Jose',
    ])
    render(
      <RecoilRoot>
        <Rodape />
      </RecoilRoot>,
    )
  })
  test('a brincadeira pode ser iniciada ', () => {
    const botao = screen.getByRole('button')
    expect(botao).not.toBeDisabled()
  })
  test('a brincadeira foi iniciada ', () => {
    const botao = screen.getByRole('button')
    fireEvent.click(botao)

    expect(mockNavegacao).toHaveBeenCalledTimes(1)
    expect(mockNavegacao).toHaveBeenCalledWith('/sorteio')
    expect(mockSorteio).toHaveBeenCalledTimes(1)
  })
})

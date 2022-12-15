/* eslint-disable testing-library/no-render-in-setup */
/* eslint-disable-next-line testing-library/no-render-in-setup */

import { render } from '@testing-library/react'
import { RecoilRoot } from 'recoil'
import { Configuracao } from './Configuracao'

const mockNavegacao = jest.fn()

jest.mock('react-router-dom', () => {
  return {
    useNavigate: () => mockNavegacao,
  }
})


describe('a pagina dfe configuração', () => {
  beforeEach(() => {
    render(
      <RecoilRoot>
        <Configuracao />
      </RecoilRoot>,
    )
  })
  test('deve ser renderizada corretamente', () => {
    const { container } = render(
      <RecoilRoot>
        <Configuracao />
      </RecoilRoot>,
    )
    expect(container).toMatchSnapshot()
  })
})

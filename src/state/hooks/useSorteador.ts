import { useSetRecoilState } from 'recoil'
import { resultadoAmigoSecreto } from '../atom'
import { realizaSorteio } from '../helpers/realizaSorteio'
import { useListaDeParticipante } from './useListaDeParticipante'

export const useSorteador = () => {
  const participantes: any = useListaDeParticipante()
  const setResultado = useSetRecoilState(resultadoAmigoSecreto)

  return () => {
    const resultado = realizaSorteio(participantes)
    setResultado(resultado)
  }
}

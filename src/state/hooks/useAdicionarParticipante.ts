import { useRecoilValue, useSetRecoilState } from "recoil"
import { errorState, listaParticipantesState } from '../atom';

export const useAdicionarParticipante = () => {
  const setLista = useSetRecoilState(listaParticipantesState)
  const listaNomeParticipantes = useRecoilValue(listaParticipantesState)
  const setError = useSetRecoilState(errorState)

  return (nomeDoParticipante: string) => {
    if (listaNomeParticipantes.includes(nomeDoParticipante)) {
      setError('Nomes duplicados não são permitidos!')
      setTimeout(() =>{
        setError("")
      }, 3000)
      return
    }
    return setLista(listaAtual => [...listaAtual, nomeDoParticipante])
  }
}
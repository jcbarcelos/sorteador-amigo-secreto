import { atom } from "recoil";

export const listaParticipantesState = atom<string[]>({
  key: 'listaParticipantesState',
  default: []
})


export const resultadoAmigoSecreto = atom<Map<string, string>>({
  key: 'resultadoAmigoSecreto',
  default: new Map()
})

export const errorState = atom<string>({
  key: 'errorState',
  default: ''
})
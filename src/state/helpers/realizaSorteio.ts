import shuffle from 'just-shuffle'

export function realizaSorteio(participantes: string[]) {
  const totalDeParticipantes = participantes.length
  const listaDeParticipantesEmbaralhado = shuffle(participantes)
  const resultado = new Map<string, string>()

  for (let index = 0; index < totalDeParticipantes; index++) {
    const indexAmigo = index === totalDeParticipantes - 1 ? 0 : index + 1

    resultado.set(
      listaDeParticipantesEmbaralhado[index],
      listaDeParticipantesEmbaralhado[indexAmigo],
    )
  }
  return resultado
}

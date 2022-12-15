import { realizaSorteio } from "./realizaSorteio";

describe('dado um sorteio de amigo secreto', () => {
  test('cada participante nao sorteie o proprio nome', () => {

    const participantes = [
      'Ana',
      'Catarina',
      'Juliana',
      'João',
      'Vinicius',
      'Natalia'
    ]

    const sorteio = realizaSorteio(participantes)
    participantes.forEach(participante => {
      const amigoSecreto = sorteio.get(participante)
      expect(amigoSecreto).not.toEqual(participante)
    })

  });
});
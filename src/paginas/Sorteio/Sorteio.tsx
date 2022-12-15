import React, { useState } from 'react'
import Card from '../../components/Card'
import {
  useListaDeParticipante,
  useResultadoDoSorteio,
} from '../../state/hooks'
import './Sorteio.css'

const sacolas = require("../../assets/images/sacolas.png") as string;

export const Sorteio = () => {
  const participantes = useListaDeParticipante()
  const resultadoSorteio = useResultadoDoSorteio()

  const [participanteDaVez, setParticipanteDaVez] = useState('')
  const [amigoSecreto, setAmigoSecreto] = useState('')

  const sortearAmigo = (evento: React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault()
    console.log(resultadoSorteio.has(participanteDaVez));
    
    if (resultadoSorteio.has(participanteDaVez)) {
      setAmigoSecreto(resultadoSorteio.get(participanteDaVez)!)
    }
  }
  return (
    <Card>
      <section className="sorteio">
      <h2>Quem vai tirar o papelzinho?</h2>
        <form onSubmit={sortearAmigo}>
          <select
            required
            value={participanteDaVez}
            onChange={(e) => setParticipanteDaVez(e.target.value)}
            name="participanteDavez"
            id="participanteDavez"
            placeholder="Selecione o seu nome"
          >
            {participantes.map((participante) => (
              <option key={participante}>{participante}</option>
            ))}
          </select>
          <p>Clique em em sortear para ver quem é seu amigo secreto!</p>
          <button className="botao-sortear" type="submit">
            Sortea Amigo
          </button>
        </form>
        <>
          amigoSecreto{' '}
          <p role="alert" className="resultado">
            {amigoSecreto}
          </p>
        </>
        <footer className="sorteio">
          <img
            src={sacolas}
            className="aviao"
            alt="Um desenho de um avião de papel"
          />
        </footer>
      </section>
    </Card>
  )
}

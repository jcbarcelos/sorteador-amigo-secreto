import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useListaDeParticipante, useSorteador } from '../../state/hooks'
import './Rodape.css'
const sacolas = require("../../assets/images/sacolas.png") as string;
export const Rodape = () => {
  const participantes = useListaDeParticipante()
  const navigate = useNavigate()
  const sortear = useSorteador()

  const inciarSorteio = () => {
    sortear()
    navigate('/sorteio')
  }
  return (
    <footer className="rodape-configuracoes">
      <button disabled={participantes.length < 3} onClick={inciarSorteio} className="botao" > 
        Inciar brincadeira
      </button>
      <img src={sacolas} alt="Sacolas de compras" />
    </footer>
  )
}

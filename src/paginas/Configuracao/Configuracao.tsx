import React from 'react'
import Card from '../../components/Card'
import Form from '../../components/Form/Form'
import { ListaParticipantes } from '../../components/ListaParticipantes/ListaParticipantes'
import { Rodape } from '../../components/Rodape/Rodape'

export const Configuracao = () => {
  return (
    <Card>
      <section>
        <h2>Vamos começar!</h2>
        <Form />
        <ListaParticipantes />
        <Rodape />
      </section>
    </Card>
  )
}

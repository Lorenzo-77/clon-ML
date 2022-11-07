import React from 'react'
import {Container,Row} from "./styles";

export const Hero = () => {
  return (
    <Container>

      <Row>
        <a href='#' class="volver">Volver al listado</a>
        <a href='#'>Consolas y Videojuegos</a>
        <a href='#'>Consolas</a>
      </Row>

      <Row>
        <a href='#'>Compartir</a>
        <a href='#'>Vender uno igual</a>
      </Row>

    </Container>
  )
}

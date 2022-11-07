import React from 'react'
import {Container,
    Title,
    Card,
    Reputacion,
    Caja,
    Row,
    Link,
    LocationIcon,
    PlatinumIcon,
    SopporIcon,
    ClockIcon
    } from "./styles";
  
export const InfoVendedor = () => {
  return (
    <Container>
        <Title>
            Informacion del Vendedor
        </Title>

        <Card>
            <LocationIcon/>
            <div>
                <p>Ubicacion</p>
                <strong>Córdoba, Córdoba</strong>
            </div>
        </Card>

        <Card>
            <PlatinumIcon/>
            <div>
                <p className='platinum'>MercadoLíder Platinum</p>
                <strong >¡Es uno de los mejores del sitio!</strong>
            </div>
        </Card>

        <Reputacion>
            <Caja>
                <li/>
                <li/>
                <li/>
                <li/>
                <li className='active'/>
            </Caja>
        </Reputacion>

        <Row>
            <div>
                <strong>431</strong>
                <span>Ventas en los últimos 60 días</span>
            </div>
            <div>
                <strong>
                    <SopporIcon/>
                </strong>
                <span>Brinda buena atención</span>
            </div>
            <div>
                <strong>
                    <ClockIcon/>
                </strong>
                <span>Despacha sus productos a tiempo</span>
            </div>
        </Row>

        <Link href="#">Ver más datos de este vendedor
        </Link>
    </Container>
  )
}

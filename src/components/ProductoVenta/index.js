import React from 'react'
import { Container,
    Estado,
    Row,
    HeartIcon,
    Price,
    Card,
    CheckIcon,
    Color,
    Cantidad,
    ButtonCard,
    Button,
    Beneficios,
    ShildeIcon,
    CopaIcon
  } from './styles';

export const ProductoVenta = () => {
  return (
    <Container>
        <Estado> Nuevo | 7 vendidos</Estado>
        
        <Row><h1>Sony PlayStation 5 825GB Horizon Forbidden West Bundle color blanco y negro</h1>
        <HeartIcon/>
        </Row>
        <Price>
            $329.980
        </Price>
        <Card>
            <CheckIcon/>
            <div>
                <span className='title'>Llega gratis mañana</span>
                <span className='detalle'>Beneficio Mercado Puntos</span>
                <a href='#' className='more'>Ver mas formas de entrega</a>
            </div>
        </Card>

        <Color>
        color: <strong>Blanco</strong>
        </Color>

        <Cantidad>
            <strong>¡Última disponible!</strong>
        </Cantidad>

        <ButtonCard>
            <Button className="solid">Comprar ahora</Button>
            <Button >Agregar al carrito</Button>
        </ButtonCard>

        <Beneficios>
            <li>
                <ShildeIcon/>
                <p>Compra Protegida, <span>recibí el producto que esperabas o te devolvemos tu dinero.</span></p>
            </li>
            <li>
                <CopaIcon/>
                <p>Mercado Puntos. <span> Sumás 4145 puntos</span></p>
            </li>
        </Beneficios>
    </Container>
  )
}

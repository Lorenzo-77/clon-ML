import React from 'react'
import { InfoVendedor } from '../InfoVendedor';
import { ProductoVenta } from '../ProductoVenta';
import {Container,
  Panel,
  Column,
  Galeria,
  Decription,
  Section
  } from "./styles";

export const Producto = () => {
  return (
    <Container>

      <Panel>

        <Column>

        <Galeria>
          <img src="https://http2.mlstatic.com/D_NQ_NP_841787-MLA44484414455_012021-O.webp" alt="producto"></img>
        </Galeria>

          <Info/>
        </Column>
        <Column>
           <ProductoVenta/>
           <InfoVendedor/>
           <Garantia/>
        </Column>
      </Panel>

    </Container>
  )
}

const Info = () =>{
  return(
    <Decription>
      <h4>Descripcion</h4>
      <p>
      Con tu consola PlayStation 5 tendrás entretenimiento asegurado todos los días. Su tecnología 
      fue creada para poner nuevos retos tanto a jugadores principiantes como expertos.
      </p><br/><br/>
      <p>
        PlayStation renovó las expectativas del mundo virtual con esta nueva consola y su gran rendimiento. 
        Cuenta con una interfaz de usuario más rápida y fácil de navegar que en anteriores modelos. Además, 
        podrás jugar durante horas desafiando a millones de contrincantes alrededor del mundo que esperan nuevos retos.
      </p><br/><br/>
      <p>
      Calidad de otro nivel <br/>
      Se considera que esta consola es de las mejores dentro del mercado, 
      dado que presenta una resolución de hasta 4K.
      </p><br/><br/>
      <p>
      Adaptada a tus necesidades<br/>
      Guardá tus apps, fotos, videos y mucho más en el disco duro, que cuenta con una capacidad de 825 GB.<br/>
      Al contar con un procesador de 8 núcleos y uno gráfico, brinda una experiencia dinámica, respuestas ágiles, y 
      transiciones fluidas de imágenes en alta definición.
      Por otro lado, tiene puerto USB y salida HDMI, que permiten conectar accesorios y cargar la batería de tu control mientras jugás.
      </p>
    </Decription>
  )
}

const Garantia = () =>{
  return(
    <Section>
      <h5>Garantia</h5>
      <div>
        <span>
          <p className='title'>Compra protegida con Mercado Pago</p>
          <p className='description'>Recibe el producto que esperabas
          o te devolvemos tu dinero</p>
        </span>
        <span>
          <p className='title'>Garantia del vendedor</p>
          <p className='description'>Garantia del vendedor: 6 meses</p>
        </span>
        <a href='#'>Conocer mas de la Garantia</a>
      </div>
    </Section>

  )
}

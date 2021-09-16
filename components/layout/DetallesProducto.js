import React from 'react';
import styled from '@emotion/styled';

const Imagen = styled.img`
  width: 200px;
`;

const DetallesProducto = ({producto}) => {

  const {id, comentarios, creado, descripcion, empresa, nombre, url, urlimagen, votos } = producto

  return ( 
    <li>
      <div>

        <div>
          <Imagen src={urlimagen} />
        </div>

        <div>
          <h1>{nombre}</h1>
          <p>{descripcion}</p>
          <div>
            <img src="/static/img/comentario.png" />
            <p>{comentarios.length} Comentarios</p>
          </div>
          <p>Publicado hace: {creado}</p>
        </div>
      </div>

      <div>

      </div>
    </li>
   );
}
 
export default DetallesProducto;
export default function validarCrearProducto(valores) {
  
  let errores = {};

  // validar el nombre del usuario
  if (!valores.nombre) {
    errores.nombre = "El nombre es obligatorio"
  }

  // validar el nombre de la empresa
  if (!valores.empresa) {
    errores.empresa = "Nombre de la Empresa es obligatorio"
  }

  // validar la url
  if (!valores.url) {
    errores.url = "la URL del producto es obligatoria"
  } else if (!/^(ftp|http|https):\/\/[^ "]+$/.test(valores.url)) {
      errores.url = "URL mal formateada o no valida"
  }

  // validar la descripcion del producto
  if (!valores.descripcion) {
    errores.descripcion = "Descripcion del Producto es obligatoria"
  }

  

  return errores;
}
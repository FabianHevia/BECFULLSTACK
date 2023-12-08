export function generarCodigoAleatorio(): string {
    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const longitudCodigo = 9;
    let codigo = '';
  
    for (let i = 0; i < longitudCodigo; i++) {
      const indice = Math.floor(Math.random() * caracteres.length);
      codigo += caracteres.charAt(indice);
    }
  
    return codigo;
  }
  
  // Ejemplo de uso:
  const codigoAleatorio = generarCodigoAleatorio();
  console.log('Código aleatorio:', codigoAleatorio);
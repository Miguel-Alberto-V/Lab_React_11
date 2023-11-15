export const validarTarea = (texto) => {
    if (!texto.trim()) {
      return 'Lo sentimos la tarea no puede estar en blanco';
    } else if (texto.length > 30) {
      return 'El nombre de la tarea es demasiado largo';
    } else {
      return null; // Sin errores
    }
  };
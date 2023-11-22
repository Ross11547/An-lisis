const baseUrl =
  import.meta.env.VITE_BACKEND_URL

export const getPrograma = async () => {
  try {
    const response = await fetch(`${baseUrl}programa`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};
export const deletePrograma = async (id, callback) => {
  const response = await fetch(`${baseUrl}programa/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      accept: "application/json",
    },
  });
  if (response.ok) {
    callback();
  }

}
export const updatePrograma = async (actual, callback) => {
  console.log(JSON.stringify({
    nombre: actual.nombre,
    foto: actual.foto,
    contenido_a: actual.contenido_a,
    contenido_b: actual.contenido_b,
    titulo: actual.titulo,
    titulo_desc: actual.titulo_desc,
    compemento: actual.compemento,
  }));
  const response = await fetch(`${baseUrl}programa/${actual.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      accept: "application/json",
    },
    body: JSON.stringify({
      nombre: actual.nombre,
      foto: actual.foto,
      contenido_a: actual.contenido_a,
      contenido_b: actual.contenido_b,
      titulo: actual.titulo,
      titulo_desc: actual.titulo_desc,
      compemento: actual.compemento,
    }),
  });
  if (response.ok) {
    callback();
  }
}
export const postPrograma = async (nombre, foto, contenido_a, contenido_b, titulo, titulo_desc, compemento, callback) => {

  const response = await fetch(`${baseUrl}programa`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      accept: "application/json",
    },
    body: JSON.stringify({
      nombre: nombre,
      foto: foto,
      contenido_a: contenido_a,
      contenido_b: contenido_b,
      titulo: titulo,
      titulo_desc: titulo_desc,
      compemento: compemento,
    }),
  });
  if (response.ok) {
    callback();
  }
}
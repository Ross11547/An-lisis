const baseUrl = import.meta.env.VITE_BACKEND_URL;

export const getPrograma = async () => {
  try {
    const response = await fetch(`${baseUrl}promociones`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};
export const deletePrograma = async (id, callback) => {
  const response = await fetch(`${baseUrl}promociones/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      accept: "application/json",
    },
  });
  if (response.ok) {
    callback();
  }
};
export const updatePrograma = async (actual, callback) => {
  console.log(
    JSON.stringify({
      nombre: actual.nombre,
      foto: actual.foto,
      contenido_a: actual.contenido_a,
      contenido_b: actual.contenido_b,
      titulo: actual.titulo,
      titulo_desc: actual.titulo_desc,
      compemento: actual.compemento,
    })
  );
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
};
export const postPrograma = async (
  nombre,
  fechaini,
  fechafin,
  descuento,
  idsucu,
  idprod,
  callback
) => {
  console.log(
    JSON.stringify({
      nombre: nombre,
      fecha_inicio:fechaini,
      fecha_fin:fechafin,
      descuento:Number(descuento),
      id_sucur:Number(idsucu),
      id_produc:Number(idprod),
    })
  );
  const response = await fetch(`${baseUrl}promociones`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      accept: "application/json",
    },
    body: JSON.stringify({
     nombre:nombre,
     fecha_inicio:fechaini,
     fecha_fin:fechafin,
     descuento:Number(descuento),
     id_sucur:Number(idsucu),
     id_produc:Number(idprod),
    }),
  });
  if (response.ok) {
    callback();
  }
};

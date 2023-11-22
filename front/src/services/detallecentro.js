const baseUrl =
  import.meta.env.VITE_BACKEND_URL

export const getDetallecentro = async () => {
  try {
    const response = await fetch(`${baseUrl}detallecentros`, {
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

export const deleteDetallecentro = async (id, callback) => {
  const response = await fetch(`${baseUrl}detallecentros/${id}`, {
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
export const updateDetallecentro = async (actual, callback) => {
  const response = await fetch(`${baseUrl}detallecentros/${actual.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      accept: "application/json",
    },
    body: JSON.stringify({
      nombre: actual.nombre,
      direccion: actual.direccion,
      telefono: actual.telefono,
      horario_atencion: actual.horario_atencion,
      mapa: actual.mapa,
      id_redcentros: actual.id_redcentros,
    })
  });
  if (response.ok) {
    callback();
  }
}
export const postDetallecentro = async (nombre, direccion, telefono, horario_atencion, mapa, red, callback) => {
  const response = await fetch(`${baseUrl}detallecentros`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      accept: "application/json",
    },
    body: JSON.stringify({
      nombre: nombre,
      direccion: direccion,
      telefono: telefono,
      horario_atencion: horario_atencion,
      mapa: mapa,
      id_redcentros: red,
    }),
  });
  if (response.ok) {
    callback();
  }
}
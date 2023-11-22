const baseUrl =
  import.meta.env.VITE_BACKEND_URL

export const getCapsulas = async () => {
  try {
    const response = await fetch(`${baseUrl}sucursales`, {
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
export const deleteCapsulas = async (id, callback) => {
  const response = await fetch(`${baseUrl}capsula/${id}`, {
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
export const updateCapsulas = async (actual, callback) => {
  const response = await fetch(`${baseUrl}capsula/${actual.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      accept: "application/json",
    },
    body: JSON.stringify({
      titulo: actual.titulo,
      foto: actual.foto,
      descripcion: actual.descripcion,
      mas_detalles: actual.mas_detalles,
    }),
  });
  if (response.ok) {
    callback();
  }
}
export const postCapsulas = async (titulo, foto, descripcion, masdetalle, callback) => {
  const response = await fetch(`${baseUrl}capsula`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      accept: "application/json",
    },
    body: JSON.stringify({
      titulo: titulo,
      foto: foto,
      descripcion: descripcion,
      mas_detalles: masdetalle,
    })
  });
  if (response.ok) {
    callback();
  }
}
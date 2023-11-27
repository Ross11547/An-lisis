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
  const response = await fetch(`${baseUrl}sucursales/${id}`, {
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
  const response = await fetch(`${baseUrl}sucursales/${actual.id_sucursal}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "accept": "application/json",
    },
    body: JSON.stringify({
      telefono:Number(actual.telefono),
      calles: actual.calles,
      numero:Number(actual.numero),
      zona: actual.zona,
    }),
  });
  if (response.ok) {
    callback();
  }
}
export const postCapsulas = async (telefono, calles, numero, zona, callback) => {
  const response = await fetch(`${baseUrl}sucursales`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      accept: "application/json",
    },
    body: JSON.stringify({
      telefono:Number(telefono),
      calles: calles,
      numero: Number(numero),
      zona: zona,
    })
  });
  if (response.ok) {
    callback();
  }
}
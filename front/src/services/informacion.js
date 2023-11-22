const baseUrl =
  import.meta.env.VITE_BACKEND_URL

export const getInformacion = async () => {
  try {
    const response = await fetch(`${baseUrl}informacion`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        accept:"application/json",

      }
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};
export const deleteInformacion = async (id, callback) => {
  const response = await fetch(`${baseUrl}informacion/${id}`, {
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
export const updateInformacion = async (actual, callback) => {
  const response = await fetch(`${baseUrl}informacion/${actual.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      accept: "application/json",
    },
    body: JSON.stringify({
      nombre: actual.nombre,
      foto: actual.foto,
      descripcion: actual.descripcion,
      mision: actual.mision,
      foto_m: actual.foto_m,
      vision: actual.vision,
      foto_v: actual.foto_v,
    })
  });
  if (response.ok) {
    callback();
  }
}
export const postInformacion = async (titulo, foto, mision, fotomision, descripcion, vision, fotovision, callback) => {
  const response = await fetch(`${baseUrl}informacion`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      accept: "application/json",
    },
    body: JSON.stringify({
      nombre: titulo,
      foto: foto,
      descripcion: descripcion,
      mision: mision,
      foto_m: fotomision,
      vision: vision,
      foto_v: fotovision,
    }),
  });
  if (response.ok) {
    callback();
  }
}
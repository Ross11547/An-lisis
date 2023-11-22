const baseUrl =
  import.meta.env.VITE_BACKEND_URL

export const getCentros = async () => {
  try {
    const response = await fetch(`${baseUrl}centros`, {
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
export const deleteCentros = async (id, callback) => {
  const response = await fetch(`${baseUrl}centros/${id}`, {
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
export const updateCentros = async (actual, callback) => {
  const response = await fetch(`${baseUrl}centros/${actual.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      accept: "application/json",
    },
    body: JSON.stringify({
      centro_diagnostico: actual.centro_diagnostico,
      sede: actual.sede,
      centro: actual.centro,
      foto: actual.foto,
      telefono: actual.telefono,
      dirreccion: actual.dirreccion,
    })
  });
  if (response.ok) {
    callback();
  }
}
export const postCentros = async (centrodi, sede, centro, telefono, foto, dirreccion, callback) => {
  const response = await fetch(`${baseUrl}centros`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      accept: "application/json",
    },
    body: JSON.stringify({
      centro_diagnostico: centrodi,
      sede: sede,
      centro: centro,
      foto: foto,
      telefono: telefono,
      dirreccion: dirreccion,
    }),
  });
  if (response.ok) {
    callback();
  }
}
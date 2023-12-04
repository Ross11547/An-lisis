const baseUrl =
  import.meta.env.VITE_BACKEND_URL

export const getRed = async () => {
  try {
    const response = await fetch(`${baseUrl}blog`, {
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

export const deleteRed = async (id, callback) => {
  const response = await fetch(`${baseUrl}blog/${id}`, {
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
export const updateRed = async (actual, callback) => {
  const response = await fetch(`${baseUrl}red/${actual.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      accept: "application/json",
    },
    body: JSON.stringify({
      red: actual.red,
    })
  });
  if (response.ok) {
    callback();
  }
}
export const postRed = async (descripcion,foto,idProducto, callback) => {
  const response = await fetch(`${baseUrl}blog`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      accept: "application/json",
    },
    body: JSON.stringify({
      descripcion: descripcion,
      foto: foto,
      id_productos:Number(idProducto)
    }),
  });
  if (response.ok) {
    callback();
  }
}
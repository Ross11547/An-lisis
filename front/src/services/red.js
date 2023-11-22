const baseUrl =
  import.meta.env.VITE_BACKEND_URL

export const getRed = async () => {
  try {
    const response = await fetch(`${baseUrl}red`, {
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
  const response = await fetch(`${baseUrl}red/${id}`, {
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
export const postRed = async (red, callback) => {
  const response = await fetch(`${baseUrl}red`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      accept: "application/json",
    },
    body: JSON.stringify({
      red: red,
    }),
  });
  if (response.ok) {
    callback();
  }
}
const API = "http://localhost:8000/api/";

export const createItem = (item) => {
  return fetch(`${API}/item/create`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(item),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

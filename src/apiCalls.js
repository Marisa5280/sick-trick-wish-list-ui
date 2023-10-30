export const getTricks = () => {
  return fetch("http://localhost:3001/api/v1/tricks").then((res) => {
    if (!res.ok) {
      throw new Error(`${res.status}`);
    }
    return res.json();
  });
};

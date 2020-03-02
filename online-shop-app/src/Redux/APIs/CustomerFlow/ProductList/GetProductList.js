import fetch from { fetch };

const getProducts = (categoryId) => {
  const products = await fetch("", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-type": "application/json"
    },
    body: JSON.stringify({
      categoryId,
    })
  })
}

export default getProducts;
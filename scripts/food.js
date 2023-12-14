//A more optimized version of the Code Snippet:
const baseURL = 'https://world.openfoodfacts.org/api/v2/';

async function fetchData(endpointResource) {
  if (!endpointResource) {
    console.error('Endpoint resource is not provided');
    return;
  }

  try {
    const response = await fetch(baseURL + endpointResource);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    displayData(data.product);
    console.log(data.product);
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error);
  }
}

function displayData(data) {
  const productImage = document.getElementById('productImage');
  const productName = document.getElementById('productName');
  const productIngredients = document.getElementById('ingredients');
  const productPageLink = document.getElementById('productPageLink');
  const productAllergens = document.getElementById('allergens');
  const countriesSold = document.getElementById('countriesSold');
  const storesSold = document.getElementById('stores');

  if (data.image_url) {
    productImage.src = data.image_url;
    productImage.alt = 'Product Image';
  }

  productName.textContent = `${data.product_name} - ${data.brands} - ${data.quantity}`;
  productIngredients.textContent = `${data.ingredients_text_en}`;
  productPageLink.href = data.link;
  productAllergens.textContent = data.allergens
    .split(',')
    .map((allergy) => allergy.substring(3))
    .join(', ');
  countriesSold.textContent = data.countries.split(',').join(', ');
  storesSold.textContent = data.stores.split(',').join(', ');
}

onload = async () => {
  if (!localStorage.productId) {
    localStorage.productId = 3017620422003;
  }
  let productId = localStorage.productId;
  let idInput = document.getElementById('idInput');
  idInput.value = productId;

  await fetchData(`product/${productId}`);

  document.getElementById('searchButton').addEventListener('click', async () => {
    idInput = document.getElementById('idInput').value;
    localStorage.productId = idInput;
    await fetchData(`product/${localStorage.productId}`);
  });
};

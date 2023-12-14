"use strict";
const baseURL = 'https://world.openfoodfacts.org/api/v2/product/';
const myButton = document.getElementById("generate");
const myMessage = document.getElementById("message");
myButton.addEventListener('click', fetchData("737628064502"))

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
    displayData(data);
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error);
  }
}

function displayData(data) {
  console.log(data);
  myMessage.innerHTML = data.product.brand_owner
}


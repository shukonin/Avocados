const API = 'https://platzi-avo.vercel.app/api/avo';
const URL = 'https://platzi-avo.vercel.app';

const appNode = document.getElementById('app');

const formatPrice = (price) => {
  const newPrice = new window.Intl.NumberFormat('en-EN', {
    style: 'currency',
    currency: 'USD',
  }).format(price);
  return newPrice;
};

window
  .fetch(API)
  .then((response) => response.json())
  .then((responseJson) => {
    const items = [];
    responseJson.data.forEach((element) => {
      // Crear imagen
      const imagen = document.createElement('img');
      imagen.src = `${URL}${element.image}`;

      // Crear título
      const title = document.createElement('h2');
      title.textContent = element.name;
      title.className = 'title';

      // Crear precio
      const price = document.createElement('p');
      price.textContent = formatPrice(element.price);
      price.className = 'price';

      const description = document.createElement('div');
      description.append(title, price);
      description.className = 'card-content';

      const container = document.createElement('div');
      container.append(imagen, description);
      container.className = 'card';

      items.push(container);
    });
    appNode.append(...items);
  });

const params = new URLSearchParams(window.location.search);
const category = params.get('category');

function displayProducts(productsToDisplay) {
  const container = document.getElementById('product-list');
  if (!container) return;
  container.innerHTML = '';

  productsToDisplay.forEach(product => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}" />
      <h3>${product.name}</h3>
      <p>$${product.price.toFixed(2)}</p>
    `;
    container.appendChild(card);
  });
}

function applyFilters() {
  const min = parseFloat(document.getElementById('minPrice').value) || 0;
  const max = parseFloat(document.getElementById('maxPrice').value) || Infinity;

  const filtered = products
    .filter(p => p.category === category)
    .filter(p => p.price >= min && p.price <= max);

  displayProducts(filtered);
}

if (category) {
  const filteredProducts = products.filter(p => p.category === category);
  displayProducts(filteredProducts);
}

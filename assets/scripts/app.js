class Product {
  constructor(title, image, price, desc) {
    this.title = title;
    this.imageUrl = image;
    this.description = desc;
    this.price = price;
  }
}

class ProductItem {
  constructor(product) {
    this.product = product;
  }

  addToCartHandler() {
    console.log('Adding product to cart...');
    console.log(this);
  }

  render() {
    const prodEl = document.createElement('li');
    prodEl.className = 'product-item';
    prodEl.innerHTML = `
        <div>
          <img src=${this.product.imageUrl}/>
          <div class="product-item__content">
            <h2>${this.product.title}</h2>
            <h3>${this.product.description}</h3>
            <p>\$${this.product.price}</p>
            <button>Add to Cart</button>
          </div>
        </div>
      `;
    const addToCartButton = prodEl.querySelector('button');
    addToCartButton.addEventListener('click', this.addToCartHandler.bind(this));
    return prodEl;
  }
}

class ProductList {
  products = [
    new Product(
      'Product 1',
      'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
      99.99,
      'Description 1',
    ),
    new Product(
      'Product 2',
      'https://images.pexels.com/photos/38568/apple-imac-ipad-workplace-38568.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      99.99,
      'Description 2',
    ),
    new Product(
      'Product 3',
      'https://images.pexels.com/photos/1334597/pexels-photo-1334597.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      199.99,
      'Description 3',
    ),
  ];

  render() {
    const renderHook = document.getElementById('app');
    const prodList = document.createElement('ul');
    prodList.className = 'product-list';
    this.products.forEach(prod => {
      const productItem = new ProductItem(prod);
      const prodEl = productItem.render();
      prodList.append(prodEl);
    });

    renderHook.append(prodList);
  }
}

const productList = new ProductList();
productList.render();

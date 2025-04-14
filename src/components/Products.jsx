import React from 'react';
import Hero from '../components/Hero'; // adjust path based on location

const products = [
  { id: 1, name: 'Denim Jacket', price: '$49.99' },
  { id: 2, name: 'Casual Shirt', price: '$29.99' },
  { id: 3, name: 'Summer Dress', price: '$39.99' },
  { id: 4, name: 'T-Shirt', price: '$19.99' },
  { id: 5, name: 'Hoodie', price: '$34.99' },
  { id: 6, name: 'Formal Pants', price: '$44.99'},
];

function Products() {
  return (
    <>
      <Hero /> {/* This is now above the product list */}
      <div id="products" className="container my-5">
        <h2 className="mb-4 text-center">Featured Products</h2>
        <div className="row">
          {products.map(product => (
            <div className="col-md-4 col-sm-6 mb-4" key={product.id}>
              <div className="card h-100 shadow-sm">
                <div className="card-body text-center">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">{product.price}</p>
                  <button className="btn btn-outline-primary">Add to Cart</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Products;

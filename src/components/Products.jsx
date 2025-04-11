import React from 'react';

const products = [
  { id: 1, name: 'Denim Jacket', price: '$49.99', img: 'C:\Users\pc\Downloads\denim jacket.webp' },
  { id: 2, name: 'Casual Shirt', price: '$29.99', img: 'C:\Users\pc\Downloads\casual shirt.webp' },
  { id: 3, name: 'Summer Dress', price: '$39.99', img: 'C:\Users\pc\Downloads\summer dress.jpg' },
  { id: 4, name: 'T-Shirt', price: '$19.99', img: 'C:\Users\pc\Downloads\tshirt.jpg' },
  { id: 5, name: 'Hoodie', price: '$34.99', img: 'C:\Users\pc\Downloads\hoodie.jpg' },
  { id: 6, name: 'Formal Pants', price: '$44.99', img: 'C:\Users\pc\Downloads\formals.jpg' },
];

function Products() {
  return (
    <div className="container my-5">
      <h2 className="mb-4 text-center">Featured Products</h2>
      <div className="row">
        {products.map(product => (
          <div className="col-md-4 col-sm-6 mb-4" key={product.id}>
            <div className="card h-100 shadow-sm">
              <img src={product.img} className="card-img-top" alt={product.name} />
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
  );
}

export default Products;

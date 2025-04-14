import React, { useState } from 'react';

function ProductInventory() {
  const [products, setProducts] = useState([
    { id: 'P001', name: 'Denim Jacket', category: 'Outerwear', price: '$49.99', stock: 10 },
    { id: 'P002', name: 'Casual Shirt', category: 'Shirts', price: '$29.99', stock: 25 },
  ]);

  const [editingId, setEditingId] = useState(null);
  const [editedProduct, setEditedProduct] = useState({});
  const [newProduct, setNewProduct] = useState({
    id: '', name: '', category: '', price: '', stock: ''
  });

  const handleEditChange = (e, field) => {
    setEditedProduct({ ...editedProduct, [field]: e.target.value });
  };

  const handleNewProductChange = (e, field) => {
    setNewProduct({ ...newProduct, [field]: e.target.value });
  };

  const startEditing = (id) => {
    const product = products.find(p => p.id === id);
    setEditingId(id);
    setEditedProduct({ ...product });
  };

  const saveEdit = (id) => {
    const updated = products.map(p => (p.id === id ? { ...editedProduct } : p));
    setProducts(updated);
    setEditingId(null);
    setEditedProduct({});
  };

  const addProduct = () => {
    if (!newProduct.id || !newProduct.name || !newProduct.category || !newProduct.price || !newProduct.stock) return;
    setProducts([...products, newProduct]);
    setNewProduct({ id: '', name: '', category: '', price: '', stock: '' });
  };

  const deleteProduct = (id) => {
    setProducts(products.filter(p => p.id !== id));
    if (editingId === id) {
      setEditingId(null);
      setEditedProduct({});
    }
  };

  return (
    <div className="container mt-4">
      <h3>Product Inventory</h3>
      <table className="table table-bordered table-hover">
        <thead className="table-dark">
          <tr>
            <th>Product ID</th>
            <th>Name</th>
            <th>Category</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={product.id}>
              <td>
                {editingId === product.id ? (
                  <input type="text" value={editedProduct.id} onChange={e => handleEditChange(e, 'id')} className="form-control" />
                ) : product.id}
              </td>
              <td>
                {editingId === product.id ? (
                  <input type="text" value={editedProduct.name} onChange={e => handleEditChange(e, 'name')} className="form-control" />
                ) : product.name}
              </td>
              <td>
                {editingId === product.id ? (
                  <input type="text" value={editedProduct.category} onChange={e => handleEditChange(e, 'category')} className="form-control" />
                ) : product.category}
              </td>
              <td>
                {editingId === product.id ? (
                  <input type="text" value={editedProduct.price} onChange={e => handleEditChange(e, 'price')} className="form-control" />
                ) : product.price}
              </td>
              <td>
                {editingId === product.id ? (
                  <input type="number" value={editedProduct.stock} onChange={e => handleEditChange(e, 'stock')} className="form-control" />
                ) : product.stock}
              </td>
              <td>
                {editingId === product.id ? (
                  <button className="btn btn-success btn-sm me-2" onClick={() => saveEdit(product.id)}>Save</button>
                ) : (
                  <button className="btn btn-primary btn-sm me-2" onClick={() => startEditing(product.id)}>Edit</button>
                )}
                <button className="btn btn-danger btn-sm" onClick={() => deleteProduct(product.id)}>Delete</button>
              </td>
            </tr>
          ))}

          {/* Add New Product */}
          <tr>
            <td>
              <input type="text" value={newProduct.id} onChange={e => handleNewProductChange(e, 'id')} className="form-control" placeholder="ID" />
            </td>
            <td>
              <input type="text" value={newProduct.name} onChange={e => handleNewProductChange(e, 'name')} className="form-control" placeholder="Name" />
            </td>
            <td>
              <input type="text" value={newProduct.category} onChange={e => handleNewProductChange(e, 'category')} className="form-control" placeholder="Category" />
            </td>
            <td>
              <input type="text" value={newProduct.price} onChange={e => handleNewProductChange(e, 'price')} className="form-control" placeholder="$0.00" />
            </td>
            <td>
              <input type="number" value={newProduct.stock} onChange={e => handleNewProductChange(e, 'stock')} className="form-control" placeholder="Qty" />
            </td>
            <td>
              <button className="btn btn-success btn-sm" onClick={addProduct}>Add</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ProductInventory;

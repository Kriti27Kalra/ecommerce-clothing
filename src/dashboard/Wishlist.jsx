import React, { useState } from 'react';

function Wishlist() {
  const [wishlist, setWishlist] = useState([]);
  const [formData, setFormData] = useState({
    productName: '',
    productURL: '',
    notes: '',
    priority: 'Medium',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleAdd = (e) => {
    e.preventDefault();
    if (!formData.productName || !formData.productURL) {
      alert('Please fill in both Product Name and URL.');
      return;
    }
    setWishlist(prev => [...prev, formData]);
    setFormData({
      productName: '',
      productURL: '',
      notes: '',
      priority: 'Medium',
    });
  };

  const handleRemove = (index) => {
    setWishlist(prev => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Wishlist</h2>
      <form onSubmit={handleAdd} className="mb-4">
        <div className="mb-3">
          <label htmlFor="productName" className="form-label">Product Name</label>
          <input
            type="text"
            className="form-control"
            id="productName"
            name="productName"
            value={formData.productName}
            onChange={handleChange}
            placeholder="Enter product name"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="productURL" className="form-label">Product URL</label>
          <input
            type="url"
            className="form-control"
            id="productURL"
            name="productURL"
            value={formData.productURL}
            onChange={handleChange}
            placeholder="Enter product URL"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="notes" className="form-label">Notes</label>
          <textarea
            className="form-control"
            id="notes"
            name="notes"
            value={formData.notes}
            onChange={handleChange}
            placeholder="Additional notes"
            rows="3"
          ></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="priority" className="form-label">Priority</label>
          <select
            className="form-select"
            id="priority"
            name="priority"
            value={formData.priority}
            onChange={handleChange}
          >
            <option>High</option>
            <option>Medium</option>
            <option>Low</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary">Add to Wishlist</button>
      </form>

      {wishlist.length > 0 && (
        <div className="table-responsive">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Product Name</th>
                <th>Product URL</th>
                <th>Notes</th>
                <th>Priority</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {wishlist.map((item, index) => (
                <tr key={index}>
                  <td>{item.productName}</td>
                  <td><a href={item.productURL} target="_blank" rel="noopener noreferrer">View</a></td>
                  <td>{item.notes}</td>
                  <td>{item.priority}</td>
                  <td>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => handleRemove(index)}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default Wishlist;

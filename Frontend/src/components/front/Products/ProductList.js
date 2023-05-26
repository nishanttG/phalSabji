import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Products from './Products';

const ProductList = () => {
  const [productItems, setProductItems] = useState([]);

  useEffect(() => {
    fetchProductItems();
  }, []);

  const fetchProductItems = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/product/');
      setProductItems(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleAddProduct = async (product) => {
    try {
      // Save the new product to the backend
      await axios.post('http://127.0.0.1:8000/api/product/', product);
      // Fetch updated product data from the backend
      fetchProductItems();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Product List</h2>
      <Products productItems={productItems} handleAddProduct={handleAddProduct} />
    </div>
  );
};

export default ProductList;

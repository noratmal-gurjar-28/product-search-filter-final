import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SearchField } from '../../components';
import ProductCard from './components/ProductCard';
import { fetchProducts, setSearchTerm } from '../../features/products/productsSlice';

const Product = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.items);
  const searchTerm = useSelector((state) => state.products.searchTerm);
  const [productList, setProductList] = useState(products);

  const onSearch = (value) => {
    dispatch(setSearchTerm(value));
  };

  useEffect(() => {
    dispatch(fetchProducts(searchTerm));
  }, [searchTerm, dispatch]);

  useEffect(() => {
    const searchedProducts = products.filter((product) =>
      product.alt_description?.toLowerCase()?.includes(searchTerm?.toLowerCase())
    );
    setProductList(searchedProducts);
  }, [searchTerm, products]);

  return (
    <div className='container'>
      <SearchField value={searchTerm} onChange={onSearch} />
      <div className="product-list row mb-5">
        {productList.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Product;

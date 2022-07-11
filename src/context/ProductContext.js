import { createContext, useState } from "react";

const ProductContext = createContext();
const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [trendProducts, setTrendProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({
    err: false,
    msg: "",
  });
  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      setError({
        err: true,
        msg: error,
      });
    } finally {
      setLoading(false);
    }
  };
  const fetchTrend = async () => {
    console.log("fetchTrend");
    try {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setTrendProducts(
        data.filter((product) => {
          if (product.rating.rate >= 4.6) {
            return product;
          } else {
            return null;
          }
        })
      );
    } catch (err) {
        setError({
            err: true,
            msg: err,
        });
    } finally {
        setLoading(false);
    }
  };

  const value = {
    products,
    fetchProducts,
    trendProducts,
    fetchTrend,
    error,
    loading,
  };
  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};

export { ProductContext, ProductProvider };

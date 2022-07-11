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
      const newData = data.map((item)=>{
        return {
          ...item,
          wishList: false,
        }
      })
      setProducts(newData);
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
// make the wishlist true

  const toggleWishList = (id) => {
    const newProducts = products.map((product) => {
      if (product.id === id) {
        return {
          ...product,
          wishList: !product.wishList,
        };
      } else {
        return product;
      }
    });
    setProducts(newProducts); 
  }
  const value = {
    products,
    fetchProducts,
    trendProducts,
    fetchTrend,
    error,
    loading,
    setProducts,
    setLoading,
    toggleWishList
  };
  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};

export { ProductContext, ProductProvider };

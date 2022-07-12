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
      const newData = data.map((item) => {
        return {
          ...item,
          wishList: false,
        };
      });
      setProducts(newData);
      localStorage.removeItem("products");
      localStorage.setItem('products', JSON.stringify(newData));
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
  };
  const filter = (rating, price) => {
    const prod =JSON.parse(localStorage.getItem('products'));
    console.log(prod,'prod');
    const newProducts = prod.filter((product) => {
      if (rating === null && price === null) {
        return product;
      }
      if (rating !== null && price === null) {
        if (product.rating.rate >= rating) {
          return product;
        } else {
          return null;
        }
      }
      if (rating === null && price !== null) {
        if (price === 500) {
          if (product.price >= 500) {
            return product;
          } else {
            return null;
          }
        } else if (price === 3000) {
          if (product.price >= 3000) {
            return product;
          } else {
            return null;
          }
        }
      }
      if (rating !== null && price !== null) {
        if(price === 500){
          if(product.price <= 500 && product.rating.rate >= rating){
            return product;
          }else{
            return null;
          }
        }else if(price === 3000){
          if(product.price <= 3000 && product.price >= 500 && product.rating.rate >= rating){
            return product;
          }else{
            return null;
          }
        }
      }
      return null;
    });
    setProducts(newProducts);
  };


  // make seach for products
  const searchProducts = async (search) => {
    setLoading(true);
    const newProducts = products.filter((product) => {
      if(search === '' || search === null || search === ""){
        return product;
      }
      if (product.category.toLowerCase().includes(search.toLowerCase())) {
        return product;
      }
      return null;
    });
    setProducts(newProducts);
    setLoading(false);
  };

  const value = {
    products,
    fetchProducts,
    trendProducts,
    fetchTrend,
    error,
    loading,
    setProducts,
    setLoading,
    toggleWishList,
    searchProducts,
    filter,
  };
  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};

export { ProductContext, ProductProvider };

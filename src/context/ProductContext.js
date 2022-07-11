import { createContext ,useState} from "react";

const ProductContext = createContext();

const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const fetchProducts = async () => {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProducts(data);
    }

    const value = {
        products,
    };
    return <ProductContext.Provider value={value}>
        {children}
    </ProductContext.Provider>

}

export { ProductContext, ProductProvider };
import { useEffect, useRef, useState } from 'react';
import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';
import SearchResults from './components/Results/SearchResults';
import "./styles/app.scss";
import useProductContext from './hooks/useProductContext';
function App() {
  const [showResult,setShowResult] = useState(false);
  const inputRef = useRef(null);
  const context = useProductContext();
  useEffect(()=>{
    context.fetchProducts();
  },[])

  return (
    <div className="App">
      <Navbar />
      <SearchBar showResult={showResult} setShowResult={setShowResult} inputRef={inputRef} />
      {showResult && <SearchResults />}
    </div>
  );
}

export default App;

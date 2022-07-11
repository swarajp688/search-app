import { useRef, useState,useContext } from 'react';
import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';
import SearchResults from './components/Results/SearchResults';
import "./styles/app.scss";
import useProductContext from './hooks/useProductContext';
function App() {
  const [showResult,setShowResult] = useState(false);
  const inputRef = useRef(null);
  const cont = useProductContext();
  console.log(cont.products)
  return (
    <div className="App">
      <Navbar />
      <SearchBar showResult={showResult} setShowResult={setShowResult} inputRef={inputRef} />
      {showResult && <SearchResults />}
    </div>
  );
}

export default App;

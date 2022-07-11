import { useRef, useState } from 'react';
import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';
import SearchResults from './components/Results/SearchResults';
import "./styles/app.scss";
function App() {
  const [showResult,setShowResult] = useState(false);
  const inputRef = useRef(null);

  return (
    <div className="App">
      <Navbar />
      <SearchBar setShowResult={setShowResult} inputRef={inputRef} />
      {showResult && <SearchResults />}
    </div>
  );
}

export default App;

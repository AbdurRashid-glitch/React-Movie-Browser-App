
import './App.css';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';
import Searchview from './components/SearchView'
import MovieView from './components/MovieView';

function App() {

  const [searchResults, setSearchResults] = useState([])
  const [searchText, setSearchText] = useState('')

  
  useEffect(()=>{
    if(searchText){
      fetch(`https://api.themoviedb.org/3/search/movie?api_key=cf0479547c6e8d92234107645a434be9&language=en-US&query=${searchText}&page=1&include_adult=false`)
      .then(response => response.json())
      .then(data =>{
        console.log(data)
        setSearchResults(data.results)
      } )
    }
    
  }, [searchText])
  return (
    <Router>
      <Navbar searchText= {searchText} setSearchText={setSearchText}/>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/search" element={<Searchview keyword={searchText} searchResults={searchResults} />} />
        <Route path="/movies/:id" element={<MovieView />} />
      </Routes>
    </Router>
  );
}

export default App;

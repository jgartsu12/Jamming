import React from 'react';

import '../App/App.css';
import SearchBar from '../Searchbar/Searchbar';
import Playlist from '../Playlist/Playlist';
import SearchResults from '../SearchResults/SearchResults';

function App() {
  return (
    <div>
      <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar />
        <div className="App-playlist">
          <SearchResults />
          <Playlist />
        </div>
      </div>
    </div>
  );
}

export default App;

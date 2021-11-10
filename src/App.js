//import logo from './logo.svg';
import './App.css';
import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";



function App() {
  //let prodId = 1;

  return (
    <BrowserRouter>
    <div className="App">
      
        <NavBar />
        <Routes>
          <Route exact path='/' element={<ItemListContainer greeting='Hello' /> } />
          <Route exact path='/category/:category' element={<ItemListContainer greeting='Hello' /> } />
          <Route exact path='/product/:prodId' element={<ItemDetailContainer/> } />
        </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;

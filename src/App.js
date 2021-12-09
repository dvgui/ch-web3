//import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import CartContextProvider from './context/CartContext';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';

function App() {
    //let prodId = 1;

    return (
        <CartContextProvider>
            <BrowserRouter>
                <div className="App">
                    <NavBar />
                    <Routes>
                        <Route
                            exact
                            path="/"
                            element={
                                <ItemListContainer greeting="Hello dear customer!" />
                            }
                        />
                        <Route
                            exact
                            path="/category/:category"
                            element={
                                <ItemListContainer greeting="Hello dear customer!" />
                            }
                        />
                        <Route
                            exact
                            path="/product/:prodId"
                            element={<ItemDetailContainer />}
                        />
                        <Route exact path="/cart" element={<Cart />} />
                        <Route exact path="/checkout" element={<Checkout />} />
                    </Routes>
                </div>
            </BrowserRouter>
        </CartContextProvider>
    );
}

export default App;

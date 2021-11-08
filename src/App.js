//import logo from './logo.svg';
import './App.css';
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";


function App() {
  let prodId = 1;

  return (
    <div className="App">
        <NavBar />
        <ItemListContainer greeting="Hello" />
        <ItemDetailContainer product={prodId} />

    </div>
  );
}

export default App;

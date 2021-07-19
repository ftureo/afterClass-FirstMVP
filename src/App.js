// Importamos lo que necesitemos de react-router-dom
// import { BrowserRouter, Route, Switch } from "react-router-dom";

// Importamos los componentes
import NavBar from "./components/NavBar";
import ItemListContainer from './components/ItemListContainer'

//Importamos los estilos
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/styles.css'

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer />
    </div>
  );
}

export default App;

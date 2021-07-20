// Importamos lo que necesitemos de react-router-dom
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

// Importamos los componentes
import NavBar from "./components/NavBar";
import ItemListContainer from './components/ItemListContainer'
import Categories from "./components/Categories";

//Importamos los estilos
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/styles.css'

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <NavBar />
                <Switch>
                    <Route exact path='/' component={ ItemListContainer } />
                    <Route exact path={'/Productos/Categoria/:categoryByID'}  component={Categories}/>
                </Switch>
               {/* Cualquier otra URL que se escriba y no coincida con lo que ya tenemos configurado, nos enviará al componente que coincida que con el path que coloquemos en el Redirect */}
               <Redirect to='/' />
               {/* En este caso, este Redirect nos llevará al renderizado de los productos */}
            </BrowserRouter>
        </div>
    );
}

export default App;

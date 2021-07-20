import { useState, useEffect } from "react";
import axios from "axios";
import ItemList from "./ItemList";
import { Spinner } from 'reactstrap';

function ItemListContainer() {

    const [products, setProducts] = useState([])

    // API CALL  - Llamado a un archivo .JSON local
    // Creo una función asincrónica
    // No se puede invocar Await sin un Async
    const getProducts = async () => {
        // Espero a que la data se fetchee
        const data = await fetch('../JSON/Datalist.json')
        // Aplico el método JSON() para extraer la respuesta a la petición
        const responseData = await data.json()
        // Vemos qué llegó
        console.log("Soy la data del JSON:", responseData)
        setProducts(responseData)
    }
    console.log("Soy el hook de products", products)

    // API CALL  - Llamado a un archivo servidor 
    const getProductsSimon = async () => {
        // Espero a que la data se fetchee
        const dataSimon = await fetch('http://localhost:4000/products') //Endpoint
        // Aplico el método JSON() para extraer la respuesta a la petición
        const responseDataSimon = await dataSimon.json()
        // Vemos qué llegó
        console.log("Soy la data de Simón", responseDataSimon)
    }

    // API CALL  - Llamado a un archivo servidor utilizando la librería AXIOS
    const getProductsAxios = async () => {
        //Acá le indico el verbo HTTP para la solicitud
        const dataProductAxios = await axios.get('http://localhost:4000/products')
        //Vemos todo lo que nos devuelve Axios
        console.log("Soy la respuesta que brinda Axios", dataProductAxios)
        // Acá guardamos solamente lo que nos interesa
        const dataAxios = dataProductAxios.data
        console.log("Soy la dataAxios guardada", dataAxios)
    }

    useEffect(() => {
        setTimeout(() => getProducts(), 2000)
    }, [])
    useEffect(() => {
        setTimeout(() => getProductsSimon(), 4000)
    }, [])
    useEffect(() => {
        setTimeout(() => getProductsAxios(), 6000)
    }, [])

    return(
        <div className='containerItemListContainer'>
            { products.length === 0 
                ? <Spinner color="light"/>
                : <ItemList products={products}/>
            }
        </div>
    )
}
export default ItemListContainer
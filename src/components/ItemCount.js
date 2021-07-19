import axios from 'axios';
import { useEffect, useState } from 'react';
import { Button } from 'reactstrap';

function ItemCount(props){
    const[qty, setQty] = useState(props.initial)
    
    const onIncrease = () => {
        const newValue = qty+1
        if (newValue <= props.stock){
            setQty(newValue)
        }
    }

    const onDecrease = () => {
        const newValue = qty-1
        if(props.initial <= newValue){
            setQty(newValue)
        }
    }
    const onAdd = () => {
        const message = `Agregaste ${ qty } producto`
        if(props.stock !== 0) {
            (qty === 1) ? alert(message) : alert(message + `s`)
        }
    }

    // API CALL  - Llamado a un archivo .JSON local
    // Creo una función asincrónica
    const getProducts = async() => {
        // Espero a que la data se fetchee
        const data = await fetch('../JSON/Datalist.json')
        // Aplico el método JSON() para extraer la respuesta a la petición
        const responseData = await data.json()
        // Vemos qué llegó
        console.log("Soy la data del JSON:", responseData)
    }

    // API CALL  - Llamado a un archivo servidor 
    const getProductsSimon = async() => {
        // Espero a que la data se fetchee
        const dataSimon = await fetch('http://localhost:4000/products')
        // Aplico el método JSON() para extraer la respuesta a la petición
        const responseDataSimon = await dataSimon.json()
        // Vemos qué llegó
        console.log("Soy la data de Simón", responseDataSimon)
    }

    // API CALL  - Llamado a un archivo servidor utilizando la librería AXIOS
    const getProductsAxios = async() => {
        //Acá le indico el verbo HTTP para la solicitud
        const dataProductAxios = await axios.get('http://localhost:4000/products')
        //Vemos todo lo que nos devuelve Axios
        console.log("Soy la respuesta que Axios", dataProductAxios)
        // Acá guardamos solamente lo que nos interesa
        const dataAxios = dataProductAxios.data
        console.log(dataAxios)
    }

    useEffect(() => {
        setTimeout(() => getProducts(), 2000)
    },[])
    useEffect(() => {
        setTimeout(() => getProductsSimon(), 4000)
    })
    useEffect(() => {
        setTimeout(() => getProductsAxios(), 6000)
    })

    return(
        <div className= 'containerItemCount'>
            <div className= 'itemCount mt-2 '>
            <Button color="danger" size="lg" active onClick={ onDecrease } >-</Button>{' '}
            <div className='boxQuantity'>{ qty }</div>
            <Button color="primary" size="lg" active  onClick={ onIncrease } >+</Button>{' '}
            </div>
            <Button color="success" className ='mt-2 mb-2' size="lg" active  onClick={ onAdd } >Agregar al Carrito</Button>
        </div>
    )
}
export default ItemCount
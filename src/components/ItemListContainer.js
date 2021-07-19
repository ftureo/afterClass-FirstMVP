import ItemCount from "./ItemCount";

function ItemListContainer() {
    return(
        <div>
            <ItemCount stock={ 10 } initial={ 1 }/>
        </div>
    )
}
export default ItemListContainer
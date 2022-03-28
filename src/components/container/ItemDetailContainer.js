import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "../itemDetail/ItemDetail"
import {getFetch , getFetchOne } from "../../helpers/getFetch"

function ItemDetailContainer() {
    const [producto, setProducto] = useState({})
    console.log(producto)
    const { Id } = useParams()     
    useEffect(()=>{
        getFetch
        .then(resp => setProducto(resp.find(prod => prod.id === Id)))
        .catch(err => console.log(err))
    }, )
    return (
        <div>            
            <ItemDetail producto={producto}/>             
        </div>
    )
}

export default ItemDetailContainer

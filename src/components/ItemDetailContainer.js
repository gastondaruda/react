import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "./ItemDetail"
import {getFetchOne } from "../helpers/getFetch"



function ItemDetailContainer () {
    const [prod, setProducto] = useState({})
    const [loading, setLoading] = useState(true);

    const { Id } = useParams() 
    
    useEffect(()=>{
        getFetchOne
        .then(prod => prod.find(item => item.id === Id))
        .then(prod => setProducto(prod))
        .catch(err => console.log(err))
        
        .finally(() => setLoading(false))
    }, [])

    
    return (
        <div>
            { loading ? <div className='container'>
                    <div className='loader'></div>
                    <p className='message'>Cargando </p>
                </div> : 
            <ItemDetail prod={prod}/> 
            }
        </div>
    )
}

export default ItemDetailContainer

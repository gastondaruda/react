import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "./ItemDetail"
import { getFetch } from "../helpers/getFetch"



function ItemDetailContainer () {
    const [prod, setProds ] = useState([]);
    const { Id } = useParams ()

    const [loading, setLoading] = useState(true);
        
    useEffect(()=> {        
        getFetch.then(resp => setProds(resp))
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

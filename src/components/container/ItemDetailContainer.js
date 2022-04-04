import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "../itemDetail/ItemDetail"

import {doc, getDoc, getFirestore} from "firebase/firestore"

function ItemDetailContainer() {
    const [prods, setProds ] = useState([]);
    const [prod, setProd] = useState();
    const [loading, setLoading] = useState(true);
    const { id } = useParams ()   
    
    useEffect(()=> {
            const dataB = getFirestore()
            const queryDoc = doc(dataB, 'items', id) 
            getDoc(queryDoc)
            .then(resp => setProd( {id: resp.id, ...resp.data()} ))
            .finally(() => setLoading(false))
        }, [id])
    
    console.log(prod +" esto no funciona ")

    return (
        
        <>
        {
            loading ? <div className='container'>
                        <div className='loader'></div>
                        <p className='message'>Cargando </p>
                    </div> :
                    
                    <div>            
                        <ItemDetail prod={prod}/>             
                    </div>
                    
                    }
        </> 
    )
}


export default ItemDetailContainer

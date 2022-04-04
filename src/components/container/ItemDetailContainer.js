import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "../itemDetail/ItemDetail"
import {doc, getDoc, getDocs, getFirestore} from "firebase/firestore"

function ItemDetailContainer() {
    const [prod, setProd] = useState([])
    const { id } = useParams ()   
    
    useEffect(() => {
        const dataB = getFirestore()
        const queryDoc = doc(dataB, "items" , "6x2lPqTnzCGSB8qI82ev") //coómo hacer dinámico?
        getDoc(queryDoc)
        .then(resp => setProd( {id: resp.id, ...resp.data()}))    
    
    }, [id])
    console.log(prod)
    return (
        <div>            
            <ItemDetail producto={prod}/>             
        </div>
    )
}

export default ItemDetailContainer

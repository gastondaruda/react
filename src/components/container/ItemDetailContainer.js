import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "../itemDetail/ItemDetail"
import {doc, getDoc, getDocs, getFirestore} from "firebase/firestore"

function ItemDetailContainer() {
    const [prod, setProd] = useState([])
    const { id } = useParams ()   
    
    useEffect(() => {
        const dataB = getFirestore()
        const queryDoc = doc(dataB, "items" , {id})
        getDoc(queryDoc)
        .then(resp => console.log("hola"))
    
    }, [id])
    return (
        <div>            
            <ItemDetail producto={prod}/>             
        </div>
    )
}

export default ItemDetailContainer

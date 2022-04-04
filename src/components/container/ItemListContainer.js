import React, { useState } from 'react'
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../itemList/ItemList';
import bg from '../../assets/imagenes/bg2.jpg';

import {collection, getDocs, getFirestore, query, where} from "firebase/firestore"


function ItemListContainer ({titulo}) {
    const [prods, setProds ] = useState([]);
    const [loading, setLoading] = useState(true);
    const { id } = useParams ()
    const {category} = useParams()

    

    useEffect(()=> {
        const dataB = getFirestore()
        const queryCollection = collection(dataB, "items")
            getDocs(queryCollection)
            .then(resp => setProds(resp.docs.map(prod =>( {id: prod.id, ...prod.data()}))))
            .catch(err => console.log(err))
            .finally(() => setLoading(false))
        /*}*/
        }, [id])

        useEffect(()=> {
            const dataB = getFirestore()
            if(id){

                const queryCollection = collection(dataB, "items")
                const queryfilter = query(queryCollection, where("category", "==", id ))
                getDocs(queryfilter)
            .then(resp => setProds(resp.docs.map(prod =>( {id: prod.id, ...prod.data()}))))
            .catch(err => console.log(err))
            .finally(() => setLoading(false))
        } else {
            const queryCollection = collection(dataB, "items")
            getDocs(queryCollection)
            .then(resp => setProds(resp.docs.map(prod =>( {id: prod.id, ...prod.data()}))))
            .catch(err => console.log(err))
            .finally(() => setLoading(false))
        }
        }, [id]) 

        
    return (
        <>
            <img className='img' src={bg} alt=""></img>
                <h3 className='dancing prod-title'>Nuestros Productos</h3>
            <div className="cards">
                { loading ? <div className='container'>
                                <div className='loader'></div>
                                <p className='message'>Cargando </p>
                            </div> : 
                <ItemList prods={prods}/> 
            }
            </div>
        </>
        )}
    


export default ItemListContainer
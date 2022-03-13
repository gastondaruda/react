import React, { useState } from 'react'
import { useEffect } from 'react';
import {getFetch} from '../helpers/getFetch'
import ItemList from './ItemList';



function ItemListContainer ({titulo}) {
    const [prods, setProds ] = useState([]);
    const [loading, setLoading] = useState(true);
        
    useEffect(()=> {        
        getFetch.then(resp => setProds(resp))
        .catch(err => console.log(err))
        .finally(() => setLoading(false))
    }, [])



    return (
        <>
            <h3 className="landing_title">{titulo}</h3>
            <div className="cards">
                { loading ? <div className='container'>
                    <div className='loader'></div>
                    <p className='message'>Cargando </p>
                </div> : 
                <ItemList prods={prods} /> 
            }
            </div>
        </>
        )}
    


export default ItemListContainer
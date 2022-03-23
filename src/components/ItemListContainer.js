import React, { useState } from 'react'
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {getFetch} from '../helpers/getFetch'
import ItemList from './ItemList';
import bg from '../assets/imagenes/bg2.jpg';



function ItemListContainer ({titulo}) {
    const [prods, setProds ] = useState([]);
    const [loading, setLoading] = useState(true);
    const { id } = useParams ()

    useEffect(()=> {  
        if ( id ) {
            getFetch.then(resp => setProds(resp.filter(prod=> prod.categoria === id)))
            .catch(err => console.log(err))
            .finally(() => setLoading(false))
        } else {
            getFetch.then(resp => setProds(resp))
            .catch(err => console.log(err))
            .finally(() => setLoading(false))
        }
    }, [id])



    return (
        <>
            <img className='img' src={bg} alt=""></img>
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
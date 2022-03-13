import React, { useState } from 'react'
import { useEffect } from 'react';
import ItemCount from './ItemCount';



const productos = [
    {id:1, nombre: 'Torta 1', description: 'Untipazo', stock: 5 , url: 'https://vadetartas.com/wp-content/uploads/2021/06/receta-torta-golosinera.png'},
    {id:2, nombre: 'Torta 2', description: 'Untipazo', stock: 7 , url: 'https://annaspasteleria.com/images/_imageBlock/DSC_3586web.jpg'},
    {id:3, nombre: 'Torta 3', description: 'Untipazo', stock: 10 , url: 'https://images.aws.nestle.recipes/original/e89d19d331ac413811e3b1c11a893991_torta-princesa.jpg'}

]



const task = new Promise((resolve, reject)=> {
    let condition = true;
    if(condition) {
        setTimeout(()=>{
            resolve(productos)
        }, 2000) 
    } else {
        reject('400 - not found' )
    }
})

function ItemListContainer ({titulo}) {
    const [prods, setProds ] = useState([]);
    const [loading, setLoading] = useState(true);
        
    useEffect(()=> {        
        task.then(resp => setProds(resp))
        .catch(err => console.log(err))
        .finally(() => setLoading(false))
    }, [])

    
    console.log(prods)

    return (
        <>
            <h3 className="landing_title">{titulo}</h3>
            <div className="cards">
                { loading ? <div className='container'>
                    <div className='loader'></div>
                    <p className='message'>Cargando </p>
                </div> : 
                productos.map((prod) => 
                <div className='card-div' key={prod.id}>
                    <h3 >{prod.nombre}</h3>
                    <img className='card-image' src={prod.url} alt=""></img>
                    <ItemCount stock={prod.stock}/>
                    
                </div>)}
            </div>
        </>
            )
    }


export default ItemListContainer
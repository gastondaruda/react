import img1 from '../assets/imagenes/IMG_1.jpg'
import img1h from '../assets/imagenes/IMG_1h.jpg'
import img2 from '../assets/imagenes/IMG_2.jpg'
import img2h from '../assets/imagenes/IMG_2h.jpg'
import img3 from '../assets/imagenes/IMG_3.jpg'
import img3h from '../assets/imagenes/IMG_3h.jpg'
import img4 from '../assets/imagenes/IMG_4.jpg'
import img4h from '../assets/imagenes/IMG_4h.jpg'
import img5 from '../assets/imagenes/IMG_5.jpg'
import img5h from '../assets/imagenes/IMG_5h.jpg'
import img6 from '../assets/imagenes/IMG_6.jpg'
import img6h from '../assets/imagenes/IMG_6h.jpg'
import img7 from '../assets/imagenes/IMG_7.jpg'
import img7h from '../assets/imagenes/IMG_7h.jpg'
import img8 from '../assets/imagenes/IMG_8.jpg'
import img8h from '../assets/imagenes/IMG_8h.jpg'
import img9 from '../assets/imagenes/IMG_9.jpg'
import img9h from '../assets/imagenes/IMG_9h.jpg'
import img10 from '../assets/imagenes/IMG_10.jpg'
import img11 from '../assets/imagenes/IMG_11.jpg'
import img11h from '../assets/imagenes/IMG_11h.jpg'
import img12 from '../assets/imagenes/IMG_12.jpg'
import img12h from '../assets/imagenes/IMG_12h.jpg'

const productos = [
    {id:'Torta 1', nombre: 'Torta 1', precio: 1500, description: 'Untipazo', stock: 5 , url: img1, url2: img1h},
    {id:'Torta 2', nombre: 'Torta 2', precio: 1500, description: 'Untipazo', stock: 7 , url: img2, url2: img2h},
    {id:'Torta 3', nombre: 'Torta 3', precio: 1500, description: 'Untipazo', stock: 10 , url: img3, url2: img3h},
    {id:'Torta 4', nombre: 'Torta 4', precio: 1500, description: 'Untipazo', stock: 2 , url: img4, url2: img4h},
    {id:'Torta 5', nombre: 'Torta 5', precio: 1500, description: 'Untipazo', stock: 4 , url: img5, url2: img5h},
    {id:'Torta 6', nombre: 'Torta 6', precio: 1500, description: 'Untipazo', stock: 4 , url: img6, url2: img6h},
    {id:'Torta 7', nombre: 'Torta 7', precio: 1500, description: 'Untipazo', stock: 4 , url: img7, url2: img7h},
    {id:'Torta 8', nombre: 'Torta 8', precio: 1500, description: 'Untipazo', stock: 4 , url: img8, url2: img8h},
    {id:'Torta 9', nombre: 'Torta 9', precio: 1500, description: 'Untipazo', stock: 4 , url: img9, url2: img9h},
    {id:'Torta 10', nombre: 'Torta 10', precio: 1500, description: 'Untipazo', stock: 4 , url: img10, url2: img10},
    {id:'Torta 11', nombre: 'Torta 11', precio: 1500, description: 'Untipazo', stock: 4 , url: img11, url2: img11h},
    {id:'Torta 12', nombre: 'Torta 12', precio: 1500, description: 'Untipazo', stock: 4 , url: img12, url2: img12h}
]

export const getFetch = new Promise((resolve, reject)=> {
    let condition = true;
    if(condition) {
        setTimeout(()=>{
            resolve(productos)
        }, 2000) 
    } else {
        reject('400 - not found' )
    }
})



const prod = {id:1, nombre: 'Torta 1', description: 'Untipazo', stock: 5 , url: img1, url2: img1h}

export const getFetchOne = new Promise((resolve, reject)=>{
    //acciones 
    let condition = true
    if (condition) {
        setTimeout(() => {
            resolve(prod)                    
        }, 3000);
    } else {
        reject('400 - not found')        
    }
})


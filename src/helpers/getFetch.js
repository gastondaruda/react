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
    {id:'Torta1', nombre: 'Desayuno', precio: 3100, categoria:"Desayunos", description: 'Box de regalo', stock: 5 , url: img1, url2: img1h},
    {id:'Torta2', nombre: 'Torta Brownie', precio: 2200, categoria:"Tortas", description: 'Torta brownie con dulce de leche, merengue y frutillas', stock: 7 , url: img2, url2: img2h},
    {id:'Torta3', nombre: 'Mousse de Dulce de leche', precio: 2300, categoria:"Tortas", description: 'Lorem Lorem Lorem Lorem', stock: 10 , url: img3, url2: img3h},
    {id:'Torta4', nombre: 'Tiramisu', precio: 1900, categoria:"Tortas", description: 'Lorem Lorem Lorem Lorem', stock: 2 , url: img4, url2: img4h},
    {id:'Torta5', nombre: 'Chocotorta', precio: 2500, categoria:"Tortas", description: 'Lorem Lorem Lorem Lorem', stock: 4 , url: img5, url2: img5h},
    {id:'Torta6', nombre: 'Key Lime Pie', precio: 1950, categoria:"Tartas", description: 'Lorem Lorem Lorem Lorem', stock: 4 , url: img6, url2: img6h},
    {id:'Torta7', nombre: 'Cupcakes(12u)', precio: 1600, categoria:"Muffins", description: 'Lorem Lorem Lorem Lorem', stock: 4 , url: img7, url2: img7h},
    {id:'Torta8', nombre: 'Letter Cake', precio: 4200, categoria:"Tortas", description: 'Lorem Lorem Lorem Lorem', stock: 4 , url: img8, url2: img8h},
    {id:'Torta9', nombre: 'Tarta de Frutillas', precio: 1650, categoria:"Tartas", description: 'Lorem Lorem Lorem Lorem', stock: 4 , url: img9, url2: img9h},
    {id:'Torta10', nombre: 'Tarta de Coco', precio: 1320, categoria:"Tartas", description: 'Lorem Lorem Lorem Lorem', stock: 4 , url: img10, url2: img10},
    {id:'Torta11', nombre: 'Alfajores de Maicena(12u)', precio: 425, categoria:"Alfajores", description: 'Lorem Lorem Lorem Lorem', stock: 4 , url: img11, url2: img11h},
    {id:'Torta12', nombre: 'Biscuit imprimé', precio: 2050, categoria:"Tortas", description: 'Lorem Lorem Lorem Lorem', stock: 4 , url: img12, url2: img12h}
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


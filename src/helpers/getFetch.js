const productos = [
    {id:1, nombre: 'Torta 1', description: 'Untipazo', stock: 5 , url: 'https://vadetartas.com/wp-content/uploads/2021/06/receta-torta-golosinera.png'},
    {id:2, nombre: 'Torta 2', description: 'Untipazo', stock: 7 , url: 'https://annaspasteleria.com/images/_imageBlock/DSC_3586web.jpg'},
    {id:3, nombre: 'Torta 3', description: 'Untipazo', stock: 10 , url: 'https://images.aws.nestle.recipes/original/e89d19d331ac413811e3b1c11a893991_torta-princesa.jpg'}

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


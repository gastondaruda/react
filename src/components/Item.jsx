import { Link } from 'react-router-dom';


const Item = ({prod}) => {
    return (
        
        
        <div className='card-div' key={prod.id}>
                    <div className='div-image'>
                        <img className='card-image' src={prod.url} alt=""></img>
                        <img className='card-image-hover' src={prod.url2} alt=""></img>
                    </div>
                    <div className='title-flex'>
                        <h3 className='card-title lora' >{prod.nombre}</h3>
                        <h3 className='card-precio questrial'>${prod.precio}</h3> 
                    </div>
                    <Link to={`detalle/${prod.id}`} >
                        <a href='#' className='div-detail questrial'>Comprar</a>
                    </Link>
                </div>
                
            
    )
}

export default Item


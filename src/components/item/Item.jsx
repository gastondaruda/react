import { Link } from 'react-router-dom';


const Item = ({prod}) => {
    return (
        
        
        <div className='card-div' key={prod.id}>
                <Link to={`/detalle/${prod.id}`}>
                    <div className='div-image'>
                        <img className='card-image' src={prod.url} alt=""></img>
                        <img className='card-image-hover' src={prod.url2} alt=""></img>
                    </div>
                </Link>
                
                    <div className='title-flex'> 
                        <h3 className='card-title lora'>{`${prod.nombre} - ${prod.categoria}`}</h3>
                        <div className='buy'>
                            <h3 className='card-precio questrial'>${prod.precio}</h3> 
                            <Link to={`/detalle/${prod.id}`} >
                                <button href='#' className='btn-add carrito questrial'>Comprar</button>
                            </Link>
                        </div>
                    </div>
                    
                </div>
                
            
    )
}

export default Item


import { Link } from 'react-router-dom';
import ItemCount from './ItemCount';

const Item = ({prod}) => {
    return (
        
        
        <div className='card-div' key={prod.id}>
                    <div className='div-image'>
                        <img className='card-image' src={prod.url} alt=""></img>
                        <img className='card-image-hover' src={prod.url2} alt=""></img>
                    </div>
                    <h3 className='card-title' >{prod.nombre}</h3>
                    <ItemCount stock={prod.stock} />
                    <Link className='link' to={`detalle/${prod.id}`} >
                        <button className='div-detail'>Detalle</button>
                    </Link>
                </div>
                
            
    )
}

export default Item


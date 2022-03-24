import Intercabilidad from '../itemCount/Intercambiabilidad';
import ItemCount from '../itemCount/ItemCount';
import Intercambiabilidad from '../itemCount/Intercambiabilidad';

function ItemDetail({producto}) {
  
    return (
      <div className="itemDetail">
            <img className="image-detail" src={producto.url} alt = 'imagen' />
            <div className="detail-flex">
              <h5 className='p-detail lora'>{producto.nombre}</h5>
              <p className="text-detail questrial">"lorem lorem lorem lorem lorem"</p>
              <h3 className='card-precio questrial'>${producto.precio}</h3>
              
              <Intercambiabilidad />
            </div>
      </div>
    )
  }
  
  export default ItemDetail
  
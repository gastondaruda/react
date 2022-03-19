import ItemCount from './ItemCount';

function ItemDetail({producto}) {
  
    return (
      <div className="itemDetail">
            <img className="image-detail" src={producto.url} alt = 'imagen' />
            <div className="detail-flex">
              <p className='p-detail'>{producto.nombre}</p>
              <p className="text-detail">lorem lorem lorem lorem lorem</p>
              <ItemCount stock={producto.stock} />
            </div>
      </div>
    )
  }
  
  export default ItemDetail
  
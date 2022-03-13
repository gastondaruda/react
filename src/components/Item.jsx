import ItemCount from './ItemCount';

const Item = ({prod}) => {
    return (
            
                <div className='card-div' key={prod.id}>
                    <h3 >{prod.nombre}</h3>
                    <img className='card-image' src={prod.url} alt=""></img>
                    <ItemCount stock={prod.stock} />
                </div>
                
            
    )
}

export default Item


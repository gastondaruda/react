import { Link } from 'react-router-dom';


const Item = ({prod}) => {
    return (
        <div className='card-div' key={prod.id}>
                <Link to={`/detail/${prod.id}`}>
                    <div className='div-image'>
                        <img className='card-image' src={prod.image1} alt={prod.name}></img>
                        <img className='card-image-hover' src={prod.image2} alt={prod.name}></img>
                    </div>
                </Link>
                
                    <div className='title-flex'> 
                        <h3 className='card-title lora'>{`${prod.name} - ${prod.category}`}</h3>
                        <div className='buy'>
                            <h3 className='card-price questrial'>${prod.price}</h3> 
                            <Link to={`/detail/${prod.id}`} >
                                <button href='#' className='btn-add cart questrial'>Comprar</button>
                            </Link>
                        </div>
                    </div>
                </div>
    )
}

export default Item


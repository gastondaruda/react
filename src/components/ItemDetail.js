import { getFetch } from "../helpers/getFetch"


function ItemDetail({prod}) {
  
    return (
      <div className="itemDetail">
            <img src={prod.url} alt = 'imagen' />
            <p className=''>{prod.nombre}</p>
            <h1>No funciona del todo</h1>
      </div>
    )
  }
  
  export default ItemDetail
  
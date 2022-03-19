
function ItemDetail({prod}) {
    return (
      <div className="itemDetail">
        <center>
            <img src={prod.url} alt = 'imagen' />
            <p className=''>{prod.nombre}</p>
            <h3 >Funciona a medias, no me toma el prod.url/prod.nombre</h3>
        </center>
      </div>
    )
  }
  
  export default ItemDetail
  
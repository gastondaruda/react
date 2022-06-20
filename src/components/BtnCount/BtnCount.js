import { Link } from "react-router-dom";
import { useState} from "react";
import swal from "sweetalert"
import "./BtnCount.css"

const BtnCount = ({stock, initial=1, onAdd})=> {
    const [ count, setCount ] = useState(initial)

    const handleCount = () => {
        if(count < stock){
            setCount( count + 1)
        }
        else{
            swal({
                text: "Superaste el stock",
                icon: "warning",
                button: "aceptar"
            })
        }
    }
        const handleLess = () => {
            if(count === 1 ){
                swal({
                    text: "El mínimo de compra es de 1 unidad",
                    icon: "warning",
                    button: "aceptar"
                    })
            } else {
                setCount (count - 1)
            }
        } 
        const agregar = () => {
        onAdd( count )
    }
    
    return (
            <>     
            <div className="div-count">
                    <div className="count">
                        <button className="btn" onClick={handleLess}>-</button>
                        <label className="btn-count">{count}</label>
                        <button className="btn" onClick={handleCount}>+</button>
                    </div>
                    
                </div>
                <div className="btn-div">
                    <button className="btn-add cart questrial buttonAdd" onClick={agregar} >Agregar al carrito</button>
                    <Link to="/">
                    <button className="btn-add questrial">Seguir comprando</button>
                    </Link>
                </div>
            </>
        )
}

export default BtnCount
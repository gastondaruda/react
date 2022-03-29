import { Link } from "react-router-dom";
import { useState} from "react";

const BtnCount = ({stock, initial=1, onAdd, id})=> {
    const [ count, setCount ] = useState(initial)// devuelve un array
       //let count = 0;

        
    
        const handleCount = () => {
          //count = count + 1;
            if(count < stock){
                setCount( count + 1)
            
            }
            else {
                alert("Superaste el stock")
            }
        }
        const handleLess = () => {
            if(count === 1 ){
                alert("El mínimo es 1")
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
                    <button className="btn-add carrito questrial" onClick={agregar} >Agregar al carrito</button>
                    <Link to="/">
                    <button className="btn-add questrial">Seguir comprando</button>
                    </Link>
                </div>
            </>
        )
}

export default BtnCount
import {useState, setCount} from "react"
import './itemCount.css'
import Intercambiabilidad from './Intercambiabilidad'

function ItemCount({stock, initial=1}) {
    const [ count, setCount ] = useState(initial)// devuelve un array
     //let count = 0;

    const handleCount = () => {
        //count = count + 1;
        if(count < stock){
            setCount( count + 1)
            console.log(count)
        
        }
        else {
            alert("Superaste el stock")
        }
    }
    const handleLess = () => {
        if(count >=1 ){
            setCount (count - 1)
        } else {
            count = 0;
        }
    } 

    const addCarT = () => {
        if(count > 0){
            alert("Agregado al carrito")
        }else{
            alert("No hay producto seleccionado")
        }
    }
    
    return (
            <div className="div-count">
                <div className="count">
                    <button className="btn" onClick={handleLess}>-</button>
                    <label className="btn-count">{count}</label>
                    <button className="btn" onClick={handleCount}>+</button>
                </div>
                
            </div>


    
    )
}


export default ItemCount

/*

    //-------------------------
    const [bool, setBool ] = useState ( true )
    const handleBool = () => {
        setBool( !bool)
        console.log(bool)
    }

    <button onClick={handleBool}>Click</button>
    //-------------------------
*/
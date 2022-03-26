import {useState, setCount} from "react"
import './itemCount.css'

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
        if(count === 0 ){
            count = 1;
            alert("El mínimo es 1")
        } else {
            setCount (count - 1)
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
import { useState } from "react";
import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";

const InputCount = () => {

    return (
        <Link to="/Carrito">
            <button className="btn-add questrial">Ir al Carrito</button>
        </Link>
    )
}

const BtnCount = ({handleInter})=> {
    return <button className="btn-add questrial" onClick={handleInter}>Agregar al carrito</button>
}

const Intercabilidad = (producto) => {
    const [inputType , setInputType ] = useState('button')
    const handleInter = () => {
        setInputType('input')
    }

    return (
        <>
        {
            inputType === 'button' ?
            <>
                <ItemCount stock={producto.stock}/>
                <BtnCount handleInter={handleInter} />
            </>
            :
            <InputCount />
        }
    
    </>
    
    )
}


export default Intercabilidad
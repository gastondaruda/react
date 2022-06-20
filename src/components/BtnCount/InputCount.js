import { Link } from "react-router-dom";

const InputCount = () => {
    return (
        <div className="btn-div">
            <Link to="/">
            <button className="btn-add questrial">Seguir comprando</button>
            </Link>
            <Link to="/Cart">
                <button className="btn-add cart questrial buttonAdd">Ir al Carrito</button>
            </Link>
        </div>
        )
    }

export default InputCount
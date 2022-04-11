import swal from "sweetalert"

const List = ({li}) => {

    const alert = () => {
        swal({
            text: "Proximamente esta sección. Disculpe las molestias.",
            icon: "warning",
            button: "aceptar"
            })
    }     
    return(
        <li className="questrial li" onClick={alert}>{li}</li>
    )
}

export default List
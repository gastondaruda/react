import List from "./List"
import "./footer.css"


function Footer(){

    
    
    return(
        <div className="footer">
            <h3 className="flex footer_title questrial">Seguinos en nuestras redes sociales</h3>
            <div className="footer-section">
                <div className="services flex column">
                    <h3 className="questrial footer-title">Servicios y productos(Proximamente)</h3>
                    <List li="Tienda Online"/>
                    <List li="Catering"/>
                    <List li="Envíos a domicilio"/>
                    <List li="Venta Mayorista"/>
                    <List li="Políticas de envío, compre y medios de pago"/>
                </div>
                <a href="https://www.instagram.com/momento.dolce.pasteleria/" target="_blank" rel="noopener noreferrer">
                    <i class="bx bxF bxl-instagram"></i>
                </a>
            </div>
        </div>
    )
}

export default Footer

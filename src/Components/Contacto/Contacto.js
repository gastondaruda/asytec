import React,{useState, useEffect} from "react"
import {Container, Row, Col} from 'react-bootstrap';
import "./contact.scss"
import navLogo from "../../Imagenes/logo.png"

export default function Contacto(){

    const [css, setCss] = useState(true)


    useEffect(() => {
        setTimeout(() => {
            setCss(false)
        }, 1000)
    }, [])
    return(
        <>
        <Container className="containerContact" lg="fluid">
            <Row>
                <Col className="d-flex aling-items-center justify-content-center">
                    <h3 className={css ? "display-hide" : "component-title pt-5 pb-3"}>Contacto</h3>
                </Col>
            </Row>
            <Row>
                <Col className={css ? "display-hide" : "animation2 d-flex justify-content-center aling-items-center"}>
                    <iframe title="myFrame" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6571.943709310245!2d-58.461844000000006!3d-34.554268!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb4299fd8b445%3A0x8d9d65364735b08f!2sAv.%20Congreso%202171%2C%20C1428BVE%20CABA%2C%20Argentina!5e0!3m2!1ses-419!2sus!4v1676236499613!5m2!1ses-419!2sus" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </Col>
                <Col className={css ?"display-hide"  :"d-visibile d-flex justify-content-evenly aling-items-center flex-column contact-info"}>
                    <div>
                        <h5 className="font-weight-bold">Teléfonos</h5>
                        <a href="tel:+541153678000"  target="_blank" rel="noreferrer">+54 11 5367-8000</a>
                        <a href="tel:+5491151080931"  target="_blank" rel="noreferrer">+54 911 5108-0931 </a>
                    </div>
                    <div>
                        <h5 className="font-weight-bold">Dirección</h5>
                        <p>Congreso 2171 Piso 8° Of. A</p>
                        <p>(C1428BVE) - C.A.B.A. - Argentina</p>
                    </div>
                    <div>
                        <h5 className="font-weight-bold">Oficinas - Sede Núñez</h5>
                        <ul>
                            <li>Capacidad operativa de más de 20 puestos de trabajo y salas de reunión.</li>
                            <li>Conectividad a Internet simetrica por fibra óptica.</li>
                            <li>Central telefónica digital (VolP) con líneas rotativas.</li>
                        </ul>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col className="d-flex  align-items-center justify-content-center pt-4 pb-4 flex-column">
                    <h3 className={css ? "display-hide" : "component-title pt-5 pb-3"}>Contacto</h3>
                    <h5>Envianos tu CV a <strong>rrhh@asytec.com</strong></h5>
                </Col>
            </Row>
           
        </Container>
        
        </>
    )
}


/**
<MapContainer center={position} zoom={13} scrollWheelZoom={false} style={{ height: '100vh', width: '100wh' }}>
                        <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={position}>
                        <Popup>
                            A pretty CSS3 popup. <br /> Easily customizable.
                        </Popup>
                        </Marker>
                    </MapContainer>
 */
import React,{useState, useEffect} from "react"
import {Container, Row, Col} from 'react-bootstrap';
import "./nosotros.scss"

export default function Nosotros(){

    const [css, setCss] = useState(true)
    const [animation, setAnimation] = useState(true)


useEffect(() => {
    setTimeout(() => {
        setCss(false)
    }, 500)
    setTimeout(() => {
        setAnimation(false)
    }, 2000)
}, [])

    return(
        <Container>
            <Row>
                <Col>
                    <div className="w-100 d-flex justify-content-center align-items-center flex-column pl-5 pr-5 nosotros-component">
                        <h3 className={css ? "display-hide" : "d-visibile component-title pt-5 pb-4"}>Quiénes Somos</h3>
                        <p className={animation ? "display-hide" : "d-visibile component-text"}>Desde 1993, una empresa argentina brindando servicios a <strong> más de 100 empresas nacionales e internacionales de diversos sectores de la economía.</strong>
                        El resultado de estos años de trabajo se refleja en <strong>la confianza de nuestros clientes </strong> que se suman año tras año, contribuyendo al crecimiento del staff profesional de ASYTEC. Con todos ellos hemos establecido <strong>relaciones prolongadas basadas en la excelencia de los servicios ofrecidos.</strong>
                        Trabajamos para empresas localizadas en Argentina, Angola, Bolivia, Brasil, Colombia, Ecuador, Paraguay, Perú, Uruguay, U.S.A. y Venezuela.</p>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}
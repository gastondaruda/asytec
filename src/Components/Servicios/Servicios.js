import React,{useState, useEffect} from "react"
import services from "./servicios.json"
import {Button, Container, Row, Col} from 'react-bootstrap';
import bg from "../../Imagenes/fondo2.png"
import "./servicios.scss"

export default function Servicios(){

const [arr, setArr] =useState([])
const [info, setInfo] = useState({})
const [infoText, setInfoText] = useState([])
const [css, setCss] = useState(true)
const [animation, setAnimation] = useState(true)


useEffect(() => {
    setArr(services)
    setTimeout(() => {
        setCss(false)
    }, 1000)
    setTimeout(() => {
        setAnimation(false)
    }, 2000)
}, [infoText])


const findInfo = (nombre) => {
    let result = services.find(s => s.alt === nombre)
    setInfo(result)
    setInfoText(result.info)
}

    return(
        <div className="w-100 h-100 d-flex flex-wrap justify-content-around align-items-center flex-column">
            <h3 className={css ? "display-hide" : "d-visibile component-title pt-5 font-bold"}>Servicios</h3>
            <Container fluid="lg" className="w-100 min-h">
                <Row className="">
                    {
                        arr.map((ser) => 
                        <Col  key={ser.alt} className={animation ? "display-hide" : "d-visibile d-flex flex-column services-card justify-content-around align-items-center"}>
                            <img src={ser.img} alt={ser.alt} className="img-card"/>
                            <Button className="serv-text font-bold" onClick={() => findInfo(ser.alt)}>{ser.alt}</Button>
                        </Col>
                        )
                    }
                </Row>
                        {
                            infoText === undefined ? "" :
                            <Row>
                                <Col> 
                                    <div className={infoText.length === 0 ? "" : "d-visibile servicio-info"}>
                                        <h5 className="servicio-info-title">{info.alt}</h5>
                                        <ul>
                                            {
                                                infoText.map(text => <li>{text.text}</li>)
                                            }
                                        </ul>
                                    </div>
                                </Col>
                            </Row>
                        }
            </Container>
            <div className="w-100 h-100 position-relative container-index">
                <img src={bg} alt="background" className=""/>
                <h1 className="position-absolute bg-text footer-text">Brindamos servicios personalizados de acuerdo a las necesidades de cada cliente.</h1>
            </div>
        </div>
    )
}

/*
d-flex flex-column services-card justify-content-around align-items-center
*/
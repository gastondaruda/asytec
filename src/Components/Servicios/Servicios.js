import React,{useState, useEffect} from "react"
import services from "./servicios.json"
import {Button, Container, Row, Col} from 'react-bootstrap';
import bg from "../../Imagenes/fondo2.png"
import "./servicios.scss"
import img1 from "./img/serv1.png"
import img2 from "./img/serv2.png"
import img3 from "./img/serv3.png"
import img4 from "./img/serv4.png"
import img5 from "./img/serv5.png"

const arrServices = [
    {
        img: img1,alt: "Consultoria",info: [
        {text: "Software ERP: Implementación, customización, soporte funcional/mesa de ayuda de JD Edwards, SAP, Oracle EBS"},  
        {text: "Procesos de Negocio: relevamiento, análisis, documentación, diagnóstico, optimización y rediseño de procesos."},  
        {text: "Asesoramiento para la selección e implementación de software (CRM, ERP y otros)."},  
        {text: "Diseño, implementación e integración de soluciones tecnológicas."
        }]
    },
    {
      img: img2,
      alt: "Desarrollo",
      info: [
        {
          text: "Diseño de sitios institucionales."
        },
        {
          text: "Construcción de aplicaciones a medida, web y mobile."
        },
        {
          text: "Integración de aplicaciones con sistemas de gestión."
        },
        {
          text: "Programación en múltiples plataformas: AS/400: RPG, ILE RPG, Cobol. DB2, Microsoft SQL Server, .NET, Java, PHP, C#, JavaScript, VbScript, HTML/CSS, ABAP4"
        }
      ]
    },
    {
      img: img3,
      alt: "Selección de RRHH",
      info: [
        {
          text: "Contamos con amplia experiencia en búsquedas de personal, partiendo de un claro entendimiento de la descripción del perfil solicitado."
        },
        {
          text: "Durante todo el proceso (utilizando bases de datos y redes de contactos propias y de terceros) mantenemos una comunicación fluida con el cliente, lo que permite realizar ajustes en función de diversas variables: disponibilidad de postulantes, valores y situación del mercado."
        },
        {
          text: "Para cada búsqueda se presenta una terna de postulantes con un informe comparativo detallado, indicando el grado de cumplimiento de cada uno de los requisitos del puesto, lo que facilita enormemente el análisis y toma de decisión por parte del cliente."
        },
        {
          text: "Una vez tomada la decisión, acompañamos en todo momento hasta la incorporación de la persona seleccionada."
        }
      ]
    },
    {
      img: img4,
      alt: "Seguridad de la información",
      info: [
        {
          text: "Asistencia en la operación e implementación de seguridad perimetral en redes."
        },
        {
          text: "Control de cumplimiento de normativas SOX, PCI."
        },
        {
          text: "Detección de vulnerabilidades, Test de penetración."
        },
        {
          text: "Análisis auditoría seguridad informática: automatización de controles, compliance, chequeo de plataformas, identificación y reporte de desvíos, ejecución de controles de seguridad, análisis de segregación de funciones y centralización de pedidos de accesos"
        },
        {
          text: "Auditorías de centros de cómputos, software, hardware y telecomunicaciones."
        }
      ]
    },
    {
      img: img5,
      alt: "Soporte Técnico",
      info: [
        {
          text: "Servicio Técnico de PCs en oficinas del cliente y asistencia remota: Instalación, mantenimiento y configuración de hardware, Antivirus, Software de Oficina, conexión a Internet y Correo Electrónico."
        },
        {
          text: "Mantenimiento preventivo-correctivo de PCs."
        },
        {
          text: "Administración de redes, servidores (AS/400, Windows, Linux) y puestos de trabajo."
        },
        {
          text: "Asesoramiento en compra de equipamiento e insumos."
        }
      ]
    }
  ]

export default function Servicios(){

const [arr, setArr] =useState([])
const [info, setInfo] = useState({})
const [infoText, setInfoText] = useState([])
const [css, setCss] = useState(true)
const [animation, setAnimation] = useState(true)


useEffect(() => {
    setArr(arrServices)
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
        <div className="w-100 h-100 d-flex flex-wrap justify-content-around align-items-center flex-column pt-5">
            <Container fluid="lg" className="w-100 min-h d-flex align-items-center justify-content-center flex-column">
            <h3 className={css ? "display-hide" : "d-visibile component-title pt-5 font-bold"}>Servicios</h3>
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
                <h1 className="position-absolute bg-text2 footer-text">Brindamos servicios personalizados de acuerdo a las necesidades de cada cliente.</h1>
            </div>
        </div>
    )
}

/*
d-flex flex-column services-card justify-content-around align-items-center
http://www.asytec.com/imagenes/serv1.png
*/
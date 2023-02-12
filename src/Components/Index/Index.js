import React,{useState, useEffect} from "react"
import bg from "../../Imagenes/fondo1.jpg"
import "./index.scss"

export default function Index(){
    
    const [css, setCss] = useState(true)


    useEffect(() => {
        setTimeout(() => {
            setCss(false)
        }, 1000)
    }, [])


    return(
        <div className="w-100 h-100 position-relative container-index">
            <img src={bg} alt="background" className=""/>
            <h1 className={css ? "display-hide" :"d-visibile position-absolute bg-text"}>Consultoria y Desarrollo en Informática</h1>
        </div>
    )
}
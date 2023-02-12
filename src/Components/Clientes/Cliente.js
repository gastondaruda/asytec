import React,{useState, useEffect} from "react"
import clientesList from "./clientes.json"
import "./clientes.scss"

export default function Cliente(){
    const [arrClient, setArrClient] = useState([])
    const [css, setCss] = useState(true)
    const [animation, setAnimation] = useState(true)

    useEffect(() => {
        setArrClient(clientesList)
        setTimeout(() => {
            setCss(false)
        }, 500)
        setTimeout(() => {
            setAnimation(false)
        }, 2000)
    }, [])


    return(
        <div className="d-flex flex-column justify-content-center align-items-center">
            <h3 className={css ? "display-hide" : "d-visibile component-title pt-5"}>Clientes</h3>
            <div className={animation ? "display-hide" : "d-visibile align-items-center justify-content-around clientContainer"}>
                {
                    arrClient.map(client =>
                    <div className="d-flex justify-content-center align-items-center">
                        <img src={client.url} alt="client" className="client-item"/>
                    </div>)
                }
            </div>
        </div>
    )
}
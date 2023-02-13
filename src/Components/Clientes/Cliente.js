import React,{useState, useEffect} from "react"
import clientesList from "./clientes.json"
import "./clientes.scss"
import c1 from "./clientes/01.png"
import c2 from "./clientes/02.png"
import c3 from "./clientes/03.png"
import c4 from "./clientes/04.png"
import c5 from "./clientes/05.png"
import c6 from "./clientes/06.png"
import c7 from "./clientes/07.png"
import c8 from "./clientes/08.png"
import c9 from "./clientes/09.png"
import c10 from "./clientes/10.png"
import c11 from "./clientes/11.png"
import c12 from "./clientes/12.png"
import c13 from "./clientes/13.png"
import c14 from "./clientes/14.png"
import c15 from "./clientes/15.png"
import c16 from "./clientes/16.png"
import c17 from "./clientes/17.png"
import c18 from "./clientes/18.png"
import c19 from "./clientes/19.png"
import c20 from "./clientes/20.png"
import c21 from "./clientes/21.png"
import c22 from "./clientes/22.png"
import c23 from "./clientes/23.png"
import c24 from "./clientes/24.png"
import c25 from "./clientes/25.png"


const arrayClient = [
    {url: c1},
    {url: c2},
    {url: c3},
    {url: c4},
    {url: c5},
    {url: c6},
    {url: c7},
    {url: c8},
    {url: c9},
    {url: c10},
    {url: c11},
    {url: c12},
    {url: c13},
    {url: c14},
    {url: c15},
    {url: c16},
    {url: c17},
    {url: c18},
    {url: c19},
    {url: c20},
    {url: c21},
    {url: c22},
    {url: c23},
    {url: c24},
    {url: c25},
]

export default function Cliente(){
    const [arrClient, setArrClient] = useState([])
    const [css, setCss] = useState(true)
    const [animation, setAnimation] = useState(true)

    useEffect(() => {
        setArrClient(arrayClient)
        setTimeout(() => {
            setCss(false)
        }, 500)
        setTimeout(() => {
            setAnimation(false)
        }, 2000)
    }, [arrClient])


    return(
        <div className="d-flex flex-column justify-content-center align-items-center pt-5">
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
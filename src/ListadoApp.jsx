import { useState } from "react"
import { AgregarTarea } from "./components/AgregarTarea"


const Items = ({nombre, visto}) => {
    return (
        <li>
        {nombre} 
        {visto ? "11" : "22"}
    </li>
    )
}


export const ListadoApp = () => {
    
    const addTask = () => {
        setArreglo([...arreglo, {nombre:'nuevo' , visto:false}])
    }

    let listadoSecciones = [
        { id:1,  nombre: "instalaciones necesarias" , visto: true },
        { id:2,  nombre: "uso de vite" , visto: true },
        { id:3,  nombre: "componentes" , visto: true },
        { id:4,  nombre: "estados" , visto: true },
        { id:5,  nombre: "redux" , visto: false },
        { id:6,  nombre: "custom hooks" , visto: false },
    ]

    const [arreglo, setArreglo] = useState(listadoSecciones)

    const onAgregarTarea = (val) => {
        let valor = val.trim()
        if (valor < 1) return
        console.log(val);
        const envio = {
            id: arreglo.length + 1,
            nombre: valor,
            visto: false
        }
        setArreglo([...arreglo, envio])
    }

  return (
    <>
        <div>
            <h1>Listado de temas del curso</h1>
            <AgregarTarea agregarTarea={onAgregarTarea} ></AgregarTarea>
            <ol>
                {arreglo.map(item => <Items key={item.id} nombre={item.nombre} visto={item.visto} ></Items>)}
            </ol>

            {/* <button onClick={addTask} >Agregar tarea</button> */}
        </div>
    </>
  )
}

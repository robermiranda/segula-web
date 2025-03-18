"use client"

import { useState } from "react";
import GetEmpleados from "@/app/empleados/get-empleados";
import GetEmpleado from "./empleados/get-empleado";
import PostEmpleado from "./empleados/post-empleado";
import ListaEmpleados from "@/app/empleados/respuestas/res-empleados";
import Empleado from "./empleados/respuestas/res-empleado";
import EmpleadoEliminado from "@/app/empleados/respuestas/res-empleado-delete";

export type Templeado = {
    id: number;
    nombre: string;
}

const empleadoNull = {id:0, nombre:'Sin Nombre'}

export default function Main () {

    const [empleados, setEmpleados] = useState<Templeado[]>([]);
    const [empleado, setEmpleado] = useState<Templeado>(empleadoNull);
    const [componente, setComponente] = useState<string>('EMPLEADO');
    const [responseStatusCode, setResponseStatusCode] = useState<number>(-1);

    function ResultComponent () {

        switch (componente) {
            case 'CREAR_EMPLEADO':
            case 'EMPLEADO': return <Empleado empleado={empleado}></Empleado>
            case 'EMPLEADOS': return <ListaEmpleados empleados={empleados}></ListaEmpleados>
            case 'EMPLEADO_ELIMINADO': return <EmpleadoEliminado responseStatusCode={responseStatusCode}></EmpleadoEliminado>;
        }
    }

    return (
        <div className="flex flex-row">
            <div className="flex flex-col">
                <GetEmpleados setEmpleados={setEmpleados} setComponente={setComponente}>
                </GetEmpleados>
                <GetEmpleado
                    setEmpleado={setEmpleado}
                    setComponente={setComponente}
                    setResponseStatusCode={setResponseStatusCode}>
                </GetEmpleado>
                <PostEmpleado setEmpleado={setEmpleado} setComponente={setComponente}></PostEmpleado>
            </div>
            <div>
                <ResultComponent></ResultComponent>   
            </div>
        </div>
    ); 
}
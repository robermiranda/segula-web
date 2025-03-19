import type { Templeado, ThorasTrabajo } from "@/app/main";
import { useState, ChangeEvent } from "react";

export default function GetEmpleado ({
    setEmpleado,
    setComponente,
    setHorasTrabajo,
    setHorasTrabajoId,
    setResponseStatusCode }: {
        setEmpleado?: (x: Templeado) => void,
        setComponente: (x: string) => void,
        setHorasTrabajo: (x: ThorasTrabajo[]) => void,
        setHorasTrabajoId: (x: ThorasTrabajo) => void,
        setResponseStatusCode? :(x: number) => void,
    }) {

    const [id, setId] = useState<string>('');

    async function getEmpleado () {
        const dataEmpleado = await fetch(`/empleados/${id}`);
        const empleado = await dataEmpleado.json();
        if (setEmpleado) setEmpleado(empleado);
        setComponente('EMPLEADO');
    }

    async function getHorasTrabajo ()  {
        const data = await fetch(`/horas-trabajo/empleado/${id}`);
        const horasTrabajo = await data.json();
        if (setHorasTrabajo) setHorasTrabajo(horasTrabajo);
        setComponente('HORAS_TRABAJO');
    }

    async function getHorasTrabajoId ()  {
        const data = await fetch(`/horas-trabajo/${id}`);
        const horasTrabajoId = await data.json();
        if (setHorasTrabajoId) setHorasTrabajoId(horasTrabajoId);
        setComponente('HORAS_TRABAJO_ID');
    }

    async function eliminarEmpleado () {
        const response = await fetch(`/empleados/${id}`, {method: 'DELETE'});
        if (setResponseStatusCode) setResponseStatusCode(response.status)
        setComponente('EMPLEADO_ELIMINADO');
    }

    function handleInputChange (event: ChangeEvent<HTMLInputElement>) {
        setId(event.target.value);
    }

    return (
        <>
            <input
                className="shadow appearance-none border rounded w-full py-2 px-3 mb-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Empleado ID or ID Horas Trabajo"
                onChange={handleInputChange}/>
            <button type="button"
                onClick={getEmpleado}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mb-2 rounded w-full">
                
                Empleado
            </button>
            <button type="button"
                onClick={getHorasTrabajoId}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mb-2 rounded w-full">
                
                Horas Trabajo ID
            </button>
            <button type="button"
                onClick={getHorasTrabajo}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mb-2 rounded w-full">
                
                Horas Trabajo Empleado
            </button>
            <button type="button"
                onClick={eliminarEmpleado}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded w-full">
                
                ELIMINAR EMPLEADO
            </button>
        </>
    );
}
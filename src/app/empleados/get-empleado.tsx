import type { Templeado } from "@/app/main";
import { useState, ChangeEvent } from "react";

export default function GetEmpleado ({
    setEmpleado,
    setComponente,
    setResponseStatusCode }: {
        setEmpleado?: (x: Templeado) => void,
        setComponente: (x: string) => void,
        setResponseStatusCode? :(x: number) => void,
    }) {

    const [id, setId] = useState<string>('');

    async function getEmpleado () {
        const dataEmpleado = await fetch(`/empleados/${id}`);
        const empleado = await dataEmpleado.json();
        if (setEmpleado) setEmpleado(empleado);
        setComponente('EMPLEADO');
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
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Empleado ID"
                onChange={handleInputChange}/>
            <button type="button"
                onClick={() => getEmpleado()}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                
                Empleado
            </button>
            <button type="button"
                onClick={() => eliminarEmpleado()}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                
                ELIMINAR EMPLEADO
            </button>
        </>
    );
}
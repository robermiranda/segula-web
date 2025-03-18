import { useState, ChangeEvent } from "react";
import type { Templeado } from "@/app/main";

export default function PostEmpleado ({
    setEmpleado,
    setComponente }: {
        setEmpleado: (x: Templeado) => void,
        setComponente: (x: string) => void
    }) {

    const [nombreEmpleado, setNombreEmpleado] = useState<string>('');

    async function crearEmpleado () {
        const body = {nombre: nombreEmpleado}
        const dataEmpleado = await fetch('/empleados', {
            method: 'POST',
            body: JSON.stringify(body),
        });
        
        const empleado = await dataEmpleado.json();
        setEmpleado(empleado);
        setComponente('CREAR_EMPLEADO');
    }

    function handleInputChange (event: ChangeEvent<HTMLInputElement>) {
        setNombreEmpleado(event.target.value);
    }

    return (
        <>
            <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Nombre empleado"
                onChange={handleInputChange}/>
            <button type="button"
                onClick={() => crearEmpleado()}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                
                Crear Empleado
            </button>
        </>
    );
}
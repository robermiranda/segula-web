import { useState, ChangeEvent } from "react";
import type { ThorasTrabajo } from "@/app/main";

export default function PostHorasTrabajo ({
    setHoraTrabajo,
    setComponente }: {
        setHoraTrabajo: (x: ThorasTrabajo) => void,
        setComponente: (x: string) => void
    }) {

    const [empleadoId, setEmpleadoId] = useState<number>(-1);
    const [fecha, setFecha] = useState<string>('');
    const [horaEntrada, setHoraEntrada] = useState<string>('');
    const [horaSalida, setHoraSalida] = useState<string>('');

    async function postHorasTrabajo () {

        const body = {
            empleadoId,
            fecha,
            horaEntrada,
            horaSalida,
        }
        
        const response = await fetch('/horas-trabajo', {
            method: 'POST',
            body: JSON.stringify(body),
        });
        
        const data = await response.json();
        setHoraTrabajo(data);
        setComponente('POST_HORAS_TRABAJO');
    }

    function handleInputChange (event: ChangeEvent<HTMLInputElement>) {
        const value: string = event.target.value;
        switch (event.target.name) {
            case 'empleadoId': setEmpleadoId(parseInt(value)); break;
            case 'fecha': setFecha(value); break;
            case 'horaEntrada': setHoraEntrada(value); break;
            case 'horaSalida': setHoraSalida(value); break;
        }
    }

    return (
        <>
            <input
                className="shadow appearance-none border rounded w-full py-2 px-3 mb-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Empleado ID"
                name="empleadoId"
                onChange={handleInputChange}/>
            <input
                className="shadow appearance-none border rounded w-full py-2 px-3 mb-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Fecha"
                name="fecha"
                onChange={handleInputChange}/>
            <input
                className="shadow appearance-none border rounded w-full py-2 px-3 mb-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Hora Entrada"
                name="horaEntrada"
                onChange={handleInputChange}/>
            <input
                className="shadow appearance-none border rounded w-full py-2 px-3 mb-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Hora Salida"
                name="horaSalida"
                onChange={handleInputChange}/>
            <button type="button"
                onClick={postHorasTrabajo}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full">
                
                Crear Horas Trabajo
            </button>
        </>
    );
}
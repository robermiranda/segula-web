import type { Tpayroll } from "@/app/main";
import { useState, ChangeEvent } from "react";

export default function GetPayroll ({
    setPayroll,
    setComponente }: {
        setPayroll: (x: Tpayroll) => void,
        setComponente: (x: string) => void
    }) {

    const [empleadoId, setEmpleadoId] = useState<string>('');
    const [fecha1, setFecha1] = useState<string>('');
    const [fecha2, setFecha2] = useState<string>('');
    const [tarifa, setTarifa] = useState<string>('');

    async function getPayroll () {
        const response = await fetch(`/horas-trabajo/payroll/${empleadoId}/${fecha1}/${fecha2}/${tarifa}`);
        const data = await response.json();
        setPayroll(data);
        setComponente('PAYROLL')
    }

    function handleInputChange (event: ChangeEvent<HTMLInputElement>) {
        const value: string = event.target.value;
        switch (event.target.name) {
            case 'empleadoId': setEmpleadoId(value); break;
            case 'fecha1': setFecha1(value); break;
            case 'fecha2': setFecha2(value); break;
            case 'tarifa': setTarifa(value); break;
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
            placeholder="Fecha Inicial"
            name="fecha1"
            onChange={handleInputChange}/>
        <input
            className="shadow appearance-none border rounded w-full py-2 px-3 mb-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Fecha Final"
            name="fecha2"
            onChange={handleInputChange}/>
        <input
            className="shadow appearance-none border rounded w-full py-2 px-3 mb-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Tarifa"
            name="tarifa"
            onChange={handleInputChange}/>
        
        <button type="button"
            onClick={getPayroll}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full">
            
            Payroll
        </button>
        </>
    );
}
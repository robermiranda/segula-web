import type { Templeado } from "@/app/main";

export default function GetEmpleados ({
    setEmpleados,
    setComponente }: {
        setEmpleados: (x: Templeado[]) => void,
        setComponente: (x: string) => void
    }) {

    async function getListaEmpleados () {
        const dataEmpleados = await fetch('/empleados');
        const empleados = await dataEmpleados.json();
        setEmpleados(empleados);
        setComponente('EMPLEADOS')
    }

    return (
        <button type="button"
            onClick={getListaEmpleados}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            
            Lista empleados
        </button>
    );
}
import type { ThorasTrabajo } from "@/app/main";

export default function GetHorasTrabajo ({
    setHorasTrabajo,
    setComponente }: {
        setHorasTrabajo: (x: ThorasTrabajo[]) => void,
        setComponente: (x: string) => void
    }) {

    async function getListaHorasTrabajo () {
        const response = await fetch('/horas-trabajo');
        const data = await response.json();
        setHorasTrabajo(data);
        setComponente('HORAS_TRABAJO_LISTA')
    }

    return (
        <button type="button"
            onClick={getListaHorasTrabajo}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full">
            
            Lista Horas Trabajo
        </button>
    );
}
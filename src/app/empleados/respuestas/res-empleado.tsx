import type { Templeado } from "@/app/main";

export default function GetEmpleadoRespuesta ({empleado}: {empleado: Templeado}) {

    return (
        <>
            <table className="border-collapse border border-gray-400">
                <thead>
                    <tr>
                        <th className="border border-gray-300">Id</th>
                        <th className="border border-gray-300">Nombre</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="border border-gray-300">{empleado.id}</td>
                        <td className="border border-gray-300">{empleado.nombre}</td>
                    </tr>     
                </tbody>
            </table>
        </>
    );
}
import type { Templeado } from "@/app/main";

export default function ListaEmpleados ({empleados}: {empleados: Templeado[]}) {

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
                {
                    empleados.map((empleado: Templeado) => (
                        <tr key={empleado.id}>
                            <td className="border border-gray-300">{empleado.id}</td>
                            <td className="border border-gray-300">{empleado.nombre}</td>
                        </tr>
                    ))
                }       
                </tbody>
            </table>
        </>
    );
}
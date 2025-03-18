import type { ThorasTrabajo } from "@/app/main";

export default function HorasTrabajoEmpleado ({horasTrabajo}: {horasTrabajo: ThorasTrabajo[]}) {

    if ( ! Array.isArray(horasTrabajo)) return <p>{JSON.stringify(horasTrabajo)}</p>;

    return (
        <>
            <table className="border-collapse border border-gray-400">
                <thead>
                    <tr>
                        <th className="border border-gray-300">Id</th>
                        <th className="border border-gray-300">Fecha</th>
                        <th className="border border-gray-300">Hora Entrada</th>
                        <th className="border border-gray-300">Hora Salida</th>
                    </tr>
                </thead>
                <tbody>
                {
                    horasTrabajo.map((horas: ThorasTrabajo) => (
                        <tr key={horas.id}>
                            <td className="border border-gray-300">{horas.id}</td>
                            <td className="border border-gray-300">{horas.fecha.split('T')[0]}</td>
                            <td className="border border-gray-300">{horas.horaEntrada}</td>
                            <td className="border border-gray-300">{horas.horaSalida}</td>
                        </tr>
                    ))
                }       
                </tbody>
            </table>
        </>
    );
}
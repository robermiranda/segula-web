import type { Tpayroll } from "@/app/main";

export default function Payroll ({data}: {data: Tpayroll}) {

    if ( ! data.payrollAcumulado) return <p>{JSON.stringify(data)}</p>

    return (
        <>
            <table className="border-collapse border border-gray-400">
                <thead>
                    <tr>
                        <th className="border border-gray-300">id</th>
                        <th className="border border-gray-300">fecha</th>
                        <th className="border border-gray-300">Hora Entrada</th>
                        <th className="border border-gray-300">Hora Salida</th>
                        <th className="border border-gray-300">Total Horas</th>
                        <th className="border border-gray-300">Horas Normales</th>
                        <th className="border border-gray-300">Horas Extra</th>
                        <th className="border border-gray-300">Tarifa</th>
                        <th className="border border-gray-300">Payroll</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.payrollDia.map((d) => 
                            <tr key={d.id}>
                                <td className="border border-gray-300">{d.id}</td>
                                <td className="border border-gray-300">{d.fecha.split('T')[0]}</td>
                                <td className="border border-gray-300">{d.horaEntrada}</td>
                                <td className="border border-gray-300">{d.horaSalida}</td>
                                <td className="border border-gray-300">{d.totalHorasTrabajadas}</td>
                                <td className="border border-gray-300">{d.horasNormales}</td>
                                <td className="border border-gray-300">{d.horasExtra}</td>
                                <td className="border border-gray-300">{d.tarifa}</td>
                                <td className="border border-gray-300">{d.payroll}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
            <div className="mt-4">
                <span className="font-medium">Payroll Acumulado</span>:
                <span className="font-semibold text-slate-900">{data.payrollAcumulado}</span>
            </div>
        </>
    );
}
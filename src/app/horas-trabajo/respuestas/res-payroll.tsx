import type { Tpayroll } from "@/app/main";

export default function Payroll ({payroll}: {payroll: Tpayroll}) {

    if ( ! payroll.payroll) return <p>{JSON.stringify(payroll)}</p>
    
    return (
        <>
            <table className="border-collapse border border-gray-400">
                <thead>
                    <tr>
                        <th className="border border-gray-300">Dias Trabajados</th>
                        <th className="border border-gray-300">Horas trabajadas</th>
                        <th className="border border-gray-300">Horas Normales</th>
                        <th className="border border-gray-300">Horas Extra</th>
                        <th className="border border-gray-300">Tarifa</th>
                        <th className="border border-gray-300">Payroll</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="border border-gray-300">{payroll.diasTrabajados}</td>
                        <td className="border border-gray-300">{payroll.horasTrabajadas}</td>
                        <td className="border border-gray-300">{payroll.horasNormales}</td>
                        <td className="border border-gray-300">{payroll.horasExtra}</td>
                        <td className="border border-gray-300">{payroll.tarifaHoraria}</td>
                        <td className="border border-gray-300">{payroll.payroll}</td>
                    </tr>     
                </tbody>
            </table>
        </>
    );
}
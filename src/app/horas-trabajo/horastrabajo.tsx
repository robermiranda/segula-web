export default async function Page () {

    type Templeado = {
        id: number;
        nombre: string;
    }

    type ThorasTrabajo = {
        id: number;
        fecha: string;
        horaEntrada: string;
        horaSalida: string;
        empleadoId: number;
    }

    const dataEmpleado = await fetch('https://segula.onrender.com/empleado');
    const dataHorasTrabajo = await fetch('https://segula.onrender.com/horas-trabajo/empleado/2');
    
    const empleados = await dataEmpleado.json();
    const horasTrabajo = await dataHorasTrabajo.json();

    return (
        <>
            <p>Lista de empleados</p>
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

            <p>Horas trabajadas por empleado</p>
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
                    horasTrabajo.map((hora: ThorasTrabajo) => (
                        <tr key={hora.id}>
                            <td className="border border-gray-300">{hora.id}</td>
                            <td className="border border-gray-300">{hora.fecha.split("T")[0]}</td>
                            <td className="border border-gray-300">{hora.horaEntrada}</td>
                            <td className="border border-gray-300">{hora.horaSalida}</td>
                        </tr>
                    ))
                }       
                </tbody>
            </table>
        </>
    );
}
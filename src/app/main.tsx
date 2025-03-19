"use client"

import { useState } from "react";
import GetEmpleados from "@/app/empleados/get-empleados";
import GetEmpleado from "./empleados/get-empleado";
import PostEmpleado from "./empleados/post-empleado";
import ListaEmpleados from "@/app/empleados/respuestas/res-empleados";
import Empleado from "./empleados/respuestas/res-empleado";
import EmpleadoEliminado from "@/app/empleados/respuestas/res-empleado-delete";
import HorasTrabajoEmpleado from "@/app/horas-trabajo/respuestas/res-horas-trabajo";
import GetHorasTrabajo from "@/app/horas-trabajo/get-horas-trabajo";
import GetPayroll from "./horas-trabajo/get-payroll";
import Payroll from "./horas-trabajo/respuestas/res-payroll";
import PostHorasTrabajo from "@/app/horas-trabajo/post-horas-trabajo";

export type Templeado = {
    id: number;
    nombre: string;
}

export type ThorasTrabajo = {
    id: number;
    fecha: string;
    horaEntrada: string;
    horaSalida: string;
    empleadoId: number;
}

export type TpayrollDia = {
    id: number;
    fecha: string;
    horaEntrada: string;
    horaSalida: string;
    empleadoId: number;
    totalHorasTrabajadas: number;
    horasNormales: number;
    horasExtra: number;
    tarifa: number;
    payroll: number;
}

export type Tpayroll = {
    payrollDia: TpayrollDia[];
    payrollAcumulado: number;
}

const empleadoNull = {id:-1, nombre:'Sin Nombre'}
const horasTrabajoNull: ThorasTrabajo = {id:-1, fecha:'', horaEntrada:'', horaSalida:'', empleadoId:-1}
const payRollNull: Tpayroll = {
    payrollDia: [],
    payrollAcumulado: -1
}

export default function Main () {

    const [empleados, setEmpleados] = useState<Templeado[]>([]);
    const [empleado, setEmpleado] = useState<Templeado>(empleadoNull);
    const [horasTrabajo, setHorasTrabajo] = useState<ThorasTrabajo[]>([]);
    const [horaTrabajo, setHoraTrabajo] = useState<ThorasTrabajo>(horasTrabajoNull);
    const [horasTrabajoId, setHorasTrabajoId] = useState<ThorasTrabajo>(horasTrabajoNull);
    const [payroll, setPayroll] = useState<Tpayroll>(payRollNull);
    const [componente, setComponente] = useState<string>('EMPLEADO');
    const [responseStatusCode, setResponseStatusCode] = useState<number>(-1);

    function ResultComponent () {

        switch (componente) {
            case 'CREAR_EMPLEADO':
            case 'EMPLEADO': return <Empleado empleado={empleado}></Empleado>
            case 'EMPLEADOS': return <ListaEmpleados empleados={empleados}></ListaEmpleados>
            case 'EMPLEADO_ELIMINADO': return <EmpleadoEliminado responseStatusCode={responseStatusCode}></EmpleadoEliminado>;
            case 'HORAS_TRABAJO_LISTA': 
            case 'HORAS_TRABAJO': return <HorasTrabajoEmpleado horasTrabajo={horasTrabajo}></HorasTrabajoEmpleado>
            case 'HORAS_TRABAJO_ID': return <HorasTrabajoEmpleado horasTrabajoId={horasTrabajoId}></HorasTrabajoEmpleado>
            case 'PAYROLL': return <Payroll data={payroll}></Payroll>
            case 'POST_HORAS_TRABAJO': return <HorasTrabajoEmpleado horasTrabajoId={horaTrabajo}></HorasTrabajoEmpleado>
        }
    }

    return (
        <div className="flex flex-row">
            <div className="flex flex-col">
                <GetEmpleados setEmpleados={setEmpleados} setComponente={setComponente}>
                </GetEmpleados>
                <GetEmpleado
                    setEmpleado={setEmpleado}
                    setComponente={setComponente}
                    setHorasTrabajo={setHorasTrabajo}
                    setHorasTrabajoId={setHorasTrabajoId}
                    setResponseStatusCode={setResponseStatusCode}>
                </GetEmpleado>
                <PostEmpleado setEmpleado={setEmpleado} setComponente={setComponente}></PostEmpleado>
            </div>
            <div className="flex flex-col">
                <GetHorasTrabajo setHorasTrabajo={setHorasTrabajo} setComponente={setComponente}></GetHorasTrabajo>
                <GetPayroll setPayroll={setPayroll} setComponente={setComponente}></GetPayroll>
                <PostHorasTrabajo setHoraTrabajo={setHoraTrabajo} setComponente={setComponente}></PostHorasTrabajo>
            </div>
            <div>
                <ResultComponent></ResultComponent>   
            </div>
        </div>
    ); 
}
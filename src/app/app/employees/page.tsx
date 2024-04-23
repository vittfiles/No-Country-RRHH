'use client'

import { Button, Icon, Input, Typography } from "#/components";
import { Avatar, AvatarFallback, AvatarImage } from "#/components/ui/avatar";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "#/components/ui/table"
import { useState } from "react"
import { EmployeeForm } from "#/components/Employees/EmployeeForm.component";

export default function Employees () {

    const [clickAccions, setClickAccions] = useState(true)
    const handleClickAccions = () => setClickAccions(!clickAccions)

    return (
        <section className="bg-primary-50 min-h-screen h-full w-full flex flex-col pt-2">
            <nav className="md:bg-[#FFFFFF] md:h-20 md:rounded-3xl md:m-8 md:shadow-md md:justify-between md:px-10 flex justify-center mt-16 items-center">
                <Typography as='h3' className="text-primary-500 font-semibold ml-3">Empleados</Typography>
                <div className="flex items-center">
                    <Button className="bg-primary-50 hover:text-primary-500 text-neutro-950 rounded-3xl hidden md:block">
                        <Icon name="bell"></Icon>
                    </Button>
                    <Button className="relative bottom-16 ml-5 md:static">
                        <Avatar>
                            <AvatarImage src="https://github.com/shadcn.png" />
                            <AvatarFallback>JL</AvatarFallback>
                        </Avatar>
                        <div className="text-left pl-2">
                            <Typography as='p' className="font-bold text-neutro-950">Joseph Leon</Typography>
                            <Typography as='p' className="text-neutro-500 font-bold text-xs">Recursos Humanos</Typography>
                        </div>
                    </Button>
                </div>
            </nav>
            <div className="bg-[#FFFFFF] h-auto w-auto rounded-3xl md:mt-14 m-8 shadow-md items-center md:px-12 p-12">
                <div className="flex justify-between gap-3">
                    <Input type="text" placeholder="Buscar Empleado" className="md:w-96 h-10 gap-3 border-neutro-300"></Input>
                    <EmployeeForm/>
                </div>
                <Table className="mt-4 border border-neutro-300">
                    <TableHeader>
                        <TableRow className="border-b-neutro-300 font-bold text-neutro-700">
                        <TableHead className="">Nombre</TableHead>
                        <TableHead>DNI</TableHead>
                        <TableHead>País</TableHead>
                        <TableHead>Correo electrónico</TableHead>
                        <TableHead>Fecha de ingreso</TableHead>
                        <TableHead>Fecha de salida</TableHead>
                        <TableHead>Rol</TableHead>
                        <TableHead>Código del empleado</TableHead>
                        <TableHead className="text-right">Acciones</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow className="border-b-neutro-300 h-12">
                        <TableCell>Hectro Laguna</TableCell>
                        <TableCell>74653245</TableCell>
                        <TableCell>Argentina</TableCell>
                        <TableCell>hector.l@gmail.com</TableCell>
                        <TableCell>11/04/2024</TableCell>
                        <TableCell>Fecha de salida</TableCell>
                        <TableCell>Arquitecto</TableCell>
                        <TableCell>A523684</TableCell>
                        <TableCell onClick={handleClickAccions} className="flex justify-end">
                            {clickAccions ? <Button className="w-16"><Icon name="menu-dots-vertical"></Icon></Button> :
                            <div className="rounded-md shadow-md flex w-16">
                                <Button className="p-1 text-yellow-200 hover:text-yellow-500">
                                    <Icon name="edit"></Icon>
                                </Button>
                                <Button className="p-1 text-red-300 hover:text-red-500">
                                    <Icon name="trash"></Icon>
                                </Button>
                            </div>
                            }
                        </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </div>
        </section>
    )
}
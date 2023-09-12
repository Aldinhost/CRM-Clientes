/* eslint-disable react-refresh/only-export-components */
import { useLoaderData } from "react-router-dom";
import { obtenerClientes } from '../api/clientes';
import Cliente from "../components/Cliente";

export function loader (){ // loader, siempre debe retornar algo
const clientes = obtenerClientes()
 return clientes;
}

const Index = () => {

  const datos = useLoaderData();

  return (
    <>
      <h1 className="font-bold text-4xl text-blue-900">Clientes</h1>
      <p className="mt-3">Administra tus Clientes</p>

      {datos.length ? (
        <table className="w-full bg-white shadow mt-5 table-auto">
          <thead className="bg-blue-800 text-white">
            <tr>
              <th className="p-2">Cliente</th>
              <th className="p-2">Contacto</th>
              <th className="p-2">Acciones</th>
            </tr>
          </thead>

          <tbody>
            {datos.map(cliente => {

              return(
                <Cliente
                  cliente={cliente}
                  key={cliente.id}
                />
              )   
            })}
          </tbody>
        </table>
      ): (
        <p className='text-center mt-10'>No hay clientes aún</p>
      )}
    </>
  )
}

export default Index
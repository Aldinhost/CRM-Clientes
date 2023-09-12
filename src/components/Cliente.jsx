/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { useNavigate, Form, redirect } from "react-router-dom";
import { eliminarCliente } from '../api/clientes';


export async function action({params}){

  await eliminarCliente(params.clientesId);

  return redirect('/');
}


const Cliente = ( {cliente} ) => {
  
  const navigate = useNavigate();

  const {nombre, empresa, email, telefono, id} = cliente;
  return (
    <tr className="border-b">
        <td className="p-5 space-y-0.5">
          <p className="text-lg text-gray-700">{nombre}</p>
          <p className="text-sm text-gray-500">{empresa}</p>
        </td>
        <td className="p-5">
          <p className="text-sm text-gray-500"><span className=" text-gray-700 uppercase font-normal">Email: </span>{email}</p>
          <p className="text-sm text-gray-500"><span className=" text-gray-700 uppercase font-normal">Tel: </span>{telefono}</p>
        </td>
        <td className="p-5 flex gap-3">
          <button 
            type="button" 
            className="bg-blue-600 hover:bg-blue-800 uppercase font-medium text-white text-xs py-2 px-4" 
            onClick={() => navigate(`/clientes/${id}/editar`)}
          >Editar</button>

          <Form
            method="POST"
            action={`/clientes/${id}/eliminar`}
            onSubmit={(e) => {
              if(!confirm('¿Deseas eliminar este Cliente?')){
                e.preventDefault();
              }
            }}
          >
            <button 
              type="submit" 
              className="bg-rose-600 hover:bg-rose-800 uppercase font-medium text-white text-xs py-2 px-4"
            
            >Eliminar</button>
          </Form>

        </td>
    </tr>
  )
}

export default Cliente
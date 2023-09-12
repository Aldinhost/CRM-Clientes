/* eslint-disable no-useless-escape */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-control-regex */
import {Form, useNavigate, useLoaderData, useActionData, redirect} from 'react-router-dom';
import Formulario from '../components/Formulario';
import Error from '../components/Error';
import {actualizarCliente, obtenerCliente} from '../api/clientes';


export async function loader( {params}) {
   
    
    const cliente = await obtenerCliente(params.clientesId);
    
    if(Object.values(cliente).length === 0){
        throw new Response('', {
            status: 404,
            statusText: 'El cliente no ha sido encontrado'
        })
        
    }
    return cliente;
}


export async function action ({request, params}) {
      // Recuperando información del Formulario
  const formData = await request.formData()

  //* MEJOR MANERA DE OBTENER DATOS DE FORMDATA */
  const datos = Object.fromEntries(formData);

  const email = formData.get('email');


  // Arreglo de errores vacío.
  const errores = [];
  // Validación Formulario
  if(Object.values(datos).includes('')){
    errores.push('Todos los campos son obligatorios.')
  }

  let regex = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])");

  if(!regex.test(email)){
    errores.push('El email no es válido');
  }

  // Si hay errores, devolver datos.
  
  if(Object.keys(errores).length){
    return errores;
  }
  

  // Actualizar Cliente
  await actualizarCliente(params.clientesId, datos)
  return redirect('/');
}



const EditarCliente = () => {

  const navigate = useNavigate();
  const cliente = useLoaderData();
  const errores = useActionData();


  return (
    <>
      <h1 className="font-bold text-4xl text-blue-900">Editar Cliente</h1>
      <p className="mt-3">Edita los campos necesarios del cliente</p>

      <div className="flex justify-end">
        <button 
          className="bg-blue-900 hover:bg-blue-700 uppercase font-medium text-white text-xs py-2 px-4"
          onClick={() => navigate(-1)}
        >Volver</button>
      </div>

      <div className="bg-white shadow rounded-md md:w-3/4 mx-auto px-5 py-10 mt-5">

        {errores?.length && errores.map((error, indice) => <Error key={indice}>{error}</Error>)}

        <Form
          method="POST"
          noValidate
        >
          <Formulario
            cliente={cliente}
          />

          <input type="submit" 
            className="mt-5 w-full bg-blue-800 p-2 uppercase font-bold text-white text-lg" 
            value='Guardar Cambios'/>
        </Form>

      </div>
    </>
  )
}

export default EditarCliente
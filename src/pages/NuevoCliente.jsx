/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-useless-escape */
/* eslint-disable no-control-regex */
import { useNavigate, Form, useActionData, redirect} from "react-router-dom";

import Formulario from "../components/Formulario";
import Error from "../components/Error";
import { agregarCliente } from '../api/clientes';


// Función de react-router-dom ---> action para manejar accion de formulario.
export async function action ( {request} ){
  // Recuperando información del Formulario
  const formData = await request.formData()
  
  // Snippet para obtener valores de forData()
    //console.log([...formData]);

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
  

  await agregarCliente(datos)
  return redirect('/');
}





const NuevoCliente = () => {

  // Hook useNavigate
  const navigate = useNavigate();

  // Hook useActionData
  const errores = useActionData();


  return (
    <>
      <h1 className="font-bold text-4xl text-blue-900">Nuevo Cliente</h1>
      <p className="mt-3">Llena todos los campos para registrar un nuevo cliente</p>

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
          <Formulario/>

          <input type="submit" 
            className="mt-5 w-full bg-blue-800 p-2 uppercase font-bold text-white text-lg" 
            value='Registrar Cliente'/>
        </Form>

      </div>
    </>
  )
}

export default NuevoCliente
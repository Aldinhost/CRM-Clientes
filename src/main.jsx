import React from 'react'
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Index, { loader as clientesLoader } from './pages/Index';
import Layout from './components/Layout';
import NuevoCliente, { action as nuevoClienteAction } from './pages/NuevoCliente';
import ErrorPage from './components/ErrorPage';
import EditarCliente, {loader as editarClienteLoader, action as editarClienteAction} from './pages/EditarCliente';
import { action as eliminarClienteAction } from './components/Cliente';
import './index.css';


const router = createBrowserRouter([ // Definimos el BrowserRouter, pasandole un objeto con las rutas de cada pagina.
  {// Se le puede pasar HTML o un componente.
    path: '/',
    element: <Layout/>, 
    children: [
      {
        index: true,
        element: <Index/>,
        loader: clientesLoader,
        errorElement: <ErrorPage/>
      },
      {
        path: '/clientes/nuevo',
        element: <NuevoCliente/>,
        action: nuevoClienteAction,
        errorElement: <ErrorPage/>
      },
      {
        path: '/clientes/:clientesId/editar',
        element: <EditarCliente/>,
        loader: editarClienteLoader,
        action: editarClienteAction,
        errorElement: <ErrorPage/>
      },
      {
        path: '/clientes/:clientesId/eliminar',
         action: eliminarClienteAction
      }
    ]
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* El provider requiere las rutas, las cuales se le pasan como prop. */}
    <RouterProvider router={router}/>
  </React.StrictMode>,
)

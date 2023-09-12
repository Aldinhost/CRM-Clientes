import { Outlet, Link, useLocation} from "react-router-dom"


const Layout = () => {

    const location = useLocation();


  return (
    <div className="md:flex md:min-h-screen">
        <aside className="md:w-1/4 bg-indigo-950 px-5 py-10">
            <h2 className="text-3xl font-bold text-center text-slate-300">CRM  Clientes</h2>

            <nav className="mt-10">
                <Link className={` ${location.pathname === '/' ? 'text-indigo-300 font-medium pl-5' : 'text-blue-500'} text-2xl font-medium block mt-2 transition-all ease delay-75 hover:text-blue-600 hover:pl-5`} to="/">Clientes</Link>
                <Link className={` ${location.pathname === '/clientes/nuevo' ? 'text-indigo-300 font-medium pl-5' : 'text-blue-500'} text-2xl font-normal block mt-2 transition-all ease delay-75 hover:text-blue-600 hover:pl-5`} to="/clientes/nuevo">Nuevo Cliente</Link>

            </nav>
        </aside>

        <main className="md:w-3/4 p-10 md:h-screen overflow-scroll">
            <Outlet/>
        </main>
    </div>
  )
}

export default Layout
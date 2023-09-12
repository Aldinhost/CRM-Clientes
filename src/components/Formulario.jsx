/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
const Formulario = ({cliente}) => {
    
    return (
        <>
            <div className="mb-4">
                <label
                    className="text-gray-800"
                    htmlFor="nombre"
                >Nombre:</label>
                <input 
                    id="nombre"
                    type="text"
                    className="mt-2 block w-full p-3 bg-slate-100 rounded"
                    placeholder="Jhon Doe"
                    name="nombre"
                    defaultValue={cliente?.nombre}
                />
            </div>
            <div className="mb-4">
                <label
                    className="text-gray-800"
                    htmlFor="empresa"
                >Empresa:</label>
                <input 
                    id="empresa"
                    type="text"
                    className="mt-2 block w-full p-3 bg-slate-100 rounded"
                    placeholder="Empresa"
                    name="empresa"
                    defaultValue={cliente?.empresa}
                />
            </div>

            <div className="mb-4">
                <label
                    className="text-gray-800"
                    htmlFor="email"
                >E-mail:</label>
                <input 
                    id="email"
                    type="email"
                    className="mt-2 block w-full p-3 bg-slate-100 rounded"
                    placeholder="correo@correo.com"
                    name="email"
                    defaultValue={cliente?.email}
                />
            </div>

            <div className="mb-4">
                <label
                    className="text-gray-800"
                    htmlFor="telefono"
                >Teléfono:</label>
                <input 
                    id="telefono"
                    type="tel"
                    className="mt-2 block w-full p-3 bg-slate-100 rounded"
                    placeholder="Teléfono"
                    name="telefono"
                    defaultValue={cliente?.telefono}
                />
            </div>

            <div className="mb-4">
                <label
                    className="text-gray-800"
                    htmlFor="notas"
                >Notas:</label>
                <textarea
                    as="textarea"
                    id="notas"
                    type="text"
                    className="mt-2 block w-full p-3 bg-slate-100 rounded h-30 align-self"
                    placeholder="Notas"
                    name="notas"
                    defaultValue={cliente?.notas}
                />
            </div>
        </>
    )
}

export default Formulario
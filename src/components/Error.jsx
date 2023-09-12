/* eslint-disable react/prop-types */

const Error = ( {children} ) => {
  return (
    <div className="text-center text-red-800 my-4 bg-red-300 font-medium p-3 uppercase rounded-sm">{children}</div>
  )
}

export default Error
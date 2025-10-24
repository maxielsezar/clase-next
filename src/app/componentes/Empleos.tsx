interface Empleo{
      puesto:string,
      localidad: string,
      publicación: string
}

 const Empleos= ({puesto , localidad, publicación}:Empleo) => {
    
    return(
        <div className="flex justify-center text-black mt-10">

            <div className="w-2/3 mt-8 ">
                <div className="flex">
                    <h1> {puesto} </h1>
                </div>

                <div className="flex">
                    <h1> {localidad} </h1>
                </div>

                <div className="flex">
                    <h1> {publicación} </h1>
                </div>
            </div>
        </div>
        )

    
}

export default Empleos
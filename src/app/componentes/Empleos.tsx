interface Empleo{
      puesto:string,
      localidad: string,
      publicación: string
}

 const Empleos= (props:Empleo) => {
    return(
        <div className="flex justify-center">

            <div className="w-2/3 mt-8 ">
                <div className="flex">
                    <h1> {props.puesto} </h1>
                </div>

                <div className="flex">
                    <h1> {props.localidad} </h1>
                </div>

                <div className="flex">
                    <h1> {props.publicación} </h1>
                </div>
            </div>
        </div>
        )

    
}

export default Empleos
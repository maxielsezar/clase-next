

export default function Main() {

  const listaOptions =["Todos los Puestos","Anfitrión Turístico", "Asistente de Compras", "Asistente para la Administración", "Auxiliar de Cocina", "Auxiliar en Instalaciones Eléctricas Domiciliarias", "Auxiliar Mecánico de Motores Nafteros", "Auxiliar Panadero y Repostero", "Carpintero de Terminaciones de Obra", "Cocinero", "Community Manager", "Diseñador y Administrador de Páginas Web", "Electricista de Automotores", " Herrero Básico", "Informática Multimedial", "Mantenimiento de Edificios", "Mantenimiento y Reparación de Equipos Informáticos", "Mecánico de Motores de Combustión Interna", "Montador Electricista Domiciliario", "Mozo - Camarero de Salón", "Operador de PC", "Operador de Máquinas de Carpintería", "Panadero" ]
  return (
         <form className="flex text-black justify-center" action="#">
          <label form="lang">Filtrar por puesto </label>
          <select >
          {listaOptions.map((item, index) => (
                  <option key={index} value={item}>
                    {item}
                  </option>
                ))}
          </select>
        </form>
  );
}
import InicioSesion from '../componentes/InicioSesion';
import './contenido.css'

const page = () => {

return ( 
  <>
    <div>
      <img className='logo1' src="/CFP-Nº-655-Blanco.png" />
      <h1>CENTRO DE FORMACIÓN Nº655</h1>
    </div>
    <InicioSesion />
  </>   
    );     
};

export default page;
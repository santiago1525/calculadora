import '../hojasDeEstilo/Imagen.css';

function Imagen({ logo }) {
    return(
    <div className='logo-contenedor'>
    <img 
        src={logo}
        className='logo' 
        alt='Logo' />
    </div>
    );
}

export default Imagen;
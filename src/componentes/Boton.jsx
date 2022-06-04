import '../hojasDeEstilo/Boton.css';

function Boton({ children, clic }){

    const esOperador = valor => {
        return isNaN(valor) && (valor !== '.') && (valor !== '=');
    };

    return(
        <div 
            className={`boton-contenedor ${esOperador(children) ? 'operador' : ''}`.trimEnd()} 
            onClick={() => clic(children)}>
            {children}
        </div>
    );
}

export default Boton;
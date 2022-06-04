import '../hojasDeEstilo/BotonClear.css';

const BotonClear = ({ children, clic }) => (
    <button className='boton-clear' onClick={clic}>
        {children}
    </button>
);

export default BotonClear;
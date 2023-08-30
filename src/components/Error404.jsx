// import '../css/error.css';
import { Link } from "react-router-dom";

export default function Error404() {
    
        // <div>Error 404 Pagina no encontrada</div>
        

    
        return (
            <div className='body-error'>
                <div className="section-error">
                    <h1 className="error h1-error">404</h1>
                    <div className="page">Ohh Nooo!!!</div>
                    <div className="page">Pagina no encontradao</div>
                    <Link to={`/`}>
                        <button type="button" className="btn btn-outline-dark mt-auto">
                            Volver a incio
                        </button>
                    </Link>
                </div>
            </div>
        )

    }
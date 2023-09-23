import { useState } from "react";


export const ItemCount = ({onAdd, stock}) => {

    const [count, setCount] = useState(0);
    
    const handleDecreseCount = () => {
        if (count > 0) {
            setCount((prev) => prev - 1);
        }
    }

    const handleIncreaseCount = () => {
        if (count < stock) {
            setCount((prev) => prev + 1);
        }
    }

    return (
        <div className='itemCount-container'>
            <div className="itemCount-containerButton">
                <div className="itemCount-buttonHandle" onClick={handleDecreseCount}>
                    <span >-</span>
                </div>
                <div className="itemCount-count">
                    <span>{count}</span>
                </div>
                <div className="itemCount-buttonHandle" onClick={handleIncreaseCount}>
                    <span >+</span>
                </div>
            </div>
            <div className="containerButton-addCart">
                <button className="button-addCart" onClick={() => onAdd(count)}>Agregar al carrito</button>
            </div>

        </div>
    );
};
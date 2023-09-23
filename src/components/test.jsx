import { useState, useEffect } from "react";
import { getFirestore, getDoc, doc } from "firebase/firestore"

const Prueba = () => {

    return (
        <div>
            Hola
        </div>
    )
}

export const Father = () => {
    useEffect(() => {
        const db = getFirestore();
        const refDoc = (db, "items", "2OqcJS5IzxvzEqOe5sUZ")
    
        getDoc(refDoc).then((snapshot) => {
          console.log(snapshot)
          // console.log({ id: snapshot.id, ...snapshot.data() })
        });
      }, []);
    const [test, setTest] = useState('Haz clic aqui')
    return (
        <>
            <Prueba />
            <Prueba />
            <Prueba />
            <Prueba />
            <button onClick={() => setTest('gracias')}>
                {test}
            </button>
        </>

    )
}

export default Father;
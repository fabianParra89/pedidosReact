import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from 'react';
import { getFirestore, getDoc, doc } from "firebase/firestore"

export const useItemDetail = () =>{
    const { id } = useParams();
    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const db = getFirestore();
        const refDoc = doc(db, "items", id)

        getDoc(refDoc).then((snapshot) => {
            setProduct({ id: snapshot.id, ...snapshot.data() })
        })
            .finally(() => setLoading(false))
    }, []);

    return product
}
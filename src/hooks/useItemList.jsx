import { useEffect, useState } from 'react';
import { useParams, Link } from "react-router-dom";
import { getFirestore, getDocs, collection, query, where } from "firebase/firestore"

export const useProductsList = () => {
    const { categoryId } = useParams();
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        const db = getFirestore();
        const refCollection = categoryId
        ?   query(collection(db, "items"), where("categoryId","==", categoryId))
        :  collection(db, "items");
        
        getDocs(refCollection).then((snapshot) => {
            if (snapshot.size === 0) setProducts([])
            else
                setProducts(snapshot.docs.map((doc) => {
                    return { id: doc.id, ...doc.data() };
                })
                );
        })
        .finally(()=>{
            setLoading(false)
        })
    },[categoryId]);

    return { products }

}




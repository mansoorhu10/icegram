import { useState, useEffect } from "react";
import { projectFirestore } from "../firebase/config";
import { query, collection, orderBy, onSnapshot } from "firebase/firestore";

const useFirestore = (whichCollection) => {
    const [docs, setDocs] = useState([]);

    useEffect(() => {
        const q = query(collection(projectFirestore, whichCollection), orderBy('createdAt', 'desc'));
        const unsub = onSnapshot(q, (snap) => {
            let documents = [];
            snap.forEach(doc => {
                documents.push({...doc.data(), id: doc.id})
            });
            setDocs(documents);
        });

        return unsub;
        
    }, [whichCollection]);

    return { docs }; 
}

export default useFirestore;
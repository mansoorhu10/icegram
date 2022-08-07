import { useState, useEffect } from 'react';
import { projectStorage, projectFirestore, timeStamp } from '../firebase/config';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { collection, addDoc } from 'firebase/firestore';

const useStorage = (file) => {
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(null);

    useEffect(() => {
        //references
        const storageRef = ref(projectStorage, file.name);
        const collectionRef = collection(projectFirestore, 'images');

        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on('state_changed', (snapshot) => {
            let percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            setProgress(percentage);
        }, (err) => {
            setError(err);
        }, () => {
            getDownloadURL(uploadTask.snapshot.ref).then((url) => {
                const createdAt = timeStamp;
                addDoc(collectionRef, {
                    url,
                    createdAt
                });
                setUrl(url);
            });
        });

    }, [file])

    return { progress, url, error }

}

export default useStorage;

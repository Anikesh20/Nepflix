import { useState, useEffect, useContext } from 'react';
import { FirebaseContext } from '../context/firebase';
import { getFirestore, collection, getDocs } from 'firebase/firestore';

export default function useContent(target) {
  const [content, setContent] = useState([]);
  const { db } = useContext(FirebaseContext);

  useEffect(() => {
    async function fetchContent() {
      try {
        const firestore = getFirestore();
        const contentCollection = collection(firestore, target);
        const contentSnapshot = await getDocs(contentCollection);
        const contentList = contentSnapshot.docs.map((doc) => ({
          ...doc.data(),
          docId: doc.id,
        }));

        setContent(contentList);
      } catch (error) {
        console.log(error.message);
      }
    }

    fetchContent();
  }, [target]);

  return { [target]: content };
}

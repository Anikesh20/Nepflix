import { useState, useEffect, useContext } from 'react';
import { FirebaseContext } from '../context/firebase';

export default function useContent(target) {
  const [content, setContent] = useState([]);
  const { firebase } = useContext(FirebaseContext);

  useEffect(() => {
    async function fetchContent() {
      try {
        console.log('Fetching content for:', target);
        const contentSnapshot = await firebase
          .firestore()
          .collection(target)
          .get();
          
        console.log('Firebase response:', contentSnapshot);
        
        const contentList = contentSnapshot.docs.map((doc) => ({
          ...doc.data(),
          docId: doc.id,
        }));

        console.log('Processed content list:', contentList);
        setContent(contentList);
      } catch (error) {
        console.error('Error fetching content:', error.message);
      }
    }

    fetchContent();
  }, [target, firebase]);

  return { [target]: content };
}

import { db } from '../../../firebase';
import { doc, getDoc } from 'firebase/firestore';

export default async function handler(req, res) {
  const { id } = req.query;
  
  try {
    const docRef = doc(db, 'chapters', id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      res.status(200).json(docSnap.data());
    } else {
      res.status(404).json({ error: 'Chapter not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch chapter data' });
  }
}

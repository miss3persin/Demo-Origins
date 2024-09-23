import { db } from '../../../../../firebase';
import { doc, getDoc } from 'firebase/firestore';

import { db } from '../../../../../firebase';
import { doc, getDoc } from 'firebase/firestore';

export async function GET(_, { params }) {
  const { id } = params;
  
  try {
    const docRef = doc(db, 'chapters', id);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      const data = docSnap.data();

      // Convert Firestore Timestamp to JavaScript Date
      const chapterData = {
        ...data,
        createdAt: data.createdAt ? data.createdAt.toDate() : null, // Ensure it's converted
      };

      return new Response(JSON.stringify(chapterData), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    } else {
      return new Response(JSON.stringify({ error: 'Chapter not found' }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' },
      });
    }
  } catch (error) {
    console.error('Error fetching chapter data:', error);
    return new Response(JSON.stringify({ error: 'Failed to fetch chapter data' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}

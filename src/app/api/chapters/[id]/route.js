import { db } from '../../../../../firebase';
import { doc, getDoc } from 'firebase/firestore';

export async function GET(_, { params }) {
    const { id } = params;
    console.log("Fetching chapter with ID:", id); // Log the ID
    
    try {
      const docRef = doc(db, 'chapters', id);
      const docSnap = await getDoc(docRef);
      
      console.log("Document snapshot:", docSnap.exists()); // Log if document exists
  
      if (docSnap.exists()) {
        return new Response(JSON.stringify(docSnap.data()), {
          status: 200,
          headers: { 'Content-Type': 'application/json' },
        });
      } else {
        console.log("No document found for ID:", id); // Log if no document found
        return new Response(JSON.stringify({ error: 'Chapter not found' }), {
          status: 404,
          headers: { 'Content-Type': 'application/json' },
        });
      }
    } catch (error) {
      console.error('Error fetching chapter data:', error); // Log any error
      return new Response(JSON.stringify({ error: 'Failed to fetch chapter data' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }
  }

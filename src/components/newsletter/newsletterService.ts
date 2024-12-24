import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../config/firebase';

export async function addSubscriber(email: string) {
  try {
    await addDoc(collection(db, 'newsletter_subscribers'), {
      email,
      subscribedAt: new Date().toISOString(),
    });
  } catch (error) {
    console.error('Error adding subscriber:', error);
    throw new Error('Failed to add subscriber');
  }
}
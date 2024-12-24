import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { auth } from '../../../../config/firebase';

export async function uploadImage(file: File): Promise<string> {
  if (!auth.currentUser) {
    throw new Error('No authenticated user');
  }

  const storage = getStorage();
  const storageRef = ref(storage, `profile-images/${auth.currentUser.uid}/${Date.now()}_${file.name}`);
  
  await uploadBytes(storageRef, file);
  return getDownloadURL(storageRef);
}
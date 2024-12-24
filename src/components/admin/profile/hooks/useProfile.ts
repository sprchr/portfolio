import { useState, useEffect } from 'react';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { db } from '../../../../config/firebase';
import { useAuth } from '../../../../contexts/AuthContext';
import { ProfileData } from '../types';
import { DEFAULT_PROFILE } from '../../../../constants/defaults';

export function useProfile() {
  const { user } = useAuth();
  const [profile, setProfile] = useState<ProfileData>(DEFAULT_PROFILE);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!user) {
      setLoading(false);
      return;
    }

    const fetchProfile = async () => {
      try {
        const docRef = doc(db, 'profiles', user.uid);
        const docSnap = await getDoc(docRef);
        
        if (docSnap.exists()) {
          setProfile(docSnap.data() as ProfileData);
        } else {
          // If no profile exists, create one with default values
          await setDoc(docRef, DEFAULT_PROFILE);
          setProfile(DEFAULT_PROFILE);
        }
        setError(null);
      } catch (err) {
        console.error('Error fetching profile:', err);
        setError('Failed to load profile');
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [user]);

  const updateProfile = async (data: ProfileData) => {
    if (!user) return;

    try {
      const docRef = doc(db, 'profiles', user.uid);
      await setDoc(docRef, data, { merge: true });
      setProfile(data);
      setError(null);
    } catch (err) {
      console.error('Error updating profile:', err);
      setError('Failed to update profile');
      throw err;
    }
  };

  return { profile, loading, error, updateProfile };
}
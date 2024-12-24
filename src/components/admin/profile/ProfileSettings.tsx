import React from 'react';
import AdminLayout from '../shared/AdminLayout';
import ProfileForm from './components/ProfileForm';
import { useProfile } from './hooks/useProfile';
import LoadingSpinner from '../shared/LoadingSpinner';

export default function ProfileSettings() {
  const { profile, loading, error, updateProfile } = useProfile();

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <AdminLayout title="Profile Settings">
      <div className="max-w-2xl mx-auto">
        {error && (
          <div className="mb-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
            {error}
          </div>
        )}
        <div className="bg-white rounded-lg shadow p-6">
          <ProfileForm
            initialData={profile}
            onSubmit={updateProfile}
          />
        </div>
      </div>
    </AdminLayout>
  );
}
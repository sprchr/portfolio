// Default values used across the application
export const DEFAULT_PROFILE = {
  name: 'Sivaprasad Chennareddy',
  avatar: 'Profile.jpg',
  bio: '',
  location: ''
} as const;

export const DEFAULT_AUTHOR = {
  name: DEFAULT_PROFILE.name,
  avatar: DEFAULT_PROFILE.avatar
} as const;
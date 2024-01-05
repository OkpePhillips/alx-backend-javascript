import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  try {
    const photoPromise = uploadPhoto();
    const userPromise = createUser();

    const [photo, user] = await Promise.allSettled([photoPromise, userPromise]);

    return {
      photo: photo.status === 'fulfilled' ? photo.value : null,
      user: user.status === 'fulfilled' ? user.value : null,
    };
  } catch (error) {
    console.error('An error occurred:', error);
    return {
      photo: null,
      user: null,
    };
  }
}

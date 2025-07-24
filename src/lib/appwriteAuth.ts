import { account, ID } from './appwriteConfig';

export async function registerUser(email: string, password: string, name: string) {
  try {
    const user = await account.create(ID.unique(), email, password, name);
    return user;
  } catch (error) {
    console.error('Error al registrar usuario:', error);
    throw error;
  }
}

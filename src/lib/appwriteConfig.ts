import { Client, Account, ID, Databases, Avatars } from 'appwrite';

const client = new Client();

client
  .setEndpoint('https://cloud.appwrite.io/v1') // Tu API Endpoint
  .setProject('path-to-heaven'); // 👈 Reemplaza esto por tu Project ID real

export const account = new Account(client);
export const databases = new Databases(client);
export const avatars = new Avatars(client);
export { ID };

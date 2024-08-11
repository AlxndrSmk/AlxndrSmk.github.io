import { UserService } from './user.service';

const serverURL: string = import.meta.env.VITE_SERVER_URL;

export const userService = new UserService(serverURL);

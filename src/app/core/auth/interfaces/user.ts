import { Role } from '../enums/role';
export interface User {
    uid: string;
    email: string;
    password?: string;
    emailVerified: boolean;
    role?: Role;
}

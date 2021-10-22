import { User } from './../interfaces/user';
export class RoleValidator {
    isAdmin(user: User): boolean {
        return user.role === 'admin';
    }

    isEditor(user: User): boolean {
        return user.role === 'editor';
    }

    isSuscriptor(user: User): boolean {
        return user.role === 'suscriptor';
    }
}

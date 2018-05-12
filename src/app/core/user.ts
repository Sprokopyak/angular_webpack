export interface Roles {
    admin?: boolean;
    cafeAdmin?: boolean;
    waiter?: boolean;
    guest?: boolean;
}

export interface User {
    uid: string;
    email: string;
    photoURL?: string;
    displayName?: string;
}
export interface UserSession {
    login: boolean;
    token: string;
    user: UserSessionData;
};

export interface UserSessionData {
    id: number;
    name: string;
    email: string;
    address: string;
    phone: string;
    role: string;
    credential: Credential;
    orders: Order[];
}

export interface Order {
    id: number;
    status?: string;
    date?: string;
};

interface Credential {
    id: number;
    password: string;
};
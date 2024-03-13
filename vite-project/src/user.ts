export interface user {
    user_id: number,
    user_name: string,
    user_email: string,
    user_password: string
}

export class Register implements user {
    user_id: number;
    user_name: string;
    user_email: string;
    user_password: string;
    constructor(id: number, name: string, email: string, password: string) {
        this.user_id = id
        this.user_name = name
        this.user_email = email
        this.user_password = password
    }
}
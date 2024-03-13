import {user_login} from './main'
let user: user[] = []
let last_user_id: number = 0
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
    adduser(username:string,useremail:string,password:string):void{
        last_user_id++
        const new_user = new Register(last_user_id, username, useremail, password)
        console.log(new_user);
        user.push(new_user)
        localStorage.setItem('userlogin', JSON.stringify(user))
    }
    loginuser(username:string,password:string){
        const userinfo: user[] = JSON.parse(localStorage.getItem('userlogin') || '[]');
        userinfo.forEach((user: any) => {
            if (user.user_name === username && user.user_password == password) {
                alert('you are succesfully login')
                let state_maintain: any = localStorage.setItem('login_maintaine', user.user_name)
                console.log(state_maintain);
                user_login()
            } else {
                alert('Please Check your username & password')
            }
        });
        
    }
    logout():void{
        localStorage.removeItem('login_maintaine')
        alert('Succesfully LogOut')
    }
}
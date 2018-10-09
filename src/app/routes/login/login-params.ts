//登录参数
export class LoginParams {

    account: string;
    password: string;
    verrifyCode: string;
    verrifyImgUrl : string;

    constructor(account: string, password: string, verrifyCode: string) {
        this.account = account;
        this.password = password;
        this.verrifyCode = verrifyCode;
    }

}

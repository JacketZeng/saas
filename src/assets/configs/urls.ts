import { environment } from "../../environments/environment";
//服务API地址
export class Urls {
    //获取验证码
    static VERRIFY_IMG_URL = 'http://'+environment.server.host + '/saas/service/publics/captcha'
    //登录
    static LOGIN_URL = 'http://'+environment.server.host + '/login'
}

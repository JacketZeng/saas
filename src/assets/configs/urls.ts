const serviceUrlPrefix = '/saas/service';
//服务API地址
export class Urls {
    //获取验证码
    static VERRIFY_IMG_URL = serviceUrlPrefix + '/publics/captcha';
    //登录信息
    static LOGIN_INFO_URL =  serviceUrlPrefix + '/home/loginInfo';
    //获取菜单
    static MENUS =  serviceUrlPrefix + '/home/menu';
}

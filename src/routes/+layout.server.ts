import * as env from '$env/static/private';

const lineLoginLink : string = (`https://access.line.me/oauth2/v2.1/authorize?response_type=code
&client_id=${env.LINE_client_id}
&redirect_uri=${env.LINE_redirect_uri}
&state=login
&scope=openid%20profile`);

export const load = (async (PageLoadEvent) =>{
    const lineLogin = PageLoadEvent.cookies.get('lineId');
    const isLogin = (lineLogin != null) ? true : false;
    return {
        isLogin: isLogin,
        loginLink: lineLoginLink,
        userName: PageLoadEvent.cookies.get('lineName'),
        userPicture: PageLoadEvent.cookies.get('linePicture'),
    }
});
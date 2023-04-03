import * as env from '$env/static/private';
import type User from '../models/User';

const lineLoginLink : string = (`https://access.line.me/oauth2/v2.1/authorize?response_type=code
&client_id=${env.LINE_client_id}
&redirect_uri=${env.LINE_redirect_uri}
&state=login
&scope=openid%20profile`);

export const load = async ({url, cookies, fetch}) => {    
    const code = url.searchParams.get('code');
    const loginCookie = cookies.get('lineId');
    //LineAuth
    if(code != null){        
        const response  = await fetch('/api/Login?code=' + code);
        const loginResult = (await response.json() as User) ?? null;
        if(loginResult){
            console.log(loginResult);
            cookies.set('lineId', loginResult.sub);
            cookies.set('lineName', loginResult.lineName);
            cookies.set('linePicture', loginResult.picture);
            return {status: 200, login:{name: loginResult.lineName, picture: loginResult.picture}}
        }
        return {status: 404, body: "非巴士團成員"};
    }
    else if(loginCookie != null){
        return {status: 200, login:{name: cookies.get('lineName'), picture: cookies.get('linePicture')}};
    }
    else {
        return {status: 203, body: "請登入", loginLink: lineLoginLink};
    }    
}
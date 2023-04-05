import * as env from '$env/static/private';
import type User from '../models/User';
import type LineToken from '../models/LineToken';
import LineIdToken from '../models/LineIdToken';
import * as jwt from 'jsonwebtoken';

const token_uri = 'https://api.line.me/oauth2/v2.1/token';

const lineLoginLink : string = (`https://access.line.me/oauth2/v2.1/authorize?response_type=code
&client_id=${env.LINE_client_id}
&redirect_uri=${env.LINE_redirect_uri}
&state=login
&scope=openid%20profile`);

const tokenFormBody : URLSearchParams = new URLSearchParams();
tokenFormBody.append('grant_type', 'authorization_code');
tokenFormBody.append('code', '');
tokenFormBody.append('redirect_uri', env.LINE_redirect_uri);
tokenFormBody.append('client_id', env.LINE_client_id);
tokenFormBody.append('client_secret', env.LINE_client_secret);

export const load = async ({url, cookies, fetch}) => {   

    const code = url.searchParams.get('code');
    const loginCookie = cookies.get('lineId');

    //decode line token
    if(code != null){
        tokenFormBody.set('code', code);     
        const response = await fetch(token_uri, {
            method: 'POST',
            headers:{
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: tokenFormBody
        }).then(async (res) => {
            if(res.ok){
                let token = (await res.json()) as LineToken;
                let userInfo = jwt.decode(token.id_token) as LineIdToken;
                return LineIdToken;
            }
            else{
                return null;
            }
        }).catch((reason)=>{
            console.log(reason);
            return null;
        });

        if(response != null){
  
        }
        else{
            return {status: 404, body: "非巴士團成員"};
        }
    }

    if(loginCookie != null){

    }
    // if(res.ok){
    //     const loginResult = (await res.json() as User) ?? null;
    //     if(loginResult){
    //         console.log(loginResult);
    //         JSON.stringify(loginResult);
    //         cookies.set('lineId', loginResult.sub, {httpOnly: true, path: "/", sameSite: "strict"});
    //         cookies.set('lineName', loginResult.lineName);
    //         cookies.set('linePicture', loginResult.picture);
    //         return {status: 200, login:{name: logisnResult.lineName, picture: loginResult.picture}}
    //     }
    //     return {status: 404, body: "非巴士團成員"};
    // }
    // else{
    //     return {status: 404, body: "非巴士團成員"};
    // }
}

async function loginByLineIdToken(request : LineIdToken){
    const response = 
        await fetch('/api/Login', {
        method: 'POST',
        headers:{
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(request)
    }).then(async (res) => {
        return 
    }).catch((reason)=>{

    });
}
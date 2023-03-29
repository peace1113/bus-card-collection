import type LineToken from '../models/LineToken';
import type LineIdToken from '../models/LineIdToken';
import type { PageServerLoad } from './$types';
import * as jwt from 'jsonwebtoken';
import * as env from '$env/static/private';

const lineLoginLink : string = (`https://access.line.me/oauth2/v2.1/authorize?response_type=code
&client_id=${env.LINE_client_id}
&redirect_uri=${env.LINE_redirect_uri}
&state=login
&scope=openid%20profile`);

export const load = async (RequestEvent) => {    
    const code = RequestEvent.url.searchParams.get('code');
    console.log(code);
    if(code){
        const token = await (await RequestEvent.fetch('/api/Login?code=' + code)).json() as LineToken;
        RequestEvent.cookies.set('linelogin', token.id_token);

        const userInfo = jwt.decode(token.id_token) as LineIdToken;
        RequestEvent.cookies.set('userName', userInfo.name?.toString());
        RequestEvent.cookies.set('userPicture', userInfo.picture?.toString());
    }
}
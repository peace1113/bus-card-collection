import * as env from '$env/static/private';
import {redirect} from '@sveltejs/kit';

export const load = async (RequestEvent) => {    
    const code = RequestEvent.url.searchParams.get('code');
    if(code){
        const userInfo = await (await fetch('/api/Login?code' + code)).json();
        RequestEvent.cookies.set('linelogin', userInfo);
    }
}
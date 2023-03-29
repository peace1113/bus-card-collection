import * as env from '$env/static/private';
import type LayoutServerLoad from './$types';
import {redirect} from '@sveltejs/kit';
import { goto } from '$app/navigation';

const lineLoginLink : string = (`https://access.line.me/oauth2/v2.1/authorize?response_type=code
&client_id=${env.LINE_client_id}
&redirect_uri=${env.LINE_redirect_uri}
&state=login
&scope=openid%20profile`);

export const load = (async (PageLoadEvent) =>{
    const lineLogin = PageLoadEvent.cookies.get('linelogin');
    const isLogin = lineLogin ? true : false;
    console.log(lineLogin);
    return {
        isLogin: isLogin,
        loginLink: lineLoginLink,
        userName: PageLoadEvent.cookies.get('userName'),
        userPicture: PageLoadEvent.cookies.get('userPicture'),
    }
});
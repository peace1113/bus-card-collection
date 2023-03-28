import type { RequestHandler } from './$types';
import * as env from '$env/static/private';
import type LineToken from '../../../models/LineToken';
import { json } from 'stream/consumers';


const token_uri = 'https://api.line.me/oauth2/v2.1/token';

export const GET: RequestHandler = async ({url}) => {
    const code = url.searchParams.get('code');

    let formBody : URLSearchParams = new URLSearchParams();
    formBody.append('grant_type', 'authorization_code');
    formBody.append('code', code ?? '');
    formBody.append('redirect_uri', env.LINE_redirect_uri);
    formBody.append('client_id', env.LINE_client_id);
    formBody.append('client_secret', env.LINE_client_secret);    

    let isSuccessful = false;
    const result = await fetch(token_uri, {
        method: 'POST',
        headers:{
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formBody
    }).then(async (response) => {
        isSuccessful = response.ok;
        return await response.json();
    }).catch((reason)=>{
        console.log(reason);
    });

    return new Response(JSON.stringify(result), {status: isSuccessful ? 200 : 400});
};
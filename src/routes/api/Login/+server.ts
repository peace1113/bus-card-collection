import type { RequestHandler } from './$types';
import * as env from '$env/static/private';
import type LineToken from '../../../models/LineToken';
import * as jwt from 'jsonwebtoken';

const token_uri = 'https://api.line.me/oauth2/v2.1/token';

export const GET: RequestHandler = async ({url}) => {
    const code = url.searchParams.get('code');

    let formBody : URLSearchParams = new URLSearchParams();
    formBody.append('grant_type', 'authorization_code');
    formBody.append('code', code ?? '');
    formBody.append('redirect_uri', env.LINE_redirect_uri);
    formBody.append('client_id', env.LINE_client_id);
    formBody.append('client_secret', env.LINE_client_secret);

    const result = await fetch(token_uri, {
        method: 'POST',
        headers:{
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formBody
    }).then(async (response) => {
        if(response.ok){
            let token = (await response.json()) as LineToken;
            let decoded_id_token = jwt.decode(token.id_token);
            return decoded_id_token;
        }
    }).catch((reason)=>{
        console.log(reason);
    });

    return new Response(JSON.stringify(result), {status:  200});
};
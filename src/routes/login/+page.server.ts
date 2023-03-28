import type { PageServerLoad } from './$types';
import * as env from '$env/static/private';

export const load = (async () => {
    let link = 'https://access.line.me/oauth2/v2.1/authorize?';
    link += 'response_type=code';
    link += '&client_id=' + env.LINE_client_id;
    link += '&redirect_uri=' + env.LINE_redirect_uri;
    link += '&state=login';
    link += '&scope=openid%20profile';
    return { link: link };
}) satisfies PageServerLoad;
import type { PageServerLoad } from './$types';

export const load = (async ({cookies}) => {
    cookies.delete('lineId');
    cookies.delete('lineName');
    cookies.delete('linePicture');
    return {};
}) satisfies PageServerLoad;
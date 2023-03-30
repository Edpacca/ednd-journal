import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load = (({ params }) => {
    if (params.slug === 'hello-world') {
        return {
            title: 'Hello world!',
            content: 'Blah blah welcome'
        };
    }

    throw error(404, 'NOT');
}) satisfies PageLoad;


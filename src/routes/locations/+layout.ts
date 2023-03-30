import type { LayoutLoad } from './$types';

export const load = (() => {
    return {
        sections: [
            { slug: 'towns', title: 'Towns' },
            { slug: 'dungeons', title: 'Dungeons' }
        ]
    };
}) satisfies LayoutLoad
import { marked } from "marked";
import type { PageLoad } from "./$types";

export const load: PageLoad = async ({ fetch, params }) => {

    const town = await fetch(`/locations/towns/${params.town}/${params.town}.md`)
    const page = await town.text();

    return {
        page: marked.parse(page)
    }
}
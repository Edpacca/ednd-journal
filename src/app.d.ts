// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {

	type Npc = {
		name: string
		slug: string
		description: string
		date: string
		locationId: string
		published: boolean
		img?: string
		icon?: string
	}

}

export {};
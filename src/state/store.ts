import { writable, type Writable } from "svelte/store";
import type { UserType } from "../lib/types";

export const userType: Writable<UserType | undefined> = writable(undefined);
export const currentCampaign: Writable<string> = writable("");
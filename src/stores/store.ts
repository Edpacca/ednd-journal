import { writable, type Writable } from "svelte/store";
import { UserType } from "../lib/types";

const defaultState = {
    userType: UserType.PLAYER,
    campaign: "Gangbangers"
}

export const userType: Writable<UserType | undefined> = writable(defaultState.userType);
export const currentCampaign: Writable<string> = writable(defaultState.campaign);
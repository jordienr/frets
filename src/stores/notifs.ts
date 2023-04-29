import { writable } from "svelte/store";


export type Notif = {
    message: string;
    type: "success" | "error";
}
export let notifs = writable<Notif[]>([]);


export function addNotif(notif: Notif) {
    notifs.update(n => [...n, notif]);
    setTimeout(() => {
        notifs.update(n => n.filter(n => n !== notif));
    }, 1000)
}


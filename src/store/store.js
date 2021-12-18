import { writable } from "svelte/store";

export const TaskStore = writable([
  {
    id: 1,
    task: "bu1y grocery on friday",
    date: "12/12/2021",
    priority: 3,
  },
  {
    id: 2,
    task: "party on saturday",
    date: "13/12/2021",
    priority: 2,
  },
  {
    id: 3,
    task: "lundary on sunday",
    date: "14/12/2021",
    priority: 1,
  }
])
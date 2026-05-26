import type { Player } from "./Player";

export interface Team {
  id: string;
  name: string;
  bandeira: string;
  players: Player[];
}
import type { Player } from "./Player";

export interface Team {
  id: string;
  name: string;
  code: string;
  flag: string;
  players: Player[];
}
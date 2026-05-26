export interface Player {
  id: string;
  name: string;
  country: string;
  position: string;
  rating: number;
  image: string;
  encontrado: boolean;
  // rarity: "common" | "rare" | "legend"
}
import { useState } from "react";
import type { Player } from "../../models/Player";
import PlayerCard from "../PlayerCard/PlayerCard";
import "./PackOpening.css";

import messiImg from "../../assets/messi.png";
import neymarImg from "../../assets/neymar.png";
import mbapeImg from "../../assets/mbape.png";

const testPlayers: Player[] = [
  {
    id: "1",
    name: "Neymar",
    country: "Brasil",
    position: "LW",
    rating: 90,
    image: neymarImg,
  },
  {
    id: "2",
    name: "Mbappé",
    country: "França",
    position: "ST",
    rating: 91,
    image: mbapeImg,
  },
  {
    id: "3",
    name: "messi",
    country: "Argentina",
    position: "CM",
    rating: 89,
    image: messiImg,
  },
];

const PackOpening = () => {
  const [openedPlayers, setOpenedPlayers] = useState<Player[]>([]);

  const openPack = () => {
    const shuffled = [...testPlayers].sort(
      () => Math.random() - 0.5
    );

    const selected = shuffled.slice(0, 3);

    setOpenedPlayers(selected);
  };

  return (
    <div className="pack-container">
      <button onClick={openPack} className="open-pack-btn">
        Abrir Pacote
      </button>

      <div className="players-grid">
        {openedPlayers.map((player) => (
          <PlayerCard key={player.id} player={player} />
        ))}
      </div>
    </div>
  );
};

export default PackOpening;
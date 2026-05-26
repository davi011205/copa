import { useEffect, useState } from "react";
import type { Player } from "../../models/Player";
import PlayerCard from "../PlayerCard/PlayerCard";
import "./PackOpening.css";


import { getAllPlayers } from "../../services/firebase";

const PackOpening = () => {
  const [openedPlayers, setOpenedPlayers] = useState<Player[]>([]);
  const [players, setPlayers] = useState<Player[]>([]);
  useEffect(() => {
    async function carregarJogadores() {
        const dados = await getAllPlayers();
        setPlayers(dados as Player[]);
    }

    carregarJogadores();
  }, []);

  const openPack = () => {
    const shuffled = [...players].sort(
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
import { useEffect, useState } from "react";
import type { Player } from "../../models/Player";
import PlayerCard from "../PlayerCard/PlayerCard";
import "./PackOpening.css";

import { addPlayersOnAlbum, getAllPlayers } from "../../services/firebase";
import { useAuth } from "../../contexts/AuthContext";

const PackOpening = () => {
  const [openedPlayers, setOpenedPlayers] = useState<Player[]>([]);
  const [players, setPlayers] = useState<Player[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { user } = useAuth();

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
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  async function addOnAlbum() {
    await addPlayersOnAlbum(openedPlayers, user?.uid as string);
  }

  return (
    <div className="pack-container">
      <button onClick={openPack} className="open-pack-btn">
        Abrir Pacote
      </button>

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="close-btn" onClick={closeModal}>
              ✕
            </button>

            <h2 className="modal-title">Pacote Aberto!</h2>

            <div className="players-grid">
              {openedPlayers.map((player) => (
                <PlayerCard key={player.id} player={player} />
              ))}
            </div>
            <button className="add-album-btn" onClick={addOnAlbum}>
              Adicionar ao álbum
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PackOpening;
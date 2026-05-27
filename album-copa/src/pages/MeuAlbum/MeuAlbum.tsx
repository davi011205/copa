import { useEffect, useState } from "react";

import { getPlayersByUser } from "../../services/firebase";
import type { Player } from "../../models/Player";
import { useAuth } from "../../contexts/AuthContext";
import PlayerCard from "../../components/PlayerCard/PlayerCard";

const MeuAlbum = () => {
    const [players, setPlayers] = useState<Player[]>([]);
    const { user } = useAuth();
    useEffect(() => {
        async function carregarJogadores() {
            const dados = await getPlayersByUser(user?.uid as string);
            setPlayers(dados as Player[]);
        }

        carregarJogadores();
    }, []);
    
    return (
        <div className="meu-album">
            <div
                style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "20px",
                    justifyContent: "center",
                }}
                >
                {players.map((player) => (
                    <PlayerCard key={player.id} player={player} />
                ))}
            </div>
        </div>
    )
};

export default MeuAlbum;
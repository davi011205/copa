import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getPlayersByTeam } from "../../services/firebase";
import type { Player } from "../../models/Player";
import PlayerCard from "../../components/PlayerCard/PlayerCard";
const AlbumTeam = () => {
    const { id } = useParams();
    const [players, setPlayers] = useState<Player[]>([]);
    useEffect(() => {
        async function carregarJogadores() {
            const dados = await getPlayersByTeam(id as string);
            setPlayers(dados as Player[]);
        }
    carregarJogadores();
    }, [id]);

    if (!players) {
        return <p>Carregando...</p>;
    }

    return (
        <div className="players-grid">
            {players.map((player) => (
            <PlayerCard key={player.id} player={player} />
            ))}
      </div>
    );
};

export default AlbumTeam;
import { useEffect, useState } from "react";

import type { Player } from "../../models/Player";
import Navbar from "../../components/NavBar/Navbar";
import PackOpening from "../../components/PackOpening/PackOpening";
import PlayerCard from "../../components/PlayerCard/PlayerCard";
import { getAllPlayers } from "../../services/firebase";

const Home = () => {
    const [players, setPlayers] = useState<Player[]>([]);
    useEffect(() => {
        async function carregarJogadores() {
            const dados = await getAllPlayers();
            setPlayers(dados as Player[]);
        }

        carregarJogadores();
    }, []);
    
    return (
        <div className="home">
            <Navbar></Navbar>
            <PackOpening></PackOpening>
            <div
                style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "20px",
                    justifyContent: "center",
                }}
                >
                {players.map((player) => (
                    <PlayerCard
                        key={player.id}
                        player={player}
                    />
                ))}
            </div>
        </div>
    )
};

export default Home;
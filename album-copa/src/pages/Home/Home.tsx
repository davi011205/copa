import { useEffect, useState } from "react";

import Navbar from "../../components/NavBar/Navbar";
import PackOpening from "../../components/PackOpening/PackOpening";
import TeamCard from "../../components/TeamCard/TeamCard";
import { getAllTeams } from "../../services/firebase";
import type { Team } from "../../models/Team";

const Home = () => {
    const [teams, setTeams] = useState<Team[]>([]);
    useEffect(() => {
        async function carregarSelecoes() {
            const dados = await getAllTeams();
            setTeams(dados);
        }

        carregarSelecoes();
    }, []);
    
    return (
        <div className="home">
            <div
                style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "20px",
                    justifyContent: "center",
                }}
                >
                {teams.map((team) => (
                    <TeamCard
                        key={team.id}
                        team={team}
                    />
                ))}
            </div>
        </div>
    )
};

export default Home;
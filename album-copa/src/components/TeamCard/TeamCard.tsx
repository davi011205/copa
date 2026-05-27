import type {Team}  from "../../models/Team";
import "./TeamCard.css";
import { useNavigate } from 'react-router-dom';

interface Props {
  team: Team;
}

const TeamCard = ({ team }: Props) => {
    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate(`/home/album/${team.id}`);
    };

    return (
        <div className='team-card' id={team.id} onClick={handleNavigate}>  
            <div className="team-card-image-container">
                <img src={team.bandeira} alt="Jogador" className="team-card-image" />
            </div>

            <div className="team-card-footer">
                <div className="team-name">{team.name}</div>
            </div>
        </div>
    );
};

export default TeamCard;
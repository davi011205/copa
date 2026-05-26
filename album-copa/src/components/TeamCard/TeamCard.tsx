import type {Team}  from "../../models/Team";
import "../PlayerCard/PlayerCard.css";

interface Props {
  team: Team;
}
const PlayerCard = ({ team }: Props) => {
    return (
        <div className='card' id={team.id}>  
            <div className="card-image-container">
                <img src={team.bandeira} alt="Jogador" className="card-image" />
            </div>

            <div className="card-footer">
                <div className="player-name">{team.name}</div>
            </div>
        </div>
    );
};

export default PlayerCard;